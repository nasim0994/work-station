const DeletePortfolioModal = ({ portfolio }) => {
  return (
    <div>
      <input type="checkbox" id="deletePortfolio" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box text-center">
          <h6 className="font-medium text-xl">Delete portfolio</h6>
          <p className="py-2">
            Are you sure you want to delete {portfolio.title}
          </p>
          <div className="modal-action justify-center text-[15px] font-semibold">
            <label
              htmlFor="deletePortfolio"
              className="text-base-100 bg-primary px-10 py-1.5 rounded cursor-pointer"
            >
              YES
            </label>
            <label
              htmlFor="deletePortfolio"
              className="text-base-100 bg-primary px-10 py-1.5 rounded cursor-pointer"
            >
              NO
            </label>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeletePortfolioModal;
