

function Practice({isOpen, isClose}) {

    let age = 10;
    let [open, setOpen] = useState(false);

  let closeHandler = () => {
    setOpen (false);
  }



  return (

    // <button onClick={() => setOpen(true)} className="bg-red-500 text-2xl">Click Me</button>

    // <Practice isOpen={open} isClose={closeHandler} />
    <div className="h-96 bg-gray-600">
        {isOpen &&  <h1 className="text-3xl bg-gray-500">Modal Open <button onClick={()  => isClose()} className="bg-red-500">Close Me</button>  </h1> }
    </div>
  )
}

export default Practice