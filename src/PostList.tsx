import React from "react";
import { usePosts } from "./hooks/queries/usePosts.tsx";
import InfiniteScroll from "react-infinite-scroller";
import PostItem from "./PostItem.tsx";

export default function PostList() {
  const { data, fetchNextPage, hasNextPage } = usePosts();
  console.log(data?.pages);
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
