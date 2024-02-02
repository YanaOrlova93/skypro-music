// import { styled } from 'styled-components';
import styled, { css } from 'styled-components';
export const CenterblockFilter = styled.div`
    display: -webkit-box;
    display: -ms-flexbox;
    display: flex;
    -webkit-box-orient: horizontal;
    -webkit-box-direction: normal;
    -ms-flex-direction: row;
    flex-direction: row;
    -webkit-box-align: center;
    -ms-flex-align: center;
    align-items: center;
    margin-bottom: 51px;
`

export const FilterTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    margin-right: 15px;
`

export const FilterContent = styled.div`
    position: relative;
    &:not(:last-child) {
        margin-right: 10px;
    }
`

export const FilterButton = styled.button`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    border-radius: 60px;
    padding: 6px 20px;
    &:hover {
        border-color: #d9b6ff;
        color: #d9b6ff;
        cursor: pointer;
        
    }
    
    ${props => props.isActive && css`
    color: #d9b6ff; // Цвет текста для активной кнопки
    border-color: #ad61ff; // Цвет границы для активной кнопки
    cursor: pointer;
  `}
`;



  
