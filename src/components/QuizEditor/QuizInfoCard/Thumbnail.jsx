import React from "react";
import Button from "../../shared/Button";

export default function Thumbnail({ url }) {
  return (
    <section className="border-1 border-dashed border-gray-300 rounded-sm ml-5 w-80 max-w-7xl group">
      {url ? (
        <div className="relative h-full bg-gray-100">
          <Button
            icon="ri-delete-bin-line"
            custom="absolute top-2.5 right-2.5 w-7 h-7 bg-red-200 text-red-500 text-base border-none"
          />
          <img
            className="h-full rounded-sm object-cover"
            src={url}
            alt="Thumbnail"
          />
        </div>
      ) : (
        <div
          className="flex flex-col justify-center items-center h-full 
            gap-y-6 bg-gray-100 text-blue-1000 cursor-pointer group-hover:opacity-70"
        >
          <i className="pr-px text-2xl ri-image-add-fill transform duration-100 group-hover:scale-110"></i>
          <span className="text-sm text-gray-500">
            Click here to add a quiz thumbnail
          </span>
        </div>
      )}
    </section>
  );
}
