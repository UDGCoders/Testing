import { Link } from 'react-router-dom';
import styles from './NotFound.module.css';

function NotFound() {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center text-center ${styles.wrapper}`}
    >
      <h1 className="display-4 fw-bold">404</h1>
      <p className="lead mb-4">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <Link to="/" className="btn btn-primary">
        Go back to Home
      </Link>
      <div className={styles.track}>
        <div className={styles.backgroundStrip} />
        <div className={styles.rabbit}>
          <div className={styles.rabbitBody}>
            🐇
          </div>
        </div>
        <div className={styles.ground} />
      </div>
    </div>
  );
}

export default NotFound;

