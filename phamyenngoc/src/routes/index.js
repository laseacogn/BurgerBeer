import {
  Home,
  Login,
  Register,
} from '../page';
import { Admin, ContactUs } from '../page';
import { ProductDT } from '../page';
import { Burger, Combo, Sidedish, Sandwich, Hotdog, Baguette, Pizza, Drink, ComboDetail, ComboDetail2, ComboDetail3, Product, Category, Category_Baguette } from '../page';
import { Category_Burger, Category_Pizza } from '../page';

const router = [
  { path: '/contact', component: ContactUs },
  { path: '/admin', component: Admin },
  { path: '/', component: Home },
  { path: '/login', component: Login },
  { path: '/register', component: Register },

  { path: '/sidedish/:productId', component: ProductDT },
  { path: '/burger/:productId', component: ProductDT },
  { path: '/sandwich/:productId', component: ProductDT },
  { path: '/pizza/:productId', component: ProductDT },
  { path: '/hotdog/:productId', component: ProductDT },
  { path: '/baguette/:productId', component: ProductDT },
  { path: '/drink/:productId', component: ProductDT },


  { path: '/burger', component: Burger },
  { path: '/combo', component: Combo },
  { path: '/sidedish', component: Sidedish },
  { path: '/sandwich', component: Sandwich },
  { path: '/pizza', component: Pizza },
  { path: '/baguette', component: Baguette },
  { path: '/hotdog', component: Hotdog },
  { path: '/drink', component: Drink },
  { path: '/combo/:productID', component: ComboDetail },
  { path: '/combo2', component: ComboDetail2 },
  { path: '/combo3', component: ComboDetail3 },
  { path: '/admin/itemlist', component: Product },
  { path: '/admin/category', component: Category },
  { path: '/admin/category/baguette', component: Category_Baguette },
  { path: '/admin/category/burger', component: Category_Burger },
  { path: '/admin/category/pizza', component: Category_Pizza },






];

export { router };
