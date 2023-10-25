import {Text, View} from "react-native"
import { styles } from "./styles"
import Header from "../../components/Header"


function Home(){

    return(
        <View>
           <Text style= {styles.title}>JOGOS</Text>

           <Header rodada="ª Rodada"/>
        </View>
    )
}

export default Home