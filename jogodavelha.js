


let jogador1, jogador2;


function exibirVelha(exibindo, jogando, ) {
  console.log(exibindo[0].join(" | "));
  console.log("--|---|--");
  console.log(exibindo[1].join(" | "));
  console.log("--|---|--");
  console.log(exibindo[2].join(" | "));
  console.log("Jogador atual: " + jogando);
}

//linha, coluna e diagonal
function verificaGanhador(exibindo, jogando) {
  for (let i = 0; i < 3; i++) {
    if (exibindo[i][0] === jogando && exibindo[i][1] === jogando && exibindo[i][2] === jogando) {
      return true;
    }
  }
  for (let i = 0; i < 3; i++) {
    if (exibindo[0][i] === jogando && exibindo[1][i] === jogando && exibindo[2][i] === jogando) {
      return true;
    }
  }
  if (exibindo[0][0] === jogando && exibindo[1][1] === jogando && exibindo[2][2] === jogando) {
    return true;
  }
  if (exibindo[0][2] === jogando && exibindo[1][1] === jogando && exibindo[2][0] === jogando) {
    return true;
  }
  return false;
}

function verificaEmpate(jogadas) {
  return jogadas === 9;
}

function lerJogada(exibindo, jogadas, jogando) {

  let linha, coluna;
  while (true) {
    linha = parseInt(prompt("Digite a linha (1, 2 ou 3): ")) - 1;
    coluna = parseInt(prompt("Digite a coluna (1, 2 ou 3): ")) - 1;
    if (linha >= 0 && linha <= 2 && coluna >= 0 && coluna <= 2 && exibindo[linha][coluna] === ' ') {
      exibindo[linha][coluna] = jogando;
      jogadas++;
      break;
    } else {
      console.log("Erro, tente outra vez!");
    }
  }
}
function jogar() {
  let jogador1 = prompt("Digite o nome do Jogador 1 (X): ");
  let jogador2 = prompt("Digite o nome do Jogador 2 (O): ");
  let jogando = 'X';
  let jogadas = 0;
  
  let exibindo = [
  [' ', ' ', ' '],
  [' ', ' ', ' '],
  [' ', ' ', ' ']
];

  while (true) {
    exibirVelha(exibindo, jogando);
    lerJogada(exibindo, jogadas, jogando);
    if (verificaGanhador(exibindo, jogando)) {
      if (jogando === 'X') {
        console.log("Parabéns, " + jogador1 + "! Você ganhou.");
        console.log("Vencedor: " + jogador1);
      } else {
        console.log("Parabéns, " + jogador2 + "! Você ganhou.");
        console.log("Vencedor: " + jogador2);
      }

      console.log("Resumo do jogo:");
      console.log(jogador1 + " (X) vs " + jogador2 + " (O)");
      console.log(exibindo[0].join(" | "));
      console.log("--|---|--");
      console.log(exibindo[1].join(" | "));
      console.log("--|---|--");
      console.log(exibindo[2].join(" | "));

      break;
    } else if (verificaEmpate(jogadas)) {
      console.log("Empate!");
      console.log("Resumo do jogo:");
      console.log(jogador1 + " (X) vs " + jogador2 + " (O)");
      console.log(exibindo[0].join(" | "));
      console.log("--|---|--");
      console.log(exibindo[1].join(" | "));
      console.log("--|---|--");
      console.log(exibindo[2].join(" | "));
      console.log("Empate");
      break;
    } else {
      if (jogando === 'X') {
        jogando = 'O';
      } else {
        jogando = 'X';
      }
    }
  }
}

jogar();
