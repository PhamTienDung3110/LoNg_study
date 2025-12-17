import "./App.css";
import SideBarComp from "./component/sidebar";
function App() {
  return (
    <div className="flex justify-between bg-bg-primary text-white">
      <div className="sidebar">
        <SideBarComp />
      </div>
      <div className="main-content mt-[24px]">
        <div className="header flex justify-between">
          <div className="flex flex-col">
            <span className="text-[28px] font-bold leading-[140%] text-[#FFFFFF]">Jaegar Resto</span>
            <span className="text-[16px] font-small leading-[140%] text-[#E0E6E9]">Tuesday, 2 Feb 2021</span>
          </div>
          <div>
            <input type="text" placeholder="Search for food, coffe, etc.." />
          </div>
        </div>
        {/* content */}
        <div className="w-[633px]">
          <div>tab</div>
          <div>
            <div>content name</div>
            <div>filter</div>
          </div>
          <div>main content</div>
        </div>
      </div>
      <div className="order w-[409px] bg-bg-primary-200">
        <div>title</div>
        <div>
          <div>choice order</div>
          <div>header-table</div>
          <div>item-table</div>
        </div>
      </div>
    </div>
  );
}

export default App;
