import { Header } from "components";
import "./home.css";

export function Home() {
  return (
    <>
      <div className="page-container">
        <Header />
        <main>
          <h4 className="page-heading text-center">Choose a category</h4>
          <ul className="category-container list-no-bullet">
            <li className="list-item category-item">
              <div></div>
            </li>
          </ul>
        </main>
      </div>
    </>
  );
}
