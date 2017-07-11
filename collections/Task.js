tasks = new Meteor.Collection('tasks');

tasks.allow({
  insert : function(){
    return true;
  },
  update : function(){
    return true;
  },
  remove : function(){
    return true;
  },
});

tasks.schema = new SimpleSchema({
  taskDes : {
    type : String
  },
   checked : {
    type : String
  },
  sprintId : {
    type : String
  },
  sprintName : {
    type : String
  }
});
