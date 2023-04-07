import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { buildSchema } from 'type-graphql';
import { BurgerResolver } from './mock/resolver';

export async function apollo() {
  const schema = await buildSchema({
    resolvers: [
      BurgerResolver,
    ],
    emitSchemaFile: true,
  });

  const { url } = await startStandaloneServer(
    new ApolloServer({
      schema,
    }),
    {
      listen: {
        port: 4000,
      }
    }
  );

  return `🚀 Apollo Server ready at ${url}`
}
