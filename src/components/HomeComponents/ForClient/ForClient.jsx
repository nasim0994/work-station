import { BsArrowRight } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function ForClient() {
  return (
    <div className="forClient">
      <div className="container text-base-100 py-10">
        <h1 className="text-2xl font-semibold">For Client</h1>

        <div className="md:w-2/5 mt-20">
          <h2 className="text-5xl font-medium">
            Find talent <br /> your way
          </h2>
          <h6 className="mt-4 font-medium ">
            Work with the largest network of independent professionals and get
            things done—from quick turnarounds to big transformations.
          </h6>
        </div>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-2 xl:gap-8 mt-10 font-medium">
          <Link
            href=""
            className="p-4 rounded-md bg-primary hover:bg-base-100 duration-500 hover:text-primary"
          >
            <div className="flex justify-between lg:flex-col">
              <h6 className="text-lg lg:text-2xl">
                Browse and <br /> buy projects
              </h6>
              <div className="flex items-center gap-2 mt-4">
                <p className="lg:text-lg">Project Catalog</p>
                <BsArrowRight className="mt-px" />
              </div>
            </div>
          </Link>

          <Link
            href=""
            className="p-4 rounded-md bg-primary hover:bg-base-100 duration-500 hover:text-primary"
          >
            <div className="flex justify-between lg:flex-col">
              <h6 className="text-lg lg:text-2xl">
                Let us help you <br /> find the right talent
              </h6>
              <div className="flex items-center gap-2 mt-4">
                <p className="lg:text-lg">Talent Scout</p>
                <BsArrowRight className="mt-px" />
              </div>
            </div>
          </Link>

          <Link
            href=""
            className="p-4 rounded-md bg-primary hover:bg-base-100 duration-500 hover:text-primary"
          >
            <div className="flex justify-between lg:flex-col">
              <h6 className="text-lg lg:text-2xl">
                Post a job <br /> and hire a pro
              </h6>
              <div className="flex items-center gap-2 mt-4">
                <p className="lg:text-lg">Talent Marketplace</p>
                <BsArrowRight className="mt-px" />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
