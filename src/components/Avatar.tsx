import styles from './Avatar.module.css';

export function Avatar({
  hasBorder = true,
  ...rest
}: {
  hasBorder?: boolean;
} & React.ImgHTMLAttributes<HTMLImageElement>) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      {...rest}
    />
  );
}
