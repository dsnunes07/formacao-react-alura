import { Cliente } from './Cliente.js';
import { Gerente } from './funcionarios/Gerente.js';
import { Diretor } from './funcionarios/Diretor.js';
import { SistemaAutenticacao } from './SistemaAutenticacao.js';

const cliente = new Cliente("Daniel", 11122233300, "12345");
const diretor = new Diretor('Silvio', 10000, 12334312200);
diretor.cadastrarSenha("123456");
const gerente = new Gerente('Edson', 5000, 23412378900);
gerente.cadastrarSenha("123");

const diretorEstaLogado = SistemaAutenticacao.login(diretor, "123456");
const gerenteEstaLogado = SistemaAutenticacao.login(gerente, "123");
const clienteEstaLogado = SistemaAutenticacao.login(cliente, "12345");

console.log(diretorEstaLogado, gerenteEstaLogado, clienteEstaLogado);