
import React, {FC} from "react";
import Navigator from './src/navigators/Navigator';
import { Provider } from "react-redux";
import { store } from "./src/redux/store";
 
const App: FC = () => {
  return ( 
      <Provider store={store}>
        <Navigator/> 
      </Provider>
  )
};
export default App;