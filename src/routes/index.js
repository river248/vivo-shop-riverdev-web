import { TipLayout } from '~/components/Layouts'

import About from '~/pages/About'
import Account from '~/pages/Account'
import Contact from '~/pages/Contact'
import Home from '~/pages/Home'
import ReturnPolicy from '~/pages/ReturnPolicy'
import Product from '~/pages/Product'
import Tip from '~/pages/Tip'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/about', component: About },
    { path: '/contact', component: Contact },
    { path: '/login', component: Account, layout: null },
    { path: '/signup', component: Account, layout: null },
    { path: '/product/top', component: Product },
    { path: '/product/bottom', component: Product },
    { path: '/product/bottom-girl', component: Product },
    { path: '/return-policy', component: ReturnPolicy },
    { path: '/tip/*', component: Tip, layout: TipLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
