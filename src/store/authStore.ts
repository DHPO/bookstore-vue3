import {inject, reactive, readonly, ref, Ref} from "vue"
import { IUserAuth } from "../typings/user"
export const symbol = Symbol("auth-state")

interface IUserAuthStore {
    state: IUserAuth
    logout: () => void
    login: (auth: IUserAuth) => void
}

export const createAuthStore = function() {
    const defaultState = {
        id: -1,
        username: "",
        userType: 100,
        loaded: false
    }
    const state = reactive<IUserAuth>(defaultState)
    const logout = () => {
        Object.assign(state, {...defaultState, loaded: true})
    }
    const login = (auth: IUserAuth) => {
        Object.assign(state, {...auth, loaded: true})
    }

    return {
        state: readonly(state),
        login,
        logout
    }
}

export const useAuthStore = () => <IUserAuthStore>inject(symbol)