

import { Button, Modal, Select, Label, TextInput, Textarea } from "flowbite-react";
import { useState } from "react";


export default function ModalPopup({ onOpen, onClose }) {


    let [data, setData] = useState({
        title: '',
        description: '',
        assignTo: '',
        prioity: ''
    });

    let [errors, setErrors] = useState({
        title: null,
        description: null,
        assignTo: null,
        prioity: null
    });

    let changeHandler = (e) => {


        let newObject = {
            ...data,
            [e.target.name]: e.target.value,

        }

        setData(newObject);
        setErrors({
            title: null,
            description: null,
            assignTo: null,
            prioity: null
        })

    }

    console.log(data);


    // Submit from;
    let submitHandler = (event) => {
        event.preventDefault();

        if (data.title === '') {
            setErrors({
                ...errors,
                title: 'The title errors',
            });
        } else   if (data.description === '') {
            setErrors({
                ...errors,
                description: 'The description errors',
            })
        }

    }


    return (
        <>

            <Modal show={onOpen} onClose={() => onClose(false)}>
                <Modal.Header>Add Task</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">

                        <form action="" className="flex flex-wrap" onSubmit={submitHandler}>
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Title" />
                                </div>
                                <TextInput name="titile" onChange={changeHandler} id="title" type="text" />
                                {errors.title && <span className="text-red-500">{errors.title}</span>}
                            </div>
                            <div className="w-full mt-3">
                                <div className="mb-2 block">
                                    <Label htmlFor="Description" value="Description" />
                                </div>
                                <Textarea name="description" onChange={changeHandler} id="Description" placeholder="Leave a comment..." rows={4} />
                                {errors.description && <span className="text-red-500">{errors.description}</span>}
                            </div>
                            <div className="w-2/3 mt-3">
                                <div className="pr-3">
                                    <div className="mb-2 block">
                                        <Label htmlFor="assign" value="Assign to" />
                                    </div>
                                    <Select id="assign" name="assignTo" onChange={changeHandler}>
                                        <option value="Person One">Person One</option>
                                        <option value="Person Two">Person Two</option>
                                        <option value="Person Three">Person Three</option>
                                        <option value="Person Four">Person Four</option>
                                        <option value="Person Five">Person Five</option>
                                        <option value="Person six">Person six</option>
                                        <option value="Person seven">Person seven</option>
                                    </Select>
                                    {errors.assignTo && <span className="text-red-500">{errors.assignTo}</span>}
                                </div>
                            </div>
                            <div className="w-1/3 mt-3">
                                <div className="mb-2 block">
                                    <Label htmlFor="assign" value="Prioity" />
                                </div>
                                <Select id="assign" name="prioity" onChange={changeHandler}>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </Select>
                                {errors.prioity && <span className="text-red-500">{errors.prioity}</span>}
                            </div>
                            {/* <Button className="mr-4 mt-4" >Close</Button> */}
                            <Button type="submit" className="mt-4" color="failure">Add Task</Button>
                        </form>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
