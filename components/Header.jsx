import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white bg-pink-50/20">
      <div className="container mx-auto flex justify-between items-center">
        
        {/* Logo */}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Fahad <span className="text-accent">.</span>
          </h1>
        </Link>
        
        {/* Empty space */}
        <div className="flex-grow"></div>

        {/* Desktop navigation and Hire me button */}
        <div className="hidden xl:flex items-center gap-8">
          <Nav />
          <Link href="/contact">
            <Button>Hire me</Button>
          </Link>
        </div>

        {/* Mobile nav */}
        <div className="xl:hidden">
          <MobileNav />
        </div>
      
      </div>
    </header>
  );
};

export default Header;
