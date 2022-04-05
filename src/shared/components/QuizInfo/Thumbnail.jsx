import React from "react";

export default function Thumbnail({ url }) {
  return (
    <img src={url} alt="Thumbnail" className="h-full rounded-sm object-cover" />
  );
}
