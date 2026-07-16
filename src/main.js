"use strict"

import "./libs/dayjs.js"

import { initializeModal } from "./modules/modal.js"
import { initializeForm } from "./modules/form.js"

initializeModal()
initializeForm()

//CSS
/* import "./styles" */
import "./styles/index.css"
import "./styles/styles.css"
import "./styles/modal.css"

// JS
import "./modules/schedule.js"
import "./modules/date-change.js"
import "./modules/cancel-appointment.js"