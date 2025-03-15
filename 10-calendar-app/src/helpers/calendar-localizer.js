import { dateFnsLocalizer } from 'react-big-calendar'
import {parse, startOfWeek, format, getDay } from 'date-fns' 
import enEs from 'date-fns/locale/es'

const locales = {
  'es': enEs,
}

export const localizer = dateFnsLocalizer({
  format,
  parse,
  startOfWeek,
  getDay,
  locales,
})