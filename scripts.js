$(document).ready(function () {
    friends = ["Rick", "Fin", "Bensin", "Space Ghost", "Strider"];
    weapons = ["unicycle", "Bagel Bites", "lazer gun", "rusty spoon", "covid", "lightsaber", "raw steak", "pineapple", "fitted sheet", "door knob", "latex glove", "mop water", "grandma", "russian doll", "a picture of billy joel", "Keshas song TikTok", "my uncles bitty shoe", "a vhs copy of DieHard", "a plague of squirrels", "Zoidberg"];
    places = ["the lot behind waffle house", "suburban Ontario", "North Korea", "the upsidedown", "my basement", "the local trailer park, in the RV named: Grrrrr", "the room behind josh, while doing the JustMyType walkthrough", "their dogs favorite spot to pee", "Ted Dansons mind", "the backstreet that gave us the boys"];

    for (let i = 1; i < 101; i++) {
        createH3(i);
    }
    function createH3(i) {
        var accusationH3 = $('<h3></h3>').text("Accusation " + i);
        accusationH3.click(function (e) {
            alert("I accuse " + friends[i % friends.length] + " with the " + weapons[i % weapons.length] + " in " + places[i % places.length]);
        })
        $('body').append(accusationH3);
    }
    var friends;
    var weapons;
    var places;
});