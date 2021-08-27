import Link from "next/link";
import HamburgerMenu from "./hamburgerMenu";

export default function NavBar() {
  return (
    <>
      <HamburgerMenu />
      <nav>
        <div>
          <Link href="/about">
            <a>About</a>
          </Link>
        </div>
        <div>
          <Link href="/cv">
            <a>cv</a>
          </Link>
        </div>
        <div>
          <Link href="/work">
            <a>work</a>
          </Link>
        </div>
        <div>
          <Link href="/">
            <a>Home</a>
          </Link>
        </div>
      </nav>
    </>
  );
}
