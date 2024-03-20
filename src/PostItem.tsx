import { useEffect, useRef } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";
import { usePrefetchPostDetail } from "./hooks/queries/posts/usePost.tsx";
import { Post } from "./domains/posts/models/Post.ts";

interface PostItemProps {
  post: Post;
}
export default function PostItem({ post }: PostItemProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const queryClient = useQueryClient();
  const navigate = useNavigate();
  const prefetchPostDetail = usePrefetchPostDetail(Number(post.id));

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // 화면에 나타났을 때 데이터를 prefetch합니다.
            prefetchPostDetail();
          }
        });
      },
      { threshold: 0.5 }, // 10% 이상 보여질 때 prefetch를 시작합니다.
    );
    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [post, queryClient]);

  return (
    <div
      ref={ref}
      className="post-card"
      onClick={() => {
        navigate(`/posts/${post.id}`);
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
    </div>
  );
}
