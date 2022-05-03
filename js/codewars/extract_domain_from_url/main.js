function domainName(url) {
  const regex = /(http(s)?:\/\/)?(www\.)?([\w|\-]+)/g
  const domain = regex.exec(url)[4]

  return domain

}

module.exports = domainName
