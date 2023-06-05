import classes from './EarlyAccess.module.css';
import Button from './UI/Button';

const EarlyAccess = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        <div className={classes['text-wrapper']}>
          <p className={classes.title}>Get early access today</p>
          <p className={classes.description}>
            It only takes a minute to sign up and our free starter tier is
            extremely generous. If you have any questions, our support team
            would be happy to help you.
          </p>
        </div>
        <div className={classes['input-wrapper']}>
          <input
            type='text'
            className={classes.input}
            placeholder='email@example.com'
          />
          <Button title='Get Started For Free' />
        </div>
      </div>
    </div>
  );
};

export default EarlyAccess;
