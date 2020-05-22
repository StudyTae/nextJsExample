import React from "react";
import Layout from "../components/Layout";
import axios from "axios";

class SSRTest extends React.Component {
  //   static async getInitialProps({ req }) {
  //     return req ? { from: "server" } : { from: "client" };
  //   }

  static async getInitialProps({ req }) {
    const response = await axios.get(
      "https://jsonplaceholder.typicode.com/users"
    );
    return { users: response.data };
  }

  render() {
    const { users } = this.props;
    const userList = users.map((user) => (
      <li key={user.id}>{user.username}</li>
    ));
    // return <Layout>{this.props.from} 에서 실행이 되었어요.</Layout>;
    return (
      <Layout>
        <ul>{userList}</ul>
      </Layout>
    );
  }
}

export default SSRTest;
