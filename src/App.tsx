import { Calendar } from "./components/Calendar";
import { CalendarEvents } from "./components/CalendarEvents";
import { sampleEvents } from "./data/sample";
function App() {
  return (
    <div>
      <Calendar />
      <CalendarEvents
        events={sampleEvents} />
    </div>
  )
}

export default App
