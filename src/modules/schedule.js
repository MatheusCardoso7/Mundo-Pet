import dayjs from "dayjs"

const inputToday = dayjs(new Date()).format("YYYY-MM-DD")

// Data atual para o input
const selectedDate = document.getElementById("schedule-date")

// Carrega a data atual e define a data mínima como sendo a data atual.
selectedDate.value = inputToday
selectedDate.min = inputToday

