import { useParams } from "react-router-dom";
import { usePostDetail } from "../hooks/queries/usePost.tsx";

export default function PostPage() {
  const { postId } = useParams<"postId">(); //
  const { post } = usePostDetail(Number(postId));

  return (
    <div>
      <h1>{post?.title}</h1>
      <p>{post?.body}</p>
    </div>
  );
}
