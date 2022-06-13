import React, { Component } from "react";
import "./About.css";
import IMG_6885 from "../assets/IMG_6885.jpg";

export default class About extends Component {
  render() {
    return (
      <div>
        <div>
          <div class="split left">
            <div className="centered">
              <img
                className="profile_image"
                src={IMG_6885}
                alt="Profile Pic"
              ></img>
            </div>
          </div>
          <div className="split right">
            <div className="centered">
              <div className="name_title">Carlos Villa</div>
              <div className="brief_description">
                <div>Hi there and welcome!</div>
                <div>
                  Here's some fun facts:
                  <ul>
                    <li>I'm a rising Sophomore at MIT over in Cambridge</li>
                    <li>I was born in Illinois but my family is from Mexico</li>
                    <li>
                      I'm studying Electrical Engineering and Computer Science
                    </li>
                    <li>
                      Some of my goals include innovating, educating, and
                      bringing communities together!
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
