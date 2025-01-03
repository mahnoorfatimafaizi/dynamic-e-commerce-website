import Link from 'next/link';
import React from 'react';


const Footer: React.FC = () => {
    return (
        <footer className="bg-[#211A3E] text-white py-10">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            
            <div>
              <h3 className="font-bold mb-4">Menu</h3>
              <ul className="space-y-2">
                <li>New arrivals</li>
                <li>Best sellers</li>
                <li>Recently viewed</li>
                <li>Popular this week</li>
                <li>All products</li>
              </ul>
            </div>
  
           
            <div>
              <h3 className="font-bold mb-4">Categories</h3>
              <ul className="space-y-2">
                <li><Link href="/categories/plantpots">Plant pots</Link></li>
                <li><Link href="/categories/ceramics">Ceramics</Link></li>
                <li><Link href="/categories/tables">Tables</Link></li>
                <li><Link href="/categories/chairs">Chairs</Link></li>
                <li> <Link href="/categories/crockery">Crockery</Link></li>
                <li><Link href="/categories/tableware">Tableware</Link></li>
                <li><Link href="/categories/cutlery">Cutlery</Link></li>
  
                
              </ul>
            </div>
  
            
            <div>
              <h3 className="font-bold mb-4">Our company</h3>
              <ul className="space-y-2">
                <li><Link href="/pages/about">About us</Link></li>
                <li><Link href="/pages/about">Vacancies</Link></li>
                <li><Link href="/pages/contact">Contact us</Link></li>
                <li><Link href="/pages/about">Privacy</Link></li>
                <li><Link href="/pages/contact">Returns policy</Link></li>
              </ul>
            </div>
  
           
            <div>
              <h3 className="font-bold mb-4">Join our mailing list</h3>
              <form className="flex items-center">
                <input
                  type="email"
                  placeholder="your@email.com"
                  className="flex-1 px-4 py-2 rounded-l-md bg-[#3A3453] text-white focus:outline-none"
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-white text-[#211A3E] font-bold rounded-r-md"
                >
                  Sign up
                </button>
              </form>
            </div>
          </div>
  
          <div className="mt-10 border-t border-[#3A3453] pt-6 flex flex-col md:flex-row justify-between items-center">
            
            <p className="text-sm">Copyright 2022 Avion LTD</p>
            
            
            {/* <div className="flex space-x-4 mt-4 md:mt-0">
            <Link href="https://www.facebook.com/">
            <Image
              src="/images/facebook.png"
              alt="Facebook"
              width={25}
              height={25}
            />
          </Link>
          <Link href="https://www.instagram.com/">
            <Image
              src="/images/instagram.png"
              alt="Instagram"
              width={25}
              height={25}
            />
          </Link>
          <Link href="https://www.youtube.com/">
            <Image
              src="/images/youtube.png"
              alt="YouTube"
              width={25}
              height={25}
            />
          </Link>
              <Link href="https://www.pinterest.com/">
            <Image
              src="/images/pinterest.png"
              alt="YouTube"
              width={25}
              height={25}
            />
          </Link>
          <Link href="https://www.linkedin.com/">
            <Image
              src="/images/linkedin.png"
              alt="YouTube"
              width={25}
              height={25}
            />
          </Link>
            </div> */}
          </div>
        </div>
      </footer>
    );
};

export default Footer;