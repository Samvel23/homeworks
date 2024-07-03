import { useContext } from "react"
import { EventContext } from "../lib/Context"
import { CopyModal } from "./CopyModal"

export const EventList:React.FC = () => {
    const context = useContext(EventContext)
    if(!context) {
        throw new Error("Event Context not found")
    }
    const { state } = context;
    return <>
        <h1>Event List</h1>
        <div className="list">
            {
                state.events.map(event => <div key={event.id}>
                    <img src={event.cover} />
                    <h3>{event.title}</h3>
                    <p>{event.date}</p>
                    <p>{event.time}</p>
                    <p>{event.type}</p>
                    <p>{event.composer}</p>
                    <CopyModal />
                </div>)
            }
        </div>
    </>
}