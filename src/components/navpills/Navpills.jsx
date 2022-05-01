import { useLogin } from "contexts";
import { Link } from "react-router-dom";
import { signoutUser } from "utils";

export function Navpills() {
  const {isLoggedIn, dispatchUser} = useLogin()
  return (
    <>
      <div className="nav-pills d-flex">
        <ul className="list list-no-bullet children-center">
          {isLoggedIn ? (
            <>
              <Link to="/">
                <i className="fa fas fa-user btn-component btn-title" />
              </Link>
              <Link to="/signup">
                <i
                  className="fa fas fa-sign-out-alt btn-component btn-title"
                  onClick={() => signoutUser(dispatchUser)}
                ></i>
              </Link>
            </>
          ) : (
            <Link to="/signup" className="btn-component btn-title">
              LOGIN
            </Link>
          )}
        </ul>
      </div>
    </>
  );
}
