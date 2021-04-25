import { GraphQLClient } from 'graphql-request';

const endpoint = 'http://localhost:1337/graphql';
const client = new GraphQLClient(endpoint);

export default client;
