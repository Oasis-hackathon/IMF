const pool = require('./pool');
const {DB_SELECT_ERROR, DB_INSERT_ERROR} = require('./terms');

const FIND_ALL_FROM_TABLE_QUERY = (table, field, value) => {
    return `SELECT * FROM ${table} WHERE ${field}=${value}`;
};
const INSERT_USER_QUERY = 'INSERT INTO Users (userId, userImagePath, userName) VALUES (?, ?, ?)';

const selectUser = async (userId) => {
    try {
        const [row] = await pool.execute(FIND_ALL_FROM_TABLE_QUERY("Users", "userId", userId));
        return row;
    } catch (err) {
        console.log(err)
        throw new Error(DB_SELECT_ERROR);
    }
}

module.exports = {
    selectUser,
    isUserExist : async (userId) => {
        try {
            const result = await selectUser(userId);
            if (result.length === 0)
                return false;
            return result[0];
        } catch (err) {
            console.log(err)
            throw new Error(DB_SELECT_ERROR);
        }
    },
    insertUser : async ({userId, userImagePath, userName}) => {
        try {
            const result = await pool.execute(INSERT_USER_QUERY, [userId, userImagePath, userName]);
            console.log(result[0][0]);
            if (result[0].affectedRows === 0) {
                console.log("INSERT_FAILED(NOT_AFFECTED)");
                throw new Error(DB_INSERT_ERROR);
            }
            if (result[0].affectedRows === 1) {
                console.log(result);
                console.log("INSERT_SUCCESS!");
                console.log("result:", result);
                const [row]  = await pool.execute(FIND_ALL_FROM_TABLE_QUERY("Users", "userId", userId));
                console.log("row[0]:", row[0]);
                return (row[0]);
            }
        } catch (err) {
            console.log(err);
            console.log("INSERT_FAILED");
            throw new Error(DB_INSERT_ERROR);
        }
    }
}