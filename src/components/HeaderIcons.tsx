"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import SearchCartModel from "./SearchCartModel";

const HeaderIcons: React.FC = () => {

  const [isSearchCartOpen, setIsSearchOpen] = useState(false);





    return (
        <div className=" hidden md:flex items-center gap-4 xl:gap-6 relative">
        <Link href="/pages/profile">  
        <Image
          src="/images/profile.png"
          alt=""
          width={22}
          height={22}
          className="cursor-pointer"
        />
      </Link>
            
          
        
        <div className="cursor-pointer ">
            <Link href="/pages/shoppingcart">
        <Image 
        src="/images/cart.png"
        alt=""
        width={22}
        height={22}/>
        </Link>
        </div>
  
        
        
  <div className="hidden sm:flex items-center">
        <div className="cursor-pointer">
        <Image 
        src="/images/search.png"
        alt=""
        width={22}
        height={22}
        onClick={() => setIsSearchOpen((prev) => !prev)} />
  
        </div>
  
        {isSearchCartOpen && (
          <SearchCartModel />
        )}
  
      
      </div>
      </div>
    );
};

export default HeaderIcons;