
//El diccionario ☺
const  dcc=[
    {
        st:"jalisco",
        cap:"guadalajara"
    },
    {
        st:"colima",
        cap:"colima"
    },
    {
        st:"michoacan",
        cap:"morelia"
    },
    {
        st:"sinaloa",
        cap:"culiacan"
    },
    {
        st:"chihuahua",
        cap:"chihuahua"
    },
    {
        st:"baja california",
        cap:"mexicali"
    },
    {
        st:"baja california sur",
        cap:"la paz"
    },
    {
        st:"aguascalientees",
        cap:"aguascalientes"
    },
    {
        st:"nuevo león",
        cap:"monterrey"
    },
    {
        st:"campeche",
        cap:"san francisco de campeche"
    },
    {
        st:"coahuila",
        cap:"saltillo"
    },
    {
        st:"chiapas",
        cap:"tuxtla gutierrez"
    },
    {
        st:"ciudad de mexico",
        cap:"ciudad de mexico"
    },
    {
        st:"durango",
        cap:"victoria de durango"
    },
    {
        st:"guanajuato",
        cap:"guanajuato"
    },
    {
        st:"guerrero",
        cap:"chilpancingo"
    },
    {
        st:"hidalgo",
        cap:"pachuca"
    },
    {
        st:"estado de mexico",
        cap:"toluca"
    },
    {
        st:"morelos",
        cap:"cuernavaca"
    },
    {
        st:"nayarit",
        cap:"tepic"
    },
    {
        st:"oaxaca",
        cap:"oaxaca de juarez"
    },
    {
        st:"puebla",
        cap:"puebla"
    },
    {
        st:"queretaro",
        cap:"santiago de queretaro"
    },
    {
        st:"quintana roo",
        cap:"chetumal"
    },
    {
        st:"san luis potosi",
        cap:"san luis potosi"
    },
    {
        st:"sonora",
        cap:"hermosillo"
    },
    {
        st:"tabasco",
        cap:"villahermosa"
    },
    {
        st:"tamaulipas",
        cap:"ciudad victoria"
    },
    {
        st:"tlaxcala",
        cap:"tlaxcala"
    },
    {
        st:"veracruz",
        cap:"xalapa"
    },
    {
        st:"yucatan",
        cap:"merida"
    },
    {
        st:"zacatecas",
        cap:"zacatecas"
    },
    ]

const menu = document.getElementById("menu");
const game = document.getElementById("qc");
const caps = document.getElementById("caps");
const sts = document.getElementById("sts");
const result2 = document.getElementById("result2");
const send = document.getElementById("send");

let current = null;
let total = 0;
let aciertos = 0;

function randState() {
    return dcc[Math.floor(Math.random() * dcc.length)];
}

function show(id) {
    document.querySelectorAll(".scene").forEach(sc => sc.style.display = "none");
    document.getElementById(id).style.display = "block";
}

function nuevaPregunta() {
    if (total >= 10) {
        terminarJuego();
        return;
    }

    current = randState();
    sts.textContent = "Capital de: " + current.st.toUpperCase();
    caps.value = "";
    result2.textContent = "";

    total++;
}

function verificar() {
    const user = caps.value.trim().toLowerCase();
    const correct = current.cap.toLowerCase();

    if (!user) {
        result2.textContent = "Escribe algo.";
        result2.style.color = "orange";
        return;
    }

    if (user === correct) {
        result2.textContent = "✔ Correcto";
        result2.style.color = "green";
        aciertos++;
    } else {
        result2.textContent = "✖ Era: " + current.cap;
        result2.style.color = "red";
    }

    setTimeout(nuevaPregunta, 900);
}

function terminarJuego() {
    sts.textContent = "Juego terminado";
    result2.textContent = aciertos + "/10";

    caps.style.display = "none";
    send.style.display = "none";

    const btn = document.createElement("button");
    btn.textContent = "Reiniciar";
    btn.onclick = reiniciar;

    game.appendChild(btn);
}

function reiniciar() {
    total = 0;
    aciertos = 0;

    caps.style.display = "inline-block";
    send.style.display = "inline-block";

    const extraBtn = document.querySelector("#qc button:not(#send)");
    if (extraBtn) extraBtn.remove();

    show("menu");
}

document.getElementById("start2").onclick = () => {
    show("qc");
    nuevaPregunta();
};

send.onclick = verificar;

caps.addEventListener("keypress", e => {
    if (e.key === "Enter") verificar();
});
