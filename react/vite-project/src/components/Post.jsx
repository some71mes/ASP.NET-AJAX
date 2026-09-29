import Actions from "./Actions";

function Post({ author, title, text, img}) {
  return (
    <div>
      <article className="post">
        <h2>{title}</h2>
        <p className="post-text">{text}</p>
          <img
          src={img}
          style={{ width: "300px", marginTop: "10px" }}/>
        <p className="post-authors">Автор: {author}</p>
        <Actions />

        <button
          className="delete-button"
          onClick ={() => onDelete(id)} >
            Удалить
        </button>
      </article>
    </div>
  )
}

export default Post;
