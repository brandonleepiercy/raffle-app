$("#submit-button").on("click", function(event) {
    
    event.preventDefault();
    var userInput = $("#user").val();

    if (userInput=="") {
        alert("Form can't be submitted blank");
    } else {
        var userInputTrim = $("#user").val().trim();
        if(userInputTrim=="") {
            alert("Did you seriously just type in a bunch of spaces? Why would you do this?");
        } else {
            console.log("Form successfully submitted, username:"+userInputTrim);
            console.log("Checking if user already exists...");
            $.get("/api/"+userInputTrim, function(data) {
                if (data.length !== 0) {
                    alert("User already exists");
                } else {
                    var newTicket = {
                        user:$("#user").val().trim()
                    };
                    $.post("/api/new", newTicket).then(function() {
                        console.log(newTicket.user+" successfully added");
                        $("#diditsubmit").text(newTicket.user+" saved successfully! Good luck!!");
                    });
                    $("#user").val("");
                }
            })
        }
    }
});