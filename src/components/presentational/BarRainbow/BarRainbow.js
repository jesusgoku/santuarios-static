import styles from './BarRainbow.module.css';

function BarRainbow({ height = '15px', ...props }) {
  return (
    <div className={styles.BarRainbow} style={{ height }} {...props}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
}

export default BarRainbow;
