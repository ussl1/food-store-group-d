import './Banner.css';

import banner1 from '../../assets/images/banner/b-1.jpg';
import banner2 from '../../assets/images/banner/b-2.jpg';

export default function Banner() {
  return (
    <div className="max-w-[1200px] mx-auto bg-neutral-200">
      <div class="freepay grid grid-cols-4 gap-4 mx-6 my-20 bg-white">
        <div class="pdding1 p-8 text-center">
          <i class="fa-solid fa-truck text-2xl text-white bg-lime-600 px-3 py-3 rounded-full"></i>
          <h2 class="frshipping font-bold text-slate-800 py-1">
            Free Shipping
          </h2>
          <h4 class="ukship text-sm text-slate-500">
            Free UK shipping when you spend £30.
          </h4>
        </div>
        <div class="pdding2 p-8 text-center">
          <i class="fa-brands fa-pagelines text-2xl text-white bg-lime-600 px-4 py-3 rounded-full"></i>
          <h2 class="gtproducts font-bold text-slate-800 py-1">
            Get Fresh Products
          </h2>
          <h4 class="findfood text-sm text-slate-500">
            Find a range of best online organic food.
          </h4>
        </div>
        <div class="pdding3 p-8 text-center">
          <i class="fa-solid fa-dollar-sign text-2xl text-white bg-lime-600 px-4 py-2.5 rounded-full"></i>
          <h2 class="moneybck font-bold text-slate-800 py-1">
            Moneyback Offer
          </h2>
          <h4 class="freespend text-sm text-slate-500">
            Free UK shipping when you spend £30.
          </h4>
        </div>
        <div class="pdding4 p-8 text-center">
          <i class="fa-solid fa-shield-halved text-2xl text-white bg-lime-600 px-4 py-3 rounded-full"></i>
          <h2 class="spay font-bold text-slate-800 py-1">Safe Payment</h2>
          <h4 class="paymethod text-sm text-slate-500">
            We are using secure payment methods..
          </h4>
        </div>
      </div>
      <div class="max-w-[1200px] mx-auto">
        <div class="grid grid-cols-2 gap-4 ">
          <div class="img1-container mx-auto  ">
            <img class="w-full" src={banner1} alt="" />
          </div>
          <div class="img2-container mx-auto  ">
            <img class="w-full" src={banner2} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
