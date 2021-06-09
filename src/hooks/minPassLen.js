module.exports = function (options = {}) {
  return context => {
    const { data } = context;

    const re = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[!%?])[A-Za-z\d!%?]{16,}$/
    const valid = re.test(data.password)

    if (!valid) throw new Error('Parola ch mici, ch mari, cifre, ch speciale (!, ?, %).');

    return context;
  }
}
