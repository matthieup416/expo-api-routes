// const Stream = require('stream-browserify')
import '../global.css'
import { Slot } from 'expo-router'
import { LogBox } from 'react-native'

LogBox.ignoreLogs(['Warning:...'])
LogBox.ignoreAllLogs()

export default function Layout() {
  return <Slot />
}
