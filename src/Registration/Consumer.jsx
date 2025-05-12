
// ConsumerRegistration.jsx - Dietary preferences form for consumers
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function ConsumerRegistration() {
  const navigate = useNavigate()
  const [preferences, setPreferences] = useState({
    lactoseFree: false,
    glutenFree: false,
    vegetarian: false,
    vegan: false,
    nutAllergy: false,
    shellfishAllergy: false,
    halal: false,
    kosher: false,
    lowCholesterol: false,
    lowSugar: false
  })

  const handleToggle = (preference) => {
    setPreferences({
      ...preferences,
      [preference]: !preferences[preference]
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log('Consumer preferences:', preferences)
    // Here you would typically save the preferences to your backend
    // For demo purposes, we'll just navigate to the main page
    navigate('/customer')
  }

  const handleSkip = () => {
    navigate('/customer')
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
        <div className="text-center mb-6">
          <h1 className="text-2xl font-bold text-green-600">Dietary Preferences</h1>
          <p className="text-green-500 mt-2">
            Help us customize your experience by telling us about your dietary preferences
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.lactoseFree ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('lactoseFree')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.lactoseFree}
                  onChange={() => {}} // Handle change above, just to make checkbox controlled
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Lactose Free</label>
              </div>
            </div>

            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.glutenFree ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('glutenFree')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.glutenFree}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Gluten Free</label>
              </div>
            </div>

            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.vegetarian ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('vegetarian')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.vegetarian}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Vegetarian</label>
              </div>
            </div>

            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.vegan ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('vegan')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.vegan}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Vegan</label>
              </div>
            </div>

            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.nutAllergy ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('nutAllergy')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.nutAllergy}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Nut Allergy</label>
              </div>
            </div>

            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.shellfishAllergy ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('shellfishAllergy')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.shellfishAllergy}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Shellfish Allergy</label>
              </div>
            </div>

            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.halal ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('halal')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.halal}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Halal</label>
              </div>
            </div>

            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.kosher ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('kosher')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.kosher}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Kosher</label>
              </div>
            </div>

            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.lowCholesterol ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('lowCholesterol')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.lowCholesterol}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Low Cholesterol</label>
              </div>
            </div>

            <div 
              className={`p-3 border rounded-lg cursor-pointer ${
                preferences.lowSugar ? 'border-green-500 bg-green-50' : 'border-gray-200'
              }`}
              onClick={() => handleToggle('lowSugar')}
            >
              <div className="flex items-center">
                <input 
                  type="checkbox" 
                  checked={preferences.lowSugar}
                  onChange={() => {}}
                  className="h-4 w-4 text-green-600 border-gray-300 rounded"
                />
                <label className="ml-2 text-green-700">Low Sugar</label>
              </div>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row justify-between gap-4">
            <button 
              type="button" 
              onClick={handleSkip}
              className="py-2 px-4 border border-green-500 text-green-600 rounded hover:bg-green-50"
            >
              Skip for now
            </button>
            <button 
              type="submit" 
              className="py-2 px-4 bg-green-500 text-white rounded hover:bg-green-600"
            >
              Save Preferences
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default ConsumerRegistration
