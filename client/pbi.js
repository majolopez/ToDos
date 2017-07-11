var sprintDep = new Tracker.Dependency;
var currentSprintId;

Template.pbi.events({
  'submit form#createTask' : function(e){
    e.preventDefault();
    var form = e.target;
    var taskExists = tasks.findOne({taskDes : {$eq : form.taskDes.value}},{taskDes:1,_id:1});
    var sprint = sprints.findOne({_id : {$eq : currentSprintId}});
    var desc= form.taskDes.value;
    if(desc.trim()!=="")
    {
      if(currentSprintId!==null){
        if("undefined"=== typeof taskExists)
        {
          tasks.insert({taskDes : form.taskDes.value, sprintName:sprint.name , sprintId: currentSprintId });
        }
        else {
            alert("La tarea ya existe!");
        }
      }
      else {
        alert("Se debe elegir un sprint");
      }
    }
    else {
      alert("Se debe ingresar una descripción!");
    };
  },
  'click button.delete' : function(e){
    tasks.remove({_id : e.target.id});
  },
  'change select.sprint' : function(e){
    currentSprintId = e.target.value;
    sprintDep.changed();
  }
});

Template.pbi.helpers({
  tasks : function(){
    return tasks.find();
  },
  sprints : function(){
    return sprints.find();
  },
  currentSprint : function(e){
  sprintDep.depend();
  return sprints.findOne({_id : currentSprintId});
  }
});
