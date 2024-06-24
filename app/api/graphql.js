import { ApolloServer } from 'apollo-server-micro';
import { typeDefs, resolvers } from '../../graphql/schema';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
  context: () => ({ prisma })
});

export const config = {
  api: {
    bodyParser: false
  }
};

export default apolloServer.createHandler({ path: '/api/graphql' });
