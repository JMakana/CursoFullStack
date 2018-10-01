console.log('Modulo de notas cargado')

const { saveNotes, fetchNotes } = require('./utils')

const addNote = (title, body) => {
  const notes = fetchNotes()
  const note = {
    title,
    body
  }
  const duplicateNotes = notes.filter((note) => note.title === title)

  if (duplicateNotes.length === 0) {
    notes.push(note)
    saveNotes(notes)
    return note
  }
}

const removeNote = (title) => {
  const notes = fetchNotes()
  const filteredNotes = notes.filter((note) => note.title !== title)
  saveNotes(filteredNotes)
  return notes.length !== filteredNotes.length
}

const getNote = (title) => {
  const notes = fetchNotes()
  const filteredNotes = notes.filter((note) => note.title === title)
  return filteredNotes[0]
}

const readNote = (title) => {
  console.log(`Nota ${title} leída`)
}

const getAll = () => {
  return fetchNotes()
}

const logNote = (note) => {
  console.log(`\tTítulo: ${note.title}`)
  console.log(`\tTexto: ${note.body}`)
}

module.exports = {
  addNote,
  readNote,
  removeNote,
  getNote,
  getAll,
  logNote
}
