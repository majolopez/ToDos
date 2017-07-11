Router.route('/',function(){
  Meteor.subscribe('allSprints');
  var allSprints = sprints.find();
  console.log(allSprints);
  this.render('sprint',{data : {sprints : allSprints}});
});

Router.route('/pbi',function(){
  Meteor.subscribe('allSprints');
  var allSprints = sprints.find();
  Meteor.subscribe('allTasks');
  var allTasks = tasks.find();
  this.render('pbi',{data : {sprints : allSprints, tasks : allTasks}});
});

Router.route('/task',function(){
  Meteor.subscribe('allSprints');
  var allSprints = sprints.find();
  Meteor.subscribe('allTasks');
  var allTasks = tasks.find();
  this.render('task',{data : {sprints : allSprints, tasks : allTasks}});
});

Router.route('/task/:id',function(){
  this.wait(Meteor.subscribe('sprintTask',this.params.id));
  var tasks = tasks.find();
  this.render('sprintTask',{data : {task : tasks}});
});
