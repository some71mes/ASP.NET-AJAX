import Post from "./Post";

function ProfileCard() {
  return (
    <section className="profile-card">
      <div className="profile">
        <div className="avatar">A</div>
        <div className="profile-info">
          <h2>Andrey</h2>
          <p>@andrey</p>
        </div>
      </div>

      <Post author="Andrey" title="Title for post 1" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat, numquam excepturi suscipit magni illo voluptatibus illum voluptatem, voluptates aperiam, corporis fugiat itaque error praesentium! Quis vel aliquam harum facere."/>
      <hr />

      <Post author="Andrey" title="Title for post 2" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat, numquam excepturi suscipit magni illo voluptatibus illum voluptatem, voluptates aperiam, corporis fugiat itaque error praesentium!"/>
      <hr />

      <Post author="Andrey" title="Title for post 3" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat, numquam excepturi suscipit magni illo voluptatibus illum voluptatem, voluptates aperiam"/>
      <hr />

      <Post author="Andrey" title="Title for post 4" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat, numquam excepturi suscipit magni illo voluptatibus illum voluptatem"/>
      <hr />

      <Post author="Andrey" title="Title for post 5" text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dignissimos placeat, numquam excepturi suscipit magni"/>

    </section>
  )
}

export default ProfileCard;