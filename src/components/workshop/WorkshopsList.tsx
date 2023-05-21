import { workshops } from "@/data/workshops";
import { BackToHomeButton } from "../buttons/BackToHomeButton";
import { WorkshopCard } from "./WorkshopCard";
import { motion } from "framer-motion";
import { useQuery, gql } from "@apollo/client";
import { Workshop } from "@/data/workshops";

interface WorkShopGraphql extends Workshop{
  id: number
}
const QUERY = gql`
  query Events {
    events {
      title
      tags
      speakers {
        url
        name
      }
    }
  }
`;

export const WorkshopsList = () => {
  const { data, loading, error } = useQuery(QUERY);

  if (data) {
    const projects = data;
    console.log(data);
  }
  const today = new Date();
  const upcomingWorkshops = workshops.filter(
    (w) => new Date(w.date.text) > today
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="workshopList"
    >
      <BackToHomeButton />
      {loading && <h1>Loading ...</h1>}
      {error && <h1>Error </h1>}
      {data && data.events.map((workshop: WorkShopGraphql )=>(
          <WorkshopCard
          title={workshop.title}
          date={workshop.date}
          tags={workshop.tags}
          speakers={workshop.speakers}
          description={workshop.description}
          key={workshop.id}
          location={workshop.location}
          theme={"dark"}
          imgUrl={""}
        />
      ))}
      {upcomingWorkshops.map((w, i) => {
        return (
 
        );
      })}
    </motion.div>
  );
};
