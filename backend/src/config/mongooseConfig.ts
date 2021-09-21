const { connect } = require('mongoose')
const apiDebug = require('debug')('backendTechnicalTestApi:ddbbConfig')

connect(
  process.env.DDBB_URL,
  {
    useUnifiedTopology: true,
    useNewUrlParser: true
  }
)
  .then(
    () => apiDebug('Database connection stablished'),
    (error:any) => apiDebug(error)
  )
