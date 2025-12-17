import React from "react";

interface IPropsButton {
  label: string;
  className?: string;
  isCancel?: boolean;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
}

function ButtonComp({ label = 'OK', className, isCancel=false, onClick }: IPropsButton) {
  return !isCancel ? (
    <button
      className={`${className ?? ""} flex justify-center cursor-pointer bg-orange-500 min-w-[178px] min-h-12 rounded-xl p-3.5 text-white flex gap-2`}
      onClick={onClick}
    >
      {label}
    </button>
  ) : (
    <button className={`${className ?? ""} cursor-pointer text-[orange-500] min-w-44.5 min-h-12 rounded-xl p-3.5 text-white flex gap-2`}>{label}</button>
  );
}

export default ButtonComp;
