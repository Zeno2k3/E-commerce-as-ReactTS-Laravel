import { About, HomePage } from "../pages";
const user = [
    {
        path: '/',
        element: <HomePage/>,
        children: {
            path: '',
            element: <About/>
        }
    }
]

export default user;