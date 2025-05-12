
import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'

function Signup() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  })
  const [error, setError] = useState('')
  const navigate = useNavigate()

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setError('')

    // Basic validation
    if (formData.password !== formData.confirmPassword) {
      setError('Passwords do not match')
      return
    }

    if (formData.password.length < 6) {
      setError('Password must be at least 6 characters')
      return
    }

    console.log('Signup:', formData)
    // For demo purposes - in real app would create account
    navigate('/login')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md text-center">
        <div className="p-6 text-center">
          <h1 className="text-2xl font-bold text-green-600">Green Plate</h1>
          <p className="text-green-500 mt-2">Create your account</p>
        </div>
        
        <form className="p-6" onSubmit={handleSubmit}>
          {error && (
            <div className="mb-4 p-2 bg-red-100 text-red-700 rounded text-sm">
              {error}
            </div>
          )}

          <div className="mb-4">
            <label className="block text-green-600 mb-2 text-left" htmlFor="fullName">Full Name</label>
            <input 
              id="fullName"
              name="fullName"
              type="text" 
              className="w-full p-2 border border-green-300 rounded bg-white text-green-700" 
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-green-600 mb-2 text-left" htmlFor="email">Email</label>
            <input 
              id="email"
              name="email"
              type="email" 
              className="w-full p-2 border border-green-300 rounded bg-white text-green-700" 
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-4">
            <label className="block text-green-600 mb-2 text-left" htmlFor="password">Password</label>
            <input 
              id="password"
              name="password"
              type="password" 
              className="w-full p-2 border border-green-300 rounded bg-white text-green-700" 
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          
          <div className="mb-6">
            <label className="block text-green-600 mb-2 text-left" htmlFor="confirmPassword">Confirm Password</label>
            <input 
              id="confirmPassword"
              name="confirmPassword"
              type="password" 
              className="w-full p-2 border border-green-300 rounded bg-white text-green-700" 
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          
          <button 
            type="submit" 
            className="w-full bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600 mb-4"
          >
            Create Account
          </button>

          <div className="mt-4 text-center">
            <p className="text-green-700">
              Already have an account?{' '}
              <Link to="/login" className="text-green-600 font-medium hover:underline">
                Sign in
              </Link>
            </p>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Signup