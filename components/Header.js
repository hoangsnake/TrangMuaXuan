import React from "react";
import { AiOutlineSearch, AiOutlineUser} from "react-icons/ai";
import { BsArrowLeftRight, BsHeart } from "react-icons/bs";
import { FiShoppingCart } from "react-icons/fi";

export default function Header() {
  return (
    <div>
      <div className="h-[75px] bg-[#FAA618] flex justify-center items-center gap-10">
        <div>
          <div>
            <p className="font-bold text-[21px] ">20% Off Site-Wide</p>
          </div>
          <div>
            <p className="text-[18px]">Apply code on checkout</p>
          </div>
        </div>
        <div className="flex gap-2">
          <div>
            <span class="font-bold text-2xl">63</span>
            <span class="hidden md:block font-normal text-sm">Days</span>
          </div>
          <p class="font-bold text-xl flex items-center">:</p>
          <div>
            <span class="font-bold text-2xl">6</span>
            <span class="hidden md:block font-normal text-sm">Hrs</span>
          </div>
          <p class="font-bold text-xl flex items-center">:</p>
          <div>
            <span class="font-bold text-2xl">60</span>
            <span class="hidden md:block font-normal text-sm">Mins</span>
          </div>
        </div>
        <div>
          <button className="w-56 h-12 bg-[#D20808] text-white rounded">
            CODE: CLIQUEFRIENDLY
          </button>
        </div>
      </div>

      <div className="mx-auto max-w-[1440px] flex items-center gap-20 mt-5">
        <div>
          <img
            className="w-[120px]"
            src="https://demo.shopifyhydrogen.io/sanity/9aa18a302f43fda497243b7f3470fc9098e83683-1765x515.svg?width=1765&height=515&crop=center"
            alt=""
          />
        </div>

        <div className="flex gap-[247px]">
          <div className="flex gap-10">
            <a href="">Home</a>
            <a href="">Women</a>
            <a href="">Men</a>
            <a href="">Accessories</a>
            <a href="">Pages</a>
            <a href="">FAQs</a>
            <a href="">About Us</a>
            <a href="">Blog</a>
            <a href="">Contact</a>
          </div>
            
          <div className="flex gap-7 text-2xl items-center">
            <AiOutlineSearch></AiOutlineSearch>
            <AiOutlineUser></AiOutlineUser>
            <BsArrowLeftRight></BsArrowLeftRight>
            <BsHeart ></BsHeart>
            <FiShoppingCart className="relative"></FiShoppingCart>
            <div className="w-[17px] h-[17px] flex ml-[225px] mb-[15px] items-center justify-center text-white border text-[10px] absolute rounded-full bg-[#EF4444]">
              0
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
