import { IUserAuth } from "../typings/user";
import * as api from "../api/user"
import { useAuthStore } from "../store/authStore";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus"
import { onMounted, watch } from "vue";

export const useLogin = () => {
    const {state: auth, login: storeLogin, logout: storeLogout} = useAuthStore()
    const router = useRouter()
    const login = async (username: string, password: string) => {
        return api.login(username, password)
            .then((data) => {
                if (data.status == 0) {
                    storeLogin(data.data!)
                    ElMessage.success(data.msg)
                    router.go(-1)
                } else {
                    storeLogout()
                    ElMessage.error(data.msg)
                }
            })
    }

    const logout = async () => {
        api.logout()
        storeLogout()
        router.push("/login")
        ElMessage.success("已登出")
    }

    return {
        auth,
        login,
        logout,
    }
}

export const useAuthRequire = (level: number) => {
    const {state: auth} = useAuthStore()
    const router = useRouter()

    const check = (auth: IUserAuth) => {
        if (auth.loaded && auth.userType > level) {
            console.log(auth)
            ElMessage.error("权限不足，无法访问")
            router.push("/login")
        }
    }

    onMounted(() => {
        check(auth)
    })

    watch(auth, (from, to) => {
        check(to)
    })
    return {}
}