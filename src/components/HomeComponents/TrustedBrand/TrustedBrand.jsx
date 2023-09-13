export default function TrustedBrand() {
  return (
    <div className="bg-gray-50/50 flex justify-center items-center ">
      <div className="flex gap-10 items-center">
        <h6 className="hidden md:block text-lg font-medium text-gray-400">
          Trusted by:
        </h6>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-x-10 lg:gap-14 items-center">
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/meta.8a23b13.png"
            alt=""
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/google.517da09.png"
            alt=""
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/netflix.e3ad953.png"
            alt=""
          />
          <img
            src="https://fiverr-res.cloudinary.com/npm-assets/@fiverr/logged_out_homepage_perseus/apps/paypal.ec56157.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
}
