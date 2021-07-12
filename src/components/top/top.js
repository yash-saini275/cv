import cloud from "../../assets/images/cloud.png";
import mountain from "../../assets/images/mountain.png";

import classes from "./top.module.css";

const Intro = () => {
  return (
    <div className={classes["name-section"]}>
      <img className={classes["top-cloud"]} src={cloud} alt="cloud-img" />
      <h1>I'm Yash.</h1>
      <h2>
        a <span className={classes.pro}>pro</span>grammer.
      </h2>
      <img className={classes["bottom-cloud"]} src={cloud} alt="cloud-img" />
      <img src={mountain} alt="mountain-img" />
    </div>
  );
};

export default Intro;
