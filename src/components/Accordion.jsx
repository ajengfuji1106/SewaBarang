import { useMemo } from "react";
import "./Accordion.css";

const Accordion = ({
  pertanyaanYangSeringMuncu,
  vector205,
  loremIpsumDolorSitAmetCon,
  propMinWidth,
}) => {
  const pertanyaanYangSeringStyle = useMemo(() => {
    return {
      minWidth: propMinWidth,
    };
  }, [propMinWidth]);

  return (
    <div className="accordion">
      <div className="heading">
        <b className="pertanyaan-yang-sering" style={pertanyaanYangSeringStyle}>
          {pertanyaanYangSeringMuncu}
        </b>
        <div className="icon-container">
          <div className="icon-container-child" />
          <img className="icon-container-item" alt="" src={vector205} />
        </div>
      </div>
      <div className="lorem-ipsum-dolor">{loremIpsumDolorSitAmetCon}</div>
    </div>
  );
};

export default Accordion;
