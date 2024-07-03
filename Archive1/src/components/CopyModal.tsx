import { Box, Button, MenuItem, Modal, Select, TextField, FormControl, InputLabel, FormHelperText } from "@mui/material";
import { useContext, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import axios from "axios";
import { ActionTypes } from "../lib/types";
import { EventContext } from "../lib/Context";
import { IEvent } from "../lib/types";

interface Inputs {
    title: string;
    date: string;
    time: string;
    type: string;
    composer: string;
    cover: string;
}

export const CopyModal: React.FC = () => {
    const Context = useContext(EventContext);
    if (!Context) {
        throw new Error("Error: EventContext is not available");
    }
    const { state, dispatch } = Context;
    const [open, setOpen] = useState<boolean>(false);
    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Inputs>();

    const handleAdd: SubmitHandler<Inputs> = async (data) => {
        try {
            const result = await axios.post("http://localhost:3004/events", data);
            dispatch({ type: ActionTypes.addEvent, payload: result.data });
            setOpen(false);
        } catch (error) {
            console.error("Error adding event", error);
        }
    };

    const handleOpen = () => {
        if (state.currentEvent) {
            setValue("title", state.currentEvent.title);
            setValue("date", state.currentEvent.date);
            setValue("time", state.currentEvent.time);
            // setValue("type", state.currentEvent.type);
            setValue("composer", state.currentEvent.composer);
            setValue("cover", state.currentEvent.cover);
        }
        setOpen(true);
    };

    const handleCopyEvent = () => {
        dispatch({ type: ActionTypes.copyModal, payload: state.currentEvent });
    };

    return (
        <div>
            <Button variant="contained" onClick={handleCopyEvent}>
                Copy Modal
            </Button>
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
                                {...register("title", { required: true })}
                                error={!!errors.title}
                                helperText={errors.title ? "Title is required" : ""}
                                fullWidth
                            />
                        </Box>
                        <Box my={2}>
                            <TextField
                                label="Date"
                                variant="outlined"
                                type="date"
                                InputLabelProps={{ shrink: true }}
                                {...register("date", { required: true })}
                                error={!!errors.date}
                                helperText={errors.date ? "Date is required" : ""}
                                fullWidth
                            />
                        </Box>
                        <Box my={2}>
                            <TextField
                                label="Time"
                                variant="outlined"
                                type="time"
                                InputLabelProps={{ shrink: true }}
                                {...register("time", { required: true })}
                                error={!!errors.time}
                                helperText={errors.time ? "Time is required" : ""}
                                fullWidth
                            />
                        </Box>
                        <Box my={2}>
                            <TextField
                                label="Composer"
                                variant="outlined"
                                {...register("composer", { required: true })}
                                error={!!errors.composer}
                                helperText={errors.composer ? "Composer is required" : ""}
                                fullWidth
                            />
                        </Box>
                        <Box my={2}>
                            <TextField
                                label="Cover"
                                variant="outlined"
                                {...register("cover", { required: true })}
                                error={!!errors.cover}
                                helperText={errors.cover ? "Cover is required" : ""}
                                fullWidth
                            />
                        </Box>
                        <Box my={2}>
                            <FormControl fullWidth error={!!errors.type}>
                                <InputLabel>Type</InputLabel>
                                <Select
                                    label="Type"
                                    {...register("type", { required: true })}
                                    defaultValue=""
                                >
                                    <MenuItem value="opera">Opera</MenuItem>
                                    <MenuItem value="ballet">Ballet</MenuItem>
                                </Select>
                                {errors.type && <FormHelperText>Type is required</FormHelperText>}
                            </FormControl>
                        </Box>
                        <Button variant="contained" type="submit">Submit</Button>
                    </form>
                </Box>
            </Modal>
        </div>
    );
};
