$(document).ready(function() {
//////////
    var lists = [];
    $("form#new-list").submit(function(event) {
        event.preventDefault();
        $(".no-lists-yet").hide();

        var inputtedListName = $("input#for-new-list").val();
        var newList = { listName: inputtedListName, tasks: [] };

        lists.push(newList);

        $("ul#lists").append("<li><span class='listName'>" + newList.listName + "</span></li>");
        $("ul#tasks").empty();

        $("#show-list h2").text(newList.listName);

        $(".listName").last().click(function() {
            $("#show-list h2").text(newList.listName);
            $("ul#tasks").text("");
            newList.tasks.forEach(function(task) {
                $("ul#tasks").append("<li>" + task + "</li>");
            });

        });

        $("input#for-new-list").val("");


    });
    $("form#new-task").submit(function(event) {
        event.preventDefault();

        var activeListName = $("#show-list h2").text();


        var newTask = $("input#for-new-task").val();
       /* newList.tasks.push(newTask);*/

    for(var i = 0; i < lists.length; i++){
        if(activeListName == lists[i].listName){
            lists[i].tasks.push(newTask);
            $("ul#tasks").append("<li>" + newTask + "</li>");

        }
    }

        $("input#for-new-task").val("");

    });













/////////
});