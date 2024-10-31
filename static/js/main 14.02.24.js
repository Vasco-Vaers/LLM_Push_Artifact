/*

$(document).ready(function () { 
   // Remove the initial calls if not needed for your use case
    // callchatgpt();
    // calldalle();
});



// Attach an event listener for the submit button
$("#greeting-form") .submit(function (event) {
    event.preventDefault();
    console.log("Form submitted!"); // Add this line

    var notificationValue = $("input[name='notification']").val();
    var selectedOption = $("#inputgroup").val() // Get the selected option value
    console.log('Selected Option:', selectedOption);
    handleDropdownClick(selectedOption, notificationValue);
});


function handleDropdownClick(selectedOption, notificationValue) {
    console.log(selectedOption);
    if (selectedOption === "title") {
      callchatgpt(notificationValue);
    } else if (selectedOption === "body") {
      callchatgpt(notificationValue);
    } else if (selectedOption === "image") {
      calldalle(notificationValue);
    }
  }


    // function body
    function callchatgpt(notificationValue) {
        $.ajax({
            type: "POST",
            url: "/print_body",
            data: { notification: notificationValue },
            dataType: "json",
            success: function (data) {
                console.log("Server Response:", data);
            $(".greeting-form").val(data.greeting);
            $(".loading-icon").addClass("d-none");
          },
          error: function (error) {
            console.error("Error from callchatgpt:", error);
            alert("Error from callchatgpt: " + error.responseText);
            $(".loading-icon").addClass("d-none");
                }
            });
        };


    // função image
    function calldalle(imageValue) {
        localStorage.removeItem('savedGreetings');
        var savedGreetings = localStorage.getItem('savedGreetings');
        if (savedGreetings) {
            $("#input").val(savedGreetings);
        }
    
        // Attach the submit event handler for greeting-image form once when the document is ready
        $(document).ready(function () {
            $("#greeting-image").submit(function (event) {
                event.preventDefault();
                var image = $("input[name='image']").val();
    
                $.ajax({
                    type: "POST",
                    url: "/print_image",
                    data: { image: imageValue },
                    dataType: "json",
                    success: function (data) {
                        $("#notification-image").attr('src', data.image);
                        $("#input").append('<p>' + data.image + '</p>');
                        $("#input").val($("#input").val() + data.greeting + '\n');
                        localStorage.setItem('savedGreetings', $("#input").val());
                    }
                });
            });
        });
    }

    */

    


    