import React from "react";
import Layout from "../components/Layout";
import axios from "axios";

class SSRTest extends React.Component {
  //   static async getInitialProps({ req }) {
  //     return req ? { from: "server" } : { from: "client" };
  //   }

  /**
   *
   * 초기 설정 데이터
   * 예제 프로젝트 홈페이지에서 유저 정보를 가지고온 후 데이터를 props로 받아 사용
   * Link 에서 prefetch를 사용할 경우 데이터를 먼저 전달 받은뒤 화면 뷰 보여짐
   */
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
