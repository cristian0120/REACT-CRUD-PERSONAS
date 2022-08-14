import React from "react";
import { useForm } from "react-hook-form";

const AddUserForm = (props) => {

    // const { register, errors, handleSubmit } = useForm();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        console.log(data)

        props.addUser(data)

        //e.target.reset();
    }
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <label>Name</label>
            <input type="text" {...register("name", { required: true })}
            />
            <div>
                {errors?.name?.message}
            </div>
            <label>Username</label>
            <input type="text"
                {...register("username", { required: true })}
            />
            <div>
                {errors?.userName?.message}
            </div>
            <label>Age</label>
            <input type="text"
                {...register("age", { required: true })}
            />
            <div>
                {errors?.age?.message}
            </div>
            <button>Add new user</button>
        </form>)
}

export default AddUserForm