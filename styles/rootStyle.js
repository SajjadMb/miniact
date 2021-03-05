import {StyleSheet} from 'react-native';

rootStyles =  StyleSheet.create({
    button: {
    backgroundColor: '#52b69a',
    height:50,
    width: 120,
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
  }
});

export default rootStyles;