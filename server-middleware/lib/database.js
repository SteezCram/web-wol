/**
 * @namespace database
*/

const Database = require('better-sqlite3');
const path = require('path');




/** Execute a all query.
 * @memberof database
 * 
 * @param {string} query - Query to execute
 * @param {object} arguments - Arguments to pass
 * 
 * @return {object} - Result object
*/
module.exports.all = async function(query, arguments)
{
    const db = new Database(path.resolve('./web-wol.db'), { verbose: console.log });

    return db.prepare(query).all(arguments);
}

/** Execute a get query.
 * @memberof database
 * 
 * @param {string} query - Query to execute
 * @param {object} arguments - Arguments to pass
 * 
 * @return {object} - Result object
*/
module.exports.get = async function(query, arguments)
{
    const db = new Database(path.resolve('./web-wol.db'), { verbose: console.log });

    return db.prepare(query).get(arguments);
}

/** Execute a run query.
 * @memberof database
 * 
 * @param {string} query - Query to execute
 * @param {object} arguments - Arguments to pass
 * 
 * @return {object} - Result object
*/
module.exports.run = async function(query, arguments)
{
    const db = new Database(path.resolve('./web-wol.db'), { verbose: console.log });

    return db.prepare(query).run(arguments);
}