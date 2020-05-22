import { useRouter } from "next/router";
import Link from "next/link";
import Header from "../../../components/Header";

/**
 * dynamic routing Test
 * as안에서 쿼리를 전달 받아 작성되는 구조
 * 헤더에서 id를 받아오고
 * Comment를 클릭헀을 때 as에 적힌 comment값을 받아온다.
 * comment의 구조는 [comment].js 를 살펴본다.
 */
const Post = () => {
  const router = useRouter();
  const { id } = router.query;

  return (
    <>
      <Header />
      <h1>Post: {id}</h1>
      <ul>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
            <a>First comment</a>
          </Link>
        </li>
        <li>
          <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
            <a>Second comment</a>
          </Link>
        </li>
      </ul>
    </>
  );
};

export default Post;
