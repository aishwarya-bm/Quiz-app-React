import { Link } from "react-router-dom";
export function Navpills() {
  return (
    <>
      <div className="nav-pills d-flex">
        <ul className="list list-no-bullet children-center">
          <Link to="/signup" className="btn-component btn-title">
            LOGIN
          </Link>

          <>
            <Link to="/">
              <i className="fa fas fa-user btn-component btn-title" />
            </Link>

            <Link to="/signup">
              <i className="fa fas fa-sign-out-alt btn-component btn-title"></i>
            </Link>
          </>
        </ul>
      </div>
    </>
  );
}
