var str = 'Meu nome é: '
var name = 'Fulano de Tal'

var howAre = str.concat(name).replace('Meu nome é', 'Nome')
var text = howAre.toLocaleUpperCase()
alert(text)