Template.sprint.events({
  'submit form#createSprint' : function(e){
    e.preventDefault();
    var form = e.target;
    sprints.insert({name : form.name.value});
    form.name.value = '';
  },
  'click button.delete' : function(e){
    sprints.remove({_id : e.target.id});
  }
});

Template.sprint.helpers({
  sprints : function(){
    return sprints.find();
  }
});
