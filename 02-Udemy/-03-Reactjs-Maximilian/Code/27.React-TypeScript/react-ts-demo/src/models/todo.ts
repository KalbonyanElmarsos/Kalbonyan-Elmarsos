class Todo {
  id: string;
  text: string;

  constructor(textValue: string) {
    this.id = new Date().toISOString();
    this.text = textValue;
  }
}

export default Todo;
