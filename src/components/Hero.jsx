import classes from './Hero.module.css';
import IntroIllustration from '../images/illustration-intro.png';
import Button from './UI/Button';

const Hero = () => {
  return (
    <div className={classes.wrapper}>
      <img
        className={classes.illustration}
        src={IntroIllustration}
        alt='Intro Illustration Image'
      />
      <div className={classes['text-wrapper']}>
        <p className={classes.title}>
          All your files in one secure location, accessible anywhere.
        </p>
        <p className={classes.description}>
          Fylo stores all your most important files in one secure location.
          Access them wherever you need, share and collaborate with friends
          family, and co-workers.
        </p>
        <Button title='Get Started' />
      </div>
    </div>
  );
};

export default Hero;
