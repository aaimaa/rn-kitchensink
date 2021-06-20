import React, { Component } from 'react';
import { Image,Text } from "react-native";
import { Container,Content,Body,List,ListItem} from 'native-base';
export default class NavDrawer extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Image source={{uri:'https://avatars.githubusercontent.com/u/25567939?v=4'}}  
          style={{
              height: 200,
              width: 200,
              position:'relative',
              left:20,
              top:30
            }}/>
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
