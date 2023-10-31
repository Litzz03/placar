import { createNativeStackNavigator } from "@react-navigation/native-stack"
import Home from "../screens/Home";
import Details from "../screens/Details";
import Team from "../screens/Team";

function AppRoutes(){

const {Screen, Navigator} = createNativeStackNavigator();

    return(

        <Navigator screensOptions={{Headers: false}}>

            <Screen name="placar" component={Home}/>
            <Screen name="details" component={Details}/>
            <Screen name="team" component={Team}/>

        </Navigator>

    )

}

export default AppRoutes