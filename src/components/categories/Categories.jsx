import { Link } from "react-router-dom";
import "./categories.css";

export function Categories() {
  const categories = [];
  return (
    <>
      <div>
        <div className="d-flex categories-home">
          <h5 className="categories-home-heading">Choose a catyegory</h5>
        </div>

        <div className="d-grid">
          <ul className="category-container d-grid list-no-bullet">
            {categories &&
              categories?.map(
                ({ _id, categoryName, categoryImg, categoryTitle }) => {
                  return (
                    <li key={_id}>
                      <div className="card children-stacked" onClick={() => {}}>
                        <Link to={`/explore/${categoryName}`}>
                          <img
                            className="card-media"
                            src={categoryImg}
                            alt="card-img"
                          />
                        </Link>

                        <Link
                          to={`/explore/${categoryName}`}
                          className="btn btn-link card-btn text-center"
                        >
                          {categoryTitle}
                        </Link>
                      </div>
                    </li>
                  );
                }
              )}
          </ul>
        </div>
      </div>
    </>
  );
}
