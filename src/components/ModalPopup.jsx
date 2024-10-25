

import { Button, Modal, Select, Label, TextInput, Textarea } from "flowbite-react";
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import { formValidation } from "../Form-Validation/FormValidation";


export default function ModalPopup({ onOpen, onClose, onCreate,taskToEdit, onEdit }) {

    const { register, handleSubmit, formState: { errors } , reset } = useForm({
        resolver: yupResolver(formValidation)
    });
    // console.dir(taskToEdit);
    
    

    const onSubmit = (data) => {
       
        
        if(taskToEdit) {
            // Edit
            onEdit(data)
        } else {
            onCreate(data);

        }
        
        
        reset();
        onClose();
    }

    let formData = taskToEdit || {
        id: crypto.randomUUID(),
        title: null,
        description: null,
        assignTo: null,
        priority: null,
    }


    return (
        <>

            <Modal show={onOpen} onClose={() => onClose(false)}>
                <Modal.Header>{taskToEdit ? 'Edit Task' : 'Add Task'}</Modal.Header>
                <Modal.Body>
                    <div className="space-y-6">

                        <form className="flex flex-wrap" onSubmit={handleSubmit(onSubmit)}>
                            <div className="w-full">
                                <div className="mb-2 block">
                                    <Label htmlFor="title" value="Title" />
                                </div>

                                <input defaultValue={formData.id} {...register('id')} type="hidden" />

                                <TextInput defaultValue={formData.title}  {...register('title')} id="title" type="text" />

                                {errors.title && <span className="text-red-500">{errors.title.message}</span>}
                            </div>
                            <div className="w-full mt-3">
                                <div className="mb-2 block">
                                    <Label htmlFor="Description" value="Description" />
                                </div>
                                <Textarea defaultValue={formData.description}  {...register('description')} id="Description" placeholder="Leave a comment..." rows={4} />
                                {errors.description && <span className="text-red-500">{errors.description.message}</span>}

                            </div>
                            <div className="w-2/3 mt-3">
                                <div className="pr-3">
                                    <div className="mb-2 block">
                                        <Label htmlFor="assign" value="Assign to" />
                                    </div>
                                    <Select defaultValue={formData.assignTo} id="assign" {...register('assignTo')}>
                                        <option disabled>Select AssignTo</option>
                                        <option value="Person One">Person One</option>
                                        <option value="Person Two">Person Two</option>
                                        <option value="Person Three">Person Three</option>
                                        <option value="Person Four">Person Four</option>
                                        <option value="Person Five">Person Five</option>
                                        <option value="Person six">Person six</option>
                                        <option value="Person seven">Person seven</option>
                                    </Select>
                                    {errors.assignTo && <span className="text-red-500">{errors.assignTo.message}</span>}
                                </div>
                            </div>
                            <div className="w-1/3 mt-3">
                                <div className="mb-2 block">
                                    <Label htmlFor="assign" value="Priority" />
                                </div>
                                <Select defaultValue={formData.priority} id="assign" name="prioity" {...register('priority')}>
                                    <option disabled>Select Prioity</option>
                                    <option value="High">High</option>
                                    <option value="Medium">Medium</option>
                                    <option value="Low">Low</option>
                                </Select>
                                {errors.priority && <span className="text-red-500">{errors.priority.message}</span>}
                            </div>
                            {/* <Button className="mr-4 mt-4" >Close</Button> */}
                            <Button type="submit" className="mt-4" color="failure">{taskToEdit ? 'Update Form' : 'Add Form'}</Button>
                        </form>
                    </div>
                </Modal.Body>

            </Modal>
        </>
    );
}
