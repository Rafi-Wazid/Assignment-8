
import bannerImg from "../../assets/banner.jpg";

const Banner = () => {

  return (
    <div className="relative bg-purple-600 text-white py-16 rounded-b-3xl overflow-hidden">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-5xl font-bold mb-4">
              Upgrade Your Tech Accessorize with Gadget Heaven Accessories
            </h1>
            <p className="text-xl font-semibold mb-8">
              Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!
            </p>
            <button className="btn btn-ghost text-purple-900 bg-white  rounded-full px-6 py-2 font-semibold hover:bg-purple-100"
            onClick={() => document.getElementById('Gadgets').scrollIntoView({behavior: "smooth"})}>
              Shop Now
            </button>
          </div>
          <div className="relative mt-40 max-w-3xl mx-auto">
            <img 
              className="w-full rounded-3xl shadow-lg transform -translate-y-1/4" 
              src={bannerImg} 
              alt="VR Headset" 
            />
          </div>
        </div>
  );
};

export default Banner;
