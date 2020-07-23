import Link from "next/link";

const Navbar = () => (
  <div className="Navbar py-5 md:py-10">
    <div className="container flex justify-between items-center">
      <div className="Navbar__name">
        <Link href="/">
          <a>
            <div className="font-semibold text-noche text-lg my-0 leading-3">
              Nathalie Garcia
            </div>
            <div>interior design & styling</div>
          </a>
        </Link>
      </div>
      <div className="Navbar__menu flex">
        {/* <div className="Navbar__menu__menu-item">about</div> */}
        <div className="Navbar__menu__menu-item">
          <a href="mailto:ngarcianorris@gmail.com?subject=Hi! I'd love to work together.">
            contact
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Navbar;
