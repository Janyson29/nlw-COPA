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
    createGame("catar", "13:00", "equador")
  ) +
  createCard(
    "fase de grupos",
    "21/11",
    "segunda",
    createGame("inglaterra", "10:00", "irã") +
      createGame("senegal", "13:00", "holanda") +
      createGame("usa", "16:00", "gales")
  ) +
  createCard(
    "fase de grupos",
    "22/11",
    "terça",
    createGame("argentina", "07:00", "arábia") +
      createGame("dinamarca", "10:00", "tunísia") +
      createGame("méxico", "13:00", "polônia") +
      createGame("frança", "16:00", "austrália")
  ) +
  createCard(
    "fase de grupos",
    "23/11",
    "quarta",
    createGame("marrocos", "07:00", "croácia") +
      createGame("alemanha", "10:00", "japão") +
      createGame("espanha", "13:00", "costa") +
      createGame("bélgica", "16:00", "canadá")
  ) +
  createCard(
    "fase de grupos",
    "24/11",
    "quinta",
    createGame("suíça", "07:00", "camarões") +
      createGame("uruguai", "10:00", "coreia") +
      createGame("portugal", "13:00", "gana") +
      createGame("brasil", "16:00", "sérvia")
  ) +
  createCard(
    "fase de grupos",
    "25/11",
    "sexta",
    createGame("gales", "07:00", "irã") +
      createGame("catar", "10:00", "senegal") +
      createGame("holanda", "13:00", "equador") +
      createGame("inglaterra", "16:00", "usa")
  ) +
  createCard(
    "fase de grupos",
    "26/11",
    "sábado",
    createGame("tunísia", "07:00", "austrália") +
      createGame("polônia", "10:00", "arábia") +
      createGame("frança", "13:00", "dinamarca") +
      createGame("argentina", "16:00", "méxico")
  ) +
  createCard(
    "fase de grupos",
    "27/11",
    "domingo",
    createGame("japão", "07:00", "costa") +
      createGame("bélgica", "10:00", "marrocos") +
      createGame("croácia", "13:00", "canadá") +
      createGame("alemanha", "16:00", "espanha")
  ) +
  createCard(
    "fase de grupos",
    "28/11",
    "segunda",
    createGame("camarões", "07:00", "sérvia") +
      createGame("coreia", "10:00", "gana") +
      createGame("brasil", "13:00", "suíça") +
      createGame("portugal", "16:00", "uruguai")
  ) +
  createCard(
    "fase de grupos",
    "29/11",
    "terça",
    createGame("equador", "12:00", "senegal") +
      createGame("holanda", "12:00", "catar") +
      createGame("irã", "16:00", "usa") +
      createGame("gales", "16:00", "inglaterra")
  ) +
  createCard(
    "fase de grupos",
    "30/11",
    "quarta",
    createGame("tunísia", "12:00", "frança") +
      createGame("austrália", "12:00", "dinamarca") +
      createGame("polônia", "16:00", "argentina") +
      createGame("arábia", "16:00", "méxico")
  ) +
  createCard(
    "fase de grupos",
    "01/12",
    "quinta",
    createGame("croácia", "12:00", "bélgica") +
      createGame("canadá", "12:00", "marrocos") +
      createGame("japão", "16:00", "espanha") +
      createGame("costa", "16:00", "alemanha")
  ) +
  createCard(
    "fase de grupos",
    "02/12",
    "sexta",
    createGame("coreia", "12:00", "portugal") +
      createGame("gana", "12:00", "uruguai") +
      createGame("sérvia", "16:00", "suíça") +
      createGame("camarões", "16:00", "brasil")
  ) +
  createCard(
    "oitavas de final",
    "03/12",
    "sábado",
    createGame("null", "12:00", "null") +
    createGame("null", "16:00", "null") 
  ) +
  createCard(
    "oitavas de final",
    "04/12",
    "domingo",
    createGame("null", "12:00", "null") +
    createGame("null", "16:00", "null")
  ) +
  createCard(
    "oitavas de final",
    "05/12",
    "segunda",
    createGame("null", "12:00", "null") +
    createGame("null", "16:00", "null")
  ) +
  createCard(
    "oitavas de final",
    "06/12",
    "terça",
    createGame("null", "12:00", "null") +
    createGame("null", "16:00", "null")
  ) +
  createCard(
    "quartas de final",
    "09/12",
    "sexta",
    createGame("null", "12:00", "null") +
    createGame("null", "16:00", "null")
  ) +
  createCard(
    "quartas de final",
    "10/12",
    "sábado",
    createGame("null", "12:00", "null") +
    createGame("null", "16:00", "null")
  ) +
  createCard(
    "semifinal",
    "13/12",
    "terça",
    createGame("null", "16:00", "null")
  ) +
  createCard(
    "semifinal",
    "14/12",
    "quarta",
    createGame("null", "16:00", "null")
  ) +
  createCard(
    "disputa do terceiro lugar",
    "17/12",
    "sábado",
    createGame("null", "12:00", "null")
  ) +
  createCard(
    "final",
    "18/12",
    "domingo",
    createGame("null", "12:00", "null") 
  )
