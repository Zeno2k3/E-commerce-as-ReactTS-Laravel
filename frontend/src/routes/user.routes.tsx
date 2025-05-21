import App from "../App";
import { HomePage } from "../pages";
import Account from "../pages/accounts/Account";
import Address from "../pages/accounts/Address";
import Favorite from "../pages/accounts/Favorite";
import History from "../pages/accounts/History";
import MembershipCard from "../pages/accounts/MembershipCard";
import MyAccount from "../pages/accounts/MyAccount";
import Oder from "../pages/accounts/Oder";
import PromoCode from "../pages/accounts/PromoCode";
import ProductDetails from "../pages/ProductDetails";
import AccessoriesProducts from "../pages/category/AccessoriesProducts";
import BoyProducts from "../pages/category/BoyProducts";
import GirlProducts from "../pages/category/GirlProducts";
import MenProducts from "../pages/category/MenProducts";
import WomenProducts from "../pages/category/WomenProducts";
import CheckOut from "../pages/CheckOut";

const user = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "men", element: <MenProducts /> },
      { path: "women", element: <WomenProducts /> },
      { path: "girl", element: <GirlProducts /> },
      { path: "boy", element: <BoyProducts /> },
      { path: "accessories", element: <AccessoriesProducts /> },
      { path: "product/:slg-:ProductID", element: <ProductDetails /> },
      {
        path: "/my-account",
        element: <MyAccount />,
        children: [
          { index: true, element: <Account /> },
          { path: "promo-code", element: <PromoCode /> },
          { path: "oder", element: <Oder /> },
          { path: "address", element: <Address /> },
          { path: "favorite", element: <Favorite /> },
          { path: "history", element: <History /> },
          {
            path: "membership-card",
            element: <MembershipCard />,
          },
        ],
      },
    ],
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
];

export default user;
