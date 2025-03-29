import { Divider } from "@mui/material";
import { FooterComponent, HeaderComponent } from "./components";
import LoginScreen from "./pages/auth/LoginScreen";

function App() {
  return (
    <>
      <HeaderComponent/>
      <Divider variant='middle'/>
      <FooterComponent/>
      <LoginScreen/>
    </>
  );
}
export default App;
