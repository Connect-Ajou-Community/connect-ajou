import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';
import Svg, {Defs, Pattern} from 'react-native-svg';
import {Path as SvgPath} from 'react-native-svg';
import {Text as SvgText} from 'react-native-svg';
import {Image as SvgImage} from 'react-native-svg';

export default class LoginF extends Component {

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
    <ScrollView data-layer="d5f72dbf-5cdd-40ce-9bde-a9e1c72f9df5" style={styles.loginF}>
        <Text data-layer="6bc5651d-337c-4865-ad3e-70c31633882d" style={styles.loginF_connectajou}>Connect
AJOU</Text>
        <View data-layer="3412046b-28a8-44bb-8d7d-110f8a39e8ab" style={styles.loginF_x14}></View>
        <View data-layer="efc58e74-31a9-4dc3-9e5b-15db8414335d" style={styles.loginF_x15}></View>
        <View data-layer="1215fbbf-b978-4346-81ed-fe3b002c58e4" style={styles.loginF_iconMaterialCheckBoxOutlineBlankfbd4a8c4}>
            <Svg data-layer="ce54a7a6-6689-4d2a-836d-0dc27525aba7" style={styles.loginF_iconMaterialCheckBoxOutlineBlankfbd4a8c4_iconMaterialCheckBoxOutlineBlank} preserveAspectRatio="none" viewBox="4.5 4.5 20 20" fill="rgba(246, 248, 248, 1)"><SvgPath d="M 22.27777671813965 6.722221851348877 L 22.27777671813965 22.27777671813965 L 6.722221851348877 22.27777671813965 L 6.722221851348877 6.722221851348877 L 22.27777671813965 6.722221851348877 M 22.27777671813965 4.5 L 6.722221851348877 4.5 C 5.499999523162842 4.5 4.5 5.499999523162842 4.5 6.722221851348877 L 4.5 22.27777671813965 C 4.5 23.49999809265137 5.499999523162842 24.49999809265137 6.722221851348877 24.49999809265137 L 22.27777671813965 24.49999809265137 C 23.49999809265137 24.49999809265137 24.49999809265137 23.49999809265137 24.49999809265137 22.27777671813965 L 24.49999809265137 6.722221851348877 C 24.49999809265137 5.499999523162842 23.49999809265137 4.5 22.27777671813965 4.5 Z"  /></Svg>
        </View>
        <Text data-layer="1191d0a1-9f4b-4367-bb45-c9de97a11714" style={styles.loginF_automaticLogin}>Automatic login</Text>
        <Text data-layer="fc46c7c5-e128-4a67-87f6-cb9ea3227f44" style={styles.loginF_ajouPortalId}>Ajou Portal ID</Text>
        <Text data-layer="f0b4f52b-451b-4e46-9fc7-af6ae712dd17" style={styles.loginF_ajouPortalPassword}>Ajou Portal Password</Text>
        <View data-layer="de2b65d1-d294-4b5e-8895-ea1269611081" style={styles.loginF_x45}>
            <View data-layer="2f025abe-978d-41d0-9954-f4013e34f24d" style={styles.loginF_x45_x41}>
                <View data-layer="b2fbf685-b5f6-4745-ab55-2a0babde6fdf" style={styles.loginF_x45_x41_x1619756d6f}></View>
                <Text data-layer="0c3a2227-71f4-48fb-8731-059198104b8d" style={styles.loginF_x45_x41_login}>Login</Text>
            </View>
            <View data-layer="0b65eb02-3bf1-4529-9f6c-914fbce7c32d" style={styles.loginF_x45_x42}>
                <View data-layer="b5629ffa-2457-4f5e-a825-7ac5aced01bd" style={styles.loginF_x45_x42_x16}></View>
                <Text data-layer="5431f4be-0592-4319-a7e2-a7dca0efe15f" style={styles.loginF_x45_x42_register}>Register</Text>
            </View>
        </View>
    </ScrollView>
    );
  }
}

LoginF.propTypes = {

}

LoginF.defaultProps = {

}


const styles = StyleSheet.create({
  "loginF": {
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
  "loginF_connectajou": {
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
  "loginF_x14": {
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
  "loginF_x15": {
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
  "loginF_iconMaterialCheckBoxOutlineBlankfbd4a8c4": {
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
    "width": 20,
    "height": 20,
    "left": 45,
    "top": 550
  },
  "loginF_iconMaterialCheckBoxOutlineBlankfbd4a8c4_iconMaterialCheckBoxOutlineBlank": {
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
    "left": 0,
    "top": 0
  },
  "loginF_automaticLogin": {
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
  "loginF_ajouPortalId": {
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
  "loginF_ajouPortalPassword": {
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
  "loginF_x45": {
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
  "loginF_x45_x41": {
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
  "loginF_x45_x41_x1619756d6f": {
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
  "loginF_x45_x41_login": {
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
  "loginF_x45_x42": {
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
  "loginF_x45_x42_x16": {
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
  "loginF_x45_x42_register": {
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