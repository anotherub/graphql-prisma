import bcrypt from 'bcryptjs'

const hashPassword = async (password) => {
  if (password.length < 6) throw new Error('Password must be atleast 6 chars')
  return await bcrypt.hash(password, 10)
}

export { hashPassword as default }
