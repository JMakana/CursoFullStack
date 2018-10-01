console.log('iniciando aplicacion de notas')
const notes = require('./notes.js')
const { argv } = require('yargs')

const command = argv._[0]

if (command === 'add') {
  const note = notes.addNote(argv.title, argv.body)
  if (note) {
    console.log('Nota creada')
    notes.logNote(note)
  } else {
    console.log('Ya existe una nota con este título')
  }
} else if (command === 'list') {
  const allNotes = notes.getAll()
  console.log(`Mostrando ${allNotes.length} notas.`)
  allNotes.forEach((note) => notes.logNote(note))
} else if (command === 'read') {
  const note = notes.getNote(argv.title)
  if (note) {
    console.log('Nota encontrada:')
    notes.logNote(note)
  } else {
    console.log('Nota no entontrada')
  }
} else if (command === 'remove') {
  const noteRemoved = notes.removeNote(argv.title)
  const message = noteRemoved ? 'Nota borrada' : 'Nota no encontrada'
  console.log(message)
} else {
  console.log('Comando desconocido')
}
