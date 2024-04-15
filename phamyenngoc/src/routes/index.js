import { Home, Admin, ContactUs, Product, Login,
  Register, ComboDetail,  Cart, Cart2, ProductDetail
} from '../page';



const router = [
  { path: '/contact', component: ContactUs },
  { path: '/admin', component: Admin },
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/product', component: Product },
  { path: '/cart', component: Cart },
  { path: '/cart2', component: Cart2},

  { path: '/combo-detail', component: ComboDetail },

  { path: '/product/:productId', component:ProductDetail  },


];

export { router };