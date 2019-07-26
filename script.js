$(document).ready(function () {

    let addTask = 0;
    let taskNo = 0;
    let completedNo = 0;
    let i = 0;

    $(".donediv").hide();

    $("#addtask").on("click", function () {

        event.preventDefault();

        let vrednost = $("#add").val();
        let todoArray = [];

        if (vrednost == "") {

            window.alert("Potrebno je da unesete zadatak u polje !");
        }
        else {

            if (taskNo == 2) {
                
                window.alert("Dodali ste maksimalan broj zadataka u listu !");
                $("#add").val("");
                return;
            }

            $(".todo").append("<li><input id='todo'><button class='edit'>Izmeni</button><button class='finish'>Zavrsi</button></li>");

            $("#todo").val(vrednost);

            arrayTodo = todoArray.push(vrednost);
            i++;

            taskNo++;

            $("#zadatak").html(taskNo);
            $("#add").val("");
        };

        $(".finish").on("click", function () {

            if (taskNo != 2) {

                window.alert("Nemate vise unetih zadataka !");
                $("#add").val("");
                return;
            }
            else {

                $("#zadatak").html(taskNo);
                $("#add").val("");
                
            }

            taskNo--;
            
        });


        $(".finish").on("click", function () {

            let zavrsen = $('input:checked').val();

            if (zavrsen == "") {
                window.alert("Nemate zavrsen ni jedan zadatak !");
            }
            
            else {
                $(".donediv").show();

                $(".done").append("<li><input id='done'><button class='vrati'>Vrati</button></li>");

                completedNo++;

                $("#zavrsen").html(completedNo);

            }
        });



    });





});