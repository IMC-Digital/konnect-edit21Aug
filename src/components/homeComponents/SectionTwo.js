import React from "react";
// import DynamicImage from "../DynamicImage";

const SectionTwo = () => {
  return (
    <div>
      <div className="secTwo d-flex align-items-center">
        <div className="container tsts d-flex justify-content-between ">
          <div className="tst tstOne">
            <img
              // style={{ width: 150, height: 150, borderRadius: 100 / 1 }}
              className="tst-icon"
              src="/project-konnect/images/icons/location.svg"
              alt="test-icon"
            ></img>
            <h2 className="tst-title">Nearest Center</h2>
          </div>

          <div className="tst tstTwo ">
            <img
              className="tst-icon"
              src="/project-konnect/images/icons/Lab.svg"
              alt="test-icon"
            ></img>
            <h2 className="tst-title">Book a Test</h2>
          </div>

          <div className="tst tstThree ">
            <img
              className="tst-icon"
              src="/project-konnect/images/icons/Prescription.svg"
              alt="test-icon"
            ></img>
            <h2 className="tst-title">Upload Prescription</h2>
          </div>

          <div className="tst tstFour ">
            <img
              className="tst-icon"
              src="/project-konnect/images/icons/house.svg"
              alt="test-icon"
            ></img>
            <h2 className="tst-title">Home Collection</h2>
          </div>

          <div className="tst tstFive ">
            <img
              className="tst-icon"
              src="/project-konnect/images/icons/download-report.svg"
              alt="test-icon"
            ></img>
            <h2 className="tst-title">Download Report</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
