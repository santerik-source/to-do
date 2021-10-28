import React from "react";
import { Link, withRouter } from "react-router-dom";

// this whole part fixes in the navigation between tabs and the names of the tabs

function Navigation(props) {
  return (
    <div className="navigation">
      <nav class="navbar navbar-expand navbar-dark bg-dark">
        <div class="container">
          <Link class="navbar-brand" to="/todos">
            Frontend react assignment 
          </Link>

          <div>
            <ul class="navbar-nav ml-auto">
              <li
                class={`nav-item  ${
                  props.location.pathname === "/todos" ? "active" : ""
                }`}
              >

                <Link class="nav-link" to="/todos">
                 To-Do List
                  <span class="sr-only">(current)</span>
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/completedtodos" ? "active" : ""
                }`}
              >

                <Link class="nav-link" to="/completedtodos">
                  Completed To-do's
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/contact" ? "active" : ""
                }`}
              >

                <Link class="nav-link" to="/contact">
                  Contact Information
                </Link>
              </li>
              <li
                class={`nav-item  ${
                  props.location.pathname === "/info" ? "active" : ""
                }`}
              >

                <Link class="nav-link" to="/info">
                  Information page
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default withRouter(Navigation);