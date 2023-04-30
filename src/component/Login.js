import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault(); 
    // TODO: implement your authentication logic here 
    if(email === 'mindx@gmail.com' && password === '123456'){
      navigate('/app');
    }else{
      alert("Thông tin đăng nhập không đúng.");
    }
  };

  return (
    <div className="auth-form-container">
        <h2>Login</h2>
        <form className="login-form" onSubmit={handleSubmit}>
            <label htmlFor="email">Email</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="youremail@gmail.com" id="email" name="email" />
            <label htmlFor="password">Password</label>
            <input value={password} onChange={(e) => setPassword(e.target.value)} type="password" placeholder="********" id="password" name="password" />
            <button type="submit">Log In</button>
        </form>
    </div>
)
}

export default Login