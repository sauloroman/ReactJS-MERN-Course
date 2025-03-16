const { request, response } = require("express")
const {Event} = require('../models/event.model')

const getEvents = async ( req = request, res = response ) => {
  const events = await Event.find().populate('user', 'name')
  res.status(200).json({ ok: true, events})
}

const createEvent = async ( req = request , res = response ) => {

  const uid = req.uid
  
  try {
    
    const event = new Event( req.body )
    event.user = uid
    const eventSaved = await event.save()

    res.status(201).json({
      ok: true,
      event: eventSaved,
    })

  } catch (error) {
    console.log(error)

    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }
}

const updateEvent = async ( req = request , res = response ) => {

  const { id: eventId } = req.params
  const uid = req.uid

  try {

    const event = await Event.findById( eventId )

    if ( !event ) 
      return res.status(404).json({ ok: false, msg: 'El evento no existe' })

    if ( event.user.toString() !== uid ) 
      return res.status(401).json({ ok: false, msg: 'No estás autorizado para editar el evento' })

    const newEvent = { ...req.body, user: uid }

    const updatedEvent = await Event.findByIdAndUpdate( eventId, newEvent, { new: true, runValidators: true } )

    res.status(200).json({
      ok: true,
      event: updatedEvent,
    })

  } catch (error) {
    console.log(error)
    
    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }

}

const deleteEvent = async ( req = request , res = response ) => {

  const { id: eventId } = req.params
  const uid = req.uid

  try {

    const event = await Event.findById( eventId )

    if ( !event )
      return res.status(404).json({ ok: false, msg: 'No existe el evento'})

    if ( event.user.toString() !== uid ) 
      return res.status(401).json({ ok: false, msg: 'No estas autizado para eliminar este evento'})

    await Event.findByIdAndDelete( eventId )

    res.status(203).json({
      ok: true,
      msg: 'Evento eliminado'
    })

  } catch (error) {
    console.log(error)

    res.status(500).json({
      ok: false,
      msg: 'Hable con el administrador'
    })
  }

}

module.exports = {
  getEvents,
  createEvent,
  updateEvent,
  deleteEvent
}