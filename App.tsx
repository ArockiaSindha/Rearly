import React from "react";
import Route from "./src/Route/Route";
import { GestureHandlerRootView } from "react-native-gesture-handler";


const App = () => {
  return(
   <GestureHandlerRootView>
    <Route/>
    </GestureHandlerRootView>
  );
};

export default App;