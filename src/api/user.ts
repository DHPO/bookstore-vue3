import axios from "axios"
import { IResponse } from "../typings/api";
import { IUserAuth } from "../typings/user";

const apiBase = import.meta.env.VITE_APP_API_BASE

export async function checkAuth(): Promise<IUserAuth> {
    const url = `${apiBase}/checkSession`
    return axios.post(url,{})
        .then((response) => {
            const data = response.data
            if(data.status == 0) {
                return data.data
            } else {
                throw data.msg
            }
        })
}

export async function login(username: string, password: string): Promise<IResponse<IUserAuth>> {
    const url = `${apiBase}/login`
    return axios.post(url, {
        username,
        password,
    }).then((response) => response.data)
}

export async function logout() {
    const url = `${apiBase}/logout`
    return axios.post(url, {}).then((response) => response.data)
}