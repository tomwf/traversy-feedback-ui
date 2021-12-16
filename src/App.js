function App() {
  const title = 'Blog Post'
  const body = 'This is my blog post'
  const comments = [
    {id: 1, text: 'Comment 1'},
    {id: 2, text: 'Comment 2'},
    {id: 3, text: 'Comment 3'}
  ]
  const showComments = true

  return (
    <div className="container">
      <h1>{title.toUpperCase()}</h1>
      <p>{body}</p>

      {showComments && (
        <div className="comments">
          <h3>Comments ({comments.length})</h3>
          <ul>
            {comments.map(comment => (
              <li key={comment.id}>{comment.text}</li>
            ))}
          </ul>
        </div>
      )}

    </div>
  )
}

export default App
