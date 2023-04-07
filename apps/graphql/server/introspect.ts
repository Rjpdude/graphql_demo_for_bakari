import fs from 'fs'
import path from 'path'
import { buildSchema, graphqlSync, getIntrospectionQuery } from 'graphql'

/**
 * Generates introspection from a .gql schema file.
 *
 * @param {string} filePath - Path to the .gql schema file.
 * @returns {object} - Introspection result.
 */
export function introspect(filePath: string) {
  // Ensure the file exists and has the correct extension
  if (!fs.existsSync(filePath) || path.extname(filePath) !== '.gql') {
    throw new Error('Invalid .gql file path');
  }

  // Read and parse the .gql file
  const schemaContent = fs.readFileSync(filePath, 'utf8');
  const schema = buildSchema(schemaContent);

  // Generate the introspection result
  const introspectionQuery = getIntrospectionQuery();
  const introspectionResult = graphqlSync({
    schema,
    source: 'query IntrospectionQuery ' + introspectionQuery,
  });

  if (introspectionResult.errors) {
    throw new Error('Introspection failed: ' + JSON.stringify(introspectionResult.errors));
  }

  return introspectionResult.data;
}
