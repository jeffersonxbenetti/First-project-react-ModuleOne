import styled from 'styled-components'
import { FcEmptyTrash, FcCheckmark } from "react-icons/fc";

export const Container = styled.div`
    background: linear-gradient(90deg, #383838 0%, #000000 81.25%);
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const TodoList = styled.div`
    width: 541px;
    background: #fff;
    border-radius: 5px;
    padding: 20px;
`

export const Input = styled.input`
    width: 342px;
    height: 40px;
    font-size: 15px;
    font-weight: 400;
    border: 1px solid #D1D3D4;
    border-radius: 5px;
    padding-left: 15px;
`

export const Button = styled.button`
    width: 130px;
    height: 40px;
    font-size: 15px;
    font-weight: 900;
    color: #ffffff;
    border: none;
    border-radius: 5px;
    background: #8052EC;
    float: right;
    transition: 400ms ease-in-out;
    cursor: pointer;

    &:hover {
        background: #fff;
        color: #8052EC;
        border: 1px solid #8052EC;
    }
`

export const ListItem = styled.div`
    width: 100%;   
    height: 60px;
    background: ${props => props.$isFinished ? "#E8FF8B" : "#E4E4E4"};
    border-radius: 5px;
    box-shadow: 1px 4px 10px 0px #00000033;
    list-style: none;
    padding: 0 15px;
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    li{
        font-size: 16px;
        font-weight: 400;
    }
`

export const Check = styled(FcCheckmark)`
    cursor: pointer;
`

export const Trash = styled(FcEmptyTrash)`
    cursor: pointer;
`

export const TitleTree = styled.h3`
    color: red;
    font-size: 30px;
    text-align: center;
    margin-top: 40px;
`