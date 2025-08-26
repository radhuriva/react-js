import Logo from "../assets/react.svg";

function Navbar() {
  return (
    <div className="nav">
      <div className="logo">
        <img src={Logo} alt="Logo" />
      </div>
      <ul>
        <li>home</li>
        <li>contact</li>
        <li>about</li>
        <li>feetback</li>
      </ul>
    </div>
  );
}

export default Navbar;
