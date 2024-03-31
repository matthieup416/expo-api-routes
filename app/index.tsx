import { Text, View, TouchableOpacity } from 'react-native'

export default function Page() {
  const apiUrl = process.env.EXPO_PUBLIC_API_URL
  console.log('apiUrl', apiUrl)
  const fetchAPI = async () => {
    try {
      const response = await fetch(`${apiUrl}/api/linkedin`)
      if (!response.ok) {
        throw new Error('❌Network response was not ok')
      }
      const data = await response.json()
      console.log('data', data)
      alert('Hello ' + JSON.stringify(data))
    } catch (error) {
      console.error('Fetch error: ', error)
      alert('Fetch failed: ' + error)
    }
  }

  return (
    <View className="h-full gap-20 bg-primary-200 items-center justify-center">
      <Text className="text-4xl font-bold">🫶🏻 Expo API Routes</Text>
      <TouchableOpacity
        className="border p-2 rounded-lg presss "
        onPress={() => fetchAPI()}
      >
        <Text>Fetch /linkedin</Text>
      </TouchableOpacity>
    </View>
  )
}
