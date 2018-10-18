$(document).ready(function () {

    var turn = "X";

    function startGame() {
        $("td").one('click', function () {
            $(this).text(turn);
            checkWin();
            switchTurn();
        });
    }

    function switchTurn() {

        if (turn === "X") {
            turn = "O";
        } else {
            turn = "X";
        }

    }

    function checkWin() {
        if ($("#1").text() === "X" &&
            $("#2").text() === "X" &&
            $("#3").text() === "X") {
            console.log("X won!");
            alertPlayer("X");
        }

        else if ($("#4").text() === "X" &&
            $("#5").text() === "X" &&
            $("#6").text() === "X") {
            console.log("X won!");
            alertPlayer("X");
        }
        else if ($("#7").text() === "X" &&
            $("#8").text() === "X" &&
            $("#9").text() === "X") {
            console.log("X won!");
            alertPlayer("X");
        }

        else if ($("#1").text() === "X" &&
            $("#4").text() === "X" &&
            $("#7").text() === "X") {
            console.log("X won!");
            alertPlayer("X");
        }

        else if ($("#2").text() === "X" &&
            $("#5").text() === "X" &&
            $("#8").text() === "X") {
            console.log("X won!");
            alertPlayer("X");
        }

        else if ($("#3").text() === "X" &&
            $("#6").text() === "X" &&
            $("#9").text() === "X") {
            console.log("X won!");
            alertPlayer("X");
        }
        else if ($("#1").text() === "X" &&
            $("#5").text() === "X" &&
            $("#9").text() === "X") {
            console.log("X won!");
            alertPlayer("X");
        }

        else if ($("#3").text() === "X" &&
            $("#5").text() === "X" &&
            $("#7").text() === "X") {
            console.log("X won!");
            alertPlayer("X");
        }

        else if ($("#1").text() === "O" &&
            $("#2").text() === "O" &&
            $("#3").text() === "O") {
            console.log("O won!");
            alertPlayer("O");
        }

        else if ($("#4").text() === "O" &&
            $("#5").text() === "O" &&
            $("#6").text() === "O") {
            console.log("O won!");
            alertPlayer("O");
        }
        else if ($("#7").text() === "O" &&
            $("#8").text() === "O" &&
            $("#9").text() === "O") {
            console.log("O won!");
            alertPlayer("O");
        }

        else if ($("#1").text() === "O" &&
            $("#4").text() === "O" &&
            $("#7").text() === "O") {
            console.log("O won!");
            alertPlayer("O");
        }

        else if ($("#2").text() === "O" &&
            $("#5").text() === "O" &&
            $("#8").text() === "O") {
            console.log("O won!");
            alertPlayer("O");
        }

        else if ($("#3").text() === "O" &&
            $("#6").text() === "O" &&
            $("#9").text() === "O") {
            console.log("O won!");
            alertPlayer("O");
        }
        else if ($("#1").text() === "O" &&
            $("#5").text() === "O" &&
            $("#9").text() === "O") {
            console.log("O won!");
            alertPlayer("O");
        }

        else if ($("#3").text() === "O" &&
            $("#5").text() === "O" &&
            $("#7").text() === "O") {
            console.log("O won!");
            alertPlayer("O");
        }

    }

    function alertPlayer(user) {

        swal({
            title: "Good job!",
            text: "Player " + user + " Won ",
            icon: "success",
            button: "Start Over!",
        });
        $("button").click(function () {
            location.reload();
        })

    }

    startGame();
});



