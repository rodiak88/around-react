import siteLogo from "../images/logo_white.svg";

function Header() {
  return (
    <header className="header">
      <img className="logo" src={siteLogo} alt="Around The U.S. logo" />
    </header>
  );
}

export default Header;
