import { Home, Admin, ContactUs, Product, Login,
  Register, ComboDetail,  Cart, Cart2, ProductDetail,
  AboutUs, Booking, MyAccount, Productt, Category,
  Wishlist, 
  Adminn, Categoryy, ItemList, UserManage, OrderManage, Voucherr
} from '../page';
import { LayoutDefault, Layout } from '../layout';

const router = [
  { path: '/contact', layout:Layout, component: ContactUs },
  { path: '/admin', component: Admin },
  { path: '/productt', component: Productt },
    { path: '/category', component: Category },
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

  { path: '/wishlist', layout:Layout, component: Wishlist },

  { path: '/corporate_account', layout:Layout, component: Adminn },
  { path: '/user_manage', layout:Layout, component: UserManage },
  { path: '/category_manage', layout:Layout, component: Categoryy },
  { path: '/item_list', layout:Layout, component: ItemList },
  { path: '/voucher_manage', layout:Layout, component: Voucherr },
  { path: '/order_manage', layout:Layout, component: OrderManage },

];

export { router };