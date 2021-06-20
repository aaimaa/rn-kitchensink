import React, { Component } from 'react';
import { Image,Text } from "react-native";
import { Container,Content,Body,List,ListItem} from 'native-base';
export default class NavDrawer extends Component {
  render() {
    return (
      <Container>
        <Content>
            <List style={{marginTop:50}}>
              <ListItem button onPress={()=>this.props.navigation.navigate('Buttons')}>
                <Text>Buttons</Text>
                </ListItem>
            </List>
         
        </Content>
      </Container>
    );
  }
}
