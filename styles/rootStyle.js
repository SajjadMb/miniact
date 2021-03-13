import {StyleSheet} from 'react-native';

rootStyles =  StyleSheet.create({
    button: {
    backgroundColor: '#52b69a',
    height:50,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal:12,
    borderRadius:4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.5,
    shadowRadius: 2,
    elevation: 2,
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold'
  },
  textInput: {
    height: 40, 
    borderColor: 'gray',
    borderWidth: 1 ,
    paddingHorizontal:5,
    paddingVertical: 5,
    borderRadius: 4
  }
});

export default rootStyles;