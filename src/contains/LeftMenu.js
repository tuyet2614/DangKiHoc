import React, {Component} from "react";
import { Wrapper, Avata, TextField, ButtonLogout, Blank } from "./leftMenuStyle";

class LeftMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
    
  }
  Logout() {
    window.location.replace('/login')
  }

  render() {
    const {
      username,
      totalPoint,
      testComplete,
      testNotComplete,
    } = this.props;
    return (
        <Wrapper id="LeftMenu">
            <Avata src="https://i.pinimg.com/564x/0a/bf/67/0abf6755ada521ba8db4bc799900a944.jpg" alt="avata" />
            <TextField>{username}</TextField>
            <TextField>Point: {totalPoint}</TextField>
            <TextField>Test complete: {testComplete}</TextField>
            <TextField>Test not complete: {testNotComplete}</TextField>
            <Blank />
            <ButtonLogout onClick={() => this.Logout()}>Log out</ButtonLogout>
        </Wrapper>
    )
  }
}

export default LeftMenu;