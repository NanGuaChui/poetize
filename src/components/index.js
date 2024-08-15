import Loader from './Loader.vue'
import Zombie from './Zombie.vue'
import Printer from './Printer.vue'
import Wave from './Wave.vue'

// myPlugin.js
export default {
  install(app) {
    app.component('Loader', Loader)
    app.component('Zombie', Zombie)
    app.component('Printer', Printer)
    app.component('Wave', Wave)
  }
}
