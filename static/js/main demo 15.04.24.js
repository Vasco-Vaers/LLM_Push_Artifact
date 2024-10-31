/*
//afinal tenho de trocar o rate limit
$(document).ready(function () { 
});

// Attach an event listener for the submit button
$("#greeting-form") .submit(function (event) {
    event.preventDefault();
    console.log("Form submitted!"); 

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

    // function title -- estou a testar aqui
    function callchatgpt(notificationValue) {
        $.ajax({
            type: "POST",
            url: "/print_title",
            data: { title_not: notificationValue },
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

    // function body - já nao dá desde que alterei o 2
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

    // function image
    // testar se funciona e depois adaptar
    function calldalle(notificationValue) { 
        $.ajax({
            type: "POST",
            url: "/print_image",
            data: { image: notificationValue },
            dataType: "json",
            success: function (data) {
                console.log("Server Response:", data);
            $(".greeting-form").val(data.greeting);
            $(".loading-icon").addClass("d-none");
        },
        error: function (error) {
            console.error("Error from calldalle:", error);
            alert("Error from calldalle: " + error.responseText);
            $(".loading-icon").addClass("d-none");
                }
            });
        };

        */


    