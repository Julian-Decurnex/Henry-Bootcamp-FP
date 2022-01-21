import styled from 'styled-components';
import { FC } from 'react';
import {useState} from 'react'
import { useDispatch } from "react-redux";

interface Search {
  postulacion?: string | undefined,
  localizacion?: string | undefined
}

const SearchBar=() => {
  const Button = styled.a`
      margin-top: 3rem;
      font-size: 20px;
      font-style: normal;
      font-weight: 400;
      line-height: 22px;
      letter-spacing: 0.10000000149011612px;
      text-align: center;
      color: white;
      background: #C879FF;
      border-radius: 15px;
      padding: 10px 30px;
      cursor: pointer;
      user-select: none;
      transition-duration: 0.5s;
      :hover {
        transform: scale(1.01, 1.01);
        box-shadow: 6px 6px 5px -4px rgba(0,0,0,0.43);
        -webkit-box-shadow: 6px 6px 5px -4px rgba(0,0,0,0.43);
        -moz-box-shadow: 6px 6px 5px -4px rgba(0,0,0,0.43);
        transition-duration: 0.5s;
      }
    `
  const MainFlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    border-radius: 30px;
    width: 900px;
    height: 123px;
    background: white;
    padding: 20px 40px 20px 40px;
    position: absolute;
    justify-content: space-between;
    align-items: flex-end;
    box-shadow: -6px -2px 15px -7px rgba(0,0,0,0.73);
    -webkit-box-shadow: -6px -2px 15px -7px rgba(0,0,0,0.73);
    -moz-box-shadow: -6px -2px 15px -7px rgba(0,0,0,0.73);
  `
  const IndDivs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  `

  const Titles = styled.h3`
    padding: 13px 0 10px 0;
    font-weight: 100;
    color: #757577;
    padding-left: 7px;
    font-size: 20px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: 0.2px;
    text-align: center;

  `

  const Inputs = styled.input`
    width: 306px;
    height: 42px;
    border-radius: 15px;
    border: 1px solid #FFB7FF;
    background: #FFB7FF1A;
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 22px;
    letter-spacing: -0.04em;
    text-align: left;
    padding-left: 1rem;
    ::placeholder {
      color: #AFB0E9;
    }
    :focus {
      background: #ffb7ff30;
      outline: none;
    }
  `
  const dispatch = useDispatch()
  const [search, setSearch]= useState<Search>()

  const handleChange= (e:any)=>{
    e.preventDefault()
    setSearch({
      ...search,  
      [e.target.name]: e.target.value,
  })
  }

  const handleClick=(e:any)=>{
    e.preventDefault()
    //dispatch(getPosts(search))
    setSearch({
    postulacion: '',
    localizacion: ''})
  }

    return (
      <div>
        <MainFlexDiv>
          <IndDivs>
            <Titles>Buscar trabajo</Titles>
            <Inputs type='text' name='postulacion' placeholder='Ingrese palabras clave' onChange={handleChange} value={search?.postulacion}/>
          </IndDivs>
          <IndDivs>
            <Titles>Localización</Titles>
            <Inputs type='text' name='localizacion' placeholder='Ingrese ciudad' onChange={handleChange} value={search?.localizacion}/>
          </IndDivs>
          <Button onClick={handleClick}>Buscar</Button>
        </MainFlexDiv>
      </div>
    )
}

export default SearchBar
