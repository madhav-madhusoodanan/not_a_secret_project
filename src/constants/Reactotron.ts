import Reactotron from 'reactotron-react-native'
import {reactotronRedux} from 'reactotron-redux'
const reactotron = Reactotron
  // .setAsyncStorageHandler(AsyncStorage) // AsyncStorage would either come from `react-native` or `@react-native-community/async-storage` depending on where you get it from
  .configure({ host: '192.168.0.103', name: 'Verse' }) // controls connection & communication settings
  .useReactNative() // add all built-in react native plugins
  .use(reactotronRedux())

  export default reactotron