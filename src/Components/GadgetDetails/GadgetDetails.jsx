import { useContext } from "react";
import GadgetContext from "../GadgetContext/GadgetContext";
import { useParams } from "react-router-dom";
import { addToStoredCartList, addToStoredWishList, getStoredCartList, getStoredWishList } from "../../utility/addToDb";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const GadgetDetails = () => {
  const { gadgets } = useContext(GadgetContext);
  const { id } = useParams();
  if (!gadgets) return <p>Loading gadgets...</p>; 
  const gadget = gadgets.find((g) => String(g.product_id) === String(id)); 
  if (!gadget) return <p>Gadget not found!</p>;
  const { product_image, availability, product_title, price, description , Specification , rating} = gadget;

  const notify = (message) => {
    toast(message, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  const handleCartBtn = (id) => {
    const cart = getStoredCartList();
    if (cart.includes(id)) {
      notify('Already in Cart');
    } else {
      addToStoredCartList(id);
      notify('Added to Cart');
    }
  };

  const handleWishListBtn = (id) => {
    const wishlist = getStoredWishList();
    if (wishlist.includes(id)) {
      notify('Already in Wishlist');
    } else {
      addToStoredWishList(id);
      notify('Added to Wishlist');
    }
  };

  return (
   <div className="bg-base-200">
    <div className="bg-purple-600 text-white text-center py-6 rounded-b-lg">
      <h2 className="text-5xl font-bold py-2">Product Info</h2>
    <p className="text-xl font-semibold md:max-w-3/4 mx-auto">Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!</p>
    </div>
     <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row">
        <img
          src={product_image}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div className="space-y-5">
          <h1 className="text-4xl font-bold">{product_title}</h1>
          <p className="font-semibold">Price: ${price}</p>
          <button className="btn btn-sm btn-outline bg-green-100 rounded-full">{availability ? 'In Stock' : 'Out of stock'}</button>
          <p className="font-semibold">{description}</p>
          <div>
            <p className="font-semibold">Specification</p>
            {
              Specification.map((specs , idx) => <li key={idx}>{specs}</li>)
            }
          </div>
          <p className="font-semibold">Rating: {rating}</p>
            <div className="rating rating-xs">
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="1 star" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="2 star" defaultChecked />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="3 star" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="4 star" />
            <input type="radio" name="rating-5" className="mask mask-star-2 bg-orange-400" aria-label="5 star" />
            </div>
          <div className="flex gap-4">
            <button onClick={() => handleCartBtn(id)} className="btn btn-primary block">Add To Cart</button>
            <button onClick={() => handleWishListBtn(id)} className="btn btn-primary block">Add To Wishlist</button>
          </div>
        </div>
      </div>
    </div>
    <ToastContainer />
   </div>
  );
};

export default GadgetDetails;