import { ApolloExplorer } from "@apollo/explorer/react"

export interface Props {
  schema: string;
  endpoint: string;
}

const defaultQuery = `
query {
  bestBurger {
    id
    type
    customer {
      firstName
    }
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
          showHeadersAndEnvVars: false,
          docsPanelState: 'closed',
        },
      }}
    />
  );
}

export default Explore;
