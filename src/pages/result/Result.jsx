import { Header } from "components";
import { Link } from "react-router-dom";
import "./result.css";
export function Result() {
  return (
    <>
      <Header />

      <main class="question-container children-stacked">
        <h3 class="page-heading text-center">Board Games - You score 30/50 </h3>
        <ul class="list-numbered ">
          <li>
            <div class="question-current">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
              aspernatur laudantium excepturi velit maiores quia non rem placeat
              ad esse?
            </div>

            <ul class="list-no-bullet question-options-container  children-stacked-center text-center">
              <li class="list-item option-item option-correct">Option A</li>
              <li class="list-item option-item">Option B</li>
              <li class="list-item option-item">Option C</li>
              <li class="list-item option-item">Option D</li>
            </ul>
          </li>
        </ul>

        <Link to="/" class="btn btn-playmore">
          Play more
        </Link>
      </main>
    </>
  );
}
