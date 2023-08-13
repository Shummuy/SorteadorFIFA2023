// Database dos times //

const italy = 'Italia <img class="bandeira" src="assets/images/bandeira-italia.png" alt=""></img>'
const spain = 'Espanha <img class="bandeira" src="assets/images/bandeira-espanha.png" alt=""></img>'
const alemanha = 'Alemanha <img class="bandeira" src="assets/images/bandeira-alemanha.png" alt=""></img>'
const inglaterra = 'Inglaterra <img class="bandeira" src="assets/images/bandeira-inglaterra.png" alt=""></img>'
const franca = 'França <img class="bandeira" src="assets/images/bandeira-franca.png" alt=""></img>'
const brasil = 'Brasil <img class="bandeira" src="assets/images/bandeira-brasil.png" alt=""></img>'
const holanda = 'Holanda <img class="bandeira" src="assets/images/bandeira-holanda.png" alt=""></img>'
const portugal = 'portugal <img class="bandeira" src="assets/images/bandeira-portugal.png" alt=""></img>'

const assai = 'Brasileirão Série A <img class="ligue-logo" src="assets/images/brasileirao.png" alt=""></img>'
const premier = 'Premier League <img class="ligue-logo" src="assets/images/premier.png" alt=""></img>'
const bundesliga = 'Bundesliga <img class="ligue-logo" src="assets/images/bundesliga.png" alt=""></img>'
const laliga = 'LALIGA SANTANDER <img class="ligue-logo" src="assets/images/laliga.png" alt=""></img>'
const ligaportugal = 'Liga Portugal <img class="ligue-logo" src="assets/images/ligaportugal.png" alt=""></img>'
const seriea = 'Seria A Tim <img class="ligue-logo" src="assets/images/seriea.png" alt=""></img>'
const ligueone = 'Ligue 1 Uber Eats <img class="ligue-logo" src="assets/images/ligue1.png" alt=""></img>'
const eredivisie = 'eredivisie <img class="ligue-logo" src="assets/images/eredivisie.png" alt=""></img>'

const fiveStar = '<img class="star" src="assets/images/5stars.png" alt=""></img'
const fourHalfStar = '<img class="star" src="assets/images/4-5stars.png" alt=""></img'
const fourStar = '<img class="star" src="assets/images/4stars.png" alt=""></img'
const threeHalfStar = '<img class="star" src="assets/images/3-5stars.png" alt=""></img'
const threeStar = '<img class="star" src="assets/images/3stars.png" alt=""></img'

// TIMES A //

const arsenal = {
  logo: '<img src="assets/clubes/arsenal.png" alt=""></img>',
  nome: 'Arsenal',
  country: inglaterra,
  star: fourHalfStar,
  ligue: premier
}

const atletico = {
  logo: '<img src="assets/clubes/atletico.png" alt=""></img>',
  nome: 'Atlético de Madrid',
  country: spain,
  star: fiveStar,
  ligue: laliga
}

const barcelona = {
  logo: '<img src="assets/clubes/barcelona.png" alt=""></img>',
  nome: 'FC Barcelona',
  country: spain,
  star: fiveStar,
  ligue: laliga
}

const bayer = {
  logo: '<img src="assets/clubes/bayer.png" alt=""></img>',
  nome: 'Bayern München',
  country: alemanha,
  star: fiveStar,
  ligue: bundesliga
}

const chelsea = {
  logo: '<img src="assets/clubes/chelsea.png" alt=""></img>',
  nome: 'Chelsea',
  country: inglaterra,
  star: fourHalfStar,
  ligue: premier
}

const inter = {
  logo: '<img src="assets/clubes/inter.png" alt=""></img>',
  nome: 'Inter',
  country: italy,
  star: fourHalfStar,
  ligue: seriea
}

const liverpool = {
  logo: '<img src="assets/clubes/liverpool.png" alt=""></img>',
  nome: 'Liverpool',
  country: inglaterra,
  star: fiveStar,
  ligue: premier
}

const mancity = {
  logo: '<img src="assets/clubes/mancity.png" alt=""></img>',
  nome: 'Manchester City',
  country: inglaterra,
  star: fiveStar,
  ligue: premier
}

const psg = {
  logo: '<img src="assets/clubes/psg.png" alt=""></img>',
  nome: 'Paris Saint-Germain',
  country: franca,
  star: fiveStar,
  ligue: ligueone
}

const real = {
  logo: '<img src="assets/clubes/realmadrid.png" alt=""></img>',
  nome: 'Real Madrid',
  country: spain,
  star: fiveStar,
  ligue: laliga
}

const timesA = [
  arsenal,
  atletico,
  barcelona,
  bayer,
  chelsea,
  inter,
  liverpool,
  mancity,
  psg,
  real
]

// TIMES B //

const borussia = {
  logo: '<img src="assets/clubes/borussia.png" alt=""></img>',
  nome: 'Borussia Dortmund',
  country: alemanha,
  star: fourHalfStar,
  ligue: bundesliga
}

const juventus = {
  logo: '<img src="assets/clubes/juventus.png" alt=""></img>',
  nome: 'Juventus',
  country: italy,
  star: fourHalfStar,
  ligue: seriea
}

const manunited = {
  logo: '<img src="assets/clubes/manunited.png" alt=""></img>',
  nome: 'Manchester United',
  country: inglaterra,
  star: fourHalfStar,
  ligue: premier
}

const milan = {
  logo: '<img src="assets/clubes/milan.png" alt=""></img>',
  nome: 'Milan',
  country: italy,
  star: fourHalfStar,
  ligue: seriea
}

const napoli = {
  logo: '<img src="assets/clubes/napoli.png" alt=""></img>',
  nome: 'Napoli',
  country: italy,
  star: fourHalfStar,
  ligue: seriea
}

const newcastle = {
  logo: '<img src="assets/clubes/newcastle.png" alt=""></img>',
  nome: 'New Castle',
  country: inglaterra,
  star: fourHalfStar,
  ligue: premier
}

const rb = {
  logo: '<img src="assets/clubes/rb.png" alt=""></img>',
  nome: 'RB Leipzig',
  country: alemanha,
  star: fourHalfStar,
  ligue: bundesliga
}

const roma = {
  logo: '<img src="assets/clubes/roma.png" alt=""></img>',
  nome: 'Roma',
  country: italy,
  star: fourHalfStar,
  ligue: seriea
}

const sevilla = {
  logo: '<img src="assets/clubes/sevilla.png" alt=""></img>',
  nome: 'Sevilla',
  country: spain,
  star: fourHalfStar,
  ligue: laliga
}

const spurs = {
  logo: '<img src="assets/clubes/spurs.png" alt=""></img>',
  nome: 'Tottenham Hotspur', 
  country: inglaterra,
  star: fourHalfStar,
  ligue: premier
}

const timesB = [
  borussia,
  juventus,
  manunited,
  milan,
  napoli,
  newcastle,
  rb,
  roma,
  sevilla,
  spurs
]

const aston = {
  logo: '<img src="assets/clubes/aston.png" alt=""></img>',
  nome: 'Aston Vila',
  country: inglaterra,
  star: fourHalfStar,
  ligue: premier
}

const bilbao = {
  logo: '<img src="assets/clubes/bilbao.png" alt=""></img>',
  nome: 'Athtletic Club de Bilbao',
  country: spain,
  star: fourHalfStar,
  ligue: laliga
}

const bayer04 = {
  logo: '<img src="assets/clubes/bayer04.png" alt=""></img>',
  nome: 'Bayer 04 Leverkusen',
  country: alemanha,
  star: fourHalfStar,
  ligue: bundesliga
}

const benfica = {
  logo: '<img src="assets/clubes/benfica.png" alt=""></img>',
  nome: 'Benfica',
  country: portugal,
  star: fourHalfStar,
  ligue: ligaportugal
}

const frankfurt = {
  logo: '<img src="assets/clubes/frankfurt.png" alt=""></img>',
  nome: 'Eintracht Frankfurt',
  country: alemanha,
  star: fourStar,
  ligue: bundesliga
}

const lazio = {
  logo: '<img src="assets/clubes/lazio.png" alt=""></img>',
  nome: 'Lazio',
  country: italy,
  star: fourHalfStar,
  ligue: seriea
}

const rbetis = {
  logo: '<img src="assets/clubes/rbetis.png" alt=""></img>',
  nome: 'Real Betis',
  country: spain,
  star: fourHalfStar,
  ligue: laliga
}

const rsociedad = {
  logo: '<img src="assets/clubes/rsociedad.png" alt=""></img>',
  nome: 'Real Sociedad',
  country: spain,
  star: fourHalfStar,
  ligue: laliga
}

const villareal = {
  logo: '<img src="assets/clubes/villareal.png" alt=""></img>',
  nome: 'Villareal CF',
  country: spain,
  star: fourHalfStar,
  ligue: laliga
}

const westham = {
  logo: '<img src="assets/clubes/westham.png" alt=""></img>',
  nome: 'West Ham',
  country: inglaterra,
  star: fourHalfStar,
  ligue: premier
}

const timesC = [
  aston,
  bilbao,
  bayer04,
  benfica,
  frankfurt,
  lazio,
  rbetis,
  rsociedad,
  villareal,
  westham
]

// TIMES BRASILEIROS //

const americamg = {
  logo: '<img src="assets/clubes/ammg.png" alt=""></img>',
  nome: 'América Mineiro',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const atleticopr = {
  logo: '<img src="assets/clubes/atleticopr.png" alt=""></img>',
  nome: 'Athletico Paranaense',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const atleticomg = {
  logo: '<img src="assets/clubes/atleticomg.png" alt=""></img>',
  nome: 'Atletico Mineiro',
  country: brasil,
  star: fourStar,
  ligue: assai,
}

const bahia = {
  logo: '<img src="assets/clubes/bahia.png" alt=""></img>',
  nome: 'Bahia',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const botafogo = {
  logo: '<img src="assets/clubes/botafogo.png" alt=""></img>',
  nome: 'Botafogo',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const corinthians = {
  logo: '<img src="assets/clubes/corinthians.png" alt=""></img>',
  nome: 'Corinthians',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const coritiba = {
  logo: '<img src="assets/clubes/coritiba.png" alt=""></img>',
  nome: 'Coritiba',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const cruzeiro = {
  logo: '<img src="assets/clubes/cruzeiro.png" alt=""></img>',
  nome: 'Cruzeiro',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const cuiaba = {
  logo: '<img src="assets/clubes/cuiaba.png" alt=""></img>',
  nome: 'Cuiabá',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const flamengo = {
  logo: '<img src="assets/clubes/flamengo.png" alt=""></img>',
  nome: 'Flamengo',
  country: brasil,
  star: fourStar,
  ligue: assai,
}

const fluminense = {
  logo: '<img src="assets/clubes/fluminense.png" alt=""></img>',
  nome: 'Fluminense',
  country: brasil,
  star: fourStar,
  ligue: assai,
}

const fortaleza = {
  logo: '<img src="assets/clubes/fortaleza.png" alt=""></img>',
  nome: 'Fortaleza',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const goias = {
  logo: '<img src="assets/clubes/goias.png" alt=""></img>',
  nome: 'Goias',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const gremio = {
  logo: '<img src="assets/clubes/gremio.png" alt=""></img>',
  nome: 'Gremio',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const internacional = {
  logo: '<img src="assets/clubes/internacional.png" alt=""></img>',
  nome: 'internacional',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const palmeiras = {
  logo: '<img src="assets/clubes/palmeiras.png" alt=""></img>',
  nome: 'Palmeiras',
  country: brasil,
  star: fourStar,
  ligue: assai,
}

const redbull = {
  logo: '<img src="assets/clubes/bragantino.png" alt=""></img>',
  nome: 'Red Bull Bragantino',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const santos = {
  logo: '<img src="assets/clubes/santos.png" alt=""></img>',
  nome: 'Santos',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const saopaulo = {
  logo: '<img src="assets/clubes/saopaulo.png" alt=""></img>',
  nome: 'São Paulo',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const vasco = {
  logo: '<img src="assets/clubes/vasco.png" alt=""></img>',
  nome: 'Vasco',
  country: brasil,
  star: threeHalfStar,
  ligue: assai,
}

const brasileirao = [
  americamg,
  atleticopr,
  atleticomg,
  bahia,
  botafogo,
  corinthians,
  coritiba,
  cruzeiro,
  cuiaba,
  flamengo,
  fluminense,
  fortaleza,
  goias,
  gremio,
  internacional,
  palmeiras,
  redbull,
  santos,
  saopaulo,
  vasco
]

// random teamns //

const randomTier = [
  arsenal,
  atletico,
  barcelona,
  bayer,
  chelsea,
  inter,
  liverpool,
  mancity,
  psg,
  real,
  borussia,
  inter,
  manunited,
  milan,
  napoli,
  newcastle,
  rb,
  roma,
  sevilla,
  spurs,
  aston,
  bilbao,
  bayer04,
  benfica,
  frankfurt,
  lazio,
  rbetis,
  rsociedad,
  villareal,
  westham
]

// funcionalidade do site //

const team1 = document.querySelector('.time-1-hidden')
const team2 = document.querySelector('.time-2-hidden')
const versus = document.querySelector('.vs-hidden')
const wrapper = document.querySelectorAll('.wrapper-hidden')
const botoes = document.querySelectorAll('a[href^="#"]')

function getRandomTeamIndex(max) {
  return Math.floor(Math.random() * max);
}

function setTeamData(team1, team2) {
  document.getElementById('logo1').innerHTML = team1.logo;
  document.getElementById('name1').innerHTML = team1.nome;
  document.getElementById('star1').innerHTML = team1.star;
  document.getElementById('country1').innerHTML = team1.country;
  document.getElementById('ligue1').innerHTML = team1.ligue;
  document.getElementById('logo2').innerHTML = team2.logo;
  document.getElementById('name2').innerHTML = team2.nome;
  document.getElementById('star2').innerHTML = team2.star;
  document.getElementById('country2').innerHTML = team2.country;
  document.getElementById('ligue2').innerHTML = team2.ligue;
}

function getRandomNonRepeatingTeams(times) {
  var i = getRandomTeamIndex(times.length);
  var i2 = getRandomTeamIndex(times.length - 1);
  i2 = i2 >= i ? i2 + 1 : i2;

  var time1 = times[i];
  var time2 = times[i2];

  return [time1, time2];
}

function tierA() {
  var [time1, time2] = getRandomNonRepeatingTeams(timesA);

  if (time1 == time2) {
    tierA();
  } else {
    setTeamData(time1, time2);
  }
}

function tierB() {
  var [time1, time2] = getRandomNonRepeatingTeams(timesB);

  if (time1 == time2) {
    tierB();
  } else {
    setTeamData(time1, time2);
  }
}

function tierC() {
  var [time1, time2] = getRandomNonRepeatingTeams(timesC);

  if (time1 == time2) {
    tierC();
  } else {
    setTeamData(time1, time2);
  }
}

function tierBr() {
  var [time1, time2] = getRandomNonRepeatingTeams(brasileirao)

  if (time1 == time2) {
    tierBr()
  } else {
    setTeamData(time1, time2)
  }
}

function random() {
  var [time1, time2] = getRandomNonRepeatingTeams(randomTier)

  if (time1 == time2) {
    random()
  } else {
    setTeamData(time1, time2)
  }
}

function tagsVisibility() {
  wrapper.forEach(wrap => {
    wrap.classList.replace('wrapper-hidden', 'wrapper')
  })
}

function vsVisibility() {
  versus.classList.replace('vs-hidden', 'vs')
}

function timeVisibility() {
  team1.classList.replace('time-1-hidden', 'time-1'),
  team2.classList.replace('time-2-hidden', 'time-2')
}

function updateView() {
  tagsVisibility();
  vsVisibility();
  timeVisibility();
}

function handleButton(buttonFunction) {
  buttonFunction();
  updateView();
}

function buttonA() {
  handleButton(tierA);
}

function buttonB() {
  handleButton(tierB);
}

function buttonC() {
  handleButton(tierC);
}

function buttonD() {
  handleButton(random);
}

function buttonBr() {
  handleButton(tierBr);
}

const buttons = document.querySelectorAll('.button');
const arrows = document.querySelectorAll('.arrow-left, .arrow-right');
let activeButtonIndex = 0;

arrows.forEach(arrow => {
  arrow.addEventListener('click', event => {
    if (event.target.classList.contains('arrow-left')) {
      activeButtonIndex = (activeButtonIndex - 1 + buttons.length) % buttons.length;
    } else {
      activeButtonIndex = (activeButtonIndex + 1) % buttons.length;
    }

    buttons.forEach(button => button.classList.remove('active'));
    buttons[activeButtonIndex].classList.add('active');
  });
});