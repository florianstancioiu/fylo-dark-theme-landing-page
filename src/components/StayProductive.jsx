import classes from './StayProductive.module.css';
import StayProductiveIllustration from '../images/illustration-stay-productive.png';
import ArrowIcon from '../images/icon-arrow.svg';

const StayProductive = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        <div className={classes['image-wrapper']}>
          <img
            src={StayProductiveIllustration}
            className={classes.image}
            alt='Stay Productive Illustration'
          />
        </div>
        <div className={classes['text-wrapper']}>
          <p className={classes.title}>Stay productive, wherever you are</p>
          <p className={classes.description}>
            Never let location be an issue when accessing your files. Fylo has
            you covered for all of your file storage needs.
          </p>
          <p className={classes.description}>
            Securely share files and folders with friends, family and colleagues
            for live collaboration. No email attachments required.
          </p>
          <a href='#' className={classes['text-btn']}>
            <span>See how Fylo works</span>
            <img src={ArrowIcon} alt='' />
          </a>
        </div>
      </div>
    </div>
  );
};

export default StayProductive;
