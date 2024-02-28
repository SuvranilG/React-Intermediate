
import {FcDeleteDatabase} from "react-icons/fc"
import { useDispatch } from "react-redux";
import { remove } from "../redux/Slices/CartSlice";
import { toast } from "react-hot-toast";

const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch();

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed");
  }

  return (
  <div className="flex flex-col items-center justify-between ">
    <div className="flex flex-row items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl outline overflow-hidden h-[280px] w-[200px] " >

      <div className=" flex flex-col">

        <div className="h-[120px]" >
          <img className=" h-full w-full" src={item.image} />
        </div>
        <div>
          <h1>{item.title}</h1>
          <h1 className="text-gray-700 font-semibold text-lg text-left truncate w-40 mt-1">{item.description}</h1>
          <div>
            <p className="text-green-600 font-semibold">${item.price}</p>
            <div
            onClick={removeFromCart} 
            className=" size-2">
              <FcDeleteDatabase/>
            </div>
          </div>

        </div>


      </div>

    </div>

  </div>
  );
};

export default CartItem;
