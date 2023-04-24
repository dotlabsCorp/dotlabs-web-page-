import Layout from "@/components/Layout";
import { InfoCard } from "@/components/common/InfoCard/InfoCard";
import { WorkshopsList } from "@/components/workshop/WorkshopsList";

function WorkshopsPage() {
  return (
    <Layout headTitle="Talleres">
      <InfoCard
        message="Te invitamos a revisar las reglas de la comunidad"
        link={{
          text: "aquí",
          url: "/talleres/reglas",
        }}
      />
      <WorkshopsList />
    </Layout>
  );
}

export default WorkshopsPage;
