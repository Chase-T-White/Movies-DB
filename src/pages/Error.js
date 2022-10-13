import { Link } from "react-router-dom";

const Error = () => {
  return (
    <section>
      <div className='container flex error-text'>
        <div className='error-container'>
          <h1 className='error__title'>Oops! Page does not exist...</h1>
          <Link to={"/"} className='btn'>
            Home
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Error;
