import styles from './Avatar.module.css';

export function Avatar({
  src,
  alt,
  hasBorder = true,
}: {
  src: string;
  alt: string;
  hasBorder?: boolean;
}) {
  return (
    <img
      className={hasBorder ? styles.avatarWithBorder : styles.avatar}
      src={src}
      alt={alt}
    />
  );
}
