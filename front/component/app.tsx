import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";

const req = gql`
  {
    items {
      id
      name
      description
    }
  }
`;
const App = () => {
  return (
    <Query query={req}>
      {({ loading, data }) => {
        if (loading) return null;

        return (
          <ul key="allUsers">
            {data.items.map((item: any) => (
              <li key={item.id}>
                <p>{item.name ? item.name : "incognoito"}</p>
              </li>
            ))}
          </ul>
        );
      }}
    </Query>
  );
};
export default App;
