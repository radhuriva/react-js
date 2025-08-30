import Logo from "../assets/react.svg";
import { Button } from "./Button";

function Navbar({ name, user, count = 0, btnText }) {
  return (
    <nav className="navbar">
      <img src={Logo} alt="Logo" className="logo" />
      <ul className="nav-links">
        <li>Home</li>
        <li>Contact</li>
        <li>About</li>
        <li>Feedback</li>
        <li>{name}</li>
        <li>{user}</li>
        <li>{count}</li>
      </ul>
      <Button btnText={btnText} />
    </nav>
  );
}

export default Navbar;
