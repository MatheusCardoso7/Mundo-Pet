import dayjs from "dayjs"
import { apiConfig } from "./api-config.js"

export async function appointmentsFetchByDay({ date }) {
  try {
    const response = await fetch(`${apiConfig.baseURL}/appointments`)
    const data = await response.json()

    const dailyAppointments = data.filter((appointment) => {
      const appointmentDate = appointment?.date

      return dayjs(date).isSame(appointmentDate, "day")
    })

    return dailyAppointments
  } catch (error) {
    console.log(error)
    alert("Não foi possível buscar os agendamentos do dia selecionado.")
  }
}
