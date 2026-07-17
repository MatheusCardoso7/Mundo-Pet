"use strict"

import "./libs/dayjs.js"

import { initializeModal } from "./modules/modal.js"
import { initializeForm } from "./modules/form.js"
import { appointmentsDay } from "./modules/load-appointment.js"

initializeModal()
initializeForm()
appointmentsDay()

//CSS
/* import "./styles" */
import "./styles/index.css"
import "./styles/styles.css"
import "./styles/modal.css"

// JS
import "./modules/schedule.js"
import "./modules/date-change.js"
import "./modules/cancel-appointment.js"