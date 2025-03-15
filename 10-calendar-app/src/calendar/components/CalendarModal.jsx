import { addHours, differenceInSeconds } from 'date-fns';
import { useState } from 'react';
import Modal from 'react-modal';
import DatePicker, {registerLocale} from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import es from 'date-fns/locale/es';

registerLocale('es', es)

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

Modal.setAppElement('#root');

export const CalendarModal = () => {
  const [isModalOpen, setIsModalOpen] = useState(true);

  const [formValues, setFormValues] = useState({
    title: 'Roman',
    notes: 'Roman notes',
    start: new Date(),
    end: addHours( new Date(), 2 )
  })

  const onInputChanged = ({ target }) => {
    setFormValues({
      ...formValues,
      [target.name]: target.value
    })
  }

  const onDateChanged = (e, changing) => {
    setFormValues({
      ...formValues,
      [changing]: e
    })
  }

  const onCloseModal = () => {
    setIsModalOpen(false);
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const difference = differenceInSeconds( formValues.end, formValues.start )
    
    if ( isNaN(difference) || difference <= 0 ) {
      console.log('Error en fechas')
      return
    }

    if ( formValues.title.length <= 0 ) return

    console.log(formValues)
   
    // TODO:
    // Cerrar modal
    // Remover errores en pantalla

  }

  return (
    <Modal
      isOpen={isModalOpen}
      onRequestClose={onCloseModal}
      style={customStyles}
      className={'modal'}
      overlayClassName={'modal-fondo'}
      closeTimeoutMS={200}
    >
      <h1> Nuevo evento </h1>
      <hr />
      <form onSubmit={onSubmit} className="container">
        <div className="form-group mb-2">
          <label>Fecha y hora inicio</label> <br />
          <DatePicker 
            locale={'es'}
            selected={ formValues.start }
            className="form-control"
            onChange={e => onDateChanged(e, 'start')}
            dateFormat='Pp'
            showTimeSelect
            timeCaption="Hora"
          />
        </div>

        <div className="form-group mb-2">
          <label>Fecha y hora fin</label> <br />
          <DatePicker 
            locale={'es'}
            minDate={ formValues.start }
            selected={ formValues.end }
            className="form-control"
            onChange={e => onDateChanged(e, 'end')}
            dateFormat='Pp'
            showTimeSelect
            timeCaption="Hora"
          />
        </div>

        <hr />
        <div className="form-group mb-2">
          <label>Titulo y notas</label>
          <input
            type="text"
            className="form-control"
            placeholder="Título del evento"
            name="title"
            autoComplete="off"
            value={formValues.title}
            onChange={onInputChanged}
          />
          <small id="emailHelp" className="form-text text-muted">
            Una descripción corta
          </small>
        </div>

        <div className="form-group mb-2">
          <textarea
            type="text"
            className="form-control"
            placeholder="Notas"
            rows="5"
            name="notes"
            value={formValues.notes}
            onChange={onInputChanged}
          ></textarea>
          <small id="emailHelp" className="form-text text-muted">
            Información adicional
          </small>
        </div>

        <button type="submit" className="btn btn-outline-primary btn-block">
          <i className="far fa-save"></i>
          <span> Guardar</span>
        </button>
      </form>
    </Modal>
  );
};
