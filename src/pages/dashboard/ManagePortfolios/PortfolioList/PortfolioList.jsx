import { useState } from "react";
import { AiOutlineProject, AiOutlineSearch } from "react-icons/ai";

import DeletePortfolioModal from "./DeletePortfolioModal";
import PortfolioCard from "./PortfolioCard";

const portfolios = [
  {
    id: 1,
    title: "Instant Kaj - Job platform",
    description: `I have make to my personal website. visit my site: http://nasimjr.ga/`,
    skillS: ["HTML", "CSS"],
    image:
      "https://www.fulltimenomad.com/wp-content/uploads/2015/11/Porfolio2.png",
  },
  {
    id: 2,
    title: "JbOrganicFood - Ecommerce Website",
    description: `I have make to my personal website. visit my site: http://nasimjr.ga/`,
    skillS: ["React", "JavaScript"],
    image: "https://cdn3.f-cdn.com//files/download/191881337/43cbb8.jpg",
  },
];

const PortfolioList = () => {
  const [portfolio, setPortfolio] = useState(null);
  return (
    <div className="py-5 text-neutral">
      <div className="bg-base-100 rounded-md shadow-lg">
        <div className="border-b mb-4 px-5 py-3 text-lg">
          <div className="flex justify-between items-center">
            <h6>Portfolios Listing</h6>
            <div className="relative">
              <input
                type="text"
                placeholder="Search Portfolio"
                className="border px-4 py-2 rounded outline-none text-sm"
              />
              <button className="absolute right-0 w-10 h-full rounded-r bg-primary text-base-100">
                <p className="flex justify-center items-center">
                  <AiOutlineSearch />
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="p-5">
          {portfolios.length === 0 && (
            <div className="border border-dashed min-h-[600px] flex justify-center items-center">
              <div>
                <AiOutlineProject className="text-6xl mx-auto mb-4 opacity-50 text-red-500" />
                <h6 className="font-semibold text-neutral/70">
                  No portfolios found yet.
                </h6>
              </div>
            </div>
          )}

          <div className="grid sm:grid-cols-2 md:grid-cols-4 2xl:grid-cols-5 gap-10">
            {portfolios?.map((portfolio) => (
              <PortfolioCard
                key={portfolio.id}
                portfolio={portfolio}
                setPortfolio={setPortfolio}
              />
            ))}
            {portfolio && <DeletePortfolioModal portfolio={portfolio} />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PortfolioList;
