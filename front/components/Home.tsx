import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  margin: 10px;
`;

const req = gql`
  {
    items {
      id
      name
      description
      price
      imageUrl
    }
  }
`;
const Home = () => {
  return (
    <Query query={req}>
      {({ loading, data }) => {
        if (loading) return null;

        return (
          <Flex>
            {data.items.map((item: any) => (
              <Item>
                <Card
                  hoverable
                  key={item.id}
                  style={{ width: 240 }}
                  cover={<img alt="example" src={item.imageUrl} />}
                >
                  <Meta title={item.name} description={item.description} />
                </Card>
              </Item>
            ))}
          </Flex>
        );
      }}
    </Query>
  );
};
export default Home;
