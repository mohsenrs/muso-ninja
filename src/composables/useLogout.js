import { ref } from 'vue'
import { projectAuth } from '../firebase/config'

// refs
const error = ref(null)
const isPending = ref(false)

// logout function
const logout = async () => {
  error.value = null
  isPending.value = true

  try {
    await projectAuth.signOut()
    isPending.value = false
  }
  catch(err) {
    console.log(err.message)
    isPending.value = false
    error.value = err.message
  }
}

const useLogout = () => {
  return { error, logout, isPending }
}

export default useLogout