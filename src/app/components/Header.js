import React from "react";

export class Header extends React.Component {
  render() {
    return (
      <nav>
        <ul>
          <li className="active">
            <a href="#" className="icon">
              <i aria-hidden="true" className="fa fa-plus-square"> </i>
            </a>
          </li>
          <li>
            <a href="#" className="icon">
              <i aria-hidden="true" className="fa fa-search"></i>
            </a>
          </li>
          <li>
            <a href="#" className="icon">
              <i aria-hidden="true" className="fa fa-lightbulb-o"></i>
            </a>
          </li>
          <li className="user">
            <a href="#" className="icon">
              <i aria-hidden="true" className="fa fa-user-circle-o"></i>
            </a>
          </li>
        </ul>
      </nav>
    );
  }
}
