import { Link } from 'react-router-dom';

const NotFoundPage: React.FC = () => {
  return (
    <div style={styles.container}>
      <h1 style={styles.title}>404</h1>
      <p style={styles.message}>Oops! Page is not found.</p>
      <Link to="/" style={styles.link}>Go back to main page</Link>
    </div>
  );
};

const styles: {[key: string]: React.CSSProperties} = {
  container: {
    textAlign: 'center',
    padding: '50px',
  },
  title: {
    fontSize: '6rem',
    color: '#e74c3c',
  },
  message: {
    fontSize: '1.5rem',
    marginBottom: '20px',
  },
  link: {
    fontSize: '1.2rem',
    textDecoration: 'none',
    color: '#3498db',
  },
};

export default NotFoundPage;

