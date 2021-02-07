import { ApolloClient, InMemoryCache } from '@apollo/client';


const client = new ApolloClient({
    uri: 'https://46cd409c571a.ngrok.io/graphql',
    cache: new InMemoryCache()
});


export default client;