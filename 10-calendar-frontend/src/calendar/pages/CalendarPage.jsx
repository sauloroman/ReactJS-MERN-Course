import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css' 

import { CalendarEvent, CalendarModal, FabAddNew, FabDelete, Navbar } from "../"
import { getMessagesEs, localizer } from '../../helpers'
import { useEffect, useState } from 'react'
import { useUiStore, useCalendarStore, useAuthStore } from '../../hooks'

export const CalendarPage = () => {

  const { user } = useAuthStore()
  const { events, setActiveEvent, startLoadingEvent } = useCalendarStore()
  const { openDateModal } = useUiStore()
  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const onDoubleClick = (e) => {
    openDateModal()
  }

  const onSelect = (e) => {
    setActiveEvent( e )
  }

  const onViewChanged = (e) => {
    localStorage.setItem('lastView', e)
    setLastView( e )
  }

  const eventStyleGetter = ( event, start, end, isSelected ) => {

    const isMyEvent = ( user.uid === event.user._id )  || ( user.uid === event.user.uid )

    const style = {
      backgroundColor: isMyEvent ? '#347CF7' : '#465660',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }

  useEffect(() => {
    startLoadingEvent()
  }, [])
  
  return (
    <>
      <Navbar />

      <Calendar
        culture='es'
        localizer={localizer}
        events={events}
        defaultView={ lastView }
        startAccessor="start"
        endAccessor="end"
        style={{ height: 'calc(100vh - 80px)' }}
        messages={getMessagesEs()}
        eventPropGetter={ eventStyleGetter }
        components={{
          event: CalendarEvent
        }}
        onDoubleClickEvent={ onDoubleClick }
        onSelectEvent={ onSelect }
        onView={ onViewChanged }
      />
      
      <CalendarModal />
      <FabAddNew />
      <FabDelete />
    </>
  )
}
