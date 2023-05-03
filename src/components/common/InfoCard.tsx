
interface InfoCardProps {
  message: string;
  link?: {
    text: string;
    url: string;
  };
}

export const InfoCard = ({ link, message }: InfoCardProps) => {
  return (
    <div className="infoCard__container">
      <p>
        {message} {link && <a href={link.url}>{link.text}</a>}
      </p>
    </div>
  );
};
