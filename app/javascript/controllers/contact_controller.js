import { Controller } from "stimulus"

export default class extends Controller {
  static targets = [ "validation", "submit", "start", "error", "form" ]

  replace(event) {
    this.errorTarget.innerHTML = '';
    const [data, status, xhr] = event.detail;
    const validation = this.validationTarget;
    validation.innerHTML = xhr.response;
    const start = this.startTarget;
    $('html, body').animate({
         scrollTop: $(start).offset().top
       }, 1000);
  }

  showError(event) {
    const [data, status, xhr] = event.detail;
    const target = this.errorTarget;
    $('html, body').animate({
         scrollTop: $(target).offset().top
       }, 1000);
    target.innerHTML = xhr.response;
  }
}
