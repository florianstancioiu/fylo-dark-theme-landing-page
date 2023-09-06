import classes from './Features.module.css';
import Feature from './Feature';

const features = [
  {
    id: 1,
    image: '/images/icon-access-anywhere.svg',
    title: 'Access your files, anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    id: 2,
    image: '/images/icon-security.svg',
    title: 'Security you can trust',
    description:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    id: 3,
    image: '/images/icon-collaboration.svg',
    title: 'Real-time collaboration',
    description:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    id: 4,
    image: '/images/icon-any-file.svg',
    title: 'Store any type of file',
    description:
      "Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.",
  },
];

const Features = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes['inner-wrapper']}>
        {features.map((feature) => (
          <Feature
            key={feature.id}
            image={feature.image}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </div>
    </div>
  );
};

export default Features;
