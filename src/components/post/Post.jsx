function Post({ title, body }) {
  return (
    <article className="hover:bg-gray-800 p-4 border border-gray-700 rounded-md transition">
      <h3 className="font-semibold text-red-400 text-xl">{title}</h3>
      <p>{body}</p>
    </article>
  );
}

export default Post;
