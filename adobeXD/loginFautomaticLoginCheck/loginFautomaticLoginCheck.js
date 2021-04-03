import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class LoginFautomaticLoginCheck extends Component {

  constructor(props) {
      super(props);
      this.state = {
          
      };
  }


  handlePress(target, owner) {
    if (this.props.onPress) {
        let name;
        let id;
        let index = -1;
        if (target.search("::") > -1) {
            const varCount = target.split("::").length;
            if (varCount === 2) {
                name = target.split("::")[0];
                id = target.split("::")[1];
            } else if (varCount === 3) {
                name = target.split("::")[0];
                index = parseInt(target.split("::")[1]);
                id = target.split("::")[2];
            }
        } else {
            name = target;
        }
        this.props.onPress({ type: 'button', name: name, index: index, id: id, owner: owner });
    }
  }

  handleChangeTextinput(name, value) {
      let id;
      let index = -1;
      if (name.search('::') > -1) {
          const varCount = name.split("::").length;
          if (varCount === 2) {
              name = name.split("::")[0];
              id = name.split("::")[1];
          } else if (varCount === 3) {
              name = name.split("::")[0];
              index = name.split("::")[1];
              id = name.split("::")[2];
          }
      } else {
          name = name;
      }
      let state = this.state;
      state[name.split('::').join('')] = value;
      this.setState(state, () => {
          if (this.props.onChange) {
              this.props.onChange({ type: 'textinput', name: name, value: value, index: index, id: id });
          }
      });
  }

  render() {
    
    return (
    <ScrollView data-layer="0b52a2e0-6dea-4e9b-8286-7b6d7fa00b45" style={styles.loginFautomaticLoginCheck}>
        <Text data-layer="f8c4f998-ed03-46a6-9262-19aa46eff2af" style={styles.loginFautomaticLoginCheck_connectajou}>Connect
AJOU</Text>
        <View data-layer="bd1415ce-25c0-4e66-9514-22981b01050d" style={styles.loginFautomaticLoginCheck_x14}></View>
        <View data-layer="6bd2aae0-c375-45c0-9f2a-87c771754d8e" style={styles.loginFautomaticLoginCheck_x15}></View>
        <Svg data-layer="66c1ce3a-db3b-40ab-b12c-c2b4d5f630a2" style={styles.loginFautomaticLoginCheck_iconMaterialCheckBox} preserveAspectRatio="none" viewBox="4.5 4.5 20 20" fill="rgba(215, 221, 226, 1)"><SvgPath d="M 22.27777671813965 4.5 L 6.722221851348877 4.5 C 5.488888740539551 4.5 4.5 5.499999523162842 4.5 6.722221851348877 L 4.5 22.27777671813965 C 4.5 23.49999809265137 5.488888740539551 24.49999809265137 6.722221851348877 24.49999809265137 L 22.27777671813965 24.49999809265137 C 23.51111030578613 24.49999809265137 24.49999809265137 23.49999809265137 24.49999809265137 22.27777671813965 L 24.49999809265137 6.722221851348877 C 24.49999809265137 5.499999523162842 23.51111030578613 4.5 22.27777671813965 4.5 Z M 12.27777767181396 20.0555534362793 L 6.722221851348877 14.5 L 8.288888931274414 12.93333339691162 L 12.27777767181396 16.91110992431641 L 20.71110916137695 8.477776527404785 L 22.27777671813965 10.05555534362793 L 12.27777767181396 20.0555534362793 Z"  /></Svg>
        <Text data-layer="3c89041c-e640-4105-9d19-f961441d76a9" style={styles.loginFautomaticLoginCheck_automaticLogin}>Automatic login</Text>
        <Text data-layer="7dca4b2c-3925-4938-a1b0-b1a4ca8c7f87" style={styles.loginFautomaticLoginCheck_ajouPortalId}>Ajou Portal ID</Text>
        <Text data-layer="3f18ffeb-b724-41fc-ba05-488b448a894e" style={styles.loginFautomaticLoginCheck_ajouPortalPassword}>Ajou Portal Password</Text>
        <View data-layer="fa451f05-92db-4ce5-b5f4-27305cecc6e1" style={styles.loginFautomaticLoginCheck_x46}>
            <View data-layer="d9ecf352-54ce-464b-90af-98a386d8a74e" style={styles.loginFautomaticLoginCheck_x46_x41}>
                <View data-layer="c72a5145-dca4-48d0-8bcc-f1b1616be3ae" style={styles.loginFautomaticLoginCheck_x46_x41_x1624c4210a}></View>
                <Text data-layer="a06644c3-e89d-461d-9632-c7ff5c8a990f" style={styles.loginFautomaticLoginCheck_x46_x41_login}>Login</Text>
            </View>
            <View data-layer="9b19e2da-3ae5-4c22-9b88-6ccd4b761282" style={styles.loginFautomaticLoginCheck_x46_x42}>
                <View data-layer="abe87549-7e44-49df-ad73-ed5bbbfa7d16" style={styles.loginFautomaticLoginCheck_x46_x42_x16}></View>
                <Text data-layer="13250874-4143-48b3-becb-0ea8a5792b6b" style={styles.loginFautomaticLoginCheck_x46_x42_register}>Register</Text>
            </View>
        </View>
    </ScrollView>
    );
  }
}

LoginFautomaticLoginCheck.propTypes = {

}

LoginFautomaticLoginCheck.defaultProps = {

}


const styles = StyleSheet.create({
  "loginFautomaticLoginCheck": {
    "opacity": 1,
    "position": "relative",
    "backgroundColor": "rgba(89, 149, 221, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 428,
    "height": 926,
    "left": 0,
    "top": 0
  },
  "loginFautomaticLoginCheck_connectajou": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(246, 248, 248, 1)",
    "fontSize": 60,
    "fontWeight": "700",
    "fontStyle": "normal",
    "fontFamily": "THELuxGul",
    "textAlign": "center",
    "lineHeight": 100,
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 304,
    "height": 219,
    "left": 62,
    "top": 167
  },
  "loginFautomaticLoginCheck_x14": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(215, 221, 226, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(215, 221, 226, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(215, 221, 226, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(215, 221, 226, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 10,
    "width": 345,
    "height": 54,
    "left": 41,
    "top": 395
  },
  "loginFautomaticLoginCheck_x15": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 1)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopWidth": 2,
    "borderTopColor": "rgba(215, 221, 226, 1)",
    "borderRightWidth": 2,
    "borderRightColor": "rgba(215, 221, 226, 1)",
    "borderBottomWidth": 2,
    "borderBottomColor": "rgba(215, 221, 226, 1)",
    "borderLeftWidth": 2,
    "borderLeftColor": "rgba(215, 221, 226, 1)",
    "borderTopLeftRadius": 10,
    "borderTopRightRadius": 0,
    "borderBottomLeftRadius": 0,
    "borderBottomRightRadius": 10,
    "width": 345,
    "height": 54,
    "left": 42,
    "top": 478
  },
  "loginFautomaticLoginCheck_iconMaterialCheckBox": {
    "opacity": 1,
    "position": "absolute",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 20,
    "height": 20,
    "left": 45,
    "top": 550
  },
  "loginFautomaticLoginCheck_automaticLogin": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 15,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "EBS HMJE Saeron R",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 114,
    "height": 15,
    "left": 68,
    "top": 553
  },
  "loginFautomaticLoginCheck_ajouPortalId": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(215, 221, 226, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "EBS HMJE Saeron R",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 145,
    "height": 20,
    "left": 50,
    "top": 412
  },
  "loginFautomaticLoginCheck_ajouPortalPassword": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(215, 221, 226, 1)",
    "fontSize": 20,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "EBS HMJE Saeron R",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 202,
    "height": 20,
    "left": 55,
    "top": 495
  },
  "loginFautomaticLoginCheck_x46": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 313,
    "height": 43,
    "left": 58,
    "top": 768
  },
  "loginFautomaticLoginCheck_x46_x41": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 150,
    "height": 43,
    "left": 163,
    "top": 0
  },
  "loginFautomaticLoginCheck_x46_x41_x1624c4210a": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(30, 61, 107, 0.8)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(215,  221,  226)",
    "shadowOpacity": 1,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 3,
    "width": 150,
    "height": 43,
    "left": 0,
    "top": 0
  },
  "loginFautomaticLoginCheck_x46_x41_login": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "EBS HMJE Saeron R",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 87,
    "height": 25,
    "left": 31,
    "top": 11
  },
  "loginFautomaticLoginCheck_x46_x42": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "transparent",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 150,
    "height": 43,
    "left": 0,
    "top": 0
  },
  "loginFautomaticLoginCheck_x46_x42_x16": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(30, 61, 107, 0.8)",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "borderTopLeftRadius": 20,
    "borderTopRightRadius": 20,
    "borderBottomLeftRadius": 20,
    "borderBottomRightRadius": 20,
    "shadowColor": "rgb(215,  221,  226)",
    "shadowOpacity": 1,
    "shadowOffset": {
      "width": 0,
      "height": 0
    },
    "shadowRadius": 3,
    "width": 150,
    "height": 43,
    "left": 0,
    "top": 0
  },
  "loginFautomaticLoginCheck_x46_x42_register": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(255, 255, 255, 1)",
    "fontSize": 25,
    "fontWeight": "400",
    "fontStyle": "normal",
    "fontFamily": "EBS HMJE Saeron R",
    "textAlign": "center",
    "marginTop": 0,
    "marginRight": 0,
    "marginBottom": 0,
    "marginLeft": 0,
    "paddingTop": 0,
    "paddingRight": 0,
    "paddingBottom": 0,
    "paddingLeft": 0,
    "width": 109,
    "height": 25,
    "left": 21,
    "top": 8
  }
});