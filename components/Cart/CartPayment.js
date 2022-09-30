import React, { useEffect, useState } from "react";
import { getItems } from "./API/CartAPI";
import cart from "../../public/images/cart-item.png";
import CartPaymentItem from "./CartPaymentItem";
import { useSelector } from "react-redux";

function CartPayment() {
  const [cartItems, setCartItems] = useState([]);
  const { user } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchItems = async function (id) {
      const data = await getItems(id);
      setCartItems(data);
    };
    fetchItems(user._id);
  }, [user._id]);
  console.log(cartItems);
  return (
    <div>
      {cartItems.map((item) => (
        <div key={item.course?._id}>
          <CartPaymentItem
            src={cart}
            coursePrice={item.course?.price}
            courseImage={item.course?.courseImage}
            courseTitle={item.course?.title}
            courseDescription={item.course?.description}
          />
        </div>
      ))}
    </div>
  );
}

export default CartPayment;
