import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 15em;
    margin-right: 2.5em;
    margin-top: 1em;
    padding: 0.5em;
    border-radius: 0.3em;
    border: gray 1px solid;
    display: flex;
    flex-direction: row;
    background-color: white
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    font-weight: 400;
    font-size: 0.8em;
    color: #0007e8;
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    font-weight: 400;
    font-size: 0.8em;
    width: ${props=> props.width};
`;

export const TitleField = styled.div`
    color: #626060;
    font-weight: bold;
    margin-right: 1em;
`;

export const StarIcon = styled.img`
    width: 1.25em;
    margin-left: 0.25em;
`;
export const ButtonStart = styled.button`
    margin-top: 30px;
    margin-left: 30px;
    width: 4em;
    height: 2em;
`;