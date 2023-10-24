import classes from './Features.module.css';
import Feature from './Feature';

import AccessAnywhereIcon from '../images/icon-access-anywhere.svg';
import SecurityIcon from '../images/icon-security.svg';
import CollaborationIcon from '../images/icon-collaboration.svg';
import AnyFileIcon from '../images/icon-any-file.svg';

const features = [
  {
    id: 1,
    image: AccessAnywhereIcon,
    title: 'Access your files, anywhere',
    description:
      'The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.',
  },
  {
    id: 2,
    image: SecurityIcon,
    title: 'Security you can trust',
    description:
      '2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.',
  },
  {
    id: 3,
    image: CollaborationIcon,
    title: 'Real-time collaboration',
    description:
      'Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.',
  },
  {
    id: 4,
    image: AnyFileIcon,
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
