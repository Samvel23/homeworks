import { Box, Button, MenuItem, Modal, Select, TextField } from "@mui/material"
import axios from "axios"
import { useContext, useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import { ActionTypes } from "../lib/types"
import { EventContext } from "../lib/Context"

interface Inputs {
    title: string
    date: string
    time: string
    type: string
    composer: string
    cover: string
}
export const AddEvent = () => {
    const Context = useContext(EventContext)
    if(!Context) {
        throw new Error("Error")
    }
    const { dispatch } = Context;
    const [open, setOpen] = useState<boolean>(false)
    const { register, handleSubmit, formState: { errors } } = useForm<Inputs>()

    const handleAdd:SubmitHandler<Inputs> = async (data) => {
        try {
            const result = await axios.post("http://localhost:3004/events", data)
            dispatch({type:ActionTypes.addEvent, payload:result.data})
            setOpen(false)
        } catch (error) {
            throw new Error("error")
        }
    }
    return <>
        <Box my={2}>
            <Button variant="contained" onClick={() => setOpen(true)}>Add</Button>
            <Modal open={open} onClose={() => setOpen(false)}>
                <Box sx={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    border: '2px solid #000',
                    boxShadow: 24,
                    p: 4,
                    color: 'black'
                }}>
                    <form onSubmit={handleSubmit(handleAdd)}>
                       <Box my={2}>
                            <TextField 
                                label="Title"
                                variant="outlined"
                                {...register("title", {required: true})}
                                error={!!errors.title}
                                helperText={errors.title ? "Title is required" : ""}
                            />
                       </Box>
                       <Box my={2}>
                            <TextField 
                                label="Date"
                                variant="outlined"
                                {...register("date", {required: true})}
                                error={!!errors.date}
                                 helperText={errors.date ? "Date is required" : ""}
                            />
                       </Box>
                       <Box my={2}>
                            <TextField 
                                label="Time"
                                variant="outlined"
                                {...register("time", {required: true})}
                                error={!!errors.time}
                                helperText={errors.time ? "Time is required" : ""}
                            />
                       </Box>
                       <Box my={2}>
                            <TextField 
                                label="Composer"
                                variant="outlined"
                                {...register("composer", {required: true})}
                                error={!!errors.composer}
                                helperText={errors.composer ? "Composer is required" : ""}
                            />
                       </Box>
                       <Box my={2}>
                            <TextField 
                                label="Cover"
                                variant="outlined"
                                {...register("cover", {required: true})}
                                error={!!errors.cover}
                                helperText={errors.cover ? "Cover is required" : ""}
                            />
                       </Box>
                       <Box my={2}>
                            <Select  
                                sx={{width: "210px"}} 
                                {...register("type", {required: true})}
                                error={!!errors.title}     
                                >
                                <MenuItem value="opera">Opera</MenuItem>
                                <MenuItem value="ballet">Ballet</MenuItem>
                            </Select>
                       </Box>
                       <Button variant="contained" type="submit">Submit</Button>
                    </form>
                </Box>
            </Modal>
        </Box>    
    </>
}