import jwt from 'jsonwebtoken'

const generateToken = (userId) => {
  return jwt.sign({ userId }, 'password', { expiresIn: '2 days' })
}

export { generateToken as default }
