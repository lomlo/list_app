
window.addEventListener("load", function() {
  new_list = new List(Task);
  // var task1 = new Task("call grandma");
  // new_list.addItem(task1);
  // document.getElementById("form").addEventListener("submit", myFunction);
  // function myFunction(evt) {
  //    evt.preventDefault();
  // }
});

function addTask(){
  var newItem = document.getElementById("task_input").value
  new_list.addItem(newItem);
  document.getElementById('list').innerHTML = new_list.toHtml();
}





// var task2 = new Task("feed the hog");
// var task3 = new Task("eat more bacon");
// new_list.addItem(task1);
// new_list.addItem(task2);
// new_list.addItem(task3);


// var task_input = document.getElementById('task_input');
// new_list.addItem(task_input);
