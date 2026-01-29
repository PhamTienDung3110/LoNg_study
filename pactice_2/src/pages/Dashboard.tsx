import { useEffect, useState } from "react";
import SideBarComp from "../component/sidebar";
import TextFieldComp from "../component/TextFieldComp";
import DropDownMenuComp from "../component/DropDownMenu";
const optionsDropDown = [
  { value: 'all', label: 'All' },
  { value: 'food', label: 'Food' }, 
]
export default function Dashboard() {
  const [valueTextFieldComp, setValueTextFieldComp] = useState("")
  const [valueDropDownMenuComp, setValueDropDownMenuComp] = useState("")
  const [openDropDownMenuComp, setOpenDropDownMenuComp] = useState(false)
  useEffect(() => {
    console.log("valueDropDownMenuComp: ", valueDropDownMenuComp)
  }, [valueDropDownMenuComp])
  return (
    <div>
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
            {/* <input type="text" placeholder="Search for food, coffe, etc.." /> */}
              <TextFieldComp isSearchButton placeholder="Search for food, coffe, etc.." value={valueTextFieldComp} 
            onChange={(e) => setValueTextFieldComp(e)} />
            <div style={{ width: '300px', marginTop: '16px' }}>
              <DropDownMenuComp 
              options={optionsDropDown} 
              value={valueDropDownMenuComp} 
              open={openDropDownMenuComp}
              onChange={(e) => setValueDropDownMenuComp(e)}
              onClose={() => setOpenDropDownMenuComp(false)}
              onOpen={() => setOpenDropDownMenuComp(true)}
            />
            </div>
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
    </div>
  )
}