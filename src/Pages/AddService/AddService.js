import axios from 'axios';
import React from 'react';
import { useForm } from "react-hook-form";

const AddService = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('added successfully');
                    reset();
                }
            })
    }
    return (
        <div className="add-service">
            <h2>Add a service</h2>
            <form className="row mx-5 px-5" onSubmit={handleSubmit(onSubmit)}>
                <input {...register("name", { required: true, maxLength: 20 })}
                    className=" mx-auto p-1 my-2" placeholder="Name" />
                <textarea {...register("description")} className=" mx-auto p-1 my-2" placeholder="Description" />
                <input type="number" {...register("id")} className=" mx-auto p-1 my-2" placeholder="Id" />
                <input {...register("img")} className=" mx-auto p-1 my-2" placeholder="Image URL" />
                <input className="btn bg-danger" type="submit" />
            </form>
        </div>
    );
};

export default AddService;