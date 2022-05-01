import { Categories, Header } from "components";
import "./home.css";
import banner from "assets/banner1.png";
import { useRef } from "react";

export function Home() {
  const categoryRef = useRef(null);
  const executeScroll = () => categoryRef.current.scrollIntoView();
  return (
    <>
      <div className="page-container">
        <Header />
        <main className="home-main">
          <div className="children-center home-banner grid-gap">
            <img
              className="home-img img-rsp"
              alt="banner"
              src="https://cdn.iconscout.com/icon/premium/png-256-thumb/quiz-1495432-1266290.png"
            />

            <div className="children-stacked-center text-center">
              <div className="banner-caption">
                Want to have fun at&nbsp;
                <span className="banner-title"> QuizGenie</span>?
              </div>
              <div className="banner-caption">
                Take a Quiz and Enjoy learning with Fun
              </div>
              <button
                className="btn btn-primary btn-explore"
                onClick={executeScroll}
              >
                Explore
              </button>
            </div>
          </div>

          <section ref={categoryRef}>
            <Categories />
          </section>
        </main>
      </div>
    </>
  );
}
