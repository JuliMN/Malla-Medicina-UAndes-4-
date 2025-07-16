
const materias = {
    "Práctica Médica I": { correlativas: [], desbloquea: ["Práctica Médica II"] },
    "Fundamentos de Morfología": { correlativas: [], desbloquea: ["Morfología I"] },
    "Morfología I": { correlativas: ["Fundamentos de Morfología"], desbloquea: ["Morfología II"] },
    "Ciencias Aplicadas a la Medicina": { correlativas: [], desbloquea: ["Ciencias Biomédicas"] },
    "Pensamiento Crítico": { correlativas: [], desbloquea: [] },
    "Trabajo en Equipo y Liderazgo": { correlativas: [], desbloquea: [] },
    "Antropología": { correlativas: [], desbloquea: ["Antropología Médica"] },
    "Práctica Médica II": { correlativas: ["Práctica Médica I"], desbloquea: ["Práctica Médica III"] },
    "Comunicación": { correlativas: [], desbloquea: [] },
    "Morfología II": { correlativas: ["Morfología I"], desbloquea: [] },
    "Ciencias Biomédicas": { correlativas: ["Ciencias Aplicadas a la Medicina"], desbloquea: ["Fisiología Integrada"] },
    "Epidemiología Aplicada": { correlativas: [], desbloquea: ["Investigación y Proyectos en Salud"] },
    "Antropología Médica": { correlativas: ["Antropología"], desbloquea: ["Ética"] },
    "Teología I": { correlativas: [], desbloquea: ["Teología II"] },
    "Práctica Médica III": { correlativas: ["Práctica Médica II"], desbloquea: ["Práctica Médica IV"] },
    "Educación en Salud": { correlativas: [], desbloquea: [] },
    "Promoción, Prevención y Salud Comunitaria": { correlativas: [], desbloquea: [] },
    "Fisiología Integrada": { correlativas: ["Ciencias Biomédicas"], desbloquea: ["Semiología"] },
    "Teología II": { correlativas: ["Teología I"], desbloquea: ["Teología III"] },
    "Minor I": { correlativas: [], desbloquea: ["Minor II"] },
    "Práctica Médica IV": { correlativas: ["Práctica Médica III"], desbloquea: ["Práctica Médica V"] },
    "Psicología Médica": { correlativas: [], desbloquea: [] },
    "Investigación y Proyectos en Salud": { correlativas: ["Epidemiología Aplicada"], desbloquea: [] },
    "Semiología": { correlativas: ["Fisiología Integrada"], desbloquea: [] },
    "Ética": { correlativas: ["Antropología Médica"], desbloquea: [] },
    "Teología III": { correlativas: ["Teología II"], desbloquea: [] },
    "Minor II": { correlativas: ["Minor I"], desbloquea: ["Minor III"] },
    "Práctica Médica V": { correlativas: ["Práctica Médica IV"], desbloquea: ["Práctica Médica VI"] },
    "Medicina Ambulatoria I": { correlativas: [], desbloquea: ["Medicina Ambulatoria II"] },
    "Agentes Infecciosos": { correlativas: [], desbloquea: [] },
    "Bases de la Farmacología": { correlativas: [], desbloquea: [] },
    "Práctica Médica VI": { correlativas: ["Práctica Médica V"], desbloquea: ["Práctica Médica VII"] },
    "Medicina Ambulatoria II": { correlativas: ["Medicina Ambulatoria I"], desbloquea: [] },
    "Salud Digital": { correlativas: [], desbloquea: [] },
    "PEG": { correlativas: [], desbloquea: [] },
    "Minor III": { correlativas: ["Minor II"], desbloquea: [] },
    "Práctica Médica VII": { correlativas: ["Práctica Médica VI"], desbloquea: ["Práctica Médica VIII"] },
    "Medicina de Urgencia": { correlativas: [], desbloquea: [] },
    "Electivo": { correlativas: [], desbloquea: [] },
    "Práctica Médica VIII": { correlativas: ["Práctica Médica VII"], desbloquea: [] },
    "Medicina Hospitalaria": { correlativas: [], desbloquea: [] },
    "Innovación en Salud": { correlativas: [], desbloquea: [] },
    "Gestión en Salud": { correlativas: [], desbloquea: [] },
    "Internado de Medicina Ambulatoria": { correlativas: [], desbloquea: [] },
    "Internado Pediatría": { correlativas: [], desbloquea: [] },
    "Internado Cirugía": { correlativas: [], desbloquea: [] },
    "Internado Ginecología": { correlativas: [], desbloquea: [] },
    "Internado de Medicina Interna": { correlativas: [], desbloquea: [] },
    "Internado de Urgencia": { correlativas: [], desbloquea: [] },
    "Internado Neuropsiquiátrico": { correlativas: [], desbloquea: [] },
    "Internado Electivo": { correlativas: [], desbloquea: [] },
    "Internado Especialidades": { correlativas: [], desbloquea: [] }
};

const nombresSemestres = [
  "1° Semestre",
  "2° Semestre",
  "3° Semestre",
  "4° Semestre",
  "HITO EVALUATIVO",
  "5° Semestre",
  "6° Semestre",
  "7° Semestre",
  "8° Semestre",
  "HITO EVALUATIVO",
  "9°–10° semestre",
  "11°–12° semestre"
];

const semestres = [
    ["Práctica Médica I", "Fundamentos de Morfología", "Morfología I", "Ciencias Aplicadas a la Medicina", "Pensamiento Crítico", "Trabajo en Equipo y Liderazgo", "Antropología"],
    ["Práctica Médica II", "Comunicación", "Morfología II", "Ciencias Biomédicas", "Epidemiología Aplicada", "Antropología Médica", "Teología I"],
    ["Práctica Médica III", "Educación en Salud", "Promoción, Prevención y Salud Comunitaria", "Fisiología Integrada", "Teología II", "Minor I"],
    ["Práctica Médica IV", "Psicología Médica", "Investigación y Proyectos en Salud", "Semiología", "Ética", "Teología III", "Minor II"],
    ["HITO"],
    ["Práctica Médica V", "Medicina Ambulatoria I", "Agentes Infecciosos", "Bases de la Farmacología"],
    ["Práctica Médica VI", "Medicina Ambulatoria II", "Salud Digital", "PEG", "Minor III"],
    ["Práctica Médica VII", "Medicina de Urgencia", "Electivo", "PEG"],
    ["Práctica Médica VIII", "Medicina Hospitalaria", "Innovación en Salud", "Gestión en Salud", "PEG"],
    ["HITO"],
    ["Internado de Medicina Ambulatoria", "Internado Pediatría", "Internado Cirugía", "Internado Ginecología"],
    ["Internado de Medicina Interna", "Internado de Urgencia", "Internado Neuropsiquiátrico", "Internado Electivo", "Internado Especialidades"]
];

function createMalla() {
    const container = document.getElementById("mallaContainer");
    container.innerHTML = "";
    semestres.forEach((semestre, idx) => {
        const col = document.createElement("div");
        col.classList.add("columna");

        if (semestre[0] === "HITO") {
            col.classList.add("hito-columna");
            const hito = document.createElement("div");
            hito.textContent = 'Hito evaluativo';
            hito.classList.add("hito");
            hito.innerText = "HITO EVALUATIVO";
            col.appendChild(hito);
        } else {
            const titulo = document.createElement("div");
            titulo.classList.add("titulo-semestre");
            titulo.innerText = nombresSemestres[idx];
            col.appendChild(titulo);

            semestre.forEach(materia => {
                const div = document.createElement("div");
                div.classList.add("materia");
                div.innerText = materia;
                div.onclick = () => toggleMateria(materia);
                const estado = getEstado(materia);
                div.classList.add(estado);
                div.dataset.estado = estado;
                col.appendChild(div);
            });
        }
        container.appendChild(col);
    });
}

function toggleMateria(nombre) {
    const estado = getEstado(nombre);
    if (estado === "desbloqueada" || estado === "aprobada") {
        const nueva = estado === "aprobada" ? "desbloqueada" : "aprobada";
        localStorage.setItem(nombre, nueva);
        updateEstados();
    }
}

function getEstado(nombre) {
    const guardado = localStorage.getItem(nombre);
    if (guardado) return guardado;

    const prereqs = materias[nombre]?.correlativas || [];
    if (prereqs.every(pr => localStorage.getItem(pr) === "aprobada")) {
        return "desbloqueada";
    }
    return "bloqueada";
}

function updateEstados() {
    document.querySelectorAll(".materia").forEach(div => {
        const nombre = div.innerText;
        div.classList.remove("aprobada", "desbloqueada", "bloqueada");
        const estado = getEstado(nombre);
        div.classList.add(estado);
        div.dataset.estado = estado;
    });
}

function resetProgress() {
    localStorage.clear();
    updateEstados();
}

window.onload = () => {
    createMalla();
};
