//afinal tenho de trocar o rate limit

$(document).ready (function () { 
});

// Attach an event listener for the submit button
$("#greeting-form") .submit (function (event) {
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

/* 
        var slider = document.getElementById("customRange3");
        var output = document.getElementById("demo");
        output.innerHTML = slider.value; // Display the default slider value
        
        // Update the current slider value (each time you drag the slider handle)
        slider.oninput = function() {
          output.innerHTML = this.value;
        }
*/

// exemplo 2 do slider - antes da versão de teste de dia 06.05 
/* 
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value; // Display the default slider value
// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
    output.innerHTML = this.value;
} */

//versão de teste de dia 06.05
// Get the slider element and the display element
var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
// Display the default slider value
output.innerHTML = slider.value;
// Update the current slider value each time it changes
slider.oninput = function() {
    output.innerHTML = this.value;
}



// exemplo 3 do slider nao esta funcional - ver se estava funcional antes de 08.05
// With JQuery
/*
$("#ex5").slider();
// Without JQuery
var slider = new Slider('#ex5');
$("#destroyEx5Slider").click(function() {

	// With JQuery
	$("#ex5").slider('destroy');

	// Without JQuery
	slider.destroy();
});
*/

        

/*
$(document).ready(function () { 
});

// Attach an event listener for the submit button
$("#greeting-form").submit(function (event) {
    event.preventDefault();
    console.log("Form submitted!"); 

    var notificationValue = $("input[name='notification']").val();
    var selectedOption = $("#inputgroup").val(); // Get the selected option value
    console.log('Selected Option:', selectedOption);
    handleDropdownClick(selectedOption, notificationValue);
});

function handleDropdownClick(selectedOption, notificationValue) {
    console.log(selectedOption);
    if (selectedOption === "title" || selectedOption === "body") {
        callChatGPT(selectedOption, notificationValue);
    } else if (selectedOption === "image") {
        callDALLE(notificationValue);
    }
}

// perceber se a falha de funcionamento esta relacionada com esta alteração, testar primeiro a anterior
//  esta parte foi trocada tinh referencia ao ?mas agora esta com modo if an else, mesmo assim testar a onecção e a validade a anterior

function callChatGPT(option, notificationValue) {
    var url;
    if (option === "title") {
        url = "/print_title";
    } else {
        url = "/print_body";
    }
    $.ajax({
        type: "POST",
        url: url,
        data: { notification: notificationValue },
        dataType: "json",
        success: function (data) {
            console.log("Server Response:", data);
            $(".greeting-form").val(data.greeting);
            $(".loading-icon").addClass("d-none");
        },
        error: function (error) {
            console.error("Error from callChatGPT:", error);
            alert("Error from callChatGPT: " + error.responseText);
            $(".loading-icon").addClass("d-none");
        }
    });
}

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
    