import {bindable} from 'aurelia-framework';

export class editMd {
  isEditing = false;
  rows = 1;
  @bindable content;
  submittedContent;
  attached() {
    this.width = this.myspan.clientWidth;
    this.submittedContent = this.content;
    //this.myspan.textContent = this.content;//this.mytextarea.value;
  }

  edit(){
    this.isEditing = true;
    this.width = this.myspan.clientWidth;

    //this.content = this.myspan.textContent;
    //this.mytextarea.value = this.myspan.textContent;
  }

  submit() {
    this.isEditing = false;
    //if (!content) content = that.editor.getValue();
    //hack - transform content so bdl-components will be interpreted by aurelia plugin - it needs components without
    //bdl prefix
    //all <bdl- will be replaced to < and </bdl- to </ because preview mode uses aurelia-plugin (components without prefix)
    const startprefix = /<bdl-/gi;
    const stopprefix = /<\/bdl-/gi;
    this.submittedContent = this.content.replace(startprefix, '<').replace(stopprefix, '</');

    //console.log('submit() transformedcontent:', transformedContent);
    //now replace every (img_name) with (bloburl)
    //create customevent - which component is listening to

    //create customevent - which component is listening to
    //let event = new CustomEvent('contentupdate', {detail: {content: transformedContent}});
    //console.log('sending content update')
    //document.getElementById('editorref').dispatchEvent(event);

    //this.myspan.textContent = this.mytextarea.value;
    //this.myspan.textContent = this.content;
  }
}
