import { TipLayout } from '~/components/Layouts'

import About from '~/pages/About'
import Account from '~/pages/Account'
import Home from '~/pages/Home'
import Product from '~/pages/Product'
import Tip from '~/pages/Tip'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/login', component: Account, layout: null },
    { path: '/signup', component: Account, layout: null },
    { path: '/product/top', component: Product },
    { path: '/product/bottom', component: Product },
    { path: '/product/bottom-girl', component: Product },
    { path: '/tip', component: Tip, layout: TipLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
