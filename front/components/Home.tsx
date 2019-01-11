import * as React from "react";
import gql from "graphql-tag";
import { Query } from "react-apollo";
import { Card, Pagination } from "antd";
import styled from "styled-components";

const { Meta } = Card;

const Flex = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.div`
  margin: 10px;
`;

const PaginationPosition = styled.div`
  margin-top: 20px;
  display: flex;
  justify-content: center;
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

type Props = {};

type State = {
  minValue: number;
  maxValue: number;
};

class Home extends React.Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      minValue: 0,
      maxValue: 18
    };
  }

  handleChange = (value: number) => {
    this.setState({
      minValue: value * 18,
      maxValue: value * 18 + 18
    });
  };

  render() {
    return (
      <Query query={req}>
        {({ loading, data }) => {
          if (loading) return null;

          return (
            <div>
              <Flex>
                {data.items
                  .slice(this.state.minValue, this.state.maxValue)
                  .map((item: any) => (
                    <Item key={item.id}>
                      <Card
                        style={{ width: 240 }}
                        extra={<a href="#">Купить</a>}
                        title={item.price + "Р"}
                        cover={<img alt="example" src={item.imageUrl} />}
                      >
                        <Meta
                          title={item.name}
                          description={item.description}
                        />
                      </Card>
                    </Item>
                  ))}
              </Flex>
              <PaginationPosition>
                <Pagination
                  defaultCurrent={1}
                  defaultPageSize={1} //default size of page
                  onChange={this.handleChange}
                  total={data.items.length / 18} //total number of card data available
                />
              </PaginationPosition>
            </div>
          );
        }}
      </Query>
    );
  }
}
export default Home;
