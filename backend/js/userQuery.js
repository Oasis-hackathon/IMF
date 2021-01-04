const pool = require('./pool');
const {DB_SELECT_ERROR, DB_INSERT_ERROR, DB_UPDATE_ERROR} = require('./terms');
const SELECT_ALL_UNIV_QUERY = 'SELECT * from Univs';
const FIND_ALL_FROM_TABLE_QUERY = (table, field, value) => {
    return `SELECT * FROM ${table} WHERE ${field}=${value}`;
};
const INSERT_USER_QUERY = 'INSERT INTO Users (userId, userImagePath, userName, nickname) VALUES (?, ?, ?, ?)';

const UPDATE_USER_QUERY = (id, field, value) => {
    return `UPDATE Users SET ${field}=${value} WHERE id=${id}`;
}

const selectUserById = async (id) => {
    try {
        const [row] = await pool.execute(FIND_ALL_FROM_TABLE_QUERY("Users", "id", id));
        return row;
    } catch (err) {
        console.log(err)
        throw new Error(DB_SELECT_ERROR);
    }
}

const selectUserByUserId = async (userId) => {
    try {
        const [row] = await pool.execute(FIND_ALL_FROM_TABLE_QUERY("Users", "userId", userId));
        return row;
    } catch (err) {
        console.log(err)
        throw new Error(DB_SELECT_ERROR);
    }
}

const isUserExist = async (userId) => {
    try {
        const result = await selectUserByUserId(userId);
        if (result.length === 0)
            return false;
        return result[0];
    } catch (err) {
        console.log(err)
        throw new Error(DB_SELECT_ERROR);
    }
}

const insertUser = async ({userId, userImagePath, userName}) => {
    try {
        const result = await pool.execute(INSERT_USER_QUERY, [userId, userImagePath, userName, userName]);
        console.log(result[0][0]);
        if (result[0].affectedRows === 0) {
            console.log("INSERT_FAILED(NOT_AFFECTED)");
            throw new Error(DB_INSERT_ERROR);
        }
        if (result[0].affectedRows === 1) {
            console.log(result);
            console.log("INSERT_SUCCESS!");
            console.log("result:", result);
            const row  = await selectUserByUserId(userId);
            console.log("row[0]:", row[0]);
            return (row[0]);
        }
    } catch (err) {
        console.log(err);
        console.log("INSERT_FAILED");
        throw new Error(DB_INSERT_ERROR);
    }
}

const editUserValue = async (body) => {
    try {
        const fields = Object.keys(body.formValues);
        fields.forEach(async field => {
            let value = body.formValues[field];
            if (field !== "univId")
                value = `"${value}"`;
            await pool.execute(UPDATE_USER_QUERY(body.id, field, value));
        })
    } catch (err) {
        console.log(err);
        console.log("UPDATE_FAILED");
        throw new Error(DB_UPDATE_ERROR);
    }
}

const selectUniv = async (univId) => {
    try {
        const [row] = await pool.execute(FIND_ALL_FROM_TABLE_QUERY("Univs", "id", univId));
        console.log(row);
        return(row);
    } catch (err) {
        console.log(err);
        console.log("SELECT_FAILED");
        throw new Error(DB_SELECT_ERROR);
    }
}

const selectUnivs = async () => {
    try {
        const [result] = await pool.execute(SELECT_ALL_UNIV_QUERY);
        console.log(result);
        return (result);
    } catch (err) {
        console.log(err);
        console.log("SELECT_FAILED");
        throw new Error(DB_SELECT_ERROR);
    }
}

module.exports = {
    selectUserById,
    selectUserByUserId,
    isUserExist,
    insertUser,
    editUserValue,
    selectUniv,
    selectUnivs
}