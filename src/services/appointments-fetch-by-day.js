import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function appointmentsFetchByDay({ date }) {
  try {
    // Fazendo a requisição.
    const response = await fetch(`${apiConfig.baseURL}/appointments`)

    // Converte para JSON.
    const data = await response.json()

    // Filtra os agendamentos pelo dia selecionado.
    const dailyAppointments = data.filter((appointment) => dayjs(date).isSame(appointment.when, "day"))

    return dailyAppointments
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado.")
  }
}