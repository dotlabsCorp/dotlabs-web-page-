import styles from "./InfoCard.module.sass";

interface InfoCardProps {
  message: string;
  link?: {
    text: string;
    url: string;
  };
}

export const InfoCard = ({ link, message }: InfoCardProps) => {
  return (
    <div className={styles.container}>
      <p>
        {message} {link && <a href={link.url}>{link.text}</a>}
      </p>
    </div>
  );
};
