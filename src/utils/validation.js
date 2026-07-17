export function validations(userName, petName, phone) {
  const userRegex = /^[\p{L}' -]{2,100}$/u
  const petRegex = /^[\p{L}\d' -]{2,50}$/u
  const phoneRegex = /^\d{10,11}$/

  if (!userRegex.test(userName)) {
    alert("Nome do tutor inválido.")
    return false
  }

  if (!petRegex.test(petName)) {
    alert("Nome do pet inválido.")
    return false
  }

  if (!phoneRegex.test(phone)) {
    alert("Número de telefone inválido.")
    return false
  }

  return true
}
