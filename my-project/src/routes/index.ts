
import { createBrowserRouter } from "react-router-dom"
import user from "./user.routes";
import { admin } from "./admin.routes";

const routerMerge = [...user, ...admin]

const routers = createBrowserRouter(routerMerge);

export default routers;