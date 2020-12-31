const pool = require('./pool');
const {DB_SELECT_ERROR, DB_INSERT_ERROR} = require('./terms');

const FIND_FIELD_FROM_TABLE_QUERY = (table, field, value) => {
    return `SELECT ${field} FROM ${table} WHERE ${field}=${value}`;
};

const INSERT_USER_QUERY = 'INSERT INTO Users (userId, userImagePath, userName) VALUES (?, ?, ?)';

module.exports = {
    isUserExist : async (userId) => {
        try {
            const [rows] = await pool.execute(FIND_FIELD_FROM_TABLE_QUERY("Users", "userId", userId));
            if (rows.length === 0)
                return false;
            return rows[0].userId;
        } catch (err) {
            throw new Error(DB_SELECT_ERROR);
        }
    },
    insertUser : async ({userId, userImage, userName}) => {
        try {
            const result = await pool.execute(INSERT_USER_QUERY, [userId, userImage, userName]);
            console.log(result);
            if (result[0].affectedRows === 0) {
                console.log("INSERT_FAILED(NOT_AFFECTED)");
                throw new Error(DB_INSERT_ERROR);
            }
            if (result[0].affectedRows === 1) {
                console.log("INSERT_SUCCESS!");
                console.log("result:", result);
                return (result[0].insertId);
            }
        } catch (err) {
            console.log(err);
            console.log("INSERT_FAILED");
            throw new Error(DB_INSERT_ERROR);
        }
    }
}