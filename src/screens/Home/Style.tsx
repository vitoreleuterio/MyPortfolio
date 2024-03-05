import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {},
  header: { 

    flexDirection: 'column',
    justifyContent: 'center', 
    alignItems: 'center',
  }, 
  title: {
    marginTop: 30,
    fontSize: 25, 
    fontWeight: 'bold', 
  }, 
  subTitle: {
    fontSize: 20, 
    fontWeight: '500'
  },
  options: {
    textAlign: 'center',
    marginTop: 50,
    flexDirection: 'row', 
    justifyContent: 'space-around',
    alignItems: 'flex-end'
  },
  buttons: {
    
    padding: 7,
    borderRadius: 5,
    width: '40%', 
    color: '#fff', 
    textAlign: 'center', 
    fontWeight: '600', 
    fontSize: 15
  }
  
});