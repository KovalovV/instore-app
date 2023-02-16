import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

import { selectUser } from "store/user/selectors";

import { routes } from "constants/routes";

import { Icon } from "components/common/icon";
import { Button } from "components/ui/button";

import styles from "./navbar.module.scss";

export const Navbar = () => {
  const { isAuthenticated } = useSelector(selectUser);
  const navigate = useNavigate();

  return (
    <div className="root-container">
      <nav className={styles.root}>
        <Link to={routes.home}>
          <Icon name="logo" className={styles.logo} />
        </Link>
        <div className={styles.actions}>
          <Button
            size="medium"
            variant="alpha"
            color="orange"
            fullWidth={false}
            onClick={() => {
              navigate(routes.cart);
            }}
          >
            <Icon name="cart-felled" />
            Cart
          </Button>
          {isAuthenticated ? (
            <Button
              size="medium"
              fullWidth={false}
              onClick={() => {
                navigate(routes.profile);
              }}
            >
              Profile
            </Button>
          ) : (
            <Button
              size="medium"
              fullWidth={false}
              onClick={() => {
                navigate(routes.login);
              }}
            >
              Log In/Sign Up
            </Button>
          )}
        </div>
      </nav>
    </div>
  );
};
