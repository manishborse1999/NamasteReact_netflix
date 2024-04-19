export const checkValidation = (email, password, fullName = null) => {
    const validEmail = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)
    const validPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password)
    const valideName = /^[a-zA-Z ]{2,30}$/.test(fullName)
    if (!validEmail) return "Email is not valid"
    if (!validPassword) return "Password is not valid"
    if (!valideName) return "Name is not valid"
    return null
}