import Actions from "./Actions";

function Post({ author, title, text, img}) {
  return (
    <article className="post">
      <h2>{title}</h2>
      <p className="post-text">{text}</p>
        <img
        src={img}
        style={{ width: "300px", marginTop: "10px" }}/>
      <p className="post-authors">Автор: {author}</p>
      <Actions />
    </article>
  )
}

export default Post;
