const express = require('express')
const app = express()
const cors = require('cors')
const port = process.env.PORT || 3002

const events = [
  {
    date: '18-10-2020',
    title: 'КОМАНДООБРАЗОВАНИЕ и мотивация от ИГОРЯ ДАВЫДОВА',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '17-10-2020',
    title: 'Ещё один заголовок за какое-то число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '16-10-2020',
    title: 'Ещё один заголовок за какое-то шестнадцатое число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '15-10-2020',
    title: 'Ещё один заголовок за какое-то пятнадцатое число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '10-10-2020',
    title: 'Ещё один заголовок за какое-то десятое число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '2-10-2020',
    title: 'Ещё один заголовок за какое-то второе число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '31-10-2020',
    title: 'Ещё один заголовок за какое-то второе число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '31-10-2020',
    title: 'Ещё один заголовок за какое-то второе число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '31-10-2020',
    title: 'Ещё один заголовок за какое-то второе число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '31-10-2020',
    title: 'Ещё один заголовок за какое-то второе число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '31-10-2020',
    title: 'Ещё один заголовок за какое-то второе число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '31-10-2020',
    title: 'Ещё один заголовок за какое-то второе число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '30-10-2020',
    title: 'Ещё один заголовок за какое-то второе число',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
  {
    date: '30-10-2020',
    title: 'Lorem Lorem Lorem',
    text:
      'Размещение вакансий на hh.ru, superjob.ru, rabota.ru и др. При увольнении сотрудника, подбираем нового кандидата бесплатно',
  },
]

app.use(cors())
app.use(express.json())
app.use(
  express.urlencoded({
    extended: false,
  })
)

app.get('/', (req, res) => {
  res.json({
    message: 'If you wonna some data, please check urls in next parametrs',
    links: ['/data', '/data:date'],
  })
})

app.get('/data', (req, res) => {
  res.json(events)
})

app.get('/data/:date', (req, res) => {
  const date = req.query.date
  const data = events.filter(e => e.date === date)
  res.json(data)
})

app.listen(port)
