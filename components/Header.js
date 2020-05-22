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
      <Link prefetch href="/ssr-test">
        {/** prefetch : 데이터를 먼저 불러오고 화면이동 */}
        <a style={linkStyle}>SSR 테스트 </a>
      </Link>
    </div>
  );
};

export default Header;
