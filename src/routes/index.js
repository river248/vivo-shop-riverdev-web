import { TipLayout } from '~/components/Layouts'

import Home from '~/pages/Home'
import Product from '~/pages/Product'
import Tip from '~/pages/Tip'

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/product', component: Product },
    { path: '/tip', component: Tip, layout: TipLayout },
]

const privateRoutes = []

export { publicRoutes, privateRoutes }
