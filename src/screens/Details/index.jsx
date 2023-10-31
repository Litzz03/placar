import { useNavigation, useRoute } from "@react-navigation/native";
import { useState } from "react";
import { Button, Text, TextInput, View } from "react-native";

function Details(){

    const route = useRoute()
    const navigation = useNavigation()

    const {home, visited} = route.params

    const [comment, setComment] = useState('')

    handleBack = () =>{
        navigation.goBack()
    }

    handleTeam = (team) =>{
        navigation.navigate('team', {team, comment})
    }

    return(
        <View>

            <Text onPress={() => handleTeam(home)}>{home}</Text>
            <Text>x</Text>
            <Text onPress={() => handleTeam(visited)}>{visited}</Text>


            <TextInput onChangeText={setComment}/>

            <Button title="Voltar" onPress={handleBack}/>
        </View>
    )
}

export default Details