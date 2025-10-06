import { useContext, useState } from "react";
import GadgetContext from "../GadgetContext/GadgetContext";
import Gadget from "../Gadget/Gadget";

const Gadgets = () => {
  const { gadgets, loading } = useContext(GadgetContext);
  const [selectedCategory, setSelectedCategory] = useState('all');

  const handleCategoryClick = (category) => {
    setSelectedCategory(category.toLowerCase());
  }

  const filteredGadgets = selectedCategory === 'all' ? gadgets : gadgets.filter((gadget) => gadget.category.toLowerCase() === selectedCategory);

  if (loading) {
    return <div className="text-center py-10">Loading gadgets...</div>; 
  }

  
  const capitalizeCategory = (cat) => cat.charAt(0).toUpperCase() + cat.slice(1);

  return (
    <div id="Gadgets">
      <h2 className="text-4xl font-bold text-center py-5">
        Explore Cutting-Edge Gadgets
      </h2>
      <hr className="py-5 text-gray-400 max-w-3/4 mt-3 mx-auto" />
      {/* Show buttons below heading on mobile */}
      <div className="grid grid-cols-3 gap-3 sm:grid-cols-4 md:grid-cols-6 lg:hidden mb-8">
        <button
          className={`btn ${selectedCategory === 'all' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
          onClick={() => handleCategoryClick('all')}
        >
          All Product
        </button>
        <button
          className={`btn ${selectedCategory === 'laptops' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
          onClick={() => handleCategoryClick('laptops')}
        >
          Laptops
        </button>
        <button
          className={`btn ${selectedCategory === 'smartphones' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
          onClick={() => handleCategoryClick('smartphones')}
        >
          Phones
        </button>
        <button
          className={`btn ${selectedCategory === 'accessories' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
          onClick={() => handleCategoryClick('accessories')}
        >
          Accessories
        </button>
        <button
          className={`btn ${selectedCategory === 'smartwatches' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
          onClick={() => handleCategoryClick('smartwatches')}
        >
          Smart Watches
        </button>
      </div>

      {/* Main layout: sidebar (desktop) + gadgets */}
      <div className="grid lg:grid-cols-4 gap-8 items-start">
        {/* Sidebar for large screens only */}
        <div className="hidden lg:grid lg:grid-cols-1 gap-3">
          <button
            className={`btn ${selectedCategory === 'all' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
            onClick={() => handleCategoryClick('all')}
          >
            All Product
          </button>
          <button
            className={`btn ${selectedCategory === 'laptops' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
            onClick={() => handleCategoryClick('laptops')}
          >
            Laptops
          </button>
          <button
            className={`btn ${selectedCategory === 'smartphones' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
            onClick={() => handleCategoryClick('smartphones')}
          >
            Phones
          </button>
          <button
            className={`btn ${selectedCategory === 'accessories' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
            onClick={() => handleCategoryClick('accessories')}
          >
            Accessories
          </button>
          <button
            className={`btn ${selectedCategory === 'smartwatches' ? 'bg-purple-600 text-white' : 'bg-purple-100 text-purple-700'} rounded-full hover:bg-purple-200`}
            onClick={() => handleCategoryClick('smartwatches')}
          >
            Smart Watches
          </button>
        </div>

       
        <div className="lg:col-span-3 mx-auto py-5">
          {filteredGadgets.length > 0 ? (
            <div className="grid lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1 gap-10">
              {filteredGadgets.map((gadget, idx) => (
                <Gadget key={idx} gadget={gadget}></Gadget>
              ))}
            </div>
          ) : (
            <div className="text-center py-10 text-gray-600 text-xl">
              No products available in {selectedCategory === 'all' ? 'any category' : capitalizeCategory(selectedCategory)}.
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Gadgets;