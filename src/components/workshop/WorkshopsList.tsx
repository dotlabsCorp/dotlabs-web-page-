// import { workshops } from '@/data/workshops'
import { BackToHomeButton } from '../buttons/BackToHomeButton'
import { WorkshopCard } from './WorkshopCard'
import { motion } from 'framer-motion'
import { useQuery, gql } from '@apollo/client'
import { Workshop } from '@/data/workshops'
import { useEffect, useState } from 'react'

interface WorkshopGraphQL extends Workshop {
  id: string
}

// This is temporaly

// const QUERY = gql`
//   query Events {
//     events {
//       title
//       tags
//       speakers {
//         url
//         name
//       }
//     }
//   }
// `;

interface Status {
  loading: boolean
  error: boolean
  data: null | WorkshopGraphQL[]
}

export const WorkshopsList = () => {
  const [status, setStatus] = useState<Status>({
    loading: true,
    error: false,
    data: null
  })

  // const { data, loading, error } = useQuery(QUERY);

  // if (data) {
  //   const projects = data;
  //   console.log(data);
  // }

  useEffect(() => {
    if (!status.loading) return
    try {
      fetch('http://localhost:3000/api/events')
        .then(res => res.json())
        .then(data => {
          console.log(data.findAllEvents)
          setStatus({ ...status, data: data.findAllEvents, loading: false })
        })
    } catch (e) {
      setStatus({ ...status, error: true, loading: false })
    }
  }, [status])

  const today = new Date()
  // const upcomingWorkshops = workshops.filter(w => new Date(w.date.text) > today)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className='workshopList'
    >
      <BackToHomeButton />
      {status.loading ? (
        <h1>Loading ...</h1>
      ) : status.error ? (
        <h1>Error</h1>
      ) : (
        status.data?.map((workshop: WorkshopGraphQL) => (
          <WorkshopCard
            key={workshop.id}
            title={workshop.title}
            date={workshop.date}
            tags={workshop.tags}
            speakers={workshop.speakers}
            description={workshop.description}
            location={workshop.location}
            theme={'dark'}
            imgUrl={''}
          />
        ))
      )}
      {}
      {/* {upcomingWorkshops.map((w, i) => {
        return null
      })} */}
    </motion.div>
  )
}
