import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Login:', { email, password })
    // For demo purposes - in real app would verify credentials
    navigate('/customer')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md text-center">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-green-600">Green Plate</h1>
          <p className="text-green-500 mt-2">Sign in to your account</p>
        </div>
        
        <form className="p-6" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-green-600 mb-2 text-left" htmlFor="email">Email</label>
            <input 
              id="email"
              type="email" 
              className="w-full p-2 border border-green-300 rounded bg-white text-green-700" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-green-600 mb-2 text-left" htmlFor="password">Password</label>
            <input 
              id="password"
              type="password" 
              className="w-full p-2 border border-green-300 rounded bg-white text-green-700" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <div className="mb-6 text-right">
            <Link to="/forgot-password" className="text-green-600 text-sm hover:underline">
              Forgot password?
            </Link>
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
          >
            Sign In
          </button>

          <div className="mt-4 text-center">
            <p className="text-green-700">
              Don't have an account?{' '}
              <Link to="/signup" className="text-green-600 font-medium hover:underline">
                Sign up
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Login