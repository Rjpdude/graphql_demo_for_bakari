import { ApolloExplorer } from "@apollo/explorer/react"

/* eslint-disable-next-line */
export interface LibraryProps {
  schema: string;
  endpoint: string;
}

export function Explore(props: LibraryProps) {
  return (
    <ApolloExplorer
      schema={props.schema}
      endpointUrl={`${props.endpoint}/graphql`}
      initialState={{
        displayOptions: {
          showHeadersAndEnvVars: false,
          docsPanelState: 'closed',
        },
      }}
    />
  );
}

export default Explore;
