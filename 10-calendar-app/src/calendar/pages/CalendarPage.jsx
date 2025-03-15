import { Calendar } from 'react-big-calendar'
import 'react-big-calendar/lib/css/react-big-calendar.css'
import {addHours} from 'date-fns' 

import { CalendarEvent, CalendarModal, Navbar } from "../"
import { getMessagesEs, localizer } from '../../helpers'
import { useState } from 'react'

const events = [{
  title: 'Cumpleaños del jefe',
  notes: 'Comprar el pastel',
  start: new Date(),
  end: addHours( new Date(), 2 ), 
  bgColor: '#fafafa',
  user: {
    _id: '123',
    name: 'Roman'
  }
}]


export const CalendarPage = () => {

  const [lastView, setLastView] = useState(localStorage.getItem('lastView') || 'week')

  const onDoubleClick = (e) => {
    console.log({ doubleClick: e })
  }

  const onSelect = (e) => {
    console.log({ click: e })
  }

  const onViewChanged = (e) => {
    localStorage.setItem('lastView', e)
    setLastView( e )
  }

  const eventStyleGetter = ( event, start, end, isSelected ) => {
    const style = {
      backgroundColor: '#347CF7',
      borderRadius: '0px',
      opacity: 0.8,
      color: 'white'
    }

    return {
      style
    }
  }
  
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

    </>
  )
}
