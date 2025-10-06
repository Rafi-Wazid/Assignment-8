import { Link } from "react-router-dom";




const Gadget = ({gadget}) => {

    const {product_id , product_image, product_title, price} = gadget ;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure className="px-10 pt-10">
        <img
          src={product_image}
          alt="Shoes"
          className="rounded-xl"
        />
      </figure>
      <div className="card-body items-center text-center">
        <h2 className="card-title">{product_title}</h2>
        <p>
          Price : ${price}
        </p>
        <div className="card-actions">
          <button className="btn btn-primary"><Link gadget="gadget" to={`/gadgetdetails/${product_id}`}>View Details</Link></button>
        </div>
      </div>
    </div>
  );
};

export default Gadget;
