import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./categories.css";
import { Toast } from "components";
import axios from "axios";

export function Categories() {
  const [categories, setCategories] = useState([]);
  const getCategories = async () => {
    try {
      const { data } = await axios.get("/api/categories");
      setCategories(() => data.categories);
    } catch (e) {
      console.log(e);
      Toast({
        message: "Some error occured, please try again later",
        type: "error",
      });
    }
  };
  useEffect(() => getCategories(), []);
  return (
    <>
      <div>
        <div className="d-grid">
          <h4 className="page-heading text-center">Categories</h4>
          <ul className="category-container d-grid list-no-bullet">
            {categories &&
              categories?.map(({ _id, categoryName, categoryImg }) => {
                return (
                  <li key={_id}>
                    <div className="card children-stacked">
                      <Link to={`/category/${_id}`}>
                        <img
                          className="card-media"
                          src={categoryImg}
                          alt="card-img"
                        />
                      </Link>

                      <div className="card-action">
                        <Link
                          to={`/category/${_id}`}
                          style={{ color: "white" }}
                          className="btn-component btn-title card-btn text-center"
                        >
                          {categoryName}
                        </Link>
                        <button
                          className="fa fa-share-alt btn btn-link card-btn"
                          aria-hidden="true"
                        ></button>
                      </div>
                    </div>
                  </li>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
}
