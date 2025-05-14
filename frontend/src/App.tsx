import { Outlet } from "react-router-dom";
import { FooterComponent, HeaderComponent } from "./components";

function App() {
  return (
    <>
      <HeaderComponent />
      <Outlet />
      <FooterComponent />
    </>
  );
}
export default App;
