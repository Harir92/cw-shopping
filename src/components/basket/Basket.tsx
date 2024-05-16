import Button from "../button/Button";

const Basket = () => {
  return (
    <div className=" border border-gray-200 gap-5 p-2 h-fit">
      <h1 className="font-semibold text-xl">Cart items</h1>
      <div className="flex flex-row gap-4">
        <Button className="bg-gray-400 p-2" text="Clear the cart" />
        <Button className="bg-blue-200 text-white p-2" text="Checkout" />
      </div>

      <p>Nothing to see here</p>
      <p>Total price: 0$</p>
    </div>
  );
};

export default Basket;
