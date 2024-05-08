import { Home, Admin, ContactUs, Product, Login, LoginAdmin,
  Register, ComboDetail,  Cart, Cart2, ProductDetail,
  AboutUs, Booking, MyAccount, Productt, Category,
  Wishlist, Voucher,
  Adminn, Categoryy, ItemList, UserManage, OrderManage, Voucherr,
  CategoryDetail, OrdManageDetail, Reservation, System,
  ProductDetail2, Product2, Voucherrr, VoucherAdmin, PrdManage,
  AdminAccount, CustomerService, CustomerServicee, CustomerServiceee, Pay
} from '../page';
import { LayoutDefault, Layout, LayoutAdmin } from '../layout';

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

  { path: '/combo-detail', layout:Layout, component: ComboDetail },

  { path: '/product/:productId', layout:Layout, component:ProductDetail  },
  { path: '/booking', layout:Layout, component: Booking },

  { path: '/product/:productId', layout:Layout, component:ProductDetail  },

  { path: '/myaccount', layout:Layout, component: MyAccount },

  { path: '/wishlist', layout:Layout, component: Wishlist },

  { path: '/corporate_account', layout:LayoutAdmin, component: Adminn },
  { path: '/user_manage', layout:LayoutAdmin, component: UserManage },
  { path: '/category_manage', layout:LayoutAdmin, component: Categoryy },
  { path: '/item_list', layout:LayoutAdmin, component: ItemList },
  { path: '/voucher_manage', layout:LayoutAdmin, component: Voucherr },
  { path: '/order_manage', layout:LayoutAdmin, component: OrderManage },
  { path: '/reserve_manage', layout:LayoutAdmin, component: Reservation },
  { path: '/system_setting', layout:LayoutAdmin, component: System },
  { path: '/voucherr_manage', layout:LayoutAdmin, component: VoucherAdmin },
  { path: '/productt_manage', layout:LayoutAdmin, component: PrdManage },
  { path: '/homee', layout:LayoutAdmin, component: Home },
  { path: '/admin_account', layout:LayoutAdmin, component: AdminAccount },


  { path: '/category_manage/:categoryID', layout:Layout, component: CategoryDetail },

  { path: '/order_manage/:ordID', layout: Layout, component: OrdManageDetail },

  { path: '/voucher', layout: Layout, component: Voucher},


  { path: '/', layout:LayoutDefault, component: Home },
  { path: '/producttt', layout:LayoutDefault, component: Product2 },
  { path: '/producttt/:productId', layout:LayoutDefault, component:ProductDetail2  },
  { path: '/voucherrr', layout: LayoutDefault, component: Voucherrr},

  { path: '/customer_service', layout: Layout, component: CustomerServicee},
  { path: '/customer_servicee', layout: LayoutDefault, component: CustomerService},
  { path: '/customer_serviceee', layout: LayoutAdmin, component: CustomerServiceee},

  { path: '/contactt', layout: LayoutDefault, component: ContactUs},
  { path: '/contacttt', layout: LayoutAdmin, component: ContactUs},


  { path: '/aboutuss', layout:Layout, component: AboutUs},
  { path: '/aboutus', layout:LayoutDefault, component: AboutUs},

  { path: '/zalopay', layout:Layout, component: Pay },

];

export { router };