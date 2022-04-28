import { Navbrand, Navpills } from "components";
import "./header.css";

export function Header() {
  return (
    <>
      <nav className="nav-container d-flex">
        <Navbrand />
        <Navpills />
      </nav>
    </>
  );
}
