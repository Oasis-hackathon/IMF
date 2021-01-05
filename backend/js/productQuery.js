const pool = require('./pool');
const {DB_SELECT_ERROR, DB_INSERT_ERROR, DB_UPDATE_ERROR} = require('./terms');const INSERT_PRODUCT_QUERY = 'INSERT INTO Products (title, price, description, category, stock, tradeType, accessValue, sellerId, imagePath) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';

const selectProductOptions = async (productId) => {
    try {
        const [row] = await pool.execute(`SELECT * from ProductOptions WHERE productId=${productId}`);
        return row;
    } catch (err) {
        console.log(err)
        throw new Error(DB_SELECT_ERROR);
    }
}

const insertProductOptions = async (productId, body) => {
    const keys = Object.keys(body);
    keys.forEach(async key => {
        if (key.includes("option")) {
            await pool.execute('INSERT INTO ProductOptions (productId, value) VALUES (?, ?)', [productId, body[key]])
        }
    });
}


const selectProductByProductId = async (id) => {
    try {
        const [row] = await pool.execute(`SELECT * from Products WHERE id=${id}`);
        return row;
    } catch (err) {
        console.log(err)
        throw new Error(DB_SELECT_ERROR);
    }
}

const selectProductsByAccessValue = async (accessValue) => {
    try {
        console.log(`SELECT * from Products WHERE accessValue=${accessValue}`);
        const [row] = await pool.execute(`SELECT * from Products WHERE accessValue=${accessValue}`);
        return (row);
    } catch (err) {
        console.log(err)
        throw new Error(DB_SELECT_ERROR);
    }
}

const selectAllProducts = async () => {
    try {
        console.log(`SELECT * from Products`);
        const [row] = await pool.execute(`SELECT * from Products`);
        return (row);
    } catch (err) {
        console.log(err)
        throw new Error(DB_SELECT_ERROR);
    }
}

const insertProduct = async (body) => {
    try {
        console.log(body)
        const result = await pool.execute(INSERT_PRODUCT_QUERY, [body.title, body.price, body.description, body.category, body.stock, body.tradeType, body.accessValue, body.sellerId, body.imagePath]);
        console.log(result[0][0]);
        if (result[0].affectedRows === 0) {
            console.log("INSERT_FAILED(NOT_AFFECTED)");
            throw new Error(DB_INSERT_ERROR);
        }
        if (result[0].affectedRows === 1) {
            console.log(result);
            console.log("INSERT_SUCCESS!");
            const productId = result[0].insertId;
            console.log("productId:", productId); // productId
            await insertProductOptions(productId, body);
            console.log("OPTION_INSERT_SUCCESS!");
            const row  = await selectProductByProductId(productId);
            console.log("row[0]:", row[0]);
            return (row[0]);
        }
    } catch (err) {
        console.log(err);
        console.log("INSERT_FAILED");
        throw new Error(DB_INSERT_ERROR);
    }
}

module.exports = {
    insertProduct,
    selectProductByProductId,
    selectProductsByAccessValue,
    selectAllProducts,
    selectProductOptions
}