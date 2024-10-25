


function Container(props) {
  return (
    <div className={`max-w-7xl m-auto px-3 ${props.className}`}>{props.children}</div>
  )
}

export default Container;