import { ApolloServer } from '@apollo/server';
import { InMemoryLRUCache } from "@apollo/utils.keyvaluecache"
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { RootQuery } from './root';
import { ParsingApi } from './api/parsing.api';
import { path } from 'ramda';

/**
 * Object describing the data context for a GraphQL resolver.
 * @typedef {Object} Api
 * @property {Object} dataSources - An object containing instances of data sources.
 * @property {ParsingApi} dataSources.parsingApi - An instance of the ParsingApi data source.
 */
export interface Api {
  dataSources: {
    parsingApi: ParsingApi;
  };
}

/**
 * Returns a path to a property on the Api object.
 */
export const parsingApi = path<ParsingApi>(['dataSources', 'parsingApi'])

export async function apollo() {
  const schema = await buildSchema({
    resolvers: [
      RootQuery,
    ],
    emitSchemaFile: true,
  });

  const cache = new InMemoryLRUCache();

  const server = new ApolloServer({
    cache: new InMemoryLRUCache(),
    schema,
  });

  const { url } = await startStandaloneServer(
    server,
    {
      listen: {
        port: 4000,
      },
      context: async ({ req }) => ({
        dataSources: {
          parsingApi: new ParsingApi({
            token: req.headers['authorization'],
            cache
          }),
        },
      }),
    }
  );

  return `🚀 Apollo Server ready at ${url}`
}
