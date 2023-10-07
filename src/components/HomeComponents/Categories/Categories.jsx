import { Link } from "react-router-dom";
import { useGetCategoriesQuery } from "../../../Redux/category/categoryApi";
import CategorySkeleton from "../../Skeleton/CategorySkeleton";

export default function Categories() {
  const {
    data: categories,
    isLoading,
    isError,
    isSuccess,
    error,
  } = useGetCategoriesQuery();

  let content = null;

  if (isLoading) {
    content = (
      <>
        <CategorySkeleton />
        <CategorySkeleton />
        <CategorySkeleton />
        <CategorySkeleton />
      </>
    );
  }

  if (!isLoading && isError) {
    content = <p>{error}</p>;
  }

  if (isSuccess && !isError && !isLoading) {
    content = categories?.data?.map((category) => (
      <Link
        key={category._id}
        to={`jobs/${category.slug}`}
        className="bg-gray-50 hover:bg-gray-100 duration-300 p-4 rounded-md"
      >
        <div className="flex items-center gap-1">
          <div className="w-9">
            <img src={category.icon} className="w-8" alt="" />
          </div>
          <h6 className="font-medium mt-[2px]">{category.name}</h6>
        </div>

        <div className="mt-4 flex justify-end text-neutral-content text-sm">
          <h6>{category.totalJobs} Jobs</h6>
        </div>
      </Link>
    ));
  }

  return (
    <div className="py-10 text-neutral">
      <div className="container">
        <h2 className="text-3xl font-semibold text-neutral">
          Browse Jobs by category
        </h2>

        <div className="grid grid-cols-1 min-[460px]:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-6 mt-6">
          {content}
        </div>
      </div>
    </div>
  );
}
