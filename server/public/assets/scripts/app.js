$(document).ready(function(){
    $("#search").submit(function(event){
        event.preventDefault();
        var values = {};
        //console.log("I'm not working right");

        $.each($(this).serializeArray(), function(i, field){
            values[field.name] = field.value;
        });

        $.ajax({
            type: "GET",
            url: "/data",
            data: values,
            success: function(data){
                peopleStuff(data);
            }
        })
    });
});

function peopleStuff(data){
    $("#peopleInfo").empty();
    for (i = 0; i < data.length; i++){
        $("#peopleInfo").append("<div class='zeta-info'></div>");
        $(".zeta-info").last().append(data[i].name + ": " + data[i].animal);
    }
}