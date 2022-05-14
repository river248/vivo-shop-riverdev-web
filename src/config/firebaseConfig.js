import firebase from 'firebase/compat/app'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
    apiKey: 'AIzaSyBqMLJIo8D4iYzT5MJzbB6g1QzlTjTxhys',
    authDomain: 'vivo-shop-riverdev-web.firebaseapp.com',
    projectId: 'vivo-shop-riverdev-web',
    storageBucket: 'vivo-shop-riverdev-web.appspot.com',
    messagingSenderId: '304342756565',
    appId: '1:304342756565:web:7fa0316dda09574036465c',
    measurementId: 'G-7NE806MEDZ',
}

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
const storage = getStorage()

export { storage, firebase as default }
