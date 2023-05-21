import { IoLocationSharp, IoCalendarOutline } from "react-icons/io5";
import { FiExternalLink } from "react-icons/fi";
import { Workshop } from "@/data/workshops";
import { motion } from "framer-motion";

type WordShopCardTheme = "colorful" | "dark";

interface WorkshopCardProps extends Workshop {
  theme?: WordShopCardTheme;
}

export const WorkshopCard = ({
  title,
  date,
  speakers,
  tags,
  description,
  location,
  theme = "colorful",
}: WorkshopCardProps) => {
  const DateEl = () => {
    if (date.text === "") return null;
    return (
      <a
        href={date.url}
        className="card__metadata__location__link"
        rel="noreferrer"
        target="_blank"
      >
        <IoCalendarOutline />
        <p>
          {new Intl.DateTimeFormat("es", { dateStyle: "long" }).format(
            new Date(date.text)
          )}
        </p>
      </a>
    );
  };

  const Location = () => {
    return (
      <>
        {location.url ? (
          <a
            href={location.url}
            className="card__metadata__location__link"
            rel="noreferrer"
            target="_blank"
          >
            <IoLocationSharp />
            {location.text === "" ? "Lugar por definir..." : location.text}
          </a>
        ) : null}
      </>
    );
  };

  const themeToClassNameMap = {
    cardMetadata: {
      colorful: "card--colorful",
      dark: "card--dark",
    },
    cardLocationMetadata: {
      colorful: "card__metadata__location--colorful",
      dark: "card__metadata__location--dark",
    },
  };
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      className={`card ${themeToClassNameMap["cardMetadata"][theme]}`}
    >
      <div className="card__metadata">
        <div className="card__metadata__title">
          <h1>{title}</h1>
          <p> -&gt; {speakers.join(" & ")}</p>
        </div>
        <div>
          <div
            className={`card__metadata__location ${themeToClassNameMap["cardLocationMetadata"][theme]}`}
          >
            <DateEl />
            <Location />
          </div>
        </div>
        <div className="card__metadata__description">
          <p>{description}</p>
          <p>{tags.join(", ")}</p>
        </div>
      </div>
    </motion.div>
  );
};
