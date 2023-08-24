import { Link } from "react-router-dom";
import img1 from "../../../assets/images/product/1.png";
import img2 from "../../../assets/images/product/2.png";
import img5 from "../../../assets/images/product/5.png";
import img6 from "../../../assets/images/product/6.png";

export default function ProductCard() {
  return (
    <div className="lg:max-w-[1200px] mx-auto">
      <div className="container pt-40 pb-40">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border mx-auto shadow-md bg-white hover:border-[#7CAF02]">
            <div className="">
              <div className="mt-0">
                <span className="bg-[#7CAF02] m-0 text-white  px-2 py-[0.5]">
                  Sale
                </span>
              </div>

              <div className="product-thumbnail">
                <div className="img">
                  <Link to="">
                    <img src={img1} className="w-2/3 mx-auto" alt="product" />
                  </Link>
                </div>
                <Link className="wishlist" to="">
                  <i className="bi bi-heart"></i>
                </Link>
                <div>
                  <Link
                    className="product-QuickView"
                    to=""
                    data-bs-toggle="modal"
                    data-bs-target="#quickViewModal"
                  >
                    <i className="bi bi-eye"></i>
                  </Link>
                </div>
                <div className="text-center  bg-[#7CAF02] w-1/3 mx-auto my-2">
                  <Link to="" className="">
                    <button className="px-1 py-1 text-white">
                      Add to Cart
                    </button>
                  </Link>
                </div>
              </div>
              <div className="product-content">
                <div className="text-center">
                  <Link>Purnava Omega 3 Enri...</Link>
                </div>
                <div className="text-center">
                  <span className="mr-2 text-2xl">$200</span>
                  <del className="text-xl">$210</del>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
