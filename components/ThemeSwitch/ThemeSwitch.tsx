import { FC } from "react";
import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch: FC = () => {
  function handleSwitchTheme() {
    const theme = document.body.className;
    document.body.className = theme === "dark" ? "light" : "dark";
  }

  return (
    <div className={styles.root}>
      <div className="toggle">
        <label className="switch" htmlFor="changer">
          <input onChange={handleSwitchTheme} type="checkbox" id="changer" />
          <span className="slider round">
            <small>🌞</small>
            <small>🌙</small>
          </span>
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitch;
