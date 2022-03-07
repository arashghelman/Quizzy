import React from "react";

const ThumbnailFileInput = ({ url, onChange }) => (
  <div
    className="relative
      border-1 border-gray-300 hover:border-blue-400 border-dashed rounded-md 
      text-2xl text-gray-300 hover:text-blue-400"
  >
    {url ? (
      <div className="max-w-[260px]">
        <label
          className="flex items-center justify-center rounded-sm absolute right-1 top-1 
          bg-slate-300 text-slate-500 hover:text-blue-500 text-xl 
          w-7 h-7 cursor-pointer ri-pencil-line"
        >
          <FileInput name="Thumbnail" onChange={onChange} />
        </label>
        <img
          src={url}
          alt="Thumbnail"
          className="h-full rounded-lg p-1 object-cover"
        />
      </div>
    ) : (
      <label className="cursor-pointer ri-add-line h-full w-full flex items-center justify-center">
        <FileInput name="Thumbnail" onChange={onChange} />
      </label>
    )}
  </div>
);

export default ThumbnailFileInput;

function FileInput({ name, onChange }) {
  return (
    <input
      type="file"
      accept="image/*"
      name={name}
      className="absolute invisible"
      onChange={onChange}
    />
  );
}
