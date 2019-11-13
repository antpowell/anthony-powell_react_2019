import React from "react";
import "./experience.css";

const Experience = props => {
  const { title, company, date, description } = props;

  const accomplishmentList = description.accomplishments.map(
    (accomplishment, index) => {
      return <p>{description.accomplishments[index]}</p>;
    }
  );

  return (
    <>
      <div>
        <h3 className="f3 fw5">
          {title}
          <div className="company_details color_accent">
            <div className="company i b fw2">
              {company.name} {date.start} - {date.end} |
              <div>{company.location}</div>
            </div>
            <p className="company_description f6"></p>
          </div>
        </h3>
        <div className="f4 accomplishments fw3">
          <p>{description.summary}</p>
          {accomplishmentList}
        </div>
      </div>
    </>
  );
};

export default Experience;
