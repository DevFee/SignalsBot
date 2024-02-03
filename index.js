// Bibliotecas
import { Telegraf } from "telegraf";
import { message } from "telegraf/filters";

// Token do bot
const bot = new Telegraf("6436588948:AAGooJZxGMMG-k7Rih6pNW9GBEC3jFjFY9M");

// Lista de sinais: 
const sinais = [
    `
    💸 ENTRADA CONFIRMADA! 
    💣 Bombas: value0
    🕑 Validade: value1
    🔁 Tentativas: 2
    
    🎰 Jogue aqui! 👉🏻 brdouble.com 👈🏻
    
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
    
    🎰 Jogue aqui! 👉🏻 brdouble.com 👈🏻
    
    🟦🟦💎🟦🟦
    🟦🟦🟦🟦🟦
    💎🟦🟦🟦💎
    🟦🟦🟦💎🟦
    🟦💎🟦🟦🟦
    `
]

// Comando /start
bot.start((ctx) =>{
    
    // Se o tipo do chat for igual a grupo ele executa o if
    if(ctx.chat.type === "group"){
        
        // Responde o usuario com a mensagem abaixo
        ctx.reply("Bot de sinais iniciado!")

        // Inicia um timer que quando termina reponde o usuario com
        // a mensagem abaixo dentro do scopo
        setTimeout(()=>{
            ctx.reply("Proucurando Sinais...")
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
            
            // Substitui a string "value1" pelas horas e minutos atuais + 5
            // como se fosse a validade do sinal  
            alt1 = alt1.replace("value1", `${new Date().getHours()}:${new Date().getMinutes()+5}`)
            
            // Responde o usuario com a mensagem abaixo quando o intervalo
            // de tempo for atingido
            ctx.reply("✅✅✅✅✅ SINAL ENCONTRADO ✅✅✅✅✅")
            
            // Inicia outro timer de 1 segundo que envia o sinal
            setTimeout(()=>{
                ctx.reply(`${alt1}`) 
            },1000)
        },5000)
        // Se não executa o else
    }else{
        ctx.reply(`Você não tem acesso ao bot.`)
    }
})

// Inicia o bot
bot.launch(console.log("Servidor Iniciado..."))