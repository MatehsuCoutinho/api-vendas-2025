import { env } from "../env";
import { app } from "./app";

app.listen(env.PORT, () => {
    console.log(`Servidor rodando na porta ${env.PORT}`)
})