require.extensions[`.amos`] = (module, filename) => {
  module.exports = fs.readFileSync (filename, `utf8`)
}

const 

fs = require (`fs`),
R = require (`ramda`),
topics_ = require (`./topics.amos`),

/* Split & trim end*/
topicsLines_ = R.map (R.replace (/\s*$/g) (``)) (R.split (`\n`) (topics_)),

/* Remove comments and empty lines */
topicsLines = R.reject (R.pipe (R.trim, R.either (R.isEmpty) (R.startsWith (`#`)))) (topicsLines_),

topics = R.join (`\n`) (topicsLines)

module.exports = topics
