import dayjs from "dayjs"

const newAppointment = document.getElementById("newAppointment")
const modalOverlay = document.getElementById("modal-overlay")
const closeIcon = document.getElementById("close-icon")

const userNameInput = document.getElementById("user-name")
const petNameInput = document.getElementById("pet-name")
const telephoneInput = document.getElementById("telephone")
const serviceDescriptionInput = document.getElementById("service-description")
const dateInput = document.getElementById("date")
const timeInput = document.getElementById("time")

export function openModal() {
  const inputToday = dayjs(new Date()).format("YYYY-MM-DD")
  modalOverlay.style.display = "flex"

  dateInput.value = inputToday
  dateInput.min = inputToday
}

export function closeModal() {
  modalOverlay.style.display = "none"

  userNameInput.value = ""
  petNameInput.value = ""
  telephoneInput.value = ""
  serviceDescriptionInput.value = ""
  dateInput.value = ""
  timeInput.value = ""
}

export function initializeModal() {
  newAppointment.addEventListener("click", () => {
    openModal()
  })

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === closeIcon) {
      closeModal()
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal()
    }
  })
}
