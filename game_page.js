player1_name = localStorage.getItem("player1_name")
player2_name = localStorage.getItem("player2_name")


player1_score = 0;
player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name + " : "
document.getElementById("player2_name").innerHTML = player2_name + " : "

document.getElementById("player1_score").innerHTML = player1_score
document.getElementById("player2_score").innerHTML = player2_score

document.getElementById("player_question").innerHTML = "Questioneer - " + player1_name;
document.getElementById("player_answer").innerHTML = "Answerer - " + player2_name;

function send() {
    get_word = document.getElementById("word").value;
    word = get_word.toLowerCase();
    console.log("Lowercase Word: "+ word);

    //Step 2
    charAt1 = word.charAt(1);
    console.log("Step 2 = "+charAt1);

    //Step 3
    length_divide_2 = Math.floor(word.length/2)
    charAt2 = word.charAt(length_divide_2)
    console.log("Step 3: "+charAt2)

    //Step 4 
    length_minus_1 = word.length - 1;
    charAt3 = word.charAt(length_minus_1);
    console.log("Step 4: "+charAt3)

    //Step 5
    remove_charAt1 = word.replace(charAt1, "_")
    remove_charAt2 = remove_charAt1.replace(charAt2, "_")
    remove_charAt3 = remove_charAt2.replace(charAt3, "_")
    console.log("Step 5: "+remove_charAt3)

    //Step 6: Putting it all together
    question_word = "<h4 id='word_display'> Fill the gaps! "+remove_charAt3+"</h4>"
    input_box = "<br> Answer: <input type='text' id='input_check_box'>";
    check_button = "<br><br><button class='btn btn-info' onclick='check();'>Check your answer!<button>";
    row = question_word + input_box + check_button; //AKA lines 42-44
    document.getElementById("output").innerHTML = row;
    document.getElementById("word").value = "";
}

question_turn = "player1";
answer_turn = "player2";

function check() {
    
//rememememememember
    get_answer = document.getElementById("input_check_box").value;
    answer = get_answer.toLowerCase();
    console.log(get_answer+", "+answer)

    if(answer == word) {

    if(answer_turn =="player1") {
        player1_score = player1_score + 1
        document.getElementById("player1_score").innerHTML = player1_score;
    } 
    else {
        player2_score = player2_score + 1;
        document.getElementById("player2_score").innerHTML = player2_score;
    }
}

    if(question_turn =="player1") {
        question_turn = "player2"
        document.getElementById("player_question").innerHTML = "Questioneer - "+player2_name;
    } 
    else {
       question_turn = "player1"
       document.getElementById("player_question").innerHTML = "Questioneer - "+player1_name;
    }

    if(answer_turn == "player1") {
        answer_turn = "player2"
        document.getElementById("player_answer").innerHTML = "Answerer - "+player2_name;
    }
    else {
        answer_turn = "player1"
        document.getElementById("player_answer").innerHTML = "Answerer - "+player1_name;
    }
    document.getElementById("output").innerHTML = "";
}