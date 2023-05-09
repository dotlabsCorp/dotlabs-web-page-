import Layout from "@/components/Layout";
import { MainSection } from "@/components/layout/home/MainSection";
import { PartnersSection } from "@/components/layout/home/PartnersSection";

function HomePage() {
  return (
    <Layout headTitle="dotlabs()">
      <MainSection />
      <PartnersSection />
    </Layout>
  );
}

export default HomePage;
