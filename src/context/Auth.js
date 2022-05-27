import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { toast } from 'react-toastify'
import { isLoggedIn } from '~/apollo/userApollo'
import config from '~/config'

const register = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(config.firebaseAuth, email, password)
        toast.success('Đăng ký thành công!')
        return user
    } catch (error) {
        toast.error('Email đã tồn tại!')
    }
}
const login = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(config.firebaseAuth, email, password)
        isLoggedIn(true)
        localStorage.setItem('isLoggedIn', isLoggedIn())
        toast.success('Đăng nhập thành công!')
        return user
    } catch (error) {
        toast.error('Email hoặc mật khẩu không chính xác!')
    }
}
const logout = async () => {
    await signOut(config.firebaseAuth)
    isLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
}

const getToken = async () => {
    try {
        const currentUser = config.firebaseAuth.currentUser
        if (currentUser) return currentUser.getIdToken()

        //Logged in but current user is not fetched -> wait 10s
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(null)
            }, 10000)

            const unregisterAuthObserver = onAuthStateChanged(config.firebaseAuth, async (user) => {
                if (!user) return reject(null)
                const token = await user.getIdToken()
                resolve(token)
            })
            unregisterAuthObserver()
        })
    } catch (error) {
        toast.error(error.message)
    }
}

export { register, login, logout, getToken }
