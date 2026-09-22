import { useState } from "react";
import Post from "./Post";

function ProfileCard() {

  const [posts, setPosts] = useState([
    { id: 1,
      author: "Andrey",
      title: "Study react for frontend",
      text: "Какой-то текст"
    },
    { id: 2,
      author: "Andrey",
      title: "Backend developers",
      text: "Какой-то текст"
    },
    { id: 3,
      author: "Andrey",
      title: "Design system",
      text: "Какой-то текст"
    }
  ])

  const [title, setTitle] = useState('');
  const [text, setText] = useState("");

  function addPost(event){
    event.preventDefault();
    const newPost = {
      id: Date.now(),
      title: title, 
      text: text,
      author: "Andrey"
    }
    setPosts([...posts, newPost]);
    setTitle("");
    setText("");
  }

  return (
    <section className="profile-card">
      <div className="profile">
        <div className="avatar">A</div>
        <div className="profile-info">
          <h2>Andrey</h2>
          <p>@andrey</p>
        </div>
      </div>

      <form className="post-form" onSubmit={addPost}>
        <input
          type="text"
          placeholder="Заголовок"
          value={title}
          onChange={(event)=>setTitle(event.target.value)}
        />
        <textarea 
          placeholder="Текст для поста" 
          value={text}
          onChange={(event)=>setText(event.target.value)}>
        </textarea>
        
        <button type="submit">
          Опубликовать
        </button>

      </form>

      {posts.map((post) => (
        <Post
        key={post.id}
        author={post.author}
        title={post.title}
        text={post.text}
        />
      ))}
    </section>
  )
}

export default ProfileCard;