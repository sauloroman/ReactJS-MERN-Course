import { useDispatch, useSelector } from "react-redux"
import { onAddNewEvent, onDeleteEvent, onSetActiveEvent, onUpdateEvent, onLoadEvents } from "../store/calendar/calendar.slice"
import { calendarApi } from "../api"
import { convertEventsToDateEvents } from "../helpers"
import Swal from "sweetalert2"

export const useCalendarStore = () => {

  const dispatch = useDispatch()
  const { events, activeEvent } = useSelector( state => state.calendar )
  const { user } = useSelector( state => state.auth )

  const setActiveEvent = ( calendarEvent ) => {
    dispatch( onSetActiveEvent( calendarEvent ) )
  }

  const startSavingEvent = async ( calendarEvent ) => {

    try {
      
      if ( calendarEvent.id ) {
        await calendarApi.put(`/events/${calendarEvent.id}`, calendarEvent)
        dispatch( onUpdateEvent({ ...calendarEvent, user }))
        return
      } 
  
      const { data } = await calendarApi.post('/events', calendarEvent )
       dispatch( onAddNewEvent({ ...calendarEvent, id: data.event.id, user }) )

    } catch (error) {
      console.log(error)
      Swal.fire('Error al guardar', error.response.data.msg, 'error')
    }
  }

  const startDeleteEvent = async () => {
    try {
      await calendarApi.delete(`/events/${activeEvent.id}`)
      dispatch( onDeleteEvent() )
    } catch (error) {
      console.log(error)
      Swal.fire('Error al eliminar', error.response.data.msg, 'error')
    }

  }

  const startLoadingEvent = async () => {
    try {
      const { data } = await calendarApi.get('/events')
      const events = convertEventsToDateEvents( data.events )
      dispatch( onLoadEvents( events ) )
    } catch (error) {
      console.log('Error cargando eventos')
      console.log(error)
    }
  }

  return {
    //* Propiedades
    events,
    activeEvent,
    hasEventSelected: !!activeEvent,

    //* Metodos
    setActiveEvent,
    startDeleteEvent,
    startLoadingEvent,
    startSavingEvent,
    
  }
}