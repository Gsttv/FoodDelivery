import { View, Pressable, Image } from 'react-native';
import PagerView from "react-native-pager-view"

export function Banner() {
 return (
   <View className="w-full h-36 md:h-60 rounded-2xl mt-5 mb-4" style={{ flex: 1 }}>
    

      <Pressable 
        className="w-full h-36 md:h-60 rounded-2xl" 
        key="1"
      >
        <Image
          source={require("../../assets/banner1.png")}
          className="w-full h-36 md:h-60 rounded-2xl"
        />
      </Pressable>


 
   </View>
  );
}