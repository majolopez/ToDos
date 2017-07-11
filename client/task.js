var sprintDep = new Tracker.Dependency;
var currentSprintId;

Template.task.events({
  'change select.sprint' : function(e){
    currentSprintId = e.target.value;
    sprintDep.changed();
  },
});
Template.task.helpers({
  tasks : function(){
    return tasks.find({sprintId : currentSprintId});
  },
  sprints : function(){
    return sprints.find();
  },
  currentTasks : function(e){
  sprintDep.depend();
  console.log(currentSprintId);
  if("undefined"=== typeof currentSprintId || currentSprintId == 0)
  {
    return  tasks.find().fetch();
  }
  else
  {
    return  tasks.find({sprintId : currentSprintId}).fetch();
  }
  }
});

Template.taskList.helpers({
  currentTasks : function(e){
    var tasks= tasks.find({sprintId : currentSprintId});
    console.log(tasks);
  return tasks.find({sprintId : currentSprintId});
  }
});
