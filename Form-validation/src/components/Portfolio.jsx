// src/components/Portfolio.js
import React from "react";

function Portfolio() {
  return (
    <section className="portfolio-section">
      <div className="portfolio-container">
        <h2>My Work</h2>
        <div className="row">
          <div className="col-md-4">
            <div className="card">
              <img
                src="https://via.placeholder.com/350x150"
                className="card-img-top"
                alt="Project 1"
              />
              <div className="card-body">
                <h5 className="card-title">Project 1</h5>
                <p className="card-text">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Nulla gravida velit quis sem vulputate, vitae luctus est
                  ullamcorper.
                </p>
                <a href="#" className="btn btn-primary">
                  View Project
                </a>
              </div>
            </div>
        </div>
        </div>
        </div>
    </section>
  )
}
export default Portfolio