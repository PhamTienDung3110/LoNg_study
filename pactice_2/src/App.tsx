import { BrowserRouter, Link } from "react-router-dom";
import "./App.css";
import SideBarComp from "./component/sidebar";
import TextFieldComp from "./component/TextFieldComp";
import AppRoutes from "./router";
function App() {
  return (
    <BrowserRouter>
      <AppRoutes/>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/login">Login</Link>
      <Link to="/">Home</Link>
    </BrowserRouter>
  );
}

export default App;
