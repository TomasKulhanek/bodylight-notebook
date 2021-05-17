import {bindable} from 'aurelia-framework';

export class editMd {
  isEditing = false;
  @bindable content;
  attached() {

    this.width = this.myspan.clientWidth;
    this.myspan.textContent = this.content;
  }

  edit(){
    this.isEditing = true;
    this.width = this.myspan.clientWidth;
    this.content = this.myspan.textContent;
  }

  submit() {
    this.isEditing = false;
    this.myspan.textContent = this.content;
  }
}
