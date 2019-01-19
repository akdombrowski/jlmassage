import React, { Component } from "react";
import logo from "./images/backpain.png";
import bg from "./images/bg.jpg";
import "./App.css";
require("bootstrap");

class App extends Component {
  render() {
    return (
      <div class="container-fluid">
        <div class="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
          <h5 class="my-0 mr-md-auto font-weight-normal">
            Jessica Leavens' Massage
          </h5>
          <nav class="my-2 my-md-0 mr-md-3">
            <a class="p-2 text-dark" href="#">
              Location
            </a>
            <a class="p-2 text-dark" href="#">
              Pricing
            </a>
            <a class="p-2 text-dark" href="#">
              Contact
            </a>
          </nav>
          <a class="btn btn-outline-primary" href="#">
            Sign up
          </a>
        </div>

        <div class="pricing-header px-3 py-3 pt-md-5 pb-md-4 mx-auto text-center">
          <h1 class="display-4">Pricing</h1>
          <p class="lead">
            Commonly referred to as a "knot", triggerpoints are small
            contractions within the muscle fibers that cause tenderness and
            chronic discomfort. They usually appear in the neck, shoulders, and
            back due to occupational/physical stress on the body or
            mental/emotional stress. Releasing these points of muscular tension
            can lead to the elimination of padding and helps to maintain a
            healthy and comfortable lifestyle.
          </p>
        </div>

        <div class="container mh-50 mw-50">
          <div class="card-deck mb-3 text-center">
            <div class="card mb-4 shadow-sm">
              <img
                src={logo}
                class="car-img-top logo-img img-fluid max-width-10"
                alt="logo"
              />
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">
                  Jessica Leavens' (LMT) Massage
                </h4>
              </div>
              <div class="card-body">
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary"
                >
                  Contact Jessica.
                </button>
              </div>
            </div>
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Free</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  60 <small class="text-muted"> min</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>10 users included</li>
                  <li>2 GB of storage</li>
                  <li>Email support</li>
                  <li>Help center access</li>
                </ul>
                <button
                  type="button"
                  class="btn btn-lg btn-block btn-outline-primary"
                >
                  Sign up for free
                </button>
              </div>
            </div>
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Pro</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  90 <small class="text-muted">min</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>20 users included</li>
                  <li>10 GB of storage</li>
                  <li>Priority email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Get started
                </button>
              </div>
            </div>
            <div class="card mb-4 shadow-sm">
              <div class="card-header">
                <h4 class="my-0 font-weight-normal">Enterprise</h4>
              </div>
              <div class="card-body">
                <h1 class="card-title pricing-card-title">
                  120 <small class="text-muted">min</small>
                </h1>
                <ul class="list-unstyled mt-3 mb-4">
                  <li>30 users included</li>
                  <li>15 GB of storage</li>
                  <li>Phone and email support</li>
                  <li>Help center access</li>
                </ul>
                <button type="button" class="btn btn-lg btn-block btn-primary">
                  Contact us
                </button>
              </div>
            </div>
          </div>

          <footer class="pt-4 my-md-5 pt-md-5 border-top">
            <div class="row">
              <div class="col">
                <div>
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d859.3578812485646!2d-97.78626057083538!3d30.508834754287427!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x865b2d33503c62c1%3A0x89deef894eb80664!2s1003+Adventure+Ln%2C+Cedar+Park%2C+TX+78613!5e0!3m2!1sen!2sus!4v1547916569877"
                    width="400"
                    height="300"
                    frameborder="0"
                    style={{ border: "0" }}
                    allowfullscreen
                  />
                </div>
                <small class="d-block mb-3 text-muted">&copy; 2017-2018</small>
              </div>
              <div class="col">
                <h5>Features</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="text-muted" href="#">
                      Cool stuff
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Random feature
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Team feature
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Stuff for developers
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Another one
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Last time
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <h5>Resources</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="text-muted" href="#">
                      Resource
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Resource name
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Another resource
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Final resource
                    </a>
                  </li>
                </ul>
              </div>
              <div class="col">
                <h5>About</h5>
                <ul class="list-unstyled text-small">
                  <li>
                    <a class="text-muted" href="#">
                      Team
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Locations
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Privacy
                    </a>
                  </li>
                  <li>
                    <a class="text-muted" href="#">
                      Terms
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </footer>
        </div>
        <div class="container" />
      </div>
    );
  }
}

export default App;
