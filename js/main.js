function choser() {
    var quote = ["Be yourself; everyone else is already taken.","If you tell the truth, you don't have to remember anything","A friend is someone who knows all about you and still loves you.”","“Always forgive your enemies; nothing annoys them so much.”","it is better to be hated for what you are than to be loved for what you are not.”"]
    var writer = ["Oscar Wilde","Mark Twain","Elbert Hubbard","Oscar Wilde","Andre Gide, Autumn Leaves"]
    var counter =  Math.floor (Math.random () * writer.length) ;
    document.getElementById("qquotee").innerHTML = quote [counter]
    document.getElementById("writer").innerHTML = writer [counter]


   
}