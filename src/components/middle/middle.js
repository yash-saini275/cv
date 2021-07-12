import classes from "./middle.module.css";
import computer from "../../assets/images/computer.png";
import shopping from "../../assets/images/shopping.png";
import quotes from "../../assets/images/quotes.png";
import profile from "../../assets/images/profile.png";

const Middle = () => {
  return (
    <div className={classes["middle-container"]}>
      <div className={classes.profile}>
        <img className="" src={profile} alt="" />
        <h2>Hello</h2>
        <p class={classes.intro}>
          I am a MERN stack developer with 2 years of experience in Web App
          development.
        </p>
      </div>
      <hr />
      <div className={classes.skills}>
        <h2>My Skills.</h2>
        <div className={classes["skill-row"]}>
          <img className={classes["code-image"]} src={computer} alt="" />
          <h3>Design & Development</h3>
          <p>
            I started learning to code with I was 17 years old because I wanted
            to develop my own video games. Over time, I have gained experience
            designing and developing mobile and web applications.
          </p>
        </div>
      </div>
      <hr />
      <div className={classes.skills}>
        <h2>My Work.</h2>
        <div className={classes["skill-row"]}>
          <img className={classes["code-image"]} src={shopping} alt="" />
          <h3>
            Shopping |
            <a
              href="https://yash-saini275.github.io/shopping/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </h3>
          <p>
            An E-Commerce shopping application where you can add items to cart
            and review your cart to view the products.
          </p>
        </div>
        <div className={classes["skill-row"]}>
          <img className={classes["chilli-image"]} src={quotes} alt="" />
          <h3>
            Great Quotes |
            <a
              href="https://yash-saini275.github.io/quotes"
              target="_blank"
              rel="noopener noreferrer"
            >
              Link
            </a>
          </h3>
          <p>
            A social media application where you can add quotes and can comment
            on someone else's quotes as well.
          </p>
        </div>
      </div>
      <hr />
      <div className={classes["contact-me"]}>
        <a className={classes.btn} href="mailto:yash.saini375@gmail.com">
          Get In Touch
        </a>
      </div>
    </div>
  );
};

export default Middle;
