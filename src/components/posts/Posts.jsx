import { useEffect } from "react";
import { usePostsStore } from "../../store/PostsStoreAPI";
import Post from "../post/Post";

function Posts() {
  const { loading, error, posts, fetchPosts } = usePostsStore();
  useEffect(() => {
    fetchPosts();
  }, [fetchPosts]);
  return (
    <>
      {loading && <h3>Loading...</h3>}
      {error && <h3>{error}</h3>}
      {posts && (
        <div className="flex flex-col gap-2 p-4">
          {posts?.map((post) => (
            <Post key={post.id} {...post} />
          ))}
        </div>
      )}
    </>
  );
}

export default Posts;
