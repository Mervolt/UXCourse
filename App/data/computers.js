const questions = [
  {
    question: "Jaki jest adres IP hosta lokalnego?",
    answers: [
      {id: 'A', text: '192.168.1.1'},
      {id: 'B', text: '127.0.0.1', correct: true},
      {id: 'C', text: '209.85.231.104'},
      {id: 'D', text: '66.220.149.25'},
    ],
  },
  {
    question: 'Usługa polegająca na tłumaczeniu nazw mnemonicznych to:',
    answers: [
      {id: 'A', text: 'DNS', correct: true},
      {id: 'B', text: 'DHCP'},
      {id: 'C', text: 'RADIUS'},
      {id: 'D', text: 'RDS'},
    ],
  },
  {
    question: 'Który skrócony zapis odpowiada następującej masce podsieci: 255.255.248.0?',
    answers: [
      {id: 'A', text: '/21', correct: true},
      {id: 'B', text: '/22'},
      {id: 'C', text: '/23'},
      {id: 'D', text: '/24'},
    ],
  },
  {
    question: 'Urządzenie umożliwiające łączenie hostów jednej sieci z hostami w innych sieciach to:',
    answers: [
      {id: 'A', text: 'hub'},
      {id: 'B', text: 'switch'},
      {id: 'C', text: 'firewall'},
      {id: 'D', text: 'router', correct: true},
    ],
  },
  {
    question: 'Przydzielaniem adresów IP w sieci zajmuje się serwer:',
    answers: [
      {id: 'A', text: 'NetBIOS'},
      {id: 'B', text: 'DNS'},
      {id: 'C', text: 'DHCP', correct: true},
      {id: 'D', text: 'NMP'},
    ],
  },
];

export default questions;
