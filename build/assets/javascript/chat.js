$(document).ready(function(){
// ==============================================================
    // Function to handle chat
    // ==============================================================
    $("#send-chat").on("click", function (e) {
        e.preventDefault();
        var message = $("#chat-input").val().trim();

        var chatObj = {
            message: message,
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            sender: player.name
        };
        // Submit a chat
        database.ref("/chat/").push(chatObj);

        // Clear chat input
        $("#chat-input").val("");
        scrollToBottom();

    });
    // --------------------------------------------------------------

    // Make the chat work on the enter 
    // --------------------------------------------------------------
    $("#chat-input").keypress(function () {

        if (e.which == 13) {
            $("#send-chat").click();
        }
    });
    // --------------------------------------------------------------

    // Database listening function for  database.ref("/chat/").
    // --------------------------------------------------------------
    database.ref("/chat/").on('child_added', function (snapshot) {
        var chatMessage = snapshot.val();


        // Only show messages sent in the last half hour.
        // So that we have only a recent chat history
        if (Date.now() - chatMessage.timestamp < 1800000) {
            //  update HTML elements.
            var chatDisplay = chatMessage.sender + ' : ' + chatMessage.message + '&#13;&#10;';
            $(".chat-display").append(chatDisplay);
            scrollToBottom();
        }
    });
    // --------------------------------------------------------------

    // Attach a listener that detects user disconnection events
    // --------------------------------------------------------------
    database.ref("/players/").on("child_removed", function (snapshot) {

        // Send a message to chat 
        var msg = snapshot.val().name + " has disconnected!";

        // Get a key for the disconnection chat entry
        var chatKey = database.ref().child("/chat/").push().key;

        // Save the disconnection chat entry
        database.ref("/chat/" + chatKey).set(msg);

        // Updatec chat
        var chatDisplay = msg + '&#13;&#10;';
        $(".chat-display").append(chatDisplay);
        scrollToBottom();

        // Signal turn to stop
        database.ref().child("/turn/").set('stop');
    });
    // --------------------------------------------------------------

    // Find out when the content of the textarea changes 
    // Scroll to the bottom of the chat box
    $(".chat-display").change(function () {
        scrollToBottom();
    });
    // --------------------------------------------------------------

    // Function to scroll to the bottom of the chat box
    var messages = $('.chat-display');
    function scrollToBottom() {
        messages[0].scrollTop = messages[0].scrollHeight;
    };
    // --------------------------------------------------------------

    // Prevent typing in chat box
    $(".chat-display").keypress(function (e) {
        e.preventDefault();
    });
    // --------------------------------------------------------------


    // Start game
    listeners();

    // Scroll to the bottom of the chat box
    scrollToBottom();

}); // End $(document).ready(function(){}