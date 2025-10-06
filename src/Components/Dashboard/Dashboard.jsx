import { useContext, useState, useEffect } from "react";
import GadgetContext from "../GadgetContext/GadgetContext";
import { getStoredCartList, getStoredWishList, removeFromStoredCartList, removeFromStoredWishList } from "../../utility/addToDb";

const Dashboard = () => {
  const { gadgets } = useContext(GadgetContext);
  const [activeSection, setActiveSection] = useState("dashboard");
  const [cartItems, setCartItems] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [showModal, setShowModal] = useState(false);
  const [isSorted, setIsSorted] = useState(false);

  
  useEffect(() => {
    const storedCartIds = getStoredCartList();
    const storedWishlistIds = getStoredWishList();

    let filteredCartItems = gadgets.filter((g) =>
      storedCartIds.includes(String(g.product_id))
    );
    let filteredWishlistItems = gadgets.filter((g) =>
      storedWishlistIds.includes(String(g.product_id))
    );

    setCartItems(filteredCartItems);
    setWishlistItems(filteredWishlistItems);
  }, [gadgets]);

  const handleSectionChange = (section) => {
    setActiveSection(section);
  };

  
  const handleRemoveFromCart = (id) => {
    removeFromStoredCartList(id);
    const updatedCartItems = cartItems.filter((item) => item.product_id !== id);
    setCartItems(updatedCartItems);
  };

  
  const handleRemoveFromWishlist = (id) => {
    removeFromStoredWishList(id);
    const updatedWishlistItems = wishlistItems.filter((item) => item.product_id !== id);
    setWishlistItems(updatedWishlistItems);
  };

  
  const totalCost = cartItems.reduce((sum, item) => sum + parseFloat(item.price), 0).toFixed(2);

  
  const handleSortByPrice = () => {
    const sortedItems = [...cartItems].sort((a, b) => b.price - a.price);
    setCartItems(sortedItems);
    setIsSorted(true);
  };

 
  const handlePurchase = () => {
    setShowModal(true);
  };

  
  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div>
      <div className="bg-purple-600 text-white text-center py-6 rounded-b-lg">
        <h2 className="text-5xl font-bold py-2">Dashboard</h2>
        <p className="text-xl font-semibold md:max-w-3/4 mx-auto pb-3">
          Explore the latest gadgets that will take your experience to the next
          level. From smart devices to the coolest accessories, we have it all!
        </p>
        <div className="space-x-2">
          <button
            className={`btn rounded-full btn-wide ${
              activeSection === "cart" ? "bg-purple-200" : "bg-purple-600"
            } hover:bg-purple-200`}
            onClick={() => handleSectionChange("cart")}
          >
            Cart
          </button>
          <button
            className={`btn rounded-full btn-wide ${
              activeSection === "wishlist" ? "bg-purple-200" : "bg-purple-600"
            } hover:bg-purple-200`}
            onClick={() => handleSectionChange("wishlist")}
          >
            Wishlist
          </button>
        </div>
      </div>

      {activeSection === "dashboard" && (
        <div className="p-4 text-center my-10">
          <h3 className="text-2xl font-bold mb-4">Welcome to Your Dashboard</h3>
          <p className="text-gray-600">
            Add items to Cart or Wishlist to view them.
          </p>
        </div>
      )}

      {activeSection === "cart" && (
        <div className="p-4">
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-2xl font-bold">Cart</h3>
            <div className="flex items-center gap-4">
              <p className="font-bold">Total cost: ${totalCost}</p>
              <button
                onClick={handleSortByPrice}
                className="btn btn-outline btn-primary"
                disabled={isSorted || cartItems.length === 0}
              >
                Sort by Price ↓
              </button>
              <button
                onClick={handlePurchase}
                className="btn btn-primary rounded-full"
                disabled={cartItems.length === 0}
              >
                Purchase
              </button>
            </div>
          </div>
          {cartItems.length > 0 ? (
            <div className="space-y-4">
              {cartItems.map((item, index) => (
                <div className="flex gap-4 p-3 rounded-lg bg-white shadow relative" key={item.product_id || index}>
                  <div>
                    <img
                      className="w-32 h-32 bg-gray-200 rounded-lg object-cover"
                      src={item.product_image}
                      alt={item.product_title}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold">{item.product_title}</h3>
                    <p className="text-gray-600">Description: {item.description}</p>
                    <p className="font-semibold">Price: ${item.price}</p>
                    <button
                      onClick={() => handleRemoveFromCart(item.product_id)}
                      className="btn btn-outline btn-primary rounded-full mt-2"
                    >
                      Remove
                    </button>
                  </div>
                  
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 font-semibold">Your cart is empty. Add items from the product details page.</p>
          )}
        </div>
      )}

      {activeSection === "wishlist" && (
        <div className="p-4">
          <h3 className="text-2xl font-bold mb-4">WishList</h3>
          {wishlistItems.length > 0 ? (
            <div className="space-y-4">
              {wishlistItems.map((item, index) => (
                <div className="flex gap-4 p-3 rounded-lg bg-white shadow relative" key={item.product_id || index}>
                  <div>
                    <img
                      className="w-32 h-32 bg-gray-200 rounded-lg object-cover"
                      src={item.product_image}
                      alt={item.product_title}
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold">{item.product_title}</h3>
                    <p className="text-gray-600">Description: {item.description}</p>
                    <p className="font-semibold">Price: ${item.price}</p>
                    <button
                      onClick={() => handleRemoveFromWishlist(item.product_id)}
                      className="btn btn-outline btn-primary rounded-full mt-2"
                    >
                      Remove
                    </button>
                  </div>
                  
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-600 font-semibold">Your wishlist is empty. Add items from the product details page.</p>
          )}
        </div>
      )}

      {/* Payment Success Modal */}
      {showModal && (
        <div className="modal modal-open">
          <div className="modal-box">
            <div className="text-center">
              <div className="text-green-500 text-4xl mb-2">✓</div>
              <h3 className="font-bold text-lg">Payment Done Successfully!</h3>
              <p>Thanks for purchasing.</p>
              <p>Total: ${totalCost}</p>
            </div>
            <div className="modal-action">
              <button onClick={closeModal} className="btn">Close</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;