import { Header } from "components";
import { Link } from "react-router-dom";
import "./category-level.css";
export function CategoryLevel() {
  return (
    <>
      <Header />
      <div className="children-stacked-center category-level-container">
        <h4>Select a level</h4>
        <div className="category-level children-center grid-gap">
          <Link to="/quiz/1234" className="card children-stacked">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-128-thumb/one-star-3394408-2823738.png"
              alt="easy-level"
            />
            <div className="card-label text-center">Easy</div>
          </Link>
          <Link to="/quiz/1234" className="card children-stacked">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-128-thumb/two-star-3394413-2823743.png"
              alt="medium-level"
            />
            <div className="card-label text-center">Medium</div>
          </Link>
          <Link to="/quiz/1234" className="card children-stacked">
            <img
              src="https://cdn.iconscout.com/icon/premium/png-128-thumb/three-star-3394410-2823740.png"
              alt="hard-level"
            />
            <div className="card-label text-center">Difficult</div>
          </Link>
        </div>
      </div>
    </>
  );
}
