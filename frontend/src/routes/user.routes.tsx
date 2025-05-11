import { HomePage } from "../pages";
import BoyProducts from "../pages/products/BoyProducts";
import GirlProducts from "../pages/products/GirlProducts";
import MenProducts from "../pages/products/MenProducts";
import WomenProducts from "../pages/products/WomenProducts";
const user = [
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/men",
    element: <MenProducts />,
  },
  {
    path: "/women",
    element: <WomenProducts />,
  },
  {
    path: "/girl",
    element: <GirlProducts />,
  },
  {
    path: "/boy",
    element: <BoyProducts />,
  },
];

export default user;
