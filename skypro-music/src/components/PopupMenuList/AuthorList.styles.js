import { styled } from 'styled-components';
import 'overlayscrollbars/overlayscrollbars.css';

export const PopupList = styled.ul`
    display: flex;
    flex-direction: column;
    background-color: #313131;
    color: #fff;
    max-height: 250px;
    max-width: 400px;
    box-sizing: border-box;
    padding: 10px;
    border-radius: 12px;
    z-index: 2;
    position: absolute;
    left: 0;
    overflow: scroll;
    margin-top: 10px;
    overflow-x: hidden;
    overflow-y: hidden;
`

export const PopupItem = styled.li`
    padding: 10px;
    transition: all 0.3s;
&:hover {
    color: blueviolet;
    cursor: pointer;
    text-decoration: underline; 
}
`

export const BlockScroll = styled.div`
    padding: 14px
`
