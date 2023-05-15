// Constructor

class Todo {
  constructor(title, description, bgColor, user, id = crypto.randomUUID(), date = new Date().toISOString(), status = 'todo') {
    this.id = id
    this.date = date
    this.title = title
    this.description = description
    this.user = user
    this.bgColor = bgColor
    this.status = status
  }
}

export { Todo }
