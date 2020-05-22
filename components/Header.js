import Link from "next/link";

const linkStyle = {
  marginRight: "1rem",
};

const Header = () => {
  return (
    <div>
      <Link href="/">
        <a style={linkStyle}> 홈</a>
      </Link>
      <Link href="/about">
        <a style={linkStyle}>소개</a>
      </Link>
      {/** prefetch : 데이터를 먼저 불러오고 화면이동 */}
      <Link prefetch href="/ssr-test">
        <a style={linkStyle}>SSR 테스트 </a>
      </Link>
      {/** dynamic routing 부분 as를 통해 id 값을 전달한다. */}
      <Link href="/post/[id]" as="/post/first">
        <a style={linkStyle}>First Post</a>
      </Link>
      <Link href="/post/[id]" as="/post/second">
        <a style={linkStyle}>Second Post</a>
      </Link>
    </div>
  );
};

export default Header;
