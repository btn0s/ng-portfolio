const Navbar = () => (
  <div className="Navbar py-10">
    <div className="container flex justify-between items-center">
      <div className="Navbar__name">
        <div className="font-semibold text-noche text-lg my-0 leading-3">
          Nathalie Garcia
        </div>
        <div>interior designer</div>
      </div>
      <div className="Navbar__menu flex">
        <div className="Navbar__menu__menu-item">about</div>
        <div className="Navbar__menu__menu-item">contact</div>
      </div>
    </div>
  </div>
);

export default Navbar;
