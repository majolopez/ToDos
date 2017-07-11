sprints = new Meteor.Collection('sprints');

sprints.allow({
  insert : function(){
    return true;
  },
  update : function(){
    return true;
  },
  remove : function(){
    return true;
  }
});

sprints.schema = new SimpleSchema({
  name : {
    type : String
  }
});
