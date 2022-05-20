function validPhoneNumber(phoneNumber){
  const regex = /^\(\d{3}\)\s\d{3}-\d{4}$/g

  return regex.test(phoneNumber)
}

module.exports = validPhoneNumber
