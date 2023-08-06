
const AppointmentsList = ( { appointments, onRemove, onEdit }) => {

    if(appointments.length === 0) {

        return (
            <section className='w-2/3 flex flex-col gap-2 bg-yellow-200 rounded-lg p-2 text-center'>

                <h2 className='w-full py-3 text-2xl'>Listado de Pascientes</h2>
                <span>No hay Citas!</span>
                <h1>😔</h1>
            
            </section>
        )
    }

  return (
    <>
        <section className='w-2/3 bg-yellow-200 rounded-lg p-2'>
            
            <h2 className='py-3 text-center text-2xl'>Listado de Pascientes</h2>

            <table className='table w-full bg-white text-left'>
                <thead className='table-header-group'>
                    <tr className='table-row border border-sky-300 rounded-lg'>
                        <th className='table-cell'>#</th>
                        <th className='table-cell'>Nombre</th>
                        <th className='table-cell'>Dueño</th>
                        <th className='table-cell'>Edad</th>
                        <th className='table-cell'>Fecha</th>
                        <th className='table-cell'>Hora</th>
                        <th className='table-cell'>Sintomas</th>
                        <th className='table-cell'>Acciones</th>
                    </tr>
                </thead>

                <tbody className='table-row-group'>
                    {appointments.map(appointment => {
                        return (
                                <tr key={appointment.id}
                                    className="table-row border border-sky-300 rounded-lg"
                                    >
                                    <td className="table-cell">{appointment.id}</td>
                                    <td className="table-cell">{appointment.petName}</td>
                                    <td className="table-cell">{appointment.ownerName}</td>
                                    <td className="table-cell">{appointment.petAge}</td>
                                    <td className="table-cell">{appointment.appointmentDate}</td>
                                    <td className="table-cell">{appointment.appointmentTime}</td>
                                    <td className="table-cell">{appointment.symptoms}</td>
                                    <td className="table-cell">
                                        <button className="w-34 rounded-lg px-2 bg-green-300"
                                            >
                                            Confirmar
                                            </button>
                                        <button
                                            className="w-34 rounded-lg px-2 bg-sky-300"
                                            onClick={() => onEdit(appointment)}
                                            >
                                            Editar
                                            </button>
                                        <button
                                            className="w-34 rounded-lg px-2 bg-red-300"
                                            onClick={() => onRemove(appointment.id)}
                                            >
                                            Eliminar
                                        </button>
                                    </td>
                                </tr>
                               )
                    })}
                </tbody>
            </table>

        </section >
    </>
  )
}

export default AppointmentsList