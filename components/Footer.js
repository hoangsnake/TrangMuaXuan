import React from "react";
import { FaFacebook, FaPinterest, FaInstagram } from "react-icons/fa";
import { BsTwitter, BsYoutube } from "react-icons/bs";

export default function Footer() {
  return (
    <div className="mx-auto max-w-[1440px]">
      <div>
        <p className="font-semibold text-2xl flex justify-center items-center">
          RECEIVE 10% OFF YOUR NEXT ORDER
        </p>
      </div>

      <div>
        <p className="font-thin text-center mt-4">
          You'll also be the first to see our new arrivals, get early access to
          sales and more!
        </p>
      </div>

      <div className="flex justify-center items-center relative mt-8">
        <button className="absolute w-[130px] h-[52px] border right-[320px] rounded-e-full bg-[#D20808] text-white">
          JOIN
        </button>
        <input
          className="border w-[800px] h-[52px] rounded-[100px] pl-7 "
          placeholder="Your email address"
        ></input>
      </div>

      <div className="flex gap-[130px] mt-14">
        <div className="flex flex-col gap-6">
          <div className="w-[130px]">
            <img
              src="https://demo.shopifyhydrogen.io/sanity/9aa18a302f43fda497243b7f3470fc9098e83683-1765x515.svg?width=1765&height=515&crop=center"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-2">
            <div>
              <p className="w-[300px]">
                {" "}
                <b>Address 1:</b> 1418 River Drive, Suite 35 Cottonhall, CA
                9622, United States.
              </p>
            </div>

            <div>
              <p className="w-[300px]">
                <b>Address 2:</b> 1418 River Drive, Suite 35 Cottonhall, CA
                9622, United States.
              </p>
            </div>

            <div>
              <p>
                {" "}
                <b>Email: </b> sale@owenstore.com
              </p>
            </div>

            <div>
              <p>
                <b>Phone:</b> +91333444555
              </p>
            </div>
          </div>

          <div className="flex gap-8">
            <FaFacebook></FaFacebook>
            <BsTwitter></BsTwitter>
            <FaInstagram></FaInstagram>
            <FaPinterest></FaPinterest>
            <BsYoutube></BsYoutube>
          </div>
        </div>

        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-8">
            <b>COMPANY</b>
            <div className="flex flex-col gap-4">
              <p>About Us</p>
              <p>Careers</p>
              <p>Affiliates</p>
              <p>Blog</p>
              <p>Orders and Returns</p>
              <p>Contact Us</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <b>SHOPS</b>
            <div className="flex flex-col gap-4">
              <p>New Arrivals</p>
              <p>Accessories</p>
              <p>Men</p>
              <p>Women</p>
              <p>Brands</p>
              <p>Shop All</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <b>HELPS</b>
            <div className="flex flex-col gap-4">
              <p>Customer Service</p>
              <p>My Account</p>
              <p>Find a Store</p>
              <p>Legal & Privacy</p>
              <p>Gift Card</p>
              <p>Terms & Conditions</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <b>GET TO KNOW</b>
            <div className="flex flex-col gap-4">
              <p>About Us</p>
              <p>Corporate</p>
              <p>Suppliers</p>
              <p>Feedback</p>
              <p>Careers</p>
              <p>Product Care</p>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <b>OPENING TIME</b>
            <div className="flex flex-col gap-4">
              <p>Mon - Fri: 8AM - 9PM</p>
              <p>Sat: 9 AM - 8 PM</p>
              <p>Sun: Closed</p>
              <b>COUNTRY</b>
            </div>
            <select className="w-[200px] h-[35px] border">
              <option>United States (USD $)</option>
              <option>English</option>
              <option>Việt Nam</option>
              <option>China</option>
              <option>Lào</option>
              <option>Thailand</option>
              <option>JaPan</option>
            </select>
          </div>
        </div>
      </div>

      <div className="border mt-14">
        
      </div>
      <div className="flex justify-between mt-10">
        <p>© 2023, Owen Demo Powered by <u>shopifyhydrogen.io </u></p>
        <img src="https://demo.shopifyhydrogen.io/sanity/5fce17daaede12e1470fae70393dbc47c22c1bc1-249x25.png?width=249&height=25&crop=center" alt=""/>
      </div>
    </div>
  );
}
