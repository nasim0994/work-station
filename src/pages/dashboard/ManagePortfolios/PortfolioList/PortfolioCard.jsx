import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { Link } from "react-router-dom";

const PortfolioCard = ({ portfolio, setPortfolio }) => {
  return (
    <div>
      <div className="flex justify-end items-center gap-3 mb-2 text-lg">
        <Link
          to={`/dashboard/editPortfolio/${portfolio.id}`}
          className="flex items-center border-r pr-3 hover:text-primary duration-300"
        >
          <AiFillEdit />
          <p className="text-sm">Edit</p>
        </Link>

        <label
          htmlFor="deletePortfolio"
          onClick={() => setPortfolio(portfolio)}
          className="flex items-center hover:text-red-500 duration-300 cursor-pointer"
        >
          <AiFillDelete />
          <p className="text-sm">Delete</p>
        </label>
      </div>
      <Link
        to={`/dashboard/portfolio/${portfolio.id}`}
        className="portfolioItem"
      >
        <img
          src={portfolio.image}
          alt=""
          className="w-full h-40 border rounded"
        />
        <h6 className="font-medium">{portfolio.title}</h6>
      </Link>
    </div>
  );
};

export default PortfolioCard;
