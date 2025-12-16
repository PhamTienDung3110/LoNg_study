import "./App.css";
import ButtonComp from "./component/button";
import SideBarComp from "./component/sidebar";
function App() {
  return (
    <div className="flex">
      <SideBarComp />
      <div>
        <ButtonComp label="SignUp" isCancel={true}/>
      </div>
    </div>
  );
}

export default App;
