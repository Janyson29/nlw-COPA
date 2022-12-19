function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

let delay = -0.4;
function createCard(title, date, day, games) { 
  delay = delay + 0.4;
  return `
    <div class="card"  style="animation-delay: ${delay}s">
      <h3>${title}</h3>
      <h2>${date}  <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}
/*function createTitle(title) {
  return `
    <h2>${title}</h2>
    `
}*/

document.querySelector("#cards").innerHTML =
  createCard(
    "fase de grupos",
    "20/11",
    "Domingo",
    createGame("catar", "0 X 2", "equador")
  ) +
  createCard(
    "fase de grupos",
    "21/11",
    "segunda",
    createGame("inglaterra", "6 X 2", "irã") +
      createGame("senegal", "0 X 2", "holanda") +
      createGame("usa", "1 X 1", "gales")
  ) +
  createCard(
    "fase de grupos",
    "22/11",
    "terça",
    createGame("argentina", "1 X 2", "arábia") +
      createGame("dinamarca", "0 X 0", "tunísia") +
      createGame("méxico", "0 X 0", "polônia") +
      createGame("frança", "4 X 1", "austrália")
  ) +
  createCard(
    "fase de grupos",
    "23/11",
    "quarta",
    createGame("marrocos", "0 X 0", "croácia") +
      createGame("alemanha", "1 X 2", "japão") +
      createGame("espanha", "7 X 0", "costa") +
      createGame("bélgica", "1 X 0", "canadá")
  ) +
  createCard(
    "fase de grupos",
    "24/11",
    "quinta",
    createGame("suíça", "1 X 0", "camarões") +
      createGame("uruguai", "0 X 0", "coreia") +
      createGame("portugal", "3 X 2", "gana") +
      createGame("brasil", "2 X 0", "sérvia")
  ) +
  createCard(
    "fase de grupos",
    "25/11",
    "sexta",
    createGame("gales", "0 X 2", "irã") +
      createGame("catar", "1 X 3", "senegal") +
      createGame("holanda", "1 X 1", "equador") +
      createGame("inglaterra", "0 X 0", "usa")
  ) +
  createCard(
    "fase de grupos",
    "26/11",
    "sábado",
    createGame("tunísia", "0 X 1", "austrália") +
      createGame("polônia", "2 X 0", "arábia") +
      createGame("frança", "2 X 1", "dinamarca") +
      createGame("argentina", "2 X 0", "méxico")
  ) +
  createCard(
    "fase de grupos",
    "27/11",
    "domingo",
    createGame("japão", "0 X 1", "costa") +
      createGame("bélgica", "0 X 2", "marrocos") +
      createGame("croácia", "4 X 1", "canadá") +
      createGame("alemanha", "1 X 1", "espanha")
  ) +
  createCard(
    "fase de grupos",
    "28/11",
    "segunda",
    createGame("camarões", "3 X 3", "sérvia") +
      createGame("coreia", "2 X 3", "gana") +
      createGame("brasil", "1 X 0", "suíça") +
      createGame("portugal", "2 X 0", "uruguai")
  ) +
  createCard(
    "fase de grupos",
    "29/11",
    "terça",
    createGame("equador", "1 X 2", "senegal") +
      createGame("holanda", "2 X 0", "catar") +
      createGame("irã", "0 X 1", "usa") +
      createGame("gales", "0 X 3", "inglaterra")
  ) +
  createCard(
    "fase de grupos",
    "30/11",
    "quarta",
    createGame("tunísia", "1 X 0", "frança") +
      createGame("austrália", "1 X 0", "dinamarca") +
      createGame("polônia", "0 X 2", "argentina") +
      createGame("arábia", "1 X 2", "méxico")
  ) +
  createCard(
    "fase de grupos",
    "01/12",
    "quinta",
    createGame("croácia", "0 X 0", "bélgica") +
      createGame("canadá", "1 X 2", "marrocos") +
      createGame("japão", "2 X 1", "espanha") +
      createGame("costa", "2 X 4", "alemanha")
  ) +
  createCard(
    "fase de grupos",
    "02/12",
    "sexta",
    createGame("coreia", "2 X 1", "portugal") +
      createGame("gana", "0 X 2", "uruguai") +
      createGame("sérvia", "2 X 3", "suíça") +
      createGame("camarões", "1 X 0", "brasil")
  ) +
  createCard(
    "oitavas de final",
    "03/12",
    "sábado",
    createGame("holanda", "3 x 1", "usa") + createGame("argentina", "2 x 1", "austrália")
  ) +
  createCard(
    "oitavas de final",
    "04/12",
    "domingo",
    createGame("frança", "3 X 1", "polônia") + createGame("inglaterra", "3 X 0", "senegal")
  ) +
  createCard(
    "oitavas de final",
    "05/12",
    "segunda",
    createGame("japão", "1 X 1", "croácia") + createGame("brasil", "4 X 1", "coreia")
  ) +
  createCard(
    "oitavas de final",
    "06/12",
    "terça",
    createGame("marrocos", "0 X 0", "espanha") + createGame("portugal", "6 X 1", "suíça")
  ) +
  createCard(
    "quartas de final",
    "09/12",
    "sexta",
    createGame("brasil", "1 X 1", "croácia") + createGame("holanda", "2 X 2", "argentina")
  ) +
  createCard(
    "quartas de final",
    "10/12",
    "sábado",
    createGame("marrocos", "1 X 0", "portugal") + createGame("inglaterra", "1 X 2", "frança")
  ) +
  createCard(
    "semifinal",
    "13/12",
    "terça",
    createGame("argentina", "3 X 0", "croácia")
  ) +
  createCard(
    "semifinal",
    "14/12",
    "quarta",
    createGame("frança", "2 X 0", "marrocos")
  ) +
  createCard(
    "disputa do terceiro lugar",
    "17/12",
    "sábado",
    createGame("croácia", "2 X 1", "marrocos")
  ) +
  createCard("final", "18/12", "domingo", createGame("argentina", "3 X 3", "frança"))
