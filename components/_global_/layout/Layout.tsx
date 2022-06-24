import Link from "next/link";
import { FC, ReactNode } from "react";
import styles from "./Layout.module.scss";

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className={styles.root}>
      <div className={styles.content}>
        <header>
          <h1>
            <Link href="/">
              <a title="Home">Coolreacted</a>
            </Link>
          </h1>
          <div>Toggle theme</div>
        </header>

        <main>{children}</main>

        <footer>Cloned by Moein Alizadeh for RV.</footer>
      </div>
    </div>
  );
};

export default Layout;
