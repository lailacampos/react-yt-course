import styles from './Button.module.css';

function Button() {
  return(
    <button className={styles.button} style={localStyles}>Click me!</button>
  );
}

export default Button;

const localStyles = {
  // backgroundColor: '#646cff'
};