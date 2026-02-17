import { Link } from 'react-router-dom';
import styles from './Error502.module.css';

function Error502() {
  return (
    <div
      className={`d-flex flex-column justify-content-center align-items-center text-center ${styles.wrapper}`}
    >
      <div className={styles.card}>
        <div className="d-flex justify-content-between align-items-center mb-3">
          <span className={styles.badge}>
            <span className={styles.statusDot} />
            Temporary service issue
          </span>
          <span className="text-secondary small">Error code: 502</span>
        </div>

        <div className={styles.grid}>
          <div className="text-start">
            <h1 className={styles.headline}>Our servers are having a moment.</h1>
            <p className={styles.description}>
              The page you&apos;re trying to reach is temporarily unavailable. While we fix
              things on our side, you can reach out to us directly and we&apos;ll be happy to
              help.
            </p>
            <div className={styles.pill}>
              We usually resolve these issues in a short time.
            </div>
          </div>

          <div className="text-start">
            <ul className={styles.contactList}>
              <li>
                <div className={styles.label}>Call us</div>
                <div className={styles.value}>
                  <a href="tel:+923091888879">+92 309 188 8879</a>
                </div>
              </li>
              <li>
                <div className={styles.label}>Email</div>
                <div className={styles.value}>
                  <a href="mailto:info@rmaacpk.com">info@rmaacpk.com</a>
                </div>
              </li>
              <li>
                <div className={styles.label}>Visit us</div>
                <div className={styles.value}>
                  Plaza No. 31/32, 1st Floor, Westeria Road, Sector C,
                  <br />
                  DHA 2 Islamabad.
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className={styles.actions}>
          <Link to="/contactpage" className="btn btn-primary">
            Go to Contact Page
          </Link>
          <Link to="/" className={`btn btn-outline-light ${styles.secondaryBtn}`}>
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error502;

