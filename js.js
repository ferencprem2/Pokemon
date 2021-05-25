var pikachu = document.getElementById('pika');
var charizard = document.getElementById('char');
var blastoise = document.getElementById('blas');
var alakazam = document.getElementById('alak');
var golem = document.getElementById('golem');

var asd = 2;

var tomb = [
    [
        "Pikachu",
        "pikachu.png",
        "nincs",
        35,
        55,
        40,
        90
    ],
    [
        "Charizard",
        "Charizard.png",
        "Charizard_evolved.jpg",
        78,
        84,
        78,
        100
    ],
    [
        "Blastoise",
        "Blastoise.jpg",
        "Blastoise_evolved.jpg",
        79,
        83,
        100,
        78
    ],
    [
        "Alakazam",
        "Alakazam.jpg",
        "Alakazam_evolved.jpg",
        55,
        50,
        45,
        120
    ],
    [
        "Golem",
        "Golem.jpg",
        "Golem_evolved.jpg",
        80,
        120,
        130,
        45
    ]
];

var szamlalo = 2;
var pokemons = document.getElementsByClassName("pokemons");
var stats = document.getElementsByClassName("statbarlevel");

var statkulso = document.getElementsByClassName("statkulso");

function reset() {
    if (szamlalo < 0)
        szamlalo = tomb.length - 1;
    else if (szamlalo >= tomb.length)
        szamlalo = 0;
}

function getSzam(kell) {
    var current = szamlalo + kell;

    var vissza = 50;

    if(current < 0) {
        vissza = tomb.length - -current;
    } else if(current >= tomb.length) {
        vissza = current - tomb.length;
    } else {
        vissza = current;
    }

    console.log(vissza);
    return vissza;
}

function atszamol() {
    for (let i = 0; i < statkulso.length; i++) {
        var szel = statkulso[i].clientWidth;
        var lvl = statkulso[i].getElementsByClassName("statbarlevel")[0];

        lvl.style.width = (szel) / (tomb[szamlalo][3 + i] + 150) * 100 + "px";
    }
}

function valtas() {
    reset();

    //console.log(szamlalo);
    pokemons[0].src = "kepek/" + tomb[getSzam(-2)][1];
    pokemons[1].src = "kepek/" + tomb[getSzam(-1)][1];
    pokemons[2].src = "kepek/" + tomb[szamlalo][1];
    pokemons[3].src = "kepek/" + tomb[getSzam(1)][1];
    pokemons[4].src = "kepek/" + tomb[getSzam(2)][1];

    atszamol();
}

atszamol();

window.addEventListener('resize', atszamol);
//console.log(stats);

function elore() {
    szamlalo++;
    valtas();
}

function vissza() {
    szamlalo--;
    valtas();
}

valtas();

var evo = false;

function evolve() {
    //alert("Melida dualtrust, a robin biciglie")
    var evolve = document.getElementById("evo");

    if(tomb[szamlalo][2] != "nincs") {
        if(evo) {
            pokemons[2].src = "kepek/" + tomb[szamlalo][1];

            evolve.innerHTML = "Evolve";

        } else {
            pokemons[2].src = "kepek/" + tomb[szamlalo][2];
            
            evolve.innerHTML = "Normale";
        }

        evo = !evo;
    }
}