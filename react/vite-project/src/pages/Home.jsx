import Post from "../components/Post";

function Home() {
    const posts = [
        {
            id: 1,
            author: 'Andrey',
            title: 'title',
            text: "text"
        },
        {
            id: 2,
            author: 'Andrey',
            title: 'title',
            text: "text"
        },
        {
            id: 3,
            author: 'Andrey',
            title: 'title',
            text: "text"
        },
    ]

    return (
        <section>
            <h1>Главная страница</h1>
            <div className="feed">
                <h2>Лента</h2>
                {posts.map((post) => (
                    <Post
                        key={post.id}
                        id={post.id}
                        author={post.author}
                        title={post.title}
                        text={post.text} />
                ))}
            </div>
        </section>
    )
}

export default Home;