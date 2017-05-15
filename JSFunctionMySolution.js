var toDo = {
  description: 'homework',
  assignee: 'kaitlin',
  done: true,
  printStatus: function() {
    console.log('Has ' + this.assignee + ' completed ' + this.description + '? ' + this.done);
  }
};
toDo.printStatus();
