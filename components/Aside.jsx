import React from "react";
import displayPic from "../public/assets/crello-255294772-stock-photo-beautiful-african-american-woman-body.jpeg";
import Image from "next/image";


export default function Aside() {
  return (
    <aside className="featured-gallery">
      {/* preview image */}
      <div className="preview-images">
        <Image
          src={displayPic}
          alt="picture of model"
          className="preview-image"></Image>
        <Image
          src={displayPic}
          alt="picture of model"
          className="preview-image"></Image>
        <Image
          src={displayPic}
          alt="picture of model"
          className="preview-image"></Image>
      </div>

      <div className="featured-image">
        <Image
          src={displayPic}
          alt="picture of model"
          className="preview-image"></Image>
      </div>
    </aside>
  );
}
