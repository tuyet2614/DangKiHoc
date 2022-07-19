import React, {Component} from "react";
import styled from "styled-components";
import MainContent from "../../contains/MainContent";
import LeftMenu from "../../contains/LeftMenu";
import { Filter } from "../../constant/main";
import api from "../../service/api";
import Login from "../login/Login";

export const Wrapper = styled.div`
    width: 100vw;
    height: 100vh;
    color: #f4f6f6;
    font-size: 23px;
    font-weight: bold;
    display: flex;
    background: gray;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
`;
class Main extends Component {
  constructor(props) {
    super(props);
    const data = [];

    this.state = {
      msv: "A36687",
      totalPoint: 100,
      testComplete: 12,
      testNotComplete: 10,
      searchKeyword: '',
      sortFilter: Filter.All,
      currentPage: 1,
      perPage: 12,
      totalPage: 9,
      
      listTest: data,
      listVisible: data,
    }
  }

  componentDidMount() {
    console.log('did mount');
    const {
      currentPage,
      perPage,
    } = this.state;
    
    api.create().fetchListTest(currentPage, perPage).then(Response => {
      console.log('data =', Response)
      this.setState({listTest: Response.data.data}, () => this.getVisible())
    })
    .catch((error) => {
      const {message} = error;
      console.log('error: ', message)
    });
  }

  searchOnClick(key) {

    console.log('search key ', key);
    this.getVisible();
    
  }

  searchKeywordOnChange(key) {
    this.setState({ searchKeyword : key })
  }

  sortFilterOnChange(key) {
    this.setState({ sortFilter : key }, () => {
      this.getVisible();
    })
  }

  getVisible() {
    const { searchKeyword, sortFilter, listTest } = this.state;
    const listVisible = [];
    for(let i = 0; i < listTest.length; i ++) {
      if(listTest[i].name.includes(searchKeyword)) {
        listVisible.push(listTest[i]);
        
      }
    }

    if(sortFilter === listTest.Point)
      {
        listVisible.sort(function (a, b) {
          return a.point - b.point;
        });
      }
    if(sortFilter === Filter.Time)
      {
        listVisible.sort(function (a, b) {
          return a.time - b.time;
        });
      }
      this.setState({ listVisible });
    if(sortFilter === Filter.Diff)
    {
      listVisible.sort(function(a,b) {
        return a.diff - b.diff
      })
    }

    this.setState({ listVisible });
    
  }

  render() {
    const {
      msv,
      totalPoint,
      testComplete,
      testNotComplete,
    
      searchKeyword,
      sortFilter,
      currentPage,
      perPage,
      totalPage,
      listTest,
      listVisible,
    } = this.state;

    
    return (
      <Wrapper>
        <LeftMenu
          username = {msv}
          totalPoint={totalPoint}
          testComplete={testComplete}
          testNotComplete={testNotComplete}
        />
        <MainContent
          searchKeyword={searchKeyword}
          sortFilter={sortFilter}
          currentPage={currentPage}
          perPage={perPage}
          totalPage={totalPage}
          searchOnClick={(value) => this.searchOnClick(value)}
          searchKeywordOnChange = {(value) => this.searchKeywordOnChange(value)}
          sortFilterOnChange = {(value) => this.sortFilterOnChange(value)}
          listItem={listVisible}
        />
      </Wrapper>
    )
  }
}

export default Main;
