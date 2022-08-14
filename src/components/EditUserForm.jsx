import React from "react";
import { useForm } from "react-hook-form";

const EditUserForm = (props) => {

    console.log (props.currentUser)

    // const { register, errors, handleSubmit } = useForm();
    const { register, handleSubmit, formState: { errors },setValue } = useForm({defaultValues: props.currentUser});
   
    setValue("name, props.currentUser.name");
    setValue("username, props.currentUser.username");
    setValue("age, props.currentUser.age")
    const onSubmit = (data) => {
     
        console.log({data})
        data.id=props.currentUser.id
       props.updateUser(props.currentUser.id,data)

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
            <button>Edit User</button>
        </form>)
}

export default EditUserForm