const form = document.getElementById('form-atividade');
let linhas = '';
const numeros = [];

form.addEventListener('submit', function(e) {
    e.preventDefault();

    adicionaLinha()
    atualizaTabela()
    
});
function adicionaLinha(){
    const inputNome = document.getElementById('nome-atividade')
    const inputNumero = document.getElementById('numero-atividade')



    if (numeros.includes(inputNumero.value)) {
        alert(`Este: ${inputNumero.value} já foi inserido`);
    } else{
        numeros.push(inputNumero.value);
        let linha = '<tr>';
        linha += `<td>${inputNome.value}</td>`;
        linha += `<td>${inputNumero.value}</td>`;
        linha += '</tr>';
    
        linhas += linha

    }
    form.reset();
    }
function atualizaTabela(){
    const corpoTabela = document.querySelector('tbody');
    corpoTabela.innerHTML = linhas

}
