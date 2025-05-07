import { createBrowserRouter } from "react-router-dom"
import user from "./user.routes";
import admin from './admin.routes'
const ArrayRouter = [...user, ...admin]

const routers = createBrowserRouter(ArrayRouter);

export default routers;