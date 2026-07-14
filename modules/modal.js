const newAppointment = document.getElementById("newAppointment")
const modalOverlay = document.getElementById("modal-overlay")

export function openModal() {
  modalOverlay.style.display = "flex"
}

export function closeModal() {
  modalOverlay.style.display = "none"
}

export function initializeModal() {
  newAppointment.addEventListener("click", () => {
    openModal()
  })

  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeModal()
    }
  })

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeModal()
    }
  })
}
