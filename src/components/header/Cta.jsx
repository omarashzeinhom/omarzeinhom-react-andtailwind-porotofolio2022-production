import React from "react";
import OACV2022 from "../../assets/omarabdelrahmancv2022.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={OACV2022} download className="btn">
        Download My CV
      </a>
      <a href="#contact"  className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default Cta;
