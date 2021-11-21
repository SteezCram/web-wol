const bcrypt = require('bcrypt');
const database = require('../lib/database');
const express = require('express');
const secure = require('../lib/secure');




const app = express();
app.use(express.json());


app.get('/api/user/:email&:password&:autologin', async (req, res) =>
{
    try
    {
        const result = await database.get('SELECT id, password, name FROM ww_user WHERE email = ?', [req.params.email]);
    
        // If the user don't exists
        if (result === undefined || result === null) {
            res.send({code: 100});
            return;
        }
    
        // If the user password crenditals match
        if (!(await bcrypt.compare(secure.aes_decrypt(req.params.password, req.params.email), result.password))) {
            res.send({code: 101});
            return;
        }
    
    
        res.send({
            code: 0,
            data: {
                id: result.id,
                email: req.params.email,
                password: req.params.password,
                name: result.name,
            }
        });
    }
    catch {
        res.send({
            code: 1,
        });
    }
});

app.get('/api/user/:email&:password', async (req, res) =>
{
    try
    {
        const result = await database.get('SELECT id, password, name FROM ww_user WHERE email = ?', [req.params.email]);
    
        if (result === undefined || result === null) {
            res.send({code: 100});
            return;
        }
    
    
        if (!(await bcrypt.compare(req.params.password, result.password))) {
            res.send({code: 101});
            return;
        }
    
    
        res.send({
            code: 0,
            data: {
                id: result.id,
                email: req.params.email,
                password: secure.aes_encrypt(req.params.password, req.params.email),
                name: result.name,
            }
        });
    }
    catch (ex) {
        res.send({
            code: 1,
        });
    }
});




module.exports = app;