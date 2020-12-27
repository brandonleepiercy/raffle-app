$.get("/api/all", function(results) {
    if (results.length !== 0) {
        console.log(results);
        for (i=0;i<results.length;i++){
            var listItem = $("<li>");
            var editButton = $("<button class='edit-button'>Edit</button>")
            listItem.append(results[i].id+" ");
            listItem.append(results[i].user+" ");
            editButton.attr('id', results[i].id);
            listItem.append(editButton);
            $("#username-list").append(listItem);
        };
    }
})