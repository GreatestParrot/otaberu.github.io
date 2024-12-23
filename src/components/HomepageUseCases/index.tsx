import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

type UseCaseItem = {
  title: string;
  description: JSX.Element;
  emoji: string;
};

const UseCaseList: UseCaseItem[] = [
  {
    title: 'CI/CD for Robots',
    description: (
      <>
        Seamlessly integrate robots into your CI/CD pipeline with just a few lines of code in your existing build workflows
      </>
    ),
    emoji: '🔄',
  },
  {
    title: 'Device Discovery',
    description: (
      <>
        Enable automatic device discovery and message exchange between robots, eliminating the need for static IPs or manual network scanning
      </>
    ),
    emoji: '🔍',
  },
  {
    title: 'Remote Lab Access',
    description: (
      <>
        Create dynamic access control lists for remote robotics labs, allowing secure access to sensor data and sandboxed program execution
      </>
    ),
    emoji: '🔬',
  },
];

function UseCase({title, description, emoji}: UseCaseItem) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <span className={styles.useCaseEmoji} role="img" aria-label={title}>
          {emoji}
        </span>
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageUseCases(): JSX.Element {
  return (
    <>
      <section className={styles.useCases}>
        <div className="container">
          <div className={styles.useCasesHeader}>
            <Heading as="h2">Use Cases</Heading>
          </div>
          <div className="row">
            {UseCaseList.map((props, idx) => (
              <UseCase key={idx} {...props} />
            ))}
          </div>
        </div>
      </section>
      <hr className="section-divider" />
    </>
  );
} 