const apiVersion = process.env.REACT_APP_API_VERSION
const protocol = window && window.location && window.location.protocol
const serverURL = process.env.REACT_APP_API_SERVER_URL || window && window.location && window.location.hostname

export const API_ROOT = `${protocol}//${serverURL}/api/${apiVersion}`
