import React, { useState } from "react";
import Button from "../button/Button";
type CardType = {
  img: string;
  text: string;
};

const Card = ({ text, img }: CardType) => {
  const [quantity, setQuantity] = useState<number>(1); // [value,function to update value]
  //console.log(quantity)
  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setQuantity(+e.target.value);
  }
  console.log(quantity);
  return (
    <div className="flex flex-col w-36 gap-3">
      <img src={img} alt={text} />
      <p>{text}</p>
      <input
        max={5}
        value={quantity}
        onChange={handleChange}
        type="number"
        className="border border-black"
      />
      <Button text="Add to cart" className="btn bg-blue-500" />
    </div>
  );
};

export default Card;
