import { TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";

function TableHeader({onSearch}) {



  let changeHandler = (e) => {
    let val = e.target.value;

    onSearch(val);
  }

  return (
    <div className="flex justify-between items-center mt-2 mb-3">
        <h2 className="text-3xl pl-3 text-rose-500">Your Task</h2>
            <div className="max-w-lg">
                <TextInput onChange={changeHandler} id="email4" type="email" rightIcon={FaSearch} placeholder="text hare" required />
            </div>
    </div>
  )
}

export default TableHeader