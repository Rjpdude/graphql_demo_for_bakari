import { ApolloExplorer } from "@apollo/explorer/react"

export interface Props {
  schema: string;
  endpoint: string;
}

const defaultQuery = `
query {
  parsers {
    parserName
  }
  emcVnxe {
    daeDisks
    daeEnclosures
  }
}`;

export function Explore(props: Props) {
  return (
    <ApolloExplorer
      schema={props.schema}
      endpointUrl={`${props.endpoint}/graphql`}
      initialState={{
        document: defaultQuery,
        displayOptions: {
          showHeadersAndEnvVars: true,
          docsPanelState: 'closed',
        },
      }}
    />
  );
}

export default Explore;
