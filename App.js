import { StatusBar } from "expo-status-bar";
import { StyleSheet, View, ImageBackground } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import {Nav} from './component/navBar';
import {Footer} from './component/footer';
import {Body} from './component/body';
export default function App() {
  return (
   <>
     <LinearGradient colors={['#f56d91', '#f89e54']} style={styles.background}>
   <Nav></Nav>
   <Body></Body>
   <Footer></Footer>
   </LinearGradient>

   </>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  }
});
