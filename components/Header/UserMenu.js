import Link from "next/link";
import { useDispatch } from "react-redux";
import { doLogOut } from "../LogIn/logIn.action";

const UserMenu = () => {
  const dispatch = useDispatch();

  const handleLogOut = () => {
    dispatch(doLogOut());
  };
  return (
    <div className="bg-[#113B73] mt-1 ">
      <ul className="text-white lg:text-sm  cursor-pointer">
        <Link href="/my-learnings" passHref>
        <li className="h-10 flex items-center hover:bg-white hover:text-black px-8">
          My Learning
        </li>
        </Link>
        <Link href="/cart" passHref>
          <li className="h-10 flex items-center hover:bg-white hover:text-black px-8">
            Cart
          </li>
        </Link>
        <Link href="/wish-list" passHref>
          <li className="h-10 flex items-center hover:bg-white hover:text-black px-8">
            Wishlist
          </li>
        </Link>
        <Link href="/settings" passHref>
          <li className="h-10 flex items-center hover:bg-white hover:text-black px-8">
            Profile
          </li>
        </Link>
        <li
          className="h-10 flex items-center hover:bg-white hover:text-black px-8"
          onClick={handleLogOut}
        >
          Logout
        </li>
      </ul>
    </div>
  );
};
export default UserMenu;
