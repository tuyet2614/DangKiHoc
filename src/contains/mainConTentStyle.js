import styled from 'styled-components';

export const Wrapper = styled.div`
  flex: 1;
  height: 100vh;
  color: #f4f6f6;
  font-size: 23px;
  font-weight: bold;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
  background: #cccccc;
`;

export const Blank = styled.div`
  display: grid;
  grid-template-columns: auto auto auto;
  
  padding: 10px;
`;
export const GridItem = styled.div`
  background-color: rgba(255,255,255,0.8);
  border: 1px solid rgba(0,0,0,0.8);
  padding: 20px;
  font-size: 30px;

`;
export const WrapperTests = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  padding-left: 1em;
  padding-right: 1em;
  box-sizing: border-box;
  margin-bottom: 1em;
  
`;