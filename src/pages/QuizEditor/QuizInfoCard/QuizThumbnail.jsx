import React from "react";

export default function QuizThumbnail({ url, onClick }) {
  return (
    <section className="border-1 border-dashed border-gray-300 rounded-sm ml-5 w-80 max-w-7xl group">
      {url ? (
        <div className="relative h-full bg-gray-100">
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
          onClick={onClick}
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
