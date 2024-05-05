import { Link } from "react-router-dom";
import * as styles from "./Logo.module.css";

function Logo() {
  return (
    <Link to="/">
      <img src="/public/logo.png" alt="WorldWise logo" className={styles.logo} />
    </Link>
  );
}

export default Logo;
