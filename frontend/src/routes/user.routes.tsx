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
import ProductDetails from "../components/products/ProductDetails";
import AccessoriesCategory from "../pages/PageCategory/AccessoriesCategory";
import BoyCategory from "../pages/PageCategory/BoyCategory";
import GirlCategory from "../pages/PageCategory/GirlCategory";
import MenCategory from "../pages/PageCategory/MenCategory";
import WomenCategory from "../pages/PageCategory/WomenCategory";
import CheckOut from "../pages/CheckOut";
import GiaMoiMen from "../pages/category/Men/HangMoiMen";

const user = [
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "men",
        element: <MenCategory />,
      },
      { path: "women", element: <WomenCategory /> },
      { path: "girl", element: <GirlCategory /> },
      { path: "boy", element: <BoyCategory /> },
      { path: "accessories", element: <AccessoriesCategory /> },
      { path: "product/:slugID", element: <ProductDetails /> },
      {
        path: "my-account",
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
      { path: "men/gia-moi", element: <GiaMoiMen /> },
    ],
  },
  {
    path: "/checkout",
    element: <CheckOut />,
  },
];

export default user;
