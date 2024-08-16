import Loader from './Loader.vue'
import Zombie from './Zombie.vue'
import Printer from './Printer.vue'
import Wave from './Wave.vue'
import TreeHole from './TreeHole.vue'
import MyAside from './MyAside.vue'
import SortArticle from './SortArticle.vue'
import Photo from './Photo.vue'
import MyFooter from './MyFooter.vue'
import ProTag from './ProTag.vue'

// myPlugin.js
export default {
  install(app) {
    app.component('Loader', Loader)
    app.component('Zombie', Zombie)
    app.component('Printer', Printer)
    app.component('Wave', Wave)
    app.component('TreeHole', TreeHole)
    app.component('MyAside', MyAside)
    app.component('SortArticle', SortArticle)
    app.component('Photo', Photo)
    app.component('MyFooter', MyFooter)
    app.component('ProTag', ProTag)
  }
}
