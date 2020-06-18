import { Application, Router } from "oak"

const app = new Application()
const router = new Router()

router.get('/', (context) => {
    context.response.body ="Hello World!\n running code is my cardio"
})

app.use(router.routes())
app.use(router.allowedMethods())

console.log("\nServidor en el puerto 4000")

await app.listen({port: 4000})