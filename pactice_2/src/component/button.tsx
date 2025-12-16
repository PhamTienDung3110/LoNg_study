import React from "react";

interface IPropsButton {
  label: string;
  className?: string;
  isCancel?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonComp({ label, className, isCancel=false, onClick }: IPropsButton) {
  return !isCancel ? (
    <button
      className={`${className ?? ""} bg-orange-500 min-w-[178px] min-h-12 rounded-xl p-3.5 text-white flex gap-2`}
      onClick={onClick}
    >
      {label ?? "OK"}
    </button>
  ) : (
    <button className={`${className ?? ""} text-[orange-500]  min-w-44.5 min-h-12 rounded-xl p-3.5 text-white flex gap-2`}>{label}</button>
  );
}

export default ButtonComp;
