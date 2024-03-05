import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { JobsScreen } from '../screens/Jobs/JobsScreen';
import { HomeScreen } from '../screens/Home/HomeScreen';
import { SkillScreen } from '../screens/Skill/SkillScreen';
import  {FontAwesome5} from '@expo/vector-icons'
import { StyleSheet } from 'react-native';
import { View } from 'react-native-reanimated/lib/typescript/Animated';
const {Navigator, Screen} = createBottomTabNavigator();

export function BottomTabsRoutes(){
    return(
        <Navigator>
            <Screen name='Jobs'
             component={JobsScreen}
             options={{
                headerTitle: 'Experiências e Formações',
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#2B92D5'},
                tabBarActiveBackgroundColor: '#dfdfdf',
                tabBarLabelStyle: styles.tabs
                ,
                tabBarIcon: ({color, size}) => (
                    <FontAwesome5 name="list" size={24} color="black" />
                )}} 
             />
            <Screen name='Home' 
            component={HomeScreen}
            options={{
                headerTintColor: '#fff',
                headerStyle: {backgroundColor: '#2B92D5'},
                headerTitle: 'Meus Dados',
                tabBarActiveBackgroundColor: '#dfdfdf',
                tabBarLabelStyle: styles.tabs,
                tabBarIcon: ({color, size}) => (
                    <FontAwesome5 name="user-alt" size={24} color="black" />
                )}} 
            />
            
        </Navigator>
    )
}

const styles = StyleSheet.create({
    tabs: {
        fontSize: 15, 
        color: '#000', 
        fontWeight: '600'
    }
})