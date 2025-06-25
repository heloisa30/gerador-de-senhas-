document.getElementById('gerar').addEventListener('click', function() {
  const tamanho = document.getElementById('tamanho').value;
  const incluirMaiusculas = document.getElementById('maiusculas').checked;
  const incluirNumeros = document.getElementById('numeros').checked;
  const incluirSimbolos = document.getElementById('simbolos').checked;

  const senha = gerarSenha(tamanho, incluirMaiusculas, incluirNumeros, incluirSimbolos);
  document.getElementById('senha').value = senha;
});

function gerarSenha(tamanho, maiusculas, numeros, simbolos) {
  const caracteresMin = 'abcdefghijklmnopqrstuvwxyz';
  const caracteresMaius = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  const numerosLista = '0123456789';  // Mudança de nome da variável para evitar conflito
  const simbolosLista = '!@#$%^&*()_+-=[]{}|;:,.<>?';

  let caracteres = caracteresMin;

  if (maiusculas) caracteres += caracteresMaius;
  if (numeros) caracteres += numerosLista;
  if (simbolos) caracteres += simbolosLista;

  let senha = '';
  for (let i = 0; i < tamanho; i++) {
    const indice = Math.floor(Math.random() * caracteres.length);
    senha += caracteres[indice];
  }

  return senha;
}
