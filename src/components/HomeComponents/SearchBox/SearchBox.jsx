export default function SearchBox({ activeIndex }) {
  return (
    <div className="flex text-[15px]">
      <input
        type="search"
        className="search_input"
        placeholder="Search your favorite jobs"
      />
      <button
        className={`search_btn hover:bg-opacity-90
        ${activeIndex === 0 && "primary_bg_gradient"} 
        ${activeIndex === 1 && "bg-[#B92528]"}
        ${activeIndex === 2 && "bg-[#1B1233]"}
        `}
      >
        Search
      </button>
    </div>
  );
}
