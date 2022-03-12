import React from "react";
import Button from "@components/Button";

export default function ThumbnailFileInput({ url, onChange }) {
  return (
    <div
      className="relative max-w-[260px]
      border-1 border-gray-300 hover:border-blue-400 border-dashed rounded-md 
      text-2xl text-gray-300 hover:text-blue-400"
    >
      {/* <Button
        type="file"
        variant="edit"
        value={<i className="ri-pencil-line"></i>}
        custom="absolute w-8 h-8 right-1 top-1"
        name="thumbnail"
        accept="image/*"
        onChange={onChange}
      /> */}
      <img
        src={url}
        alt="Thumbnail"
        className="h-full rounded-lg p-1 object-cover"
      />
    </div>
  );
}
