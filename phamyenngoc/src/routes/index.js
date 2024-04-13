import {
  Home, Admin, ContactUs, Product,
  Login,
  Register,
  Cart
} from '../page';



const router = [
  { path: '/contact', component: ContactUs },
  { path: '/admin', component: Admin },
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },
  { path: '/product', component: Product },
  { path: '/cart', component: Cart },



];

export { router };
