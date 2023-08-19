import classes from './Footer.module.css';
import LogoImg from '../images/logo.svg';
import LocationIcon from '../images/icon-location.svg';
import PhoneIcon from '../images/icon-phone.svg';
import EmailIcon from '../images/icon-email.svg';
import FacebookSocialIcon from '../images/social-icon-facebook.png';
import TwitterSocialIcon from '../images/social-icon-twitter.png';
import InstagramSocialIcon from '../images/social-icon-instagram.png';

const Footer = () => {
  return (
    <div className={classes.wrapper}>
      <a href='#' className={classes['logo-wrapper']}>
        <img
          className={classes.logo}
          src={LogoImg}
          alt='Fylo Dark Theme Landing Page Footer Logo'
        />
      </a>
      <div className={classes.section}>
        <div className={classes['list-item']}>
          <img
            src={LocationIcon}
            alt=''
            className={classes['list-item-icon']}
          />
          <p className={classes['list-item-text']}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua
          </p>
        </div>
        <div className={classes['list-item']}>
          <img src={PhoneIcon} alt='' className={classes['list-item-icon']} />
          <p className={classes['list-item-text']}>+1-543-123-4567</p>
        </div>
        <div className={classes['list-item']}>
          <img src={EmailIcon} alt='' className={classes['list-item-icon']} />
          <p className={classes['list-item-text']}>example@fylo.com</p>
        </div>
      </div>
      <div className={classes.section}>
        <a href='#' className={classes['footer-link']}>
          About Us
        </a>
        <a href='#' className={classes['footer-link']}>
          Jobs
        </a>
        <a href='#' className={classes['footer-link']}>
          Press
        </a>
        <a href='#' className={classes['footer-link']}>
          Blog
        </a>
      </div>
      <div className={classes.section}>
        <a href='#' className={classes['footer-link']}>
          Contact Us
        </a>
        <a href='#' className={classes['footer-link']}>
          Terms
        </a>
        <a href='#' className={classes['footer-link']}>
          Privacy
        </a>
      </div>
      <div className={classes['social-links']}>
        <a href='#' className={classes['social-link']}>
          <img src={FacebookSocialIcon} alt='' />
        </a>
        <a href='#' className={classes['social-link']}>
          <img src={TwitterSocialIcon} alt='' />
        </a>
        <a href='#' className={classes['social-link']}>
          <img src={InstagramSocialIcon} alt='' />
        </a>
      </div>
    </div>
  );
};

export default Footer;
