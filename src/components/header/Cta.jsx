import React from "react";
import OACV2021 from "../../assets/omarabdelrahmancv2021.pdf";

const Cta = () => {
  return (
    <div className="cta">
      <a href={OACV2021} download className="btn">
        Download My CV
      </a>
      <a href="#contact"  className="btn btn-primary">
        Lets Talk
      </a>
    </div>
  );
};

export default Cta;
