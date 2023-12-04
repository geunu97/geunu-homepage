import styles from '@/styles/horizontalDivider.module.css';

interface HorizontalDividerProps {
  color?: string;
}

const HorizontalDivider = ({ color = 'lightgray' }: HorizontalDividerProps) => {
  const style = {
    borderBottom: `0.1px solid ${color}`,
  };

  return <div className={styles.horizontalDivider} style={style} />;
};

export default HorizontalDivider;
