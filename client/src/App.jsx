import { gql, useQuery } from "@apollo/client";
import './App.css'

const query = gql`
  query GetTodosWithUsers {
    getTodos {
          id
          title
          completed
          user {
          id
              name
              email
              phone
          }
      }
  }
`

function App() {
  const {data,loading}=useQuery(query);
  if(loading) return <p>Loading...</p>
  return (
    <div className='App'>
      {/* {JSON.stringify(data)} */}
      <h1>Todo List</h1>
      <ul>
        {data.getTodos.map(todo => (
          <li key={todo.id} className="todo-item">
            <h2><strong>Title : </strong>{todo.title}</h2>
            <p>Status: {todo.completed ? 'Completed' : 'Not Completed'}</p>
            <div className="user-card">
              <p><strong>User Id:</strong> {todo.user.id}</p>
              <p><strong>Name:</strong> {todo.user.name}</p>
              <p><strong>Email:</strong> {todo.user.email}</p>
              <p><strong>Phone:</strong> {todo.user.phone}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default App
