import { Dispatch } from "react"

export interface IEvent{
    id: string
    title: string
    date: string
    time: string
    type: events
    composer: string
    cover:string
    currentEvent?:IEvent
}
export enum events{
    opera,
    ballet
}
export enum FilterTypes {
    all="All",
    opera="Opera",
    ballet="Ballet"
}
export interface IState {
    events: IEvent[];
    currentFilter: FilterTypes;
    currentEvent?: IEvent;
}
export enum ActionTypes{
    setEvents,
    addEvent,
    setFilter,
    copyModal
}
export interface IAction{
    type:ActionTypes,
    payload:unknown
}
export interface IContextType{
    state:IState,
    dispatch: Dispatch<IAction>
}