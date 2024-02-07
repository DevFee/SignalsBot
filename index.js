// Bibliotecas
import { Telegraf,Markup } from "telegraf";
import { message } from "telegraf/filters";

// Token do bot
const bot = new Telegraf("6436588948:AAFe6PXcQr1-ClizlwicsvFN9hIehIjEo-8");

 // Constante do botão de jogar
 const platBtn = Markup.inlineKeyboard([
    //           Tipo       Texto               Url
    Markup.button.url("🎰 Jogue aqui 🎰", "brdouble.com")
])

// Constante do botão de comprar o bot
const buyBotBtn = Markup.inlineKeyboard([
    //          Tipo        Texto                   Url
    Markup.button.url("Compre o bot aqui 💵", "t.me/+AJp4bxsaegVmMzUx")
])

// Varivel do modo de sinal
var mode = 0

// Lista de sinais: 
const sinais = [
    `
💸 ENTRADA CONFIRMADA! 💸
💣 Bombas: value0 
🕑 Validade: value1 
🔁 Tentativas: 2
    
🟦💎🟦💎🟦
🟦🟦🟦💎🟦
💎🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦💎
🟦🟦🟦💎🟦
🟦💎🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
💎🟦🟦💎🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎💎
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦💎
🟦🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦💎
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦💎🟦💎
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦💎💎💎🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎🟦🟦💎
🟦🟦🟦🟦💎
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦💎💎🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦💎🟦💎🟦
💎🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦💎🟦🟦💎
🟦🟦💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
💎🟦💎🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦💎
🟦💎🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎💎🟦
🟦🟦🟦🟦🟦
💎🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦💎🟦
🟦🟦💎💎🟦
🟦🟦🟦🟦🟦
🟦💎💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦💎🟦💎
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦💎
🟦💎🟦💎🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
💎🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦

    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎🟦💎🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦

    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦💎
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦💎🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦💎🟦🟦🟦
💎🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦💎
💎🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦💎🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
💎🟦🟦💎🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
💎🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦💎
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦💎🟦🟦
🟦🟦💎🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
💎🟦💎🟦🟦
🟦🟦💎🟦💎
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
💸 ENTRADA CONFIRMADA! 
💣 Bombas: value0
🕑 Validade: value1
🔁 Tentativas: 2
    
🟦💎💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
    `,
]

// função de sinal mines
function mineS(ctx){
    // Responde o usuario com a mensagem abaixo
    ctx.reply("✅ Bot Iniciado!")

    // Inicia um timer que quando termina reponde o usuario com
    // a mensagem abaixo dentro do scopo
    setTimeout(()=>{
        ctx.reply("🎲 Proucurando Sinais...")
    },500)

    // Inicia um intervalo de tempo de 5 minutos que fica executando
    // Infinitamente o código dentro do scopo
    setInterval(()=>{

        // Cria uma váriavel que vai criar um valor aleatorio
        // dentre 0 e o tamanho da lista "sinais"
        const randomI = Math.floor(Math.random()*sinais.length)

        // Pega um item do array com o indice da variavel "randomI"
        // e substitui a string "value0" por um numero aleatorio dentre 3 e 4
        // OBS: esse "value0" é o número de bombas que o usuario deve jogar
        var alt1 = sinais[randomI].replace("value0", Math.round(Math.random()+3))
        
        // Cria duas variaveis que armazenam as horas e minutos atuais
        var minutos = new Date().getMinutes()+3
        var horas = new Date().getHours()

        // Condicional que verifica se os minutos possuem o valor maior
        // ou igual a 55
        if (minutos >= 55){
            
            // Se a condição bater, minutos vai virar uma string com o nmr
            // 0 + a subtração de minutos - 60
            minutos = `0${(minutos - 60)}`

            // Troca o valor das horas pra horas + 1
            horas = horas + 1
        }

        // Substitui a string "value1" pelas horas e minutos atuais + 5
        // como se fosse a Validade do sinal
        alt1 = alt1.replace("value1", `${horas}:${minutos}`)
        
        // Responde o usuario com a mensagem abaixo quando o intervalo
        // de tempo for atingido
        ctx.reply("✅✅✅✅✅ SINAL ENCONTRADO ✅✅✅✅✅")
        
        // Inicia outro timer de 1 segundo que envia o sinal
        setTimeout(()=>{
            ctx.reply(alt1, platBtn)
            
            // Timer de 0,5 segundos que envia uma mensagem de proucurando
            // outros sinais
            setTimeout(()=>{ 
                ctx.reply("🎲 Procurando outros sinais...")
            },500)
        },1000)
    },10000)
}

// Comando /start
bot.start((ctx) =>{
    // Se o tipo do chat for igual a grupo ele executa o if
    if(ctx.chat.type === 'group'){
        if (mode == 0){
            ctx.reply("Eae apostador! Aqui está uma detalhada ")
        }

        // Se não executa o else
    }else{
        // Resposta ao usuario
        ctx.reply(
        `
❌ O bot não pode ser ultilizado em chat privado.

Para ter acesso ao bot clique no botão abaixo e pague apenas 4,99 para entrar no grupo e ter acesso PERMANENTE ao bot 🤩`, buyBotBtn)
    }
})

bot.hears('a', (ctx)=>{
    ctx.reply("ata")
})

// Inicia o bot
bot.launch(console.log("Servidor Iniciado..."))