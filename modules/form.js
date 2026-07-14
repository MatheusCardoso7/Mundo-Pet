import { validations } from "../utils/validantion.js"
import { closeModal } from "./modal.js"

export function initializeForm() {
  const appointmentSubmit = document.getElementById("appointment-submit")

  appointmentSubmit.addEventListener("click", (event) => {
    event.preventDefault()

    const userNameInput = document.getElementById("user-name")
    const petNameInput = document.getElementById("pet-name")
    const telephoneInput = document.getElementById("telephone")
    const serviceDescriptionInput = document.getElementById(
      "service-description",
    )
    const dateInput = document.getElementById("date")
    const timeInput = document.getElementById("time")

    const userName = userNameInput.value.trim()
    const petName = petNameInput.value.trim()
    const phone = telephoneInput.value.replace(/\D/g, "")
    const description = serviceDescriptionInput.value.trim()
    const date = dateInput.value
    const time = timeInput.value

    const isValid = validations(userName, petName, phone)

    if (!isValid) {
      return
    }

    const appointment = {
      userName,
      petName,
      phone,
      description,
      date,
      time,
    }

    closeModal()
  })
}
