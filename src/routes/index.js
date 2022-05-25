import { TipLayout } from '~/components/Layouts'

import About from '~/pages/About'
import Account from '~/pages/Account'
import Contact from '~/pages/Contact'
import Home from '~/pages/Home'
import ReturnPolicy from '~/pages/ReturnPolicy'
import Product from '~/pages/Product'
import Tip from '~/pages/Tip'
import Cart from '~/pages/Cart'
import DetailedProduct from '~/pages/DetailedProduct'
import routes from '~/config/routes'

const publicRoutes = [
    { path: routes.home, component: Home },
    { path: routes.about, component: About },
    { path: routes.cart, component: Cart },
    { path: routes.contact, component: Contact },
    { path: routes.detailed, component: DetailedProduct },
    { path: routes.login, component: Account, layout: null },
    { path: routes.signup, component: Account, layout: null },
    { path: routes.productTop, component: Product },
    { path: routes.productBottom, component: Product },
    { path: routes.productBottomGirl, component: Product },
    { path: routes.returnPolicy, component: ReturnPolicy },
    { path: routes.tip, component: Tip, layout: TipLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
