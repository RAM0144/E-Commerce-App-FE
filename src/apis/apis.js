import instance from "../api-instance.js";

// Register a user

// const registerUser = async(user) => {

//     try {
//         const response = await instance.post("/register", user);

//     return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

// const loginUser = async (creds) => {

//     try {
//         const response = await instance.post("/login", creds);

//         return response.data;
//     } catch (error) {
//         console.log(error);
//     }
// };

const handledAPIPost = async (path, payload) => {
    try {
        const response = await instance.post(path, payload);
        return response.data;
    } catch (error) {
        console.log(error);

        throw new Error(error.response.data.msg);
    }
};

const handledAPIGet = async (path) => {
    try {
        const response = await instance.get(path);
        return response.data;
    } catch (error) {
        console.log(error);

        throw new Error(error.response.data.msg);
    }

};


export { handledAPIGet, handledAPIPost }

