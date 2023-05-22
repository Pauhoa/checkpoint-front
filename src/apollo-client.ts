import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
    uri: 'https://countries.nausicaa.wilders.dev/graphql',
    cache: new InMemoryCache(),
});

export default client;