import React from "react";
import ButtonGroup from "../ButtonGroup/ButtonGroup";
import { resume } from "../resume";
import Fade from "react-reveal/Fade";

const About = () => {
  const btnGrpOptions = {
    names: ["General", "Developer", "Military"],
    color: "--color_primary",
    bgColor: "--color_secondary"
  };

  return (
    <Fade bottom cascade>
      <div className="vh-100 flex items-center justify-center">
        <div className="bg-img-overlay"></div>
        <div className="tc mh4 mh5-l mh4 z-1">
          <h2 className="f1 f-subheadline-l fw2 mv3-l  color_accent">
            A little about me... Hello,
          </h2>
          {/* TODO: Create a decision point selection for the the about me div, one for military one for software engineering. */}
          <div className="center ">
            <div className="cf">
              <p className="general_about_me f7 f5-m f4-l fw3 pb4">
                {resume.description.about.general.full}
              </p>

              <p className="miliary_about_me fw3 dn">
                {resume.description.about.military.full}
              </p>

              <p className="developer_about_me fw3 dn">
                {resume.description.about.developer.full}
              </p>
            </div>
          </div>
          <div className="w-100">
            {/* <ButtonGroup {...btnGrpOptions} className="w-100" /> */}
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
