import React, { useState } from 'react'
import AppointmentsForm from '../components/AppointmentsForm'
import AppointmentsList from '../components/AppointmentsList'

const Appointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [appointmentSelected, setAppointmentSelected] = useState([]);

    const handleSaveAppointments = (form) => {

      setAppointments([...appointments, form]);
    }

    const handleRemove = (id) => {

      const newAppointments = appointments.filter(
        appointment => appointment.id !== id
      )

      setAppointments(newAppointments);
    }

    const handleEdit = (appointment) => {

      setAppointmentSelected(appointment);
    }

  return (
    <>

        <AppointmentsForm
                    onSaveAppointment={handleSaveAppointments}
                    appointment={appointmentSelected}
                    />

        <AppointmentsList
                    appointments={appointments}
                    onRemove={handleRemove}
                    onEdit={handleEdit}
                    />
    </>
  )
}

export default Appointments