import React from "react";
import { usePosts } from "./hooks/queries/posts/usePosts.tsx";
import InfiniteScroll from "react-infinite-scroller";
import PostItem from "./PostItem.tsx";
import { useRepositories } from "./contexts/RepositoryContext.tsx";

export default function PostList() {
  const { postRepository } = useRepositories();

  const { data, fetchNextPage, hasNextPage } = usePosts(postRepository);
  return (
    <InfiniteScroll
      pageStart={0}
      loadMore={() => fetchNextPage()}
      hasMore={hasNextPage}
      loader={
        <div key="loading" className="loader">
          Loading more...
        </div>
      }
      className="post-list"
    >
      {data?.pages.map((page, i) => (
        <React.Fragment key={i}>
          {page.map((post) => (
            <PostItem key={post.id} post={post} />
          ))}
        </React.Fragment>
      ))}
    </InfiniteScroll>
  );
}
