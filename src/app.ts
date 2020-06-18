import { Application, Router } from 'oak'

const app = new Application()
const router = new Router()
const port = 4000

// importing the controllers
import { addFriend } from './controllers/friendController/addFriend.ts'
import { getFriend } from './controllers/friendController/listFriend.ts'

// ROUTES

router.get('/', (context) => {
    context.response.body ="Hello World!\n running code is my cardio"
})

router.post('/addFriend', addFriend);
router.get('/getFriend', getFriend);

app.use(router.routes())
app.use(router.allowedMethods())

console.log(`\nServidor en el puerto ${port}`)

await app.listen({port: port})