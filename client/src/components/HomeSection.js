import React from "react";
import "w3-css/w3.css";

function HomeSection() {
  return (
    <div className="w3-container w3-content w3-center w3-padding-64" id="band">
      <h2 className="w3-wide">Online Coding Camp</h2>
      <p className="w3-opacity">
        <i>We love coding</i>
      </p>
      <p className="w3-justify">
        Software Engineering Bootcamp: Become a Software Engineer. Guaranteed.
      </p>
      <p className="w3-justify">
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
            className="w3-round w3-margin-bottom"
            alt="Random Name"
            style={{ width: "60%" }}
          />
        </div>
        <div className="w3-third">
          <p>Hands on training</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTu-_N9hNBiknE2aVXQFFJ0XwcMj5oWcYB59Q&usqp=CAU"
            className="w3-round w3-margin-bottom"
            alt="Random Name"
            style={{ width: "80%" }}
          />
        </div>
        <div className="w3-third">
          <p>Land an offer</p>
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQn7qkatp7U-oQl_jrQPzvC7_Y7aY_VkGFZtQ&usqp=CAU"
            className="w3-round"
            alt="Random Name"
            style={{ width: "60%" }}
          />
        </div>
      </div>
    </div>
  );
}

export default HomeSection;
