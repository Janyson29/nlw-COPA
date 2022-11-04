function createGame(player1, hour, player2) {
  return `
    <li>
      <img src="./assets/icon-${player1}.svg" alt="Bandeira do ${player1}">
      <strong>${hour}</strong>
      <img src="./assets/icon-${player2}.svg" alt="Bandeira da ${player2}">
    </li>
  `
}

function createCard(date, day, games) { 
  return `
    <div class="card">
      <h2>${date}  <span>${day}</span></h2>
      <ul>
        ${games}
      </ul>
    </div>
  `
}

document.querySelector("#app").innerHTML = `
<header>
  <img src="./assets/logo.svg" alt="Logo calendário copa">
</header>
<main id="cards">
  ${createCard("24/11", "Quinta",
    createGame("brazil", "16:00", "serbia")
    )}
  ${createCard("25/11", "Sexta", 
  createGame("brazil", "13:00", "switzerland") +
  createGame("switzerland", "16:00", "cameroon")
  )}
  ${createCard("26/11", "Sábado",
  createGame("brazil", "16:00", "cameroon")
  )}
</main>
`