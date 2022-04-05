import React, { forwardRef } from "react";
import { editIcon, loaderIcon } from "@constants/uiConstants";

const ThumbnailFileInput = forwardRef(({ url, isUploading, ...rest }, ref) => {
  return (
    <div
      className="relative max-w-[260px]
      border-1 border-gray-300 hover:border-blue-400 border-dashed rounded-md 
      text-2xl text-gray-300 hover:text-blue-400"
    >
      <label
        className={`flex justify-center items-center rounded bg-slate-300 
          text-slate-500 hover:text-blue-500 
          text-xl absolute right-1 top-1 w-7 h-7 cursor-pointer ${
            isUploading ? loaderIcon : editIcon
          }`}
      >
        <input
          type="file"
          accept="image/*"
          className="invisible absolute"
          ref={ref}
          {...rest}
        />
      </label>
      <img
        src={url}
        alt="Thumbnail"
        className="h-full rounded-lg p-1 object-cover"
      />
    </div>
  );
});

export default ThumbnailFileInput;
