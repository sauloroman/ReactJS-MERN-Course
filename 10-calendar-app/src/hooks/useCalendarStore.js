import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent } from "../store/calendar/calendar.slice"

export const useCalendarStore = () => {

  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector( state => state.calendar )

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const startSavingEvent = async ( calendarEvent ) => {

    // TODO: Llegar al backend

    if ( calendarEvent._id ) {
      dispatch( onUpdateEvent({ ...calendarEvent }))
    } else {
      dispatch( onAddNewEvent({ ...calendarEvent, _id: new Date().getTime() }) )
    }

  }

  const startDeleteEvent = () => {
    // TODO: Llegar al backend

    dispatch( onDeleteEvent() )
  }

  return {
    //* Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* Metodos
    setActiveEvent,
    startSavingEvent,
    startDeleteEvent,
    
  }
}