import React from "react";
import Layout from "../components/Layout";

/**
 *
 * @param {키워드} keyword : 주소에 keyword=데이터 를 입력하면 아래 부분에 입력됨
 */
const Search = ({ url }) => {
  return <Layout>당신이 검색한 키워드는 "{url.query.keyword}" 입니다.</Layout>;
};

export default Search;
