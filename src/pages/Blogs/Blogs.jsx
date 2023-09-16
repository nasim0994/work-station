import "./Blogs.css";
import { TbClockEdit } from "react-icons/tb";
import { BsPerson } from "react-icons/bs";
import { Link } from "react-router-dom";
import { BiSearchAlt2 } from "react-icons/bi";

export default function Blogs() {
  return (
    <div className="py-10">
      <div className="container">
        <div className="lg:flex gap-10 items-start mx-10">
          {/* Sidebar */}
          <div className="sm:w-[500px] mx-auto">
            <div className="border-b pb-4">
              <div className="relative">
                <input
                  type="text"
                  placeholder="Search Blog"
                  className="w-full outline-none border rounded px-3 py-2"
                />
                <span className="absolute right-4 top-2 text-2xl text-primary">
                  <BiSearchAlt2 />
                </span>
              </div>
            </div>

            <div className="p-4 mt-3">
              <h6 className="font-medium mb-2">Categories</h6>
              <ul className="text-[15px] text-neutral/80">
                <li>
                  <Link
                    to=""
                    className="flex justify-between items-center hover:text-primary duration-200 py-1"
                  >
                    <h6>blog</h6>
                    <span className="text-primary">(1)</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    className="flex justify-between items-center hover:text-primary duration-200 py-1"
                  >
                    <h6>Content Writing</h6>
                    <span className="text-primary">(1)</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    className="flex justify-between items-center hover:text-primary duration-200 py-1"
                  >
                    <h6>General</h6>
                    <span className="text-primary">(4)</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    className="flex justify-between items-center hover:text-primary duration-200 py-1"
                  >
                    <h6>Graphics</h6>
                    <span className="text-primary">(1)</span>
                  </Link>
                </li>

                <li>
                  <Link
                    to=""
                    className="flex justify-between items-center hover:text-primary duration-200 py-1"
                  >
                    <h6>Technology</h6>
                    <span className="text-primary">(1)</span>
                  </Link>
                </li>
                <li>
                  <Link
                    to=""
                    className="flex justify-between items-center hover:text-primary duration-200 py-1"
                  >
                    <h6>Uncategorized</h6>
                    <span className="text-primary">(2)</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="border-y mt-3 p-4">
              <h6 className="font-medium mb-2">Frequent Tags</h6>

              <div>
                <button className="py-1.5 px-4 rounded-full border mr-3 mt-3 hover:bg-primary hover:text-base-100 duration-500">
                  Face
                </button>
                <button className="py-1.5 px-4 rounded-full border mr-3 mt-3 hover:bg-primary hover:text-base-100 duration-500">
                  facebook Business
                </button>
                <button className="py-1.5 px-4 rounded-full border mr-3 mt-3 hover:bg-primary hover:text-base-100 duration-500">
                  Online Business
                </button>
                <button className="py-1.5 px-4 rounded-full border mr-3 mt-3 hover:bg-primary hover:text-base-100 duration-500">
                  fb
                </button>
              </div>
            </div>

            <div>
              <h6 className="font-medium mt-3 p-4">Effective T&C</h6>
            </div>
          </div>

          {/* Blogs */}
          <div className="w-full mt-6 lg:mt-0">
            {/* 1 */}
            <div className="blog-card border mb-8 rounded">
              <Link to="/blog/1" className="blog-img">
                <img
                  src="https://WorkStation.com/wp-content/uploads/2021/09/feature-bangladesh-2nd-online-labor-730x240.jpg"
                  alt=""
                  className="w-full h-72"
                />
              </Link>

              <div className="p-6">
                <Link to="" className="hover:text-primary duration-300">
                  <h6 className="text-xl font-medium">
                    যেসকল কারণে বাংলাদেশ অনলাইন শ্রমিক সরবরাহের পছন্দের তালিকায়
                    বিশ্বে দ্বিতীয় স্থানে
                  </h6>
                </Link>

                <div className="flex items-center gap-4 text-neutral/80 my-3">
                  <div className="flex items-center gap-2 border-r pr-4">
                    <TbClockEdit />
                    <p>September 9, 2021</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsPerson />
                    <Link to="/" className="text-primary">
                      WorkStation
                    </Link>
                  </div>
                </div>

                <p className="text-neutral/80 text-[15px]">
                  অক্সফোর্ড ইন্টারনেট ইনস্টিটিউট (OII) এর এক গবেষণা অনুসারে জানা
                  যায় যে, বাংলাদেশ অনলাইন শ্রমিক সরবরাহের পছন্দের তালিকায়
                  বিশ্বে দ্বিতীয় স্থানে রয়েছে। এই গবেষণার ফলাফল অক্সফোর্ড
                  ইন্টারনেট ইনস্টিটিউট (OII) ওয়েবসাইট এ প্রকাশ করা হয়, যেখান
                  থেকে জানা যায় ইন্ডিয়া মোট বিশ্ব অনলাইন শ্রমিক এর ২৪% এবং
                  যুক্তরাষ্ট্র ১২% অনলাইন শ্রমিক সরবরাহ করে যথাক্রমে প্রথম ও
                  তৃতীয়....
                </p>
              </div>
            </div>

            {/* 2 */}
            <div className="blog-card border mb-8 rounded">
              <Link to="" className="blog-img">
                <img
                  src="https://WorkStation.com/wp-content/uploads/2021/09/Feature-Freelancing-is-easy.jpg"
                  alt=""
                  className="w-full h-72"
                />
              </Link>

              <div className="p-6">
                <Link to="" className="hover:text-primary duration-300">
                  <h6 className="text-xl font-medium">
                    ফ্রিল্যান্সিং হোক আরো সহজে
                  </h6>
                </Link>

                <div className="flex items-center gap-4 text-neutral/80 my-3">
                  <div className="flex items-center gap-2 border-r pr-4">
                    <TbClockEdit />
                    <p>September 9, 2021</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <BsPerson />
                    <Link to="/" className="text-primary">
                      WorkStation
                    </Link>
                  </div>
                </div>

                <p className="text-neutral/80 text-[15px]">
                  বর্তমান সময়ে টাকা আয় করার একটি অন্যতম মাধ্যম হচ্ছে
                  ফ্রিল্যান্সিং। শুধু টাকা আয় নয়, ক্যারিয়ার হিসেবেও
                  ফ্রিল্যান্সিং এখন বেশ জনপ্রিয়। তবে অনেকেই ফ্রিল্যান্সিং
                  ক্যারিয়ার শুরু করা নিয়ে কিছুটা দ্বিধা দ্বন্দে থাকেন। Fiverr
                  ও Upwork এর মত বেশ কয়েকটি আন্তর্জাতিক মার্কেটপ্লেস থাকা
                  সত্ত্বেও বাংলাদেশিদের জন্য ফ্রিল্যান্সার হিসেবে ক্যারিয়ার
                  শুরু করা একটু জটিল হয়। এর মূল....
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
