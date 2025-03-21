import { useCalendarStore } from "../../hooks"

export const FabDelete = () => {

  const { startDeleteEvent, hasEventSelected } = useCalendarStore()

  const onDelete = () => {
    startDeleteEvent()
  }

  return (
    <button
      aria-label="btn-delete" 
      style={{ display: hasEventSelected ? '' : 'none'}}
      onClick={ onDelete }
      className="btn btn-danger fab-danger"
    >
      <i className="fas fa-trash-alt"></i>
    </button>
  )
}
