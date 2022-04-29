import { Categories, Header } from "components";
import "./home.css";
import banner from "assets/banner1.png";
import { useRef } from "react";

export function Home() {
  const myRef = useRef(null);
  const executeScroll = () => myRef.current.scrollIntoView();
  return (
    <>
      <div className="page-container">
        <Header />
        <main className="home-main">
          <div className="children-center home-banner grid-gap">
            <img className="home-img" alt="banner" src={banner} />

            <div className="children-stacked-center">
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

          <section ref={myRef}>
            <Categories />
          </section>
        </main>
      </div>
    </>
  );
}
