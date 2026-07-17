import { appointmentsFetchByDay } from "../services/appointments-fetch-by-day.js"
import { showAppointments } from "./show-appointment.js"

// Seleciona o input de data.
const selectedDate = document.getElementById("schedule-date")

export async function appointmentsDay() {
  // Obtém a data do input
  const date = selectedDate.value
  // Busca na API os agendamentos
  const dailyAppointments = await appointmentsFetchByDay({ date })
  
  // Exibe os agendamentos
  showAppointments({ dailyAppointments })
}