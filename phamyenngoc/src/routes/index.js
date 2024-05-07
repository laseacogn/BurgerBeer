import { Home, Admin, ContactUs, Product, Login, LoginAdmin,
  Register, ComboDetail,  Cart, Cart2, ProductDetail,
  AboutUs, Booking, MyAccount, Productt, Category,
  Wishlist, Voucher,
  Adminn, Categoryy, ItemList, UserManage, OrderManage, Voucherr,
  CategoryDetail, OrdManageDetail, Reservation, System,
  ProductDetail2, Product2, Voucherrr
} from '../page';
import { LayoutDefault, Layout } from '../layout';

const router = [
  { path: '/contact', layout:Layout, component: ContactUs },
  { path: '/admin', component: Admin },
  { path: '/productt', component: Productt },
    { path: '/category', component: Category },
  { path: '/home', layout:Layout, component: Home },
  { path: '/login', layout:LayoutDefault, component: Login },
  { path: '/login_corporate_account', layout:LayoutDefault, component: LoginAdmin },
  { path: '/register', component: Register },
  { path: '/product', layout:Layout, component: Product },
  { path: '/cart', layout:Layout, component: Cart },
  { path: '/cart2', layout:Layout, component: Cart2},
  { path: '/aboutus', layout:Layout, component: AboutUs},

  { path: '/combo-detail', layout:Layout, component: ComboDetail },

  { path: '/product/:productId', layout:Layout, component:ProductDetail  },
  { path: '/booking', layout:Layout, component: Booking },

  { path: '/product/:productId', layout:Layout, component:ProductDetail  },

  { path: '/myaccount', layout:Layout, component: MyAccount },

  { path: '/wishlist', layout:Layout, component: Wishlist },

  { path: '/corporate_account', layout:Layout, component: Adminn },
  { path: '/user_manage', layout:Layout, component: UserManage },
  { path: '/category_manage', layout:Layout, component: Categoryy },
  { path: '/item_list', layout:Layout, component: ItemList },
  { path: '/voucher_manage', layout:Layout, component: Voucherr },
  { path: '/order_manage', layout:Layout, component: OrderManage },
  { path: '/reserve_manage', layout:Layout, component: Reservation },
  { path: '/system_setting', layout:Layout, component: System },



  { path: '/category_manage/:categoryID', layout:Layout, component: CategoryDetail },

  { path: '/order_manage/:ordID', layout: Layout, component: OrdManageDetail },

  { path: '/voucher', layout: Layout, component: Voucher},


  { path: '/', layout:LayoutDefault, component: Home },
  { path: '/producttt', layout:LayoutDefault, component: Product2 },
   { path: '/producttt/:productId', layout:LayoutDefault, component:ProductDetail2  },
   { path: '/voucherrr', layout: LayoutDefault, component: Voucherrr},


];

export { router };