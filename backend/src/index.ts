import express from "express"
import cors from "cors"

const app = express()
const port = process.env.PORT ?? 5000

const clients = [
  {
    "id": "1",
    "name": "Joelson",
    "email": "joelsonidalgo@gmail.com",
    "phone": "2299999999"
  },
  {
    "id": "2",
    "name": "Wellington",
    "email": "wellingtonwanderosfky@gmail.com",
    "phone": "2299999999"
  }
]

app.use(cors({ origin: "*" }));
app.use(express.json());

app.get('/clients', (req, res) => {
  res.json(clients)
})

app.post('/clients', (req, res) => {
  const newClient = req.body

  const client = { ...newClient, id: `${clients.length + 1}` }

  clients.push(client)
  
  res.json(client)
})

app.listen(port, () => {
  console.log(`App listening on http://localhost:${port}/`)
})