import * as React from "react";
import { Form, Icon, Input, Button, Checkbox } from "antd";
import styled from "styled-components";
import gql from "graphql-tag";
import { Mutation } from "react-apollo";

import { client } from "../index";

const FormStyle = styled.div`
  max-width: 350px;
  height: 40px;
`;

const loginMut = gql`
  mutation($l: String!, $p: String!) {
    userLogin(login: $l, password: $p)
  }
`;

class NormalLoginForm extends React.Component<any, any> {
  constructor(props: any) {
    super(props);
    this.state = {
      login: "",
      password: ""
    };
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    return (
      <Mutation mutation={loginMut}>
        {(userLogin, { data }) => (
          <FormStyle>
            <Form
              onSubmit={e => {
                e.preventDefault();
                this.props.form.validateFields((err: any, values: any) => {
                  if (!err) {
                    console.log("Received values of form: ", values);
                    userLogin({
                      variables: { l: values.userName, p: values.password }
                    }).then((token: any) => {
                      localStorage.setItem("token", token.data.userLogin);
                      client.resetStore();
                    });
                  }
                });
              }}
              className="login-form"
            >
              <Form.Item>
                {getFieldDecorator("userName", {
                  rules: [
                    { required: true, message: "Please input your username!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="user" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    placeholder="Username"
                  />
                )}
              </Form.Item>
              <Form.Item>
                {getFieldDecorator("password", {
                  rules: [
                    { required: true, message: "Please input your Password!" }
                  ]
                })(
                  <Input
                    prefix={
                      <Icon type="lock" style={{ color: "rgba(0,0,0,.25)" }} />
                    }
                    type="password"
                    placeholder="Password"
                  />
                )}
              </Form.Item>
              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
                Or <a href="">register now!</a>
              </Form.Item>
            </Form>
          </FormStyle>
        )}
      </Mutation>
    );
  }
}

const Login = Form.create()(NormalLoginForm);
export default Login;
