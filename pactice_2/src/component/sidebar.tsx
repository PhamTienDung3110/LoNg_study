import HomeIcon from "../assets/home.svg";
import Home2Icon from "../assets/home2.svg";
import TimeIcon from "../assets/time.svg";
import ChartIcon from "../assets/chart.svg";
import MessageIcon from "../assets/message.svg";
import BellIcon from "../assets/bell.svg";
import SettingIcon from "../assets/setting.svg";
import LogoutIcon from "../assets/exit.svg";
function SideBarComp() {
  return (
    <div className="h-screen bg-black-primary w-26 rounded-xl2 py-4 px-2">
      <div className="menu-item h-full">
        <ul className="flex items-center flex-col justify-between h-full">
          <div className="flex flex-col gap-4">
            <li className="w-14 h-14 rounded-lg2 bg-orange-100 flex justify-center items-center cursor-pointer">
              <img src={HomeIcon} />
            </li>
            <div className="bg--color-black-100">
              <li className="w-14 h-14 rounded-lg2 bg-orange-500 flex justify-center items-center cursor-pointer">
                <img src={Home2Icon} />
              </li>
            </div>
            <li className="w-14 h-14 flex justify-center items-center cursor-pointer">
              <img src={TimeIcon} />
            </li>
            <li className="w-14 h-14 flex justify-center items-center cursor-pointer">
              <img src={ChartIcon} />
            </li>
            <li className="w-14 h-14 flex justify-center items-center cursor-pointer">
              <img src={MessageIcon} />
            </li>
            <li className="w-14 h-14 flex justify-center items-center cursor-pointer">
              <img src={BellIcon} />
            </li>
            <li className="w-14 h-14 flex justify-center items-center cursor-pointer">
              <img src={SettingIcon} />
            </li>
          </div>
          <div>
            <li className="w-14 h-14 flex justify-center items-center cursor-pointer">
              <img src={LogoutIcon} />
            </li>
          </div>
        </ul>
      </div>
    </div>
  );
}

export default SideBarComp;
