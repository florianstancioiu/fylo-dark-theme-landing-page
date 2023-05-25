import classes from './Feature.module.css';

const Feature = ({ image, title, description }) => {
  return (
    <div className={classes.wrapper}>
      <img src={image} className={classes.image} alt={title} />
      <div className={classes['text-wrapper']}>
        <p className={classes.title}>{title}</p>
        <p className={classes.description}>{description}</p>
      </div>
    </div>
  );
};

export default Feature;
