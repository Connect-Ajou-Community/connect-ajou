import React, {Component} from 'react';
import PropTypes from "prop-types";
import {StyleSheet, Text, View, TextInput, FlatList, Picker, ScrollView, TouchableHighlight} from 'react-native';
import {Image as ReactImage} from 'react-native';


export default class SignIn extends Component {

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
    <ScrollView data-layer="0d136512-d7ae-4bdb-a803-a4dafd202c2b" style={styles.signIn}>
        <Text data-layer="8f587d97-b4cf-4fc9-a31b-0196915ad7c5" style={styles.signIn_connectAjou}>Connect AJOU</Text>
        <View data-layer="a33525a8-22c1-4c47-8044-eb01c79491e2" style={styles.signIn_x17}></View>
        <View data-layer="ca57423f-a774-4f30-ba80-f000588b5f62" style={styles.signIn_x18}></View>
        <Text data-layer="c75fe59e-e247-4c34-b0b1-cc8b7151174e" style={styles.signIn_name}>Name</Text>
        <Text data-layer="ed7061c0-176c-4fe5-b91d-35f0689e721f" style={styles.signIn_ajouPortalId}>Ajou Portal ID</Text>
        <View data-layer="65a0ff02-1de2-47e8-b9dd-abdaeefcde45" style={styles.signIn_x19}></View>
        <View data-layer="ac0050cb-efbb-4719-8d83-b486c4d44509" style={styles.signIn_x20}></View>
        <Text data-layer="0eda3955-03f6-42d2-b1f3-d9719fb88efe" style={styles.signIn_password}>PASSWORD</Text>
        <Text data-layer="308c41ef-7ed0-4ee9-b1bc-e2e8cf0c5a02" style={styles.signIn_passworrdCheck}>PASSWORRD CHECK</Text>
    </ScrollView>
    );
  }
}

SignIn.propTypes = {

}

SignIn.defaultProps = {

}


const styles = StyleSheet.create({
  "signIn": {
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
  "signIn_connectAjou": {
    "opacity": 1,
    "position": "absolute",
    "backgroundColor": "rgba(255, 255, 255, 0)",
    "color": "rgba(246, 248, 248, 1)",
    "fontSize": 40,
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
    "width": 363,
    "height": 112,
    "left": 29,
    "top": 13
  },
  "signIn_x17": {
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
    "width": 241,
    "height": 54,
    "left": 130,
    "top": 276
  },
  "signIn_x18": {
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
    "width": 240,
    "height": 54,
    "left": 131,
    "top": 359
  },
  "signIn_name": {
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
    "left": 139,
    "top": 293
  },
  "signIn_ajouPortalId": {
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
    "left": 144,
    "top": 376
  },
  "signIn_x19": {
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
    "width": 241,
    "height": 54,
    "left": 131,
    "top": 519
  },
  "signIn_x20": {
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
    "width": 240,
    "height": 54,
    "left": 132,
    "top": 602
  },
  "signIn_password": {
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
    "left": 140,
    "top": 536
  },
  "signIn_passworrdCheck": {
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
    "left": 145,
    "top": 619
  }
});