import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4okolj70aln01xt0w9r8vwh/master',
  cache: new InMemoryCache()
})

