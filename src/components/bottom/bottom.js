import classes from "./bottom.module.css";

const Bottom = () => {
  return (
    <div className={classes["bottom-container"]}>
      <a
        className={classes["footer-link"]}
        href="https://www.linkedin.com/in/infernomarvelous/"
      >
        LinkedIn
      </a>
      <a
        className={classes["footer-link"]}
        href="https://twitter.com/infernoMarvelo"
      >
        Twitter
      </a>
      <p class={classes.copywrite}>© 2021 Yash Saini.</p>
    </div>
  );
};

export default Bottom;
