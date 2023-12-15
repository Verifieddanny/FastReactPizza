import React from "react";
import Button from "../../ui/Button";
import { useDispatch } from "react-redux";
import { decreaseItemQuantity, increaseItemquantity } from "./cartSlice";

function UpdateItemCart({ pizzaId, currentItem }) {
  const disptach = useDispatch();
  return (
    <div className="flex gap-2 items-center md:gap-3">
      <Button
        type="round"
        onClick={() => disptach(decreaseItemQuantity(pizzaId))}
      >
        -
      </Button>
      <span className="text-sm font-medium">{currentItem}</span>
      <Button
        type="round"
        onClick={() => disptach(increaseItemquantity(pizzaId))}
      >
        +
      </Button>
    </div>
  );
}

export default UpdateItemCart;
