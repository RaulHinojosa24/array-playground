// filter

const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present', 'away', 'silent', 'generate', 'stunning', 'complete'];

// Usa el método filter para filtrar las palabras que empiezan por la letra 'e'

console.log(words.filter(w => w[0] == "e")); // TODO [ 'elite', 'exuberant']

// Usa el método filter para filtrar las palabras que empiezan por vocal

console.log(words.filter(w => ["a", "e", "i", "o", "u"].includes(w[0]))); // TODO [ 'elite', 'exuberant', 'away']