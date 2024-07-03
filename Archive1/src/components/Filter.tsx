import { MenuItem, Select } from "@mui/material"
import { EventContext } from "../lib/Context"
import { useContext } from "react"
import { ActionTypes } from "../lib/types"

export const Filter:React.FC = () => {
    const context = useContext(EventContext)
    if(!context) {
        throw new Error("Event not found")
    }
    const { state, dispatch } = context;
    return  <>
       <Select sx={{width: '300px'}}
            value={state.currentFilter}
            onChange={e => dispatch({type:ActionTypes.setFilter, payload:e.target.value})}
            >
            <MenuItem value="all">All</MenuItem>
            <MenuItem value="opera">Opera</MenuItem>
            <MenuItem value="ballet">Ballet</MenuItem>
       </Select>
    </>
}