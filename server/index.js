const express = require('express')
const cities = require('./city-names.json')
const { port=3333, delay=0 } = require('minimist')(process.argv)
const cors = require('cors')

const byName = name => city =>
    name.toLowerCase() === city.substr(0, name.length).toLowerCase()

const logger = (req, res, next) => {
    console.log(`${req.method} request for ${req.url}`)
    next()
}

const app = express()
    .use(logger)
    .use(cors())
    .use('/', express.static('./dist/img'))
    .get('/cities', (req, res) =>
        res.status(200).json(cities)
    )
    .get('/cities/:name', (req, res) =>
        setTimeout(() =>
                res.status(200).json(
                    cities.filter(byName(req.params.name))
                ),
            delay
        )
    )

app.listen(port, () => console.log('Cities app running on port ' + port + ' with a ' + delay/1000 + ' second delay'))
