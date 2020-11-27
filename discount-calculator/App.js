import  React,{useState} from 'react';
import { Text, View, StyleSheet,TextInput,TouchableOpacity,TouchableHighlight,Modal} from 'react-native';
import Constants from 'expo-constants';
export default function App(){
  const [oPrice ,setoprice]=useState(0);
  const [dpercentage, setdpercentage]=useState(0);
  const [save , setsave]=useState(0);
  const [finalPrice ,setfinalPrice]=useState(0);
  const [modalVisible, setModalVisible] = useState(false);
  function calculate(){
    var price=oPrice *(dpercentage/100);
      setsave(price);
       var x=(oPrice-price);
       setfinalPrice(x);
  }
  const history=()=>{
    alert("Original Price: "+oPrice+"Rs")
    alert("Discount Percentage: "+dpercentage+"%")
    alert("Price After Discount: "+finalPrice +"Rs")
    
            
  }
  return (
    <View style={styles.container}>
      <View style={styles.titleView}>
          <Text style={styles.title}> Discount Calculator  </Text>
      </View>
      <View style={styles.inputField1}>
         <TextInput style={styles.textInput} placeholder='Enter Original Price' keyboardType='numeric' keyboardAppearance='dark' onChangeText={(text) => setoprice(text)}>
      
        
        </TextInput>
    
      </View>
       <View style={styles.inputField2}>
         <TextInput style={styles.textInput} placeholder='Enter Discount Percentage' 
         onChangeText={(text) => setdpercentage(text)} keyboardType='numeric' keyboardAppearance='dark' >
         
        </TextInput>
      </View>
      <View style={styles.displayView}>
         <Text style={styles.displayText}> You Save:{save} Rs   Final Price:{finalPrice} Rs</Text>
      </View>
       <View style={styles.buttonframe1}>
        <TouchableOpacity style={styles.appButtonContainer} onPress={calculate}>
          <Text style={styles.appButtonText}> Calculate Discount</Text>
        </TouchableOpacity>
       </View>
       
        <View style={styles.centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        
      >
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <Text style={styles.modalText}>
            	Original Price:{oPrice} Rs
            
            </Text>
            <Text style={styles.modalText}>
            	Discount Percentage:{dpercentage} %
            
            </Text>
            <Text style={styles.modalText}>
            	Price After Discount:{finalPrice} Rs
            
            </Text>

            <TouchableHighlight
              style={styles.appButtonContainer}
              onPress={() => {
                setModalVisible(!modalVisible);
              }}
            >
              <Text style={styles.appButtonText}>Close History</Text>
            </TouchableHighlight>
          </View>
        </View>
      </Modal>

      <TouchableHighlight
        style={styles.appButtonContainer}
        onPress={() => {
          setModalVisible(true);
        }}
      >
        <Text style={styles.appButtonText}>Show History</Text>
      </TouchableHighlight>
    </View>
        
    </View>
  )
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#663d3c',

  },
  titleView:{
    alignItems:'center',
    paddingTop:50,

  },
  title:{
   fontWeight: 'bold',
    textAlign: 'center',
    fontSize: 28,
    backgroundColor: 'white',
    color: 'black',
    borderRadius:10,
    height: 35,
    width: 300,
    fontFamily:'sans-serif',
    fontStyle:'italic',
  },
  inputField1:{
     paddingTop:20,
  },
   inputField2:{
     paddingTop:20,
  },
  
  textInput:{
    textAlign: 'center',
    fontSize: 20,
    backgroundColor: 'white',
    color: 'black',
    borderRadius:10,
    height: 35,
    width: 300,
    fontFamily:'sans-serif',
    fontStyle:'italic',
  },
  displayView:{
    paddingTop:20,
  },
  displayText:{
    textAlign: 'center',
    fontSize: 17,
    backgroundColor: 'white',
    color: 'black',
    borderRadius:10,
    height: 35,
    width: 300,
    fontFamily:'sans-serif',
    fontStyle:'italic',
  },
   appButtonContainer: {
    elevation: 8,
    backgroundColor: 'black',
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 12,
  },
 
    buttonframe1: {
    paddingTop: 20,
  },
 
appButtonText: {
    fontSize: 20,
    color: 'white',
    fontWeight: 'bold',
    alignSelf: 'center',
    textTransform: 'uppercase',
  },

 centeredView: {
    justifyContent: "center",
    alignItems: "center",
    paddingTop:5,
  },
  modalView: {
    paddingTop:70,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },
  
  modalText: {
    marginBottom: 20,
    textAlign: "center"
  }
});


