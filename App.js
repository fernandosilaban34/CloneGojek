import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  TextInput
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

const App: () => React$Node = () => {
  return (
    <View style = {{backgroundColor : 'yellow', flex: 1}}>
      <View style = {{backgroundColor : 'white', flex : 1}}>
        <View style = {{paddingTop : 15, flexDirection : "row"}}>
          <View style = {{flex : 1, position : "relative"}}>
            <TextInput placeholder = "What do you want to eat ?" style = {{backgroundColor : "white", paddingLeft : 45,borderWidth : 1, borderRadius : 25, marginLeft : 25, paddingRight : 20, borderColor : "##f4f4f4"}}/>
            </View>
            <Image source = {require('../CloneGojek/icon/search.png')} style = {{position : "absolute", top : 25, left : 37, width: 30,height: 30,resizeMode: 'contain'}}>
            </Image>
          <View style = {{width : 30, marginRight : 25, alignItems : "center", position : "relative"}}>
            <Image source = {require('./icon/discon.png')} style = {{width :40, height : 40, position : "absolute", top : 4, left :4}}>
            </Image>
          </View>
        </View>
        <View style = {{flexDirection : "row", paddingLeft : 30, marginRight : 25, paddingTop : 20 }}>
        <View style = {{backgroundColor : "#3e64ff", height : 60, paddingLeft : 15, flex : 1,borderTopRightRadius :10, borderTopLeftRadius : 10, alignContent : "center", justifyContent : "space-between", flexDirection : "row", paddingTop : 15}}>
          <Text style = {{ color : "white", fontSize : 17, fontWeight : "bold"}}>GO- DELEV</Text>
          <Text style = {{paddingRight : 20, color : "white", fontSize : 17, fontWeight :  "bold"}}>Rp 50.000</Text>
        </View>
        </View>
        <View style = {{flexDirection : "row", paddingBottom : 20, marginLeft : 30, marginRight : 25, backgroundColor : "#2e70ff", borderBottomLeftRadius : 10, borderBottomRightRadius : 10 }}>
          <View style = {{height : 50, flex : 1, alignItems : "center"}}>
            <Image source = {require('./icon/fork.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}>
            </Image>
            <Text style = {{color : "white", fontWeight : "bold", fontSize : 12}}>FOOD</Text>
          </View>
          <View style = {{flex : 1, alignItems : "center"}}>
            <Image source = {require('./icon/shop.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}>
            </Image>
            <Text style = {{color : "white", fontWeight : "bold", fontSize : 12}}>SHOP</Text>
          </View>
          <View style = {{flex : 1, alignItems : "center"}}>
            <Image source = {require('./icon/delivery.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}>
            </Image>
            <Text style = {{color : "white", fontWeight : "bold", fontSize : 12}}>GO-JEK</Text>
          </View>
          <View style = {{flex : 1, alignItems : "center"}}>
            <Image source = {require('./icon/package.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}>
            </Image>
            <Text style = {{color : "white", fontWeight : "bold", fontSize : 12}}>DELEVERY</Text>
          </View>
          <View style = {{flex : 1, alignItems : "center"}}>
            <Image source = {require('./icon/waiter.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}>
            </Image>
            <Text style = {{color : "white", fontWeight : "bold", fontSize : 12}}>Account</Text>
          </View>
        </View>
        <View style = {{flexDirection : "row", paddingTop : 15, marginHorizontal : 30, alignItems : "flex-start"}}>
          <View style = {{width : 50, height : 60, flex : 1, margin : 6, alignItems : "center"}}>
            <Image source = {require('./icon/bicycle.png')} style = {{height : 45 , width : 45}}></Image>
            <Text style = {{paddingTop : 10, color : "#3a3535"}}>GoRide</Text>
          </View>
          <View style = {{width : 50, height : 60, flex : 1, margin : 6, alignItems : "center" }}>
            <Image source = {require('./icon/bicycle.png')} style = {{height : 45 , width : 45}}></Image>
            <Text style = {{paddingTop : 10, color : "#3a3535"}}>GoCar</Text>
          </View>
          <View style = {{ width : 50, height : 60, flex : 1, margin : 6, alignItems : "center" }}>
            <Image source = {require('./icon/bicycle.png')} style = {{height : 45 , width : 45}}></Image>
            <Text style = {{paddingTop : 10, color : "#3a3535"}}>GoFood</Text>
          </View>
          <View style = {{ width : 50, height : 60, flex : 1, margin : 6, alignItems : "center" }}>
            <Image source = {require('./icon/bicycle.png')} style = {{height : 45 , width : 45}}></Image>
            <Text style = {{paddingTop : 10, color : "#3a3535"}}>GoBluebird</Text>
          </View>
        </View>
        <View style = {{marginRight : 30}}>
          <View style = {{paddingTop : 40, paddingLeft : 30}}>
            <Text style = {{fontSize : 20, fontWeight : "bold"}}>Konten buat kamu</Text>
          </View>
          <View style = {{flexDirection : "row", margin : 5, flex : 1, paddingLeft : 30}}>
            <View style = {{flex : 1}}>
              <Text style = {{borderRadius : 25, margin: 5, alignContent : "center"}}> Apa Aja</Text>
            </View>
            <View style = {{flex : 1}}>
              <Text style = {{backgroundColor : "green", borderRadius : 25, margin: 5, alignContent : "center"}}> Promo</Text>
            </View>
            <View style = {{flex : 1}}>
              <Text style = {{backgroundColor : "green", borderRadius : 25, margin: 5, alignContent : "center"}}> Jalan-jalan</Text>
            </View>
            <View style = {{flex : 1}}>
              <Text style = {{backgroundColor : "green", borderRadius : 25, margin: 5, alignContent : "center"}}> Makanan</Text>
            </View>
          </View>
        </View>
      </View>
      <View style = {{backgroundColor : 'white', height : 54, flexDirection : "row"}}>
        <View style = {{flex : 1, alignItems : "center",justifyContent : "center"}}>
          <View style = {{backgroundColor : "white", height : 25, width : 25 , alignItems : "center"}}>
          <Image source = {require('./icon/house.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}></Image>
          </View>
          <Text style = {{fontSize : 10, color : "#524545", marginTop : 4}}>Home
          </Text>
        </View>
        <View style = {{flex : 1, alignItems : "center",justifyContent : "center"}}>
          <View style = {{backgroundColor : "white", height : 25, width : 25, alignItems : "center"}}>
          <Image source = {require('./icon/house.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}></Image>
          </View>
          <Text style = {{fontSize : 10, color : "#524545", marginTop : 4}}>Orders</Text>
        </View>
        <View style = {{ flex : 1, alignItems : "center",justifyContent : "center"}}>
          <View style = {{backgroundColor : "white", height : 25, width : 25, alignItems : "center" }}>
          <Image source = {require('./icon/house.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}></Image>
          </View>
          <Text style = {{fontSize : 10, color : "#524545", marginTop : 4}}>Help
          </Text>
        </View>
        <View style = {{flex : 1, alignItems : "center",justifyContent : "center"}}>
          <View style = {{backgroundColor : "white", height : 25, width : 25, alignItems : "center" }}>
          <Image source = {require('./icon/house.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}/>
          </View>
          <Text style = {{fontSize : 10, color : "#524545", marginTop : 4}}>Inbox</Text>
        </View>
        <View style = {{flex : 1, alignItems : "center",justifyContent : "center"}}>
          <View style = {{backgroundColor : "white", height : 25, width : 25, alignItems : "center" }}>
          <Image source = {require('./icon/house.png')} style = {{flex: 1,width: 50,height: 50,resizeMode: 'contain'}}></Image>
          </View>
          <Text style = {{fontSize : 10, color : "#524545", marginTop : 4}}>Account</Text>
        </View>
      </View>
    </View>

  );
};

const styles = StyleSheet.create({
  
});

export default App;
