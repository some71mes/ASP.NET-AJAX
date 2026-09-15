import { useState } from "react"

function Actions() {
  const [likes, setLikes] = useState(0);
  const [reposts, setReposts] = useState(0);

  return (
    <div className="actions">
      <button className="actions-button" onClick={() => setLikes(likes + 1)}>
        &#10084;{likes}
      </button>

      <button className="actions-button" onClick={() => setReposts(reposts + 1)}>
        &#8635;{reposts}
      </button>
      <br />
    </div>
  )
}

export default Actions;
