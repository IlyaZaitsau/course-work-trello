// buildTemplate
function buildTodoTemplate(todo) {
  const date = new Date(todo.date).toLocaleString()
  const statusTodo = todo.status == 'todo' ? 'selected' : ''
  const statusInProgress = todo.status == 'inProgress' ? 'selected' : ''
  const statusDone = todo.status == 'done' ? 'selected' : ''
  return `
    <div id="${todo.id}" class="card__wrapper ${todo.bgColor}">
      <div class="card__top">
        <h2 class="card__title">${todo.title}</h2>
        <span class="card__date">${date}</span>
      </div>
      <div class="card__descr">${todo.description}</div>
      <div class="card__user">${todo.user}</div>
      <select class="card__select" data-role="select" data-id="${todo.id}">
        <option value="todo" ${statusTodo}>Todo</option>
        <option value="inProgress" ${statusInProgress}>inProgress</option>
        <option value="done" ${statusDone}>Done</option>
      </select>
      <button class="btn btn-primary" data-role="edit">Edit</button>
      <button class="btn btn-danger" data-role="delete" data-id="${todo.id}">Remove</button>
    </div>
  `
}
// counter template
function buildTemplateTodo(countTodo) {
  return `
    <h2 class="content__title">Todo</h2>
    <span>${countTodo}</span>
  `
}
function buildTemplateProgress(countProgress) {
  return `
    <h2 class="content__title">In Progress</h2>
    <span>${countProgress}</span>
  `
}
function buildTemplateDone(countDone) {
  return `
    <h2 class="content__title">Done</h2>
    <span>${countDone}</span>
  `
}

export { buildTodoTemplate, buildTemplateTodo, buildTemplateProgress, buildTemplateDone }
