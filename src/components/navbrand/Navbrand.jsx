import { Link } from "react-router-dom";
import "./navbrand.css";

export function Navbrand() {
  return (
    <>
      <div className="nav-brand">
        <Link to="/">
          <div className="nav-title d-flex children-center">QuizGenie</div>
        </Link>
      </div>
    </>
  );
}
