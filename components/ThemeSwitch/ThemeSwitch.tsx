import { FC, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "store/store";
import { switchTheme } from "store/themeReducer";
import styles from "./ThemeSwitch.module.scss";

const ThemeSwitch: FC = () => {
  const theme = useSelector((state: RootState) => state.theme);
  const dispatch = useDispatch();

  useLayoutEffect(() => {
    const theme = localStorage.getItem("theme");
    if (!theme) localStorage.setItem("theme", "dark");
    document.body.classList.add(theme || "dark");
  }, []);

  return (
    <div className={styles.root}>
      <div className="toggle">
        <label className="switch" htmlFor="changer">
          <input
            onChange={() => dispatch(switchTheme())}
            type="checkbox"
            id="changer"
            checked={theme === "dark"}
          />
          <span className="slider round">
            <small>🌙</small>
            <small>🌞</small>
          </span>
        </label>
      </div>
    </div>
  );
};

export default ThemeSwitch;
