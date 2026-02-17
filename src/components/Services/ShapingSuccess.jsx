import React from "react";
import PrimaryText from "../PrimaryText";
import PillarCards from "../Cards/PillarCards";
import BigTitle from "../BigTitle";
import SmallTitle from "../SmallTitle";

const ShapingSuccess = () => {
  return (
    <>
      <div className="container my-5">
        <div className="row justify-content-center">
          <div className="col-lg-8 text-center mb-5">
            <div className="text-center d-flex justify-content-center gap-3">
            <BigTitle bigTitle="SHAPE YOUR" />
            <SmallTitle smallTitle="Future" />
            </div>
            <div className="mt-3 mx-auto w-75">
              <PrimaryText primaryText="We aim to build more than just projects; we build opportunities, trust, and long-term success for our clients." />
            </div>
          </div>
        </div>
        <div className="bg-black text-white p-5 rounded-4">
          <div className="row g-4">
            <div className="col-md-4">
              <PillarCards
                pillarHeading=".Excellence"
                pillarDescription="We strive to exceed expectations by combining expertise, innovation, and attention"
              />
            </div>
            <div className="col-md-4 border-end border-start border-0 border-md-1 border-secondary ">
              <PillarCards
                pillarHeading=".Partnerships"
                pillarDescription="Our goal is to build trusted relationships with clients by delivering consistent value"
              />
            </div>
            <div className="col-md-4">
              <PillarCards
                pillarHeading=".Growth"
                pillarDescription="We focus on solutions that will create a solid foundation for future success"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ShapingSuccess;
