import express from 'express'
import fetch from 'node-fetch'
import dotenv from 'dotenv'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/api/ipinfo/:ip', async (req, res) => {
  const ip = req.params.ip
  const url = `https://ip-geo-location.p.rapidapi.com/ip/${ip}?format=json`

  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY,
        'X-RapidAPI-Host': 'ip-geo-location.p.rapidapi.com'
      }
    })
    const data = await response.json()
    res.json(data)
  } catch (error) {
    console.error(error)
    res.status(500).json({ error: 'Failed to fetch IP information' })
  }
})

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`)
})
