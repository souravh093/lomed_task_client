import React from "react";
import Container from "../../../components/Container/Container";
import logo from "../../../assets/logo.png";
import MenuItem from "../../../components/MenuItem/MenuItem";

const Header = () => {
  return (
    <div className="fixed w-full">
      <Container>
        <div className="flex items-center justify-between">
          <div className="flex items-center py-5 gap-10">
            <img src={logo} alt="logo" />
            <MenuItem name={"Solutions"} path={"solutions"} />
            <MenuItem name={"Features"} path={"features"} />
            <MenuItem name={"About"} path={"about"} />
          </div>
          <div className="flex items-center gap-5">
            <button className="border px-6 py-2 rounded-lg border-primary text-primary font-bold hover:bg-primary transition hover:text-white">
              Login
            </button>
            <button className="border px-6 bg-primary py-2 rounded-lg border-primary text-white hover:bg-transparent hover:text-primary transition font-bold">
              Register
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
