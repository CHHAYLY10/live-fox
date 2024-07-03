import { resetCart } from "@/utils/nextSlice";
import { useDispatch } from "react-redux";
import { ImBoxRemove } from "react-icons/im";

const ResetCart = () => {
  const dispatch = useDispatch();
  const handleResetCart = () => {
    const confirmReset = window.confirm(
      "Are you sure to reset your items from the cart?"
    );
    if (confirmReset) {
      dispatch(resetCart());
    }
  };
  return (
    <button
      onClick={handleResetCart}
      className="my-10 w-40 h-10 hover:text-red-600"
    >
      <ImBoxRemove className="text-[3rem]" />
    </button>
  );
};

export default ResetCart;
