import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card, Pagination } from "antd";
import styled from "styled-components";

const req = gql`
  {
    basketGet {
      name
    }
  }
`;

type Props = {};

type State = {};

class Basket extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    return (
      <Query query={req}>
        {({ loading, data }) => {
          if (loading) return null;
          if (data.basketGet === null) return <h1>Error</h1>;
          return (
            <div>
              {data.basketGet.map((item: any) => (
                <h1>{item.name}</h1>
              ))}
            </div>
          );
        }}
      </Query>
    );
  }
}
export default Basket;
