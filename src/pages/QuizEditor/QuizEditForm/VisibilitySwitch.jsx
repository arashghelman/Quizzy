import React, { forwardRef } from "react";

const VisibilitySwitch = forwardRef(({ id, defaultChecked, ...rest }, ref) => {
  return (
    <label htmlFor={id} className="inline-block cursor-pointer">
      <input
        type="checkbox"
        id={id}
        defaultChecked={defaultChecked}
        ref={ref}
        {...rest}
        className="hidden peer"
      />
      <div
        className="relative w-12 h-7 rounded-full bg-gray-200 duration-300 
            after:content-[''] after:top-[2px] after:left-[2px] after:absolute 
            after:w-6 after:h-6 after:rounded-full after:bg-white after:shadow-md 
            after:duration-300 active:after:w-8 peer-checked:bg-emerald-400 
            peer-checked:after:left-[calc(100%-2px)] transform peer-checked:after:-translate-x-full"
      ></div>
    </label>
  );
});

export default VisibilitySwitch;
