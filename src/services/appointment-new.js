import { apiConfig } from "./api-config.js"

export async function appointmentNew({ appointment }) {
  try {
    // Fazendo a requisição para enviar os dados do agendamento.
    await fetch(`${apiConfig.baseURL}/appointments`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ appointment }),
    })

    // Exibe uma mensagem de agendamento realizado.
    alert("Agendamento realizado com sucesso!")
  } catch (error) {
    console.log(error)
    alert("Não foi possível agendar. Tente novamente mais tarde.")
  }
}