import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://ed23ed8dd441.ngrok.io/graphql',
    cache: new InMemoryCache()
});


export default client;