import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    alert(`Login Attempt: \nEmail: ${email}\nPassword: ${password}`);
  };


  return (
    <div className="login-container">
    <h2>Login</h2>
    <form onSubmit={handleLogin}>
      <div className="input-group">
        <label>Email:</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>
      <div className="input-group">
        <label>Password:</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>
      <button type="submit">Login</button>
    </form>
  </div>
)
}

export default App
