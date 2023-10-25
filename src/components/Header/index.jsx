import { Text } from "react-native";
import { View } from "react-native";
import { styles } from "./styles";


function Header(props){

    return(
        <View style={styles.boxRodada}>
            <Text style={styles.textRodada}>{props.rodada}</Text>
        </View> 
    )
}

export default Header