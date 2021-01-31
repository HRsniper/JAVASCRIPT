process.argv.forEach(function (val, index, array) {
  console.log(index + ": " + val);
});

console.log("------------------------------");

for (var i = 0; i < process.argv.length; i++) {
  console.log(i + ": " + process.argv[i]);
}

// cli = node '.\aula119-CLI-args(nodejs).js' one two=three four "arg1" "arg2" "arg3"

if (process.argv[2] == "string") {
  console.log("voce digitou uma string valida");
}

process.argv.forEach((value, index, array) => {
  if (value == array[2]) {
    console.log(array[2]);
  }
  if (value == "string") {
    console.log(array[2]);
  }
});

//cli =  node '.\aula119-CLI-args(nodejs).js' 'string'
