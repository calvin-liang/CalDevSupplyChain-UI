
import axios from 'axios'

export const authUtil = {
  setAuthorizationJwtHeader,
  parseAuthJwtHeaderContent,
  checkRole,
  isAgent
}

function setAuthorizationJwtHeader() {
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.jwtToken) {
      // set authorization header with jwt token
      axios.defaults.headers.common['Authorization'] = `Bearer ${user.jwtToken}`
    } else {
        delete axios.defaults.headers.common['Authorization']
    }
}

function parseAuthJwtHeaderContent (headerContent) {
  return headerContent.replace('Bearer ', '')
}

function checkRole(user, roleName) {
  return user.roles.includes(roleName)
}

function isAgent(user) {
  return user.roles.includes("AGENT")
}
