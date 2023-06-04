import { ApolloClient, InMemoryCache } from '@apollo/client'

const client = new ApolloClient({
  uri: 'https://c8f0-201-184-250-226.ngrok-free.app/graphql',
  cache: new InMemoryCache()
})
export default client;