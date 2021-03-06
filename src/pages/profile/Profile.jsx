import { Header } from "components";

export function Profile() {
  return (
    <>
      <Header />

      <section className="text-center not-found">
        <h4>Sorry this page is under construction!</h4>
        <div className="d-flex children-center img-not-found">
          <img
            src="https://cdn.iconscout.com/icon/premium/png-128-thumb/website-builder-3523080-2946947.png"
            alt="page-under-construction"
          />
        </div>
      </section>
    </>
  );
}
