import {AUTH_LOGIN_FAIL, AUTH_LOGIN_START, AUTH_LOGIN_SUCCESS} from "./ActionTypes";
import connection from "../../axios/axios";

export const authorizationStart = () => {
    return {
        type: AUTH_LOGIN_START
    }
}

export const authorizationSuccess = (token, roles) => {
    return {
        type: AUTH_LOGIN_SUCCESS,
        token: token,
        roles: roles,
    }
}

export const authorizationFail = () => {
    return {
        type: AUTH_LOGIN_FAIL
    }
}


// authorizationRequest ponieważ: ....spring/security/model/dto/AuthenticationRequest.java
export const authenticateUser = (authorizationRequest) => {
    return dispatch => {
        dispatch(authorizationStart());

        // wysyłanie
        connection.post("/login", authorizationRequest)
            .then((data) => {
                console.log("O kucze, sukces!")

                const token = data.headers["authorization"]
                const roles = data.headers["app_roles"]

               dispatch(authorizationSuccess(token, roles))
            })
            .catch((error) => {
                console.log("O kucze, bieda!")
                console.log(error)

                dispatch(authorizationFail())
            });
    }
}