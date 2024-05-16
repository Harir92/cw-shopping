
type ButtonType ={
    text : string,
    className : string,
}
const Button = ({text , className}:ButtonType) => {
  return (
    <button className= {className}>{text}</button>
  )
}

export default Button