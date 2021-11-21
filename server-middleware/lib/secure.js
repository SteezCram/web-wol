/**
 * @namespace secure
*/

/** Encrypt a string in base64 by using AES.
 * @memberof secure
 * 
 * @param {string} text - Text to encrypt
 * 
 * @return {string} - string encrypted as base64
*/
module.exports.aes_encrypt = function(text, secret) 
{
    const crypto = require('crypto');




    const cipher = crypto.createCipheriv('aes-256-cbc', this.sha256(secret), this.md5(secret));
    const crypted = Buffer.concat([cipher.update(text), cipher.final()]);


    return crypted.toString('base64');
}

/** Encrypt a string in base64 by using AES.
 * @memberof secure
 * 
 * @param {string} text - Text to decrypt in base64
 * 
 * @return {string} - string encrypted as base64
*/
module.exports.aes_decrypt = function(text, secret) 
{
    const crypto = require('crypto');




    const decipher = crypto.createDecipheriv('aes-256-cbc', this.sha256(secret), this.md5(secret));
    const decrypted = Buffer.concat([decipher.update(Buffer.from(text, 'base64')), decipher.final()]);


    return decrypted.toString();
}


/** Hash a text by using MD5.
 * @memberof secure
 * 
 * @param {string} text - Text to hash
 *  
 * @return {buffer} - Text hashed
*/
module.exports.md5 = function(text) {
    return require('crypto').createHash('md5').update(text).digest();
}

/** Hash a text by using Sha256.
 * @memberof secure
 * 
 * @param {string} text - Text to hash
 *  
 * @return {buffer} - Text hashed
*/
module.exports.sha256 = function(text) {
    return require('crypto').createHash('sha256').update(text).digest();
}