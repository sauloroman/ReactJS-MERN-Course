export const events = [
  {
    id: '1',
    start: new Date('2022-10-21 13:00:00'),
    end: new Date('2022-10-21 15:00:00'),
    title: 'Pasea al perro Roman',
    notes: 'Salir a caminar con el perro',
  },
  {
    id: '2',
    start: new Date('2022-11-09 13:00:00'),
    end: new Date('2022-11-09 15:00:00'),
    title: 'Estudiar matematicas',
    notes: 'Preparar mi examen de calculo diferencial',
  },
]

export const newEvent = {
  id: '3',
  start: new Date('2022-12-09 13:00:00'),
  end: new Date('2022-12-09 15:00:00'),
  title: 'Test title',
  notes: 'Test notes',
}

export const initialState = {
  isLoadingEvents: true,
  events: [],
  activeEvent: null,
}

export const calendarWithEventState = {
  isLoadingEvents: false,
  events: [ ...events ],
  activeEvent: null,
}

export const calendarWithActiveEventState = {
  isLoadingEvents: false,
  events: [ ...events ],
  activeEvent: { ...events[0] },
}



