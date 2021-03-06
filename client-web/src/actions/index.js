import history from '../history';
import server from '../apis/server';

export const signIn = (userId, userImagePath, userName) => async (dispatch) => {
    const {data} = await server.post('/login/google', {userId, userImagePath, userName});
	dispatch({ type: "SIGN_IN", payload: data});
};

export const signOut = () => {
    return {
        type: "SIGN_OUT"
    }
}

// export const fetchUserInfo = (id) => async (dispatch) => {
//     const {data} = await server.get(`/user?id=${id}`);
//     dispatch({ type: "FETCH_USER_INFO", payload: data});
//     console.log(data);
//     history.push('/myInfo');
// }

export const editInfo = (id, formValues) => async dispatch => {
    console.log(formValues);
    const {data} = await server.post("/editinfo", {id, formValues});
    console.log(data)
    dispatch({type: "EDIT_INFO", payload: data})
}

export const fetchUniv = (univId) => async dispatch => {
    const {data} = await server.get(`/univ?id=${univId}`);
    dispatch({type: "FETCH_UNIV", payload: data})
}

export const fetchUnivList = () => async dispatch => {
    const {data} = await server.get("/univs");
    dispatch({type: "FETCH_UNIVS", payload: data})
}

export const sendMail = (mail) => async dispatch => {
    const {data} = await server.post("/mail", {mail});
    dispatch({type: "GET_CODE", payload: data})
}

export const uploadProduct = (sellerId, formData, formValue) => async () => {
    const {data} = await server.post("/uploadImage", formData);
    console.log(data.fileName)
    console.log(data);
    const response = await server.post("/product", {sellerId, ...formValue, imagePath : data.fileName});
    console.log(response.data);
    if (response.data.accessValue == "us")
        history.push(`/show_products/my_univ`);
    else
    history.push(`/show_products/other`);
}

export const fetchProduct = (productId) => async dispatch => {
    const {data} = await server.get(`/product?id=${productId}`);
    dispatch({type: "FETCH_PRODUCT", payload: data})
}

export const fetchProducts = (accessValue, category=null) => async dispatch => {
    let {data} = await server.get(`/products?access_value="${accessValue}"`);
    if (category) {
        const keys = Object.keys(data);
        let filtered_data = [];
        keys.forEach(k => {
            if (data[k].category === category) {
                filtered_data.push(data[k]);
            }
        });
        data = filtered_data;
    }
    dispatch({type: "FETCH_PRODUCTS", payload: data})
}

export const fetchAllProducts = (accessValue) => async dispatch => {
    const {data} = await server.get(`/products?access_value="${accessValue}"`);
    if (accessValue == "us")
        dispatch({type: "FETCH_MYUNIV_PRO", payload: data})
    else
        dispatch({type: "FETCH_OTHER_PRO", payload: data})
}

export const fetchProductOptions = (productId) => async dispatch => {
    const {data} = await server.get(`/productOptions?productId=${productId}`);
    dispatch({type: "FETCH_OPTIONS", payload: data})
}