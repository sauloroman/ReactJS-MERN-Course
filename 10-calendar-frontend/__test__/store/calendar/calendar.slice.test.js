import { calendarSlice, onAddNewEvent, onDeleteEvent, onLoadEvents, onLogoutCalendar, onSetActiveEvent, onUpdateEvent } from "../../../src/store/calendar/calendar.slice"
import { calendarWithActiveEventState, calendarWithEventState, events, initialState, newEvent } from "../../__fixtures__/calendar-states"

describe('Tests in calendar.slice', () => { 

  test('it should return the default state', () => {
    const state = calendarSlice.getInitialState()
    expect( state ).toEqual( initialState )
  })

  test('onSetActiveEvent should active an event', () => {
    const state = calendarSlice.reducer( calendarWithActiveEventState, onSetActiveEvent( events[0] ) )
    expect( state.activeEvent ).toEqual( events[0] )
  })

  test('onAddNewEvent must add a new event', () => {
    const state = calendarSlice.reducer( initialState, onAddNewEvent( newEvent ) )
    expect( state.events.at(-1) ).toEqual( newEvent )

  })

  test('onUpdateEvent must update an event', () => {

    const updatedEvent = {
      id: '1',
      start: new Date('2022-13-09 13:00:00'),
      end: new Date('2022-13-09 15:00:00'),
      title: 'Test UPDATE title',
      notes: 'Test UPDATE notes',
    }

    const state = calendarSlice.reducer( calendarWithEventState, onUpdateEvent(updatedEvent) )
    expect( state.events ).toContain( updatedEvent )

  })

  test('onDeleteEvent must delete the active event', () => {
    const state = calendarSlice.reducer( calendarWithActiveEventState, onDeleteEvent() )
    expect( state.events ).not.toContain( calendarWithActiveEventState.activeEvent )
    expect( state.activeEvent ).toBeNull()
  })

  test('onLoadEvents must set the events', () => {
    const state = calendarSlice.reducer( initialState, onLoadEvents(events) )
    expect( state.isLoadingEvents ).toBeFalsy()
    expect( state.events ).toEqual( events )
  })

  test('onLoadEvent should not allow to add a new event', () => {
    const state = calendarSlice.reducer( initialState, onLoadEvents([...events, events[0]]) )
    expect( state.events.length ).toBe( events.length )
  })

  test('onLogoutCalendar must clear the state', () => {
    const state = calendarSlice.reducer( calendarWithActiveEventState, onLogoutCalendar() )
    expect( state ).toEqual( initialState )
  })

})  