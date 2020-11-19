import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet
} from "react-native"
import DateTimePicker from "react-native-datepicker"
import Icon from "react-native-vector-icons/FontAwesome"
import Slider from "@react-native-community/slider"
import { CheckBox } from "react-native-elements"
import { SlideMenuIcon } from "../../../navigator/slideMenuIcon"
import { connect } from "react-redux"
export class Blank extends React.Component {
  static navigationOptions = ({ navigation }) => {
    return { headerLeft: <SlideMenuIcon navigationProps={navigation} /> }
  }
  state = { TextInput_2: "" }
  render = () => (
    <View style={styles.View_1}>
      <TextInput
        placeholder="Sample text input placeholder"
        style={styles.TextInput_2}
        value={this.state.TextInput_2}
        onChangeText={nextValue => this.setState({ TextInput_2: nextValue })}
      />
      <Button
        title="RECEIVE J DOC"
        color="#ff8533"
        onPress={() => this.props.navigation.navigate("BlankScreen1143073")}
      />
      <Button
        title="RECEIVE C DOC"
        color="#ff8533"
        style={styles.Button_5}
        onPress={() => this.props.navigation.navigate("BlankScreen2143074")}
      />
      <Button
        title="HYDROSTAT"
        color="#FF8533"
        style={styles.Button_6}
        onPress={() => this.props.navigation.navigate("BlankScreen3143075")}
      />
      <Button
        title="STATS"
        color="#FF8533"
        style={styles.Button_4}
        onPress={() => this.props.navigation.navigate("BlankScreen4143076")}
      />
      <Button
        title="Press me!"
        onPress={() => this.props.navigation.navigate("TeamChat8175596")}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, marginHorizontal: 16 },
  View_1: { alignItems: "stretch" },
  TextInput_2: { height: 100 },
  Button_3: {},
  Button_5: { alignSelf: "center" },
  Button_6: { width: "50%", alignSelf: "flex-end" },
  Button_4: { width: "50%", alignSelf: "flex-end" },
  Button_8: {}
})

function mapStateToProps(state) {
  return { state: state.apiReducer }
}
const actionCreators = {}
export default connect(mapStateToProps, actionCreators)(Blank)
