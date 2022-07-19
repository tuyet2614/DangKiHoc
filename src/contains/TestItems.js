import React, {Component} from "react";
import {Wrapper, Row, TitleField, StarIcon, Column, ButtonStart} from './testItemsStyle';
import images from "../asset/images";

class TestItem extends Component {
    constructor(props) {
        super(props);
        this.state = {
          checked: false
        }
    }
    
    renderStars(number) {
    const stars = [];
    for(let i = 0; i < number; i++) {
      const icon = <StarIcon src={images.star} />
      stars.push(icon);
    }
    return (
      <div>
        {stars}
      </div>
    )
  }
  ChangePast = (e) => {
    e.preventDefault();
    this.setState({
      checked: true
    })
    console.log('id=', this.props.id)
    console.log('past1: ', this.props.past1)
    console.log("past2: ", this.props.text)
  }
  render() {
    return (
        <Wrapper >
          <Column width="70%">
            <Row>
              <TitleField>Name:</TitleField>
              { this.props.name }
            </Row>
            <Row>
              <TitleField>Time:</TitleField>
              { this.props.time }
            </Row>
            <Row>
              <TitleField>Point:</TitleField>
              { this.props.point }
            </Row>
            <Row>
              <TitleField>Diff:</TitleField>
              { this.renderStars(this.props.diff) }
            </Row>
            <Row>
              <TitleField>Past:</TitleField>
              <input type="checkbox" checked={this.state.checked}></input>
            </Row>
          </Column>
          <Column>
          <ButtonStart onClick={this.ChangePast}>Start</ButtonStart>
          </Column>
        </Wrapper>
    )
  }
}

export default TestItem;