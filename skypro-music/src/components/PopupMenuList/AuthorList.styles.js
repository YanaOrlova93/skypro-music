import { styled } from 'styled-components';
import 'overlayscrollbars/overlayscrollbars.css';

export const PopupList = styled.ul`
    // display: flex;
    // flex-direction: column;
    // gap: 28px;
    // background-color: #313131;
    // color: #fff;
    // max-height: 305px;
    // width: 248px;
    // box-sizing: border-box;
    // padding: 10px;
   
    // border-radius: 12px;
    // position: absolute;
    // top: 35px;
    // left: 0;
    // overflow-y: scroll;

    // &::-webkit-scrollbar {
    //     width: 8px;
    //   }
    
    //   &::-webkit-scrollbar-track {
    //     -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
    //     background-color: #f9f9fd;
    //     border-radius: 10px;
    //   }
    
    //   &::-webkit-scrollbar-thumb {
    //     border-radius: 10px;
    //     background: linear-gradient(315deg, rgb(22, 123, 217), rgb(89, 20, 146));
    //   }
    
    //   &:hover {
    //     border: 1px solid #9A48F1;
    //   }
     

    // 
    display: flex;
    flex-direction: column;
    gap: 28px;
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
    overflow-y: scroll;
    &::-webkit-scrollbar {
          width: 6px;
        }
      
        &::-webkit-scrollbar-track {
          -webkit-box-shadow: 5px 5px 5px -5px rgba(34, 60, 80, 0.2) inset;
          background-color: #f9f9fd;
          border-radius: 10px;
        }
      
        &::-webkit-scrollbar-thumb {
          border-radius: 10px;
          background: linear-gradient(315deg, rgb(22, 123, 217), rgb(89, 20, 146));
        }
      
    `;



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
