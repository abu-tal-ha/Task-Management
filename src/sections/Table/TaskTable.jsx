import Container from "../../components/Container"
import { Button, Label, TextInput } from "flowbite-react";
import { FaSearch } from "react-icons/fa";
import { Table } from "flowbite-react";
import TableItem from "./TableItem";
import TableHeader from "./TableHeader";
import ModalPopup from "../../components/ModalPopup";
import { useState } from "react";

function NoData() {
    return (
        <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell colSpan={6} className="text-center">No data Found</Table.Cell>

        </Table.Row>
    )
}

function TaskTable() {

    let [openModal, setOpenModal] = useState(false);
    let [tasks, setTasks] = useState([]);

    let [searchText, setSearchText] = useState('');

    let creatHandler = (item) => {
        let updateTasks = [
            ...tasks, 
            item,
            // {
            //     ...item,
            //     id: tasks.length + 1
            // }
        ];
        setTasks(updateTasks.reverse());
    }


    let editHandler = (task) => {
        setTasks(tasks.map(item => {
            if (task.id === item.id) {
                return task;
            } else {
                return item;
            }
        }));
        
    }

    let deleteHandler = (id) => {
         setTasks(tasks.filter(item => {
            return item.id != id;
         }));
        
    }


    let searchHandler = (text)  => {
        setSearchText(text);
    }

    let updatedTasks = tasks.filter(item => {
        return item.title.includes(searchText);
    });
    
    return (
        <Container className="mt-8">
            <div className="flex ">
                <Button onClick={() => setOpenModal(true)} className="mr-2 " color="failure">Add Task</Button>
                <Button color="dark" onClick={() => setTasks([])}>Clear Task</Button>
            </div>
            <div className="p-2 rounded-sm border dark:border-[#666] my-6">
                <TableHeader onSearch={searchHandler} />

                <div className="overflow-x-auto">
                    <Table hoverable>
                        <Table.Head>
                            <Table.HeadCell>#</Table.HeadCell>
                            <Table.HeadCell>Title</Table.HeadCell>
                            <Table.HeadCell>Description</Table.HeadCell> 
                            <Table.HeadCell>Assigned To</Table.HeadCell>
                            <Table.HeadCell>Priority</Table.HeadCell>
                            <Table.HeadCell>Action</Table.HeadCell>

                        </Table.Head>
                        <Table.Body className="divide-y">

                            {tasks.length == 0 ? <NoData /> : updatedTasks.map((item, index) => <TableItem onEdit={editHandler} onDelete={deleteHandler} data={item} index={index} key={item.id} />)}

                        </Table.Body>
                    </Table>
                </div>
            </div>

            <ModalPopup onCreate={creatHandler} onOpen={openModal} onClose={() => setOpenModal(false)} />
        </Container>
    )
}

export default TaskTable