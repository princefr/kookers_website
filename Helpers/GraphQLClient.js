import { ApolloClient, InMemoryCache} from '@apollo/client';

// const link = process.browser ? split(
//   ({ query }) => {
//     const { kind, operation } = getMainDefinition(query);
//     return kind === 'OperationDefinition' && operation === 'subscription';
//   },
//   wsLink,
//   httplink,
// ): httplink;

const client = new ApolloClient({
    uri: 'https://db191ddfaeef.ngrok.io/graphql',
    cache: new InMemoryCache()
});


export default client;