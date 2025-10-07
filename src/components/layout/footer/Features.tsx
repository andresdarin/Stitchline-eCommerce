import { TruckElectric, Undo2, Shield, MapPinned } from "lucide-react";

export const Features = () => {
  return (
    <div
      className="grid grid-cols-4 w-full h-20
                 border border-black border-l-0 border-r-0 
                 divide-x divide-black"
    >
      <div className="flex flex-row gap-2 items-center justify-center">
        <TruckElectric />
        <h1>Fast Delivery</h1>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <Undo2 />
        <h1>Free Returns</h1>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <Shield />
        <h1>Secure Checkout</h1>
      </div>
      <div className="flex flex-row gap-2 items-center justify-center">
        <MapPinned />
        <h1>Order Tracking</h1>
      </div>
    </div>
  );
};
