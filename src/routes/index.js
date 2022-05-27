import { TipLayout } from '~/layouts'

import About from '~/pages/About'
import Account from '~/pages/Account'
import Contact from '~/pages/Contact'
import Home from '~/pages/Home'
import ReturnPolicy from '~/pages/ReturnPolicy'
import Product from '~/pages/Product'
import Tip from '~/pages/Tip'
import Cart from '~/pages/Cart'
import DetailedProduct from '~/pages/DetailedProduct'
import config from '~/config'

const publicRoutes = [
    { path: config.routes.home, component: Home },
    { path: config.routes.about, component: About },
    { path: config.routes.cart, component: Cart },
    { path: config.routes.contact, component: Contact },
    { path: config.routes.detailed, component: DetailedProduct },
    { path: config.routes.productTop, component: Product },
    { path: config.routes.productBottom, component: Product },
    { path: config.routes.productBottomGirl, component: Product },
    { path: config.routes.returnPolicy, component: ReturnPolicy },
    { path: config.routes.tip, component: Tip, layout: TipLayout },
]

const protectedRoutes = [
    { path: config.routes.login, component: Account },
    { path: config.routes.signup, component: Account },
]
const privateRoutes = []

export { publicRoutes, protectedRoutes, privateRoutes }
