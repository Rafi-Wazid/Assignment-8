
import { Link, useRouteError } from 'react-router-dom';

const ErrorPage = () => {

  const error = useRouteError();

  return (
    <div>
       <div className='text-3xl py-10 text-center items-center my-auto'>
        <h2>Something went wrong!</h2>
        <p>{error?.statusText || error?.message || "Unknown error"}</p>
        <button className='btn btn-outline text-purple-700'><Link to={`/`}>Back To Home</Link></button>
      </div>
    </div>
  );
};

export default ErrorPage;
