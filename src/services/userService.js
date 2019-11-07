import jwtDecode from 'jwt-decode';
import http from "./httpService";

const apiEndpoint = "/users";
const tokenKey = "token";

async function signup(user) {
    const response = await http.post(apiEndpoint+'/register', {
        username: user.username,
        email: user.email,
        password: user.password
    });
    localStorage.setItem(tokenKey, response.headers['x-auth-token']);
}

async function login(user) {

    const {data: jwt} = await http.post(apiEndpoint+'/login', {
        username: user.username,
        password: user.password
    });
    localStorage.setItem(tokenKey, jwt);
}

function getCurrentUser() {
    try{
        return jwtDecode(localStorage.getItem(tokenKey));
    }catch(ex){
        return null
    }
}

function logout() {
    localStorage.removeItem(tokenKey);
}

export default{
    signup,
    login,
    getCurrentUser,
    logout
}
