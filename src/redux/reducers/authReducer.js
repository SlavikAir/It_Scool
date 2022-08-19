import { jwtDecode } from '../helpers/jwt';



const authReducer = function (state, { type, token }) {
    let payload;

    if (state === undefined) {
        if (localStorage.authToken) {
            type = "AUTH_LOGIN";
            token = localStorage.authToken;
        } else {
            type = "AUTH_LOGOUT";
        };
    };
    if (type === "AUTH_LOGIN") {
        payload = jwtDecode(token);

        if (payload) {
            localStorage.authToken = token;
            return {
                token: token,
                payload: payload
            }
        }
    }
    if (type === "AUTH_LOGOUT") {
        localStorage.removeItem("authToken");

        return {};
    };

    return state || {};
};

export {authReducer}