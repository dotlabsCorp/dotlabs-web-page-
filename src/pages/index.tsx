import Layout from '@/components/Layout'
import { ContactSection } from '@/components/layout/home/ContactSection'
import { MainSection } from '@/components/layout/home/MainSection'
import { PartnersSection } from '@/components/layout/home/PartnersSection'

function HomePage () {
  return (
    <Layout headTitle='dotlabs()'>
      <MainSection />
      <PartnersSection />
      <ContactSection />
    </Layout>
  )
}

export default HomePage
