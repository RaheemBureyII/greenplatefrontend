
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function RestaurantRegistration() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    restaurantName: '',
    offersCompost: false
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
      offersCompost: !formData.offersCompost
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Restaurant details:', formData)
    // Here you would typically save the data to your backend
    // For demo purposes, we'll just navigate to the restaurant dashboard
    navigate('/restaurant/dashboard')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-green-600">Restaurant Details</h1>
          <p className="text-green-500 mt-2">
            Set up your restaurant profile on Green Plate
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label htmlFor="restaurantName" className="block text-green-700 mb-2">
              Restaurant Name
            </label>
            <input
              type="text"
              id="restaurantName"
              name="restaurantName"
              value={formData.restaurantName}
              onChange={handleInputChange}
              className="w-full p-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-500"
              placeholder="Enter your restaurant name"
              required
            />
          </div>

          <div className="mb-8">
            <div 
              className="p-4 border rounded-lg cursor-pointer flex items-center"
              onClick={handleToggle}
            >
              <div className={`w-10 h-6 flex ${formData.offersCompost ? 'bg-green-500' : 'bg-gray-200'} rounded-full p-1 transition-colors duration-300 ease-in-out`}>
                <span className={`bg-white w-4 h-4 rounded-full shadow-md transform duration-300 ease-in-out ${formData.offersCompost ? 'translate-x-4' : ''}`}></span>
              </div>
              <div className="ml-3">
                <p className="font-medium text-green-700">Offer Compost</p>
                <p className="text-sm text-green-600">
                  Allow excess food to be composted by local farmers
                </p>
              </div>
            </div>
            {formData.offersCompost && (
              <div className="mt-3 ml-2 text-sm text-green-600">
                <p>✓ Help reduce food waste</p>
                <p>✓ Support local farmers</p>
                <p>✓ Contribute to sustainability</p>
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

export default RestaurantRegistration