import React from "react";
import Products from "./Products";

export default function Home() {
  return (
    <div className="hero">
      <div className="card bg-dark text-white border-0">
        <img
          src="https://picsum.photos/id/525/550/300"
          className="card-img"
          alt="..."
          height="550px"
        />
        <div className="card-img-overlay d-flex flex-column justify-content-center">
          <div className="container">
            <h5 className="card-title display-3 fw-bolder mb-0">NEW SEASON ARRIVALS</h5>
            <p className="card-text lead fs-2 ">
             CHECK OUT ALL THE TRNDS
            </p>
          </div>
        </div>
      </div>
      <Products/>
    </div>
  );
}
