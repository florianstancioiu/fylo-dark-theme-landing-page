import classes from './Header.module.css';
import LogoImg from '../images/logo.svg';

const Header = () => {
  return (
    <header className={classes.header}>
      <div className={classes.wrapper}>
        <img
          src={LogoImg}
          alt='Fylo dark theme landing page logo'
          className={classes.logo}
        />
        <div className={classes.menu}>
          <a href='#' className={classes['menu-item']}>
            Features
          </a>
          <a href='#' className={classes['menu-item']}>
            Team
          </a>
          <a href='#' className={classes['menu-item']}>
            Sign In
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
