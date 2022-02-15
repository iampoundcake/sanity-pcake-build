import Link from "next/link";

function Header() {
  return (
    <header>
        <div className="flex item-center space-x-5">
            <Link href="/">
                <img 
                    className="w-1/4 object-contain cursor-pointer"
                    src="https://i.postimg.cc/jq3PvYZt/Untitled-Artwork-37.png"
                    alt="" 
                />
            </Link>
        </div>
        <div className="hidden md:inline-flex items-center space-x-5">
            <h3>About</h3>
            <h3>Contact</h3>
            <h3>Follow</h3>
        </div>
    </header>
    );
}

export default Header;