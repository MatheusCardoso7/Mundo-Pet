import dayjs from "dayjs"

const morningAppointments = document.getElementById("morning-appointments")
const afternoonAppointments = document.getElementById("afternoon-appointments")
const nightAppointments = document.getElementById("night-appointments")

export function showAppointments({ dailyAppointments }) {
  try {
    morningAppointments.innerHTML = ""
    afternoonAppointments.innerHTML = ""
    nightAppointments.innerHTML = ""

    dailyAppointments.forEach((appointment) => {
      const scheduleItem = document.createElement("li")
      const scheduleTime = document.createElement("strong")
      const clientDiv = document.createElement("div")
      const scheduleClient = document.createElement("p")
      const schedulePet = document.createElement("span")
      const scheduleService = document.createElement("p")
      const scheduleRemove = document.createElement("button")

      // borda entre agendamentos (hr)
      scheduleBorder.classList.add("client-border")

      // li
      scheduleItem.classList.add("appointment-item")

      // Horário do agendamento (strong)
      scheduleTime.textContent = dayjs(appointment.time).format("HH:mm")

      // Nome do pet (span) + cliente (p)
      schedulePet.textContent = appointment.petName
      scheduleClient.classList.add("client")
      scheduleClient.append(schedulePet)
      scheduleClient.append(` / ${appointment.userName}`)

      // Serviço (p)
      scheduleService.textContent = appointment.description
      scheduleService.classList.add("service")

      // Botão de remover agendamento (button)
      scheduleRemove.textContent = "Remover agendamento"
      scheduleRemove.type = "button"
      scheduleRemove.classList.add("remove-button")

      // Adicionando o client+pet, description e button na div client-schedule
      clientDiv.classList.add("client-schedule")
      clientDiv.append(scheduleClient, scheduleService, scheduleRemove)

      // Adicionar o horário e a div client-schedule ao li
      scheduleItem.append(scheduleTime, clientDiv)

      // Obtém apenas a hora para fazer o if
      const hour = dayjs(schedule.when).hour()

      if(hour < 12){
        morningAppointments.append(scheduleItem)
      } else if (hour > 12 && hour <= 18) {
        afternoonAppointments.append(scheduleItem)
      } else {
        nightAppointments.append(scheduleItem)
      }
    })
  } catch (error) {
    alert("Não foi possível exibir os agendamentos")
    console.log(error)
  }
}
