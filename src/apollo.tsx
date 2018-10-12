import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import { Platform } from 'react-native';

// android or ios? the "host" configuration is different
const host = Platform.OS === 'ios' ? 'http://localhost:4000' : 'http://10.0.2.2:4000';

export const client = new ApolloClient({
  link: new HttpLink({
    uri: host,
  }),
  cache: new InMemoryCache(),
});