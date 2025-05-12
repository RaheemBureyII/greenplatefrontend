
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function FarmerRegistration() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    farmName: '',
    acceptsCompost: false
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
  }

  const handleToggle = () => {
    setFormData({
      ...formData,
      acceptsCompost: !formData.acceptsCompost
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Farm details:', formData)
    // Here you would typically save the data to your backend
    // For demo purposes, we'll just navigate to the farmer dashboard
    navigate('/farmer/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-green-600">Farm Details</h1>
          <p className="text-green-500 mt-2">
            Set up your farm profile on Green Plate
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="farmName" className="block text-green-700 mb-2">
              Farm Name
            </label>
            <input
              type="text"
              id="farmName"
              name="farmName"
              value={formData.farmName}
              onChange={handleInputChange}
              className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your farm name"
              required
            />
          </div>

          <div className="mb-8">
            <div 
              className="p-4 border rounded-lg cursor-pointer flex items-center"
              onClick={handleToggle}
            >
              <div className={`w-10 h-6 flex ${formData.acceptsCompost ? 'bg-green-500' : 'bg-gray-200'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
                <span className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${formData.acceptsCompost ? 'translate-x-4' : ''}`}></span>
              </div>
              <div className="ml-3">
                <p className="font-medium text-green-700">Accept Compost</p>
                <p className="text-sm text-green-600">
                  Receive compost from local restaurants
                </p>
              </div>
            </div>
            {formData.acceptsCompost && (
              <div className="mt-3 ml-2 text-sm text-green-600">
                <p>✓ Get free organic matter for your soil</p>
                <p>✓ Be part of the circular economy</p>
                <p>✓ Reduce waste in landfills</p>
              </div>
            )}
          </div>

          <button 
            type="submit" 
            className="w-full py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
          >
            Complete Registration
          </button>
        </form>
      </div>
    </div>
  )
}

export default FarmerRegistration
