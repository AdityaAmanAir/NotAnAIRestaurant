(function (window) {
    var helloSpeaker = {};
    var speakWord = "Bye ";
    helloSpeaker.speak = function (name) {
        console.log(speakWord + " " + name);
};
    window.helloSpeaker = helloSpeaker;
})(window);