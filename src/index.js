require.extensions[`.amos`] = (module, filename) => {
  module.exports = fs.readFileSync (filename, `utf8`)
}

const 

fs = require (`fs`),
R = require (`ramda`),
topics_ = require (`./topics.amos`),

/* Split & trim */
topicsLines_ = R.map (R.trim) (R.split (`\n`) (topics_)),

/* Remove comments and empty lines */
topicsLines = R.reject (R.either (R.isEmpty) (R.startsWith (`#`))) (topicsLines_),

topics = R.join (`\n`) (topicsLines)

module.exports = {default: topics}