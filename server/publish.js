Meteor.publish('allSprints',()=>{
  return sprints.find();
});
Meteor.publish('allTasks',()=>{
  return tasks.find();
});

Meteor.publish('sprintTask',(id)=>{
  return tasks.find({sprintId : id});
});
