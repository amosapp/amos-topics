const fs = require (`fs`)
const R = require (`ramda`)

require.extensions[`.amos`] = (module, filename) => {
  module.exports = fs.readFileSync (filename, `utf8`)
}

const topics_ = require (`./topics.amos`)

const topicsArr_ = R.split (`\n`) (topics_)

/* Remove comments and empty lines */
const topicsArr = R.reject (R.pipe (R.trim, R.either (R.isEmpty) (R.startsWith (`#`)))) (topicsArr_)

const topics = R.join (`\n`) (topicsArr)

module.exports = {topics}