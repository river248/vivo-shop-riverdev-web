import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'firebase/auth'
import { toast } from 'react-toastify'
import { isLoggedIn } from '~/apollo/userApollo'
const { auth } = require('~/config/firebaseConfig')

const register = async (email, password) => {
    try {
        const user = await createUserWithEmailAndPassword(auth, email, password)
        toast.success('Đăng ký thành công!')
        return user
    } catch (error) {
        toast.error('Email đã tồn tại!')
    }
}
const login = async (email, password) => {
    try {
        const user = await signInWithEmailAndPassword(auth, email, password)
        isLoggedIn(true)
        localStorage.setItem('isLoggedIn', isLoggedIn())
        toast.success('Đăng nhập thành công!')
        return user
    } catch (error) {
        toast.error('Email hoặc mật khẩu không chính xác!')
    }
}
const logout = async () => {
    await signOut(auth)
    isLoggedIn(false)
    localStorage.removeItem('isLoggedIn')
}

const getToken = async () => {
    try {
        const currentUser = auth.currentUser
        if (currentUser) return currentUser.getIdToken()

        //Logged in but current user is not fetched -> wait 10s
        return new Promise((resolve, reject) => {
            setTimeout(() => {
                reject(null)
            }, 10000)

            const unregisterAuthObserver = onAuthStateChanged(auth, async (user) => {
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
