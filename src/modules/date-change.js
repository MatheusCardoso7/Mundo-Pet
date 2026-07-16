import { appointmentsDay } from "./load-appointment"

//Seleciona o input de data.
const selectedDate = document.getElementById("schedule-date")

// Recarrega a lista de horários quando o input de data mudar.
selectedDate.onchange = () => appointmentsDay()