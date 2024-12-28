import React from 'react'

const Footer = (props) => {
    const year= new Date();

  return (
    <footer>"{props.length}" {props.length==1|| props.length==0? "Task are assigned":"Tasks are assigned"} {year.getDate()}/{year.getMonth()}/{year.getFullYear()}, Copyright &copy; {year.getFullYear()} </footer>
  )
}

export default Footer