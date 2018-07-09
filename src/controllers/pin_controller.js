import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "name" ]

  copy() {
    console.log(`Hello, ${this.name}!`)
  }
  get name() {
    return this.nameTarget.value
  }

}
