import axios from "axios"
import { useForm } from "react-hook-form"
import Types from 'prop-types'
import * as yup from "yup"
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup.object().shape({
    name: yup.string().required(),
    surname: yup.string().required(),
    salary: yup.number().required()
})
export const AddUser = ({onAdd}) => {
    const {register, handleSubmit, formState:{errors},reset} = useForm({resolver: yupResolver(schema)})
    const handleAdd = (data) => {
        console.log(data)
        axios
        .post("http://localhost:3004/users", data)
        .then(res => {
            onAdd(res.data)
            reset()
        })
    } 
    return (
    <div>
        <h1>AddUser</h1>
        <form onSubmit={handleSubmit(handleAdd)}>
            <label>name</label>
            {errors.name && <p style={{color: "red"}}>{errors.name.message}</p>}
            <input
                {...register("name")}
            />

            <label>surname</label>
            {errors.surname && <p style={{color: "red"}}>{errors.surname.message}</p>}
            <input
                {...register("surname")}
            />

            <label>salary</label>
            {errors.salary && <p style={{color: "red"}}>{errors.salary.message}</p>}
            <input
                {...register("salary")}
            />

           <button>save</button>
        </form>
    </div>
    )
    }
AddUser.propTypes = {
    onAdd: Types.func
}