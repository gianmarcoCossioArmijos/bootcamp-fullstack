import Header from "./components/Header"
import Appointments from "./pages/Appointments"

function App() {

  return (
    <>

      <Header title="🐶 Citas Medicas App"/>

      <main className="my-4 mx-6 flex gap-3">
        <Appointments />
      </main>
    </>
  )
}

export default App
