import { Home, Admin, ContactUs, Product, Login,
  Register, ComboDetail,  Cart, ProductDetail
} from '../page';



const router = [
  { path: '/contact', component: ContactUs },
  { path: '/admin', component: Admin },
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/product', component: Product },
  { path: '/cart', component: Cart },

  { path: '/combo-detail', component: ComboDetail },

  { path: '/:productId', component:ProductDetail  },


];

export { router };