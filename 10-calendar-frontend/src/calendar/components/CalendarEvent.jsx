export const CalendarEvent = ({ event }) => {

  const { user, title } = event

  return (
    <>
      <strong>{title}</strong> <br />
      <span>{user.name}</span>
    </>
  )
}
