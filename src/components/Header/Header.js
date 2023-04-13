import React from "react";

const Header = () => {
  return (
    <header className="w-full h-[80px] leading-[80px] flex items-center">
      <div className="container">
        <div className="flex items-center justify-between">
          {/*========================Logo Start========================*/}
          <div className="flex items-center gap-[10px]">
            <span className="w-[35px] h-[35px] bg-primaryColor text-white text-[18px] font-[500] rounded-full flex items-center justify-center">
              P
            </span>
            <div className="leading-[20px]">
              <h2 className="text-xl text-smallTextColor font-[700]">
                Ganesula Ganga Phanindra
              </h2>
              <p className="text-smallTextColor text-[14px] font-[500]">
                Techoutlook.in
              </p>
            </div>
          </div>
          {/*========================Logo End==========================*/}
          {/*=======================Menu Start=========================*/}
          <div className="menu">
            <ul className="flex items-center gap-10">
              <li>
                <a href="#about" className="text-smallTextColor font-[600]">
                  About
                </a>
              </li>
              <li>
                <a href="#services" className="text-smallTextColor font-[600]">
                  Services
                </a>
              </li>
              <li>
                <a href="#portfolio" className="text-smallTextColor font-[600]">
                  Portfolio
                </a>
              </li>
              <li>
                <a href="#contact" className="text-smallTextColor font-[600]">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          {/*========================Menu End==========================*/}
          {/*=======================Menu Right=========================*/}
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 text-smallTextColor font-[600] border border-solid border-smallTextColor py-2 px-4 rounded-[8px] max-h-[40px] hover:bg-smallTextColor hover:text-white hover:font-[500] ease-in duration-300">
              <i class="ri-send-plane-line"></i> Let's Talk
            </button>
            <span className="text-2xl text-smallTextColor md:hidden cursor-pointer">
              <i class="ri-menu-line"></i>
            </span>
          </div>
          {/*=====================Menu Right End=======================*/}
        </div>
      </div>
    </header>
  );
};

export default Header;
