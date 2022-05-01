import { Header } from "components";
import { Link } from "react-router-dom";

export function Error() {
  return (
    <>
    <Header/>
      <section className="text-center not-found">
        <h4>Sorry this page is not found!</h4>
        <div className="d-flex children-center">
          <img
            src="https://cdn.iconscout.com/icon/free/png-256/404-page-not-found-456876.png"
            alt="error-404"
          />
        </div>
        <Link to="/" className="fa fa-solid btn btn-primary">
          Go back to home
        </Link>
      </section>
    </>
  );
}
