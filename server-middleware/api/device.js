const bcrypt = require('bcrypt');
const child_process = require('child_process');
const database = require('../lib/database');
const express = require('express');
const secure = require('../lib/secure');




const app = express();
app.use(express.json());


app.get('/api/device/:id/:email&:password', async (req, res) =>
{
    try
    {
        const result = await database.get('SELECT id, email, password FROM ww_user WHERE id = ?', [req.params.id]);
    
        // If the user don't exists
        if (result === undefined || result === null) {
            res.send({code: 100});
            return;
        }
    
        // If the user crenditals match
        if (!(await bcrypt.compare(secure.aes_decrypt(req.params.password, req.params.email), result.password)) && result.email !== req.params.email) {
            res.send({code: 101});
            return;
        }
    
    
        res.send({
            code: 0,
            data: (await database.all('SELECT * FROM ww_device WHERE id_ww_user = ?', [req.params.id])).map(x => ({
                ...x,
                remote_password: secure.aes_decrypt(x.remote_password, req.params.email),
            })),
        });
    }
    catch {
        res.send({
            code: 1,
        });
    }
});

app.post('/api/device/:id/start', async (req, res) =>
{
    try
    {
        const result = await database.get('SELECT id, email, password FROM ww_user WHERE email = ?', [req.body.email]);
    
        // If the user don't exists
        if (result === undefined || result === null) {
            res.send({code: 100});
            return;
        }
    
        // If the user crenditals match
        if (!(await bcrypt.compare(secure.aes_decrypt(req.body.password, req.body.email), result.password)) && result.email !== req.body.email) {
            res.send({code: 101});
            return;
        }
    
    
        // Start a script to launch the device through WOL
        const device = await database.get('SELECT interface, mac FROM ww_device WHERE id = ?', [req.params.id]);

        switch (process.platform)
        {
            case 'darwin':
                // TODO: Implement WOL on MacOS
                break;
            
            case 'linux':
                child_process.execSync(`sudo etherwake -i ${device.interface} ${device.mac}`);
                break;

            case 'win32':
                // TODO: Implement WOL on Windows
                break;
        }
        

        res.send({
            code: 0,
        });
    }
    catch (ex) {
        res.send({
            code: 1,
            data: {
                error: ex.toString(),
            }
        });
    }
});




module.exports = app;