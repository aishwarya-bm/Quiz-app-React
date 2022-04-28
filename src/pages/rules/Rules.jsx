import { Header } from "components";
import { Link } from "react-router-dom";
import "./rules.css";

export function Rules() {
  return (
    <>
      <Header />
      <h4 class="text-center page-heading">Rules for the game</h4>
      <div class="rules-container">
        <ul class="list-numbered rules-list">
          <li class="list-item">Each level has 5 questions.</li>
          <li class="list-item">No points are deducted for wrong answers.</li>
          <li class="list-item">You get 30 seconds to answer each question.</li>
          <li class="list-item">Quitting the game will give you 0 score.</li>
          <li class="list-item">
            Point system
            <ul class="rules-list">
              <li class="list-item">
                Level EASY - 10 points for each question
              </li>
              <li class="list-item">
                Level MEDIUM - 15 points for each question
              </li>
              <li class="list-item">
                Level HARD - 20 points for each question
              </li>
            </ul>
          </li>
        </ul>
        <div class="d-flex rules-btn">
          <Link to="/" class="btn btn-error">
            <i class="fa fa-solid fa-arrow-left"></i>&nbsp; Go back
          </Link>
          <Link to="/quiz" class="btn btn-success">
            Start quiz &nbsp;<i class="fa fa-solid fa-arrow-right"></i>
          </Link>
        </div>
      </div>
    </>
  );
}
