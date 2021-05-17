export class App {
  message = 'Hello World!';
  items=[];

  attached(){
    this.items.push({textContent:'first node'})
  }

  addNode(){
    this.items.push({textContent:'other node'})
  }
}
