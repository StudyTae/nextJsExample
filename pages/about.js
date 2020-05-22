import Layout from "../components/Layout";

const About = () => (
  <Layout>
    {/* 스타일링의 경우 추천하는 방식은 styled-jsx 사용*/}
    {/* 아래 예제코드 */}
    <style jsx>{`
      h2 {
        color: green;
      }
    `}</style>
    <h2>안녕하세요 저는 Velopert 입니다.</h2>
  </Layout>
);

export default About;
