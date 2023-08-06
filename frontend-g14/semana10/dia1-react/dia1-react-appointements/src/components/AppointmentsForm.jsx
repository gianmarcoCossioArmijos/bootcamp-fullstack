import React, { useEffect, useState } from 'react'

const AppointmentsForm = ({ onSaveAppointment, appointment }) => {

    const INITIAL_FORM_STATE = {
        id: '',
        petName: '',
        petAge: '',
        ownerName: '',
        appointmentDate: '',
        appointmentTime: '',
        symptoms: ''
      }

    const [form, setForm] = useState(INITIAL_FORM_STATE);

    useEffect(() => {
       
       if (Object.keys(appointment).length > 0) {
              
              setForm(appointment)
       }
      }, [appointment])

    const handleChange = (event) => {
        
        const { name, value } = event.target;
        setForm({ ...form, [name] : value })
    }

    const handleSaveAppointment = (event) => {

        event.preventDefault();

        const newAppointment = {
              ...form,
              id: crypto.randomUUID()
        }
        
        onSaveAppointment(newAppointment);
        setForm(INITIAL_FORM_STATE);
      }

  return (
    <>

       <section className='w-1/3 bg-yellow-200 rounded-lg p-2'>
       
              <h2 className='py-3 text-center text-2xl'>Nuevo Pascientes</h2>

              <form className='flex flex-col gap-2'
                     onSubmit={handleSaveAppointment}
                     >

                     <input type="text"
                            name="petName"
                            placeholder='Nombre de la mascota...'
                            className='w-full m-auto p-2 rounded-lg border border-sky-300'
                            onChange={handleChange}
                            value={form.petName}
                            />

                     <input type="text"
                            name="petAge"
                            placeholder='Edad de la mascota...'
                            className='w-full m-auto p-2 rounded-lg border border-sky-300' 
                            onChange={handleChange}
                            value={form.petAge}
                            />

                     <input type="text"
                            name="ownerName"
                            placeholder='Dueño de la mascota...' 
                            className='w-full m-auto p-2 rounded-lg border border-sky-300'
                            onChange={handleChange}
                            value={form.ownerName}
                            />

                     <input type="date"
                            name="appointmentDate"
                            className='w-full m-auto p-2 rounded-lg border border-sky-300'
                            onChange={handleChange}
                            value={form.appointmentDate}
                            />

                     <input type="time"
                            name="appointmentTime"
                            className='w-full m-auto p-2 rounded-lg border border-sky-300'
                            onChange={handleChange}
                            value={form.appointmentTime}
                            />

                     <textarea
                            name="symptoms"
                            className="w-full m-auto p-2 rounded-lg border border-sky-300"
                            placeholder="Sintomas de la mascota..."
                            rows={3}
                            value={form.symptoms}
                            onChange={handleChange}
                            />

                     <input type="submit"
                            className='w-full m-auto p-2 rounded-lg bg-sky-200 border border-sky-600'
                            value="Guardar"
                            />
              </form>

       </section>
    </>
  )
}

export default AppointmentsForm