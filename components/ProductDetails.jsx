import React, { useEffect } from "react";
import Image from "next/image";
import profilePicture from "../public/assets/profile.jpg";
import { useSelector, useDispatch } from "react-redux";
import { updateColor } from "../app/features/productSlice";
import { FaCheck } from "react-icons/fa";

export default function ProductDetails() {
  const product = useSelector((state) => state.product);
  const dispatch = useDispatch();

  return (
    <section className="item-details container">
      <div className="item-title">
        <h1 className="title">Host Lequite Artisitc</h1>
        <div className="profile-info">
          <small className="profile-name">Xels Trends</small>
          {/* profile image here */}
          <span className="profile-image-container">
            <Image
              src={profilePicture}
              alt="profile picture"
              className="profile-image"
              width={30}
              height={30}></Image>
          </span>
        </div>
      </div>
      <div className="">
        <ul className="item-desc">
          <li className="list-item">Formal Wears</li>
          <li className="list-item">Available</li>
          <li className="list-item">100% cotton</li>
        </ul>
      </div>
      <div>
        <p>Select Color</p>
        <div className="colors">
          {product.color.map((color, index) => {
            return (
              <button
                key={index}
                name="color"
                data-color={color}
                style={{ background: color }}
                className={`${
                  color === color ? "color-btn active" : "color-btn"
                }`}
                onClick={() => dispatch(updateColor(color))}>
                {color === color ? <FaCheck /> : null}
              </button>
            );
          })}
        </div>
      </div>
      <div>
        <div className="size-container">
          <p>Select Size</p>
          <span>Size Guide</span>
        </div>
        <span>{/* size items to be mapped through here */}</span>
      </div>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi maiores
        est a quos aspernatur, ipsa maxime molestiae distinctio, molestias eos
        in debitis, cum rerum. Modi, quas. Ipsum facere fugit impedit,
        distinctio porro fuga repellendus, illo iure sequi officia quis
        excepturi possimus minus aliquid repudiandae! Omnis dolore expedita
        aliquam doloremque praesentium, vitae voluptatum quaerat consequatur
        optio facilis adipisci harum quisquam minus.
      </p>
      <div className="options">
        <ul className="options__list">
          <li className="list-item">Option 1</li>
          <li className="list-item">Option 2</li>
          <li className="list-item">Option 3</li>
        </ul>
      </div>
    </section>
  );
}
