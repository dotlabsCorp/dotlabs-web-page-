import { workshops } from "@/data/workshops";
import { BackToHomeButton } from "../buttons/BackToHomeButton";
import { WorkshopCard } from "./WorkshopCard";
import { motion } from "framer-motion";

export const WorkshopsList = () => {
  const today = new Date();
  const upcomingWorkshops = workshops.filter(
    (w) => new Date(w.date.text) > today
  );

  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    className="workshopList">
      <BackToHomeButton />
      {upcomingWorkshops.map((w, i) => {
        return (
          <WorkshopCard
            title={w.title}
            date={w.date}
            tags={w.tags}
            speakers={w.speakers}
            description={w.description}
            key={`${i}_${w.title}`}
            location={w.location}
            theme={"dark"}
            imgUrl={""}
          />
        );
      })}
    </motion.div>
  );
};
