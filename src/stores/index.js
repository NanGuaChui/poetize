import { createPinia } from 'pinia'
import { createPersistedState } from 'pinia-plugin-persistedstate'

export const createAppPinia = () => {
  const pinia = createPinia()

  pinia.use(createPersistedState({ storage: sessionStorage }))

  return pinia
}
