//JS vs jQuery

//ID
//document.getElementById("title")
//$("#title")

//Class
//document.getElementsByClassName("classname")
//$(".classname")

//Tags
//document.getElementsByTagName("p")
//$("p")

function clickMe(){
    $("#results").text("The button was clicked");
    // $("p:first").hide();
    $("p#example").css('background-color','red');
}

function register(){
    //JavaScript
    // let testEntry = document.getElementById("testInput").value;
    // let results = document.getElementById("results");
    // results.innerHTML += `<li>${testEntry}</li>`

    //jQuery
    let testEntry = $("#testInput").val();
    $("#results").append(`<li>${testEntry}</li>`)
}

function init(){
    // let h1 = document.getElementById("title");
    // console.log(h1);
    // let h1jQuery = $("#title");
    // console.log(h1jQuery);

    // let p = document.getElementsByClassName("paragraph");
    // console.log(p);
    // let p2 = $(".paragraph");
    // console.log(p2);

    // let combined = $("p.paragraph#example");
    // console.log(combined);

    $("#btn1").on("click",clickMe);

    $("#btn1").on("mouseover", function(){
        $(this).addClass("btn");
    })
    $("#btn1").on("mouseleave",function(){
        $(this).removeClass("btn");
    })

    $("#btnRegister").on("click",register);

    //Add a functionality to hide both options when the page is loaded
    $("#op1").hide();
    $("#op2").hide();

    //Add a onclick functionality to each list items to display each div
    $("#op1link").on("click",function(){
        $("#op1").show();
        $("#op2").hide();
    })
    $("#op2link").on("click",function(){
        $("#op2").show();
        $("#op1").hide();
    })
}

window.onload = init;