import classes from './Testimonials.module.css';
import Testimonial from './Testimonial';

const testimonials = [
  {
    id: 1,
    description: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`,
    avatar: `/images/profile-1.jpg`,
    name: 'Satish Patel',
    title: 'Founder & CEO, Huddle',
  },
  {
    id: 2,
    description: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`,
    avatar: `/images/profile-2.jpg`,
    name: 'Bruce McKenzie',
    title: 'Founder & CEO, Huddle',
  },
  {
    id: 3,
    description: `Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.`,
    avatar: `/images/profile-3.jpg`,
    name: 'Iva Boyd',
    title: 'Founder & CEO, Huddle',
  },
];

const Testimonials = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        {testimonials.map((testimonial) => (
          <Testimonial
            key={testimonial.id}
            description={testimonial.description}
            avatar={testimonial.avatar}
            name={testimonial.name}
            title={testimonial.title}
          />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
