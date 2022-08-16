import React from "react";
import "w3-css/w3.css";

function HomeHeader() {
  return (
    <div>
      <div class="w3-top">
        <div class="w3-bar w3-black w3-card">
          <a
            class="w3-bar-item w3-button w3-padding-large w3-hide-medium w3-hide-large w3-right"
            href="javascript:void(0)"
            onClick="myFunction()"
            title="Toggle Navigation Menu"
          >
            <i class="fa fa-bars"></i>
          </a>
          <a href="" class="w3-bar-item w3-button w3-padding-large">
            HOME
          </a>
          <a
            href="form"
            class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            REGISTER
          </a>
          <a
            href="tutorial"
            class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            TUTORIAL
          </a>
          <a
            href="admin"
            class="w3-bar-item w3-button w3-padding-large w3-hide-small"
          >
            ADMIN
          </a>
          <div className="w3-dropdown-hover w3-hide-small">
            <button class="w3-padding-large w3-button" title="More">
              MORE <i class="fa fa-caret-down"></i>
            </button>
            <div class="w3-dropdown-content w3-bar-block w3-card-4">
              <a href="#" class="w3-bar-item w3-button">
                Merchandise
              </a>
              <a href="#" class="w3-bar-item w3-button">
                Extras
              </a>
              <a href="#" class="w3-bar-item w3-button">
                Media
              </a>
            </div>
          </div>
          <a
            href="javascript:void(0)"
            class="w3-padding-large w3-hover-red w3-hide-small w3-right"
          >
            <i class="fa fa-search"></i>
          </a>
        </div>
      </div>

      {/* <!-- The Band Section --> */}
      <div
        className="w3-container w3-content w3-center w3-padding-64"
        id="band"
      >
        <h2 class="w3-wide">Online Coding Camp</h2>
        <p class="w3-opacity">
          <i>We love coding</i>
        </p>
        <p class="w3-justify">
          Software Engineering Bootcamp: Become a Software Engineer. Guaranteed.
        </p>
        <p class="w3-justify">
          Learn Coding Through Hands-On Development Simulate a professional work
          environment by teaming up with your peers on real-world projects and
          build complex applications that will bolster your professional
          portfolio. Get access to continuation courses that cover additional
          in-demand technologies, including Python, Java, C#, and Amazon Web
          Services. Gain an edge in the field through our wide-ranging career
          services such as technical interview preparation, resume and social
          media support, portfolio reviews, job matching, soft skills training,
          and more.
        </p>
        <div className="w3-row w3-padding-32">
          <div className="w3-third">
            <p>Choose language</p>
            <img
              src="https://image.shutterstock.com/image-illustration/machine-code-languages-on-blue-260nw-1680857539.jpg"
              class="w3-round w3-margin-bottom"
              alt="Random Name"
              style={{ width: "60%" }}
            />
          </div>
          <div className="w3-third">
            <p>Hands on training</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-_N9hNBiknE2aVXQFFJ0XwcMj5oWcYB59Q&usqp=CAU"
              class="w3-round w3-margin-bottom"
              alt="Random Name"
              style={{ width: "80%" }}
            />
          </div>
          <div className="w3-third">
            <p>Land an offer</p>
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7qkatp7U-oQl_jrQPzvC7_Y7aY_VkGFZtQ&usqp=CAU"
              class="w3-round"
              alt="Random Name"
              style={{ width: "60%" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomeHeader;
