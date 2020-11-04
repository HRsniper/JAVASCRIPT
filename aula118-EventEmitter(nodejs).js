/* Muitos objetos em um Node emitem eventos, por exemplo, um net.Server emite um evento cada vez que um par
  se conecta a ele, um fs.readStream emite um evento quando o arquivo é aberto.
  Todos os objetos que emitem eventos são as instâncias de events.EventEmitter. */

// métodos
/* addListener (evento, ouvinte)
    Adiciona um ouvinte no final da matriz de ouvintes para o evento especificado. */

/* on (evento, ouvinte)
    Para o evento especificado para registrar um ouvinte aceita um evento de corda e uma função de retorno. */

/* once (evento, ouvinte)
    Registrar um único ouvinte para o evento especificado, que a maioria dos ouvintes será desencadeada uma vez, imediatamente após a liberação do ouvinte gatilho. */

/* removeListener (evento, ouvinte)
    Remove o evento especificado para um ouvinte, o ouvinte deve ser o evento tem ouvintes registrados. */

/* removeAllListeners ([evento])
    Remove todos os ouvintes para todos os eventos, se um evento específico, remova o evento especificado para todos os ouvintes. */

/* setMaxListeners (n)
    Por padrão, eventEmitters se você adicionar ouvintes mais de 10 saída será uma mensagem de aviso. setMaxListeners função é usado para aumentar o número de ouvintes dos limites padrão. */

/* listeners (evento)
    Retorna uma matriz de ouvintes para o evento especificado. */

/* emit (evento, [arg1], [arg2], [...])
    Cada parâmetros de ordem de execução ouvinte, se houver ouvinte de eventos registrado retorna verdadeiro, caso contrário, retorna false. */

// métodos de classe
/* listenerCount (emissor, evento)
    Retorna o número de ouvintes para o evento especificado. */

// eventos
/* newListener
      event - String: o nome do evento
      listener - Função: a função do manipulador de eventos
    Este evento é emitido sempre que um ouvinte é adicionado. Quando esse evento é disparado, o ouvinte pode ainda não ter sido adicionado à matriz de ouvintes do evento. */

/* removeListener
      event - String O nome do evento
      listener - Function A função do manipulador de eventos
    Este evento é emitido sempre que alguém remove um ouvinte. Quando esse evento é disparado, o ouvinte pode ainda não ter sido removido da matriz de ouvintes do evento. */

var EventEmitter = require("events");
const eventEmitter = new EventEmitter();

// Ouvinte #1
let Ouvinte1 = () => console.log("Ouvinte1 executado.");
// Vincule o evento de conexão com a função do Ouvinte1
eventEmitter.addListener("Conectado1", Ouvinte1);
// Dispare o evento de conexão
eventEmitter.emit("Conectado1");

// Ouvinte #2
let Ouvinte2 = () => console.log("Ouvinte2 executado.");
// Vincule o evento de conexão com a função do Ouvinte2
eventEmitter.on("Conectado2", Ouvinte2);
// Dispare o evento de conexão
eventEmitter.emit("Conectado2");

// Ouvinte #3
let Ouvinte3 = (data) => console.log(data);
// Vincule o evento de conexão com a função do Ouvinte3
eventEmitter.on("Conectado3", Ouvinte3);
// Dispare o evento de conexão
eventEmitter.emit("Conectado3", { msg: "Ouvinte3 executado." });

// Remova a ligação da função do Ouvinte1
eventEmitter.removeListener("Conectado1", Ouvinte1);
console.error("\n", "Ouvinte1 não vai mais ouvir agora.");

// Dispare o evento de conexão
eventEmitter.emit("Conectado1");
eventEmitter.emit("Conectado2");
eventEmitter.emit("Conectado3", { msg: "Ouvinte3 executado." });

class User extends EventEmitter {
  conectado(data) {
    this.emit("Conectado4", data);
  }
}
const user = new User();
user.on("Conectado4", (data) => console.log(data));
user.conectado({ msg: "Ouvinte4 executado." });

console.log("Program Ended.");

// cli = node aula118-EventEmitter(nodejs).js
