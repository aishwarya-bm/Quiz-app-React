import { Header } from "components";
import { Link } from "react-router-dom";
import "./question.css";
export function Question() {
  return (
    <>
      <div class="page-container">
        <Header />

        <main class="question-container children-stacked">
          <div class="question-score-info d-flex">
            <h4 class="page-heading text-center">Board Games</h4>
            <div class="question-info children-stacked">
              <div class="question-number">Question 1/5</div>
              <div class="score-current">Score : 0</div>
            </div>
          </div>

          <div class="question-current">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            aspernatur laudantium excepturi velit maiores quia non rem placeat
            ad esse?
          </div>

          <ul class="list-no-bullet question-options-container children-stacked-center text-center">
            <li class="list-item option-item">Option A</li>
            <li class="list-item option-item">Option B</li>
            <li class="list-item option-item">Option C</li>
            <li class="list-item option-item">Option D</li>
          </ul>

          <div class="question-actions d-flex">
            <Link to="/" class="btn btn-error">
              <i class="fa fa-solid fa-arrow-left"></i>&nbsp; Quit game
            </Link>
            <Link to="/quiz" class="btn btn-success">
              Next &nbsp;<i class="fa fa-solid fa-arrow-right"></i>
            </Link>
          </div>
        </main>
      </div>
    </>
  );
}
