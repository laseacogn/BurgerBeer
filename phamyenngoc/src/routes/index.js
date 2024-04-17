import { Home, Admin, ContactUs, Product, Login,
  Register, ComboDetail,  Cart, Cart2, ProductDetail,
  AboutUs, Booking, MyAccount, 
} from '../page';
import { LayoutDefault, Layout } from '../layout';

const router = [
  { path: '/contact', layout:Layout, component: ContactUs },
  { path: '/admin', component: Admin },
  { path: '/', layout:Layout, component: Home },
  { path: '/login', layout:Layout, component: Login },
  { path: '/register', component: Register },
  { path: '/product', layout:Layout, component: Product },
  { path: '/cart', layout:Layout, component: Cart },
  { path: '/cart2', layout:Layout, component: Cart2},
  { path: '/aboutus', layout:Layout, component: AboutUs},

  { path: '/combo-detail', layout:Layout, component: ComboDetail },

  { path: '/product/:productId', layout:Layout, component:ProductDetail  },
  { path: '/booking', layout:Layout, component: Booking },


  { path: '/myaccount', layout:Layout, component: MyAccount },


];

export { router };