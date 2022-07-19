import React , { Component, useState } from 'react';
import { Wrapper, Blank, GridItem, WrapperTests } from './mainConTentStyle';
import { Pagination } from '@mui/material';
import Header from './Header';
import TestItem from './TestItems';

class MainContent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 1
    }
    console.log("data =", this.props.data)
  }
  changePage = (event, value) =>{
    this.setState({
      page: value
    })
    
    console.log(this.state.page)
  }
  renderListItem() {
    const {listItem} = this.props;
    const items = [];
    for(let i = 0; i < listItem.length; i++)
    {
      const item = (
        <TestItem 
          name = {listItem[i].name}
          point={listItem[i].point}
          time={listItem[i].time}
          diff={listItem[i].diff}
          past={listItem[i].past}
        />
      )
      items.push(item);
    }
    return (
      <WrapperTests>
        {items}
      </WrapperTests>
    )
  }
  

  render() {
    const {
      searchKeyword,
      sortFilter,
      currentPage,
      perPage,
      totalPage,
      searchOnClick,
      searchKeywordOnChange,
      sortFilterOnChange,
      listItem,
    } = this.props;
  
    return (
        <Wrapper >
            <Header
              searchKeyword={searchKeyword}
              sortFilter={sortFilter}
              searchOnClick={searchOnClick}
              searchKeywordOnChange={searchKeywordOnChange}
              sortFilterOnChange={sortFilterOnChange}
            />
            <Blank>
              { this.renderListItem() }
            </Blank>
            <Pagination 
              count={2}
              defaultPage={12}
              variant="outlined"
              shape="rounded"
              onChange = {this.changePage}
              style={{
                marginBottom: '1em'
        
              }}
            />
        </Wrapper>
    )
  }
}

export default MainContent;
