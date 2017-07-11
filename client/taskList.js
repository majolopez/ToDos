Template.taskList.events({
'click .toggle-checked'() {
    // Set the checked property to the opposite of its current value
    tasks.update(this._id, {
      $set: { checked: ! this.checked },
    });
  },});
