import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
    uri: "https://2470-152-202-46-148.ngrok-free.app/graphql",
    cache: new InMemoryCache(),
});

export default client;