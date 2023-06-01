import classes from './Testimonial.module.css';

const Testimonial = ({ description, avatar, name, title }) => {
  return (
    <div className={classes.wrapper}>
      <p className={classes.text}>{description}</p>
      <div className={classes['avatar-wrapper']}>
        <div className={classes['image-wrapper']}>
          <img src={avatar} className={classes.image} alt={name} />
        </div>
        <div className={classes['name-and-title']}>
          <p className={classes.name}>{name}</p>
          <p className={classes.title}>{title}</p>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
