// Bibliotecas
import { Telegraf,Markup } from "telegraf";
import { message } from "telegraf/filters";

// Token do bot
const bot = new Telegraf("6894977774:AAGjA7dM_CtCMhnug5g_VrEr1QiB6rxfmgk");

 // Constante do botão de jogar
 const platBtn = Markup.inlineKeyboard([
    //           Tipo       Texto               Url
    Markup.button.url("🚨 Jogue aqui 🚨", "brdouble.com")
])

// Constante de botões de ações do bot no privado
const actions = Markup.inlineKeyboard([
    Markup.button.callback("Mines 💣", "minegame"),
    Markup.button.callback("Crash 📈", "crashgame"),
    Markup.button.callback("Goals ⚽", "goalgame")
])

// Varivel do modo de sinal
var mode = 0

// Lista de sinais: 
const sinais = [
    `    
🟦💎🟦💎🟦
🟦🟦🟦💎🟦
💎🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦💎
🟦🟦🟦💎🟦
🟦💎🟦🟦🟦
    `,
    `
💎🟦🟦💎🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💎🟦🟦🟦💎
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎💎
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦💎🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦💎🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦💎
🟦🟦🟦💎🟦
    `,
    `
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
🟦🟦🟦🟦💎
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦💎🟦💎
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦💎💎💎🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦💎
🟦🟦🟦🟦💎
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦💎💎🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦💎🟦💎🟦
💎🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦💎🟦🟦💎
🟦🟦💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
💎🟦💎🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦💎
🟦💎🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎💎🟦
🟦🟦🟦🟦🟦
💎🟦🟦💎🟦
    `,
    `
🟦🟦🟦💎🟦
🟦🟦💎💎🟦
🟦🟦🟦🟦🟦
🟦💎💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦💎🟦💎
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
🟦💎💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦💎
🟦💎🟦💎🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
💎🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦💎🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦

    `,
    `
🟦💎🟦💎🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦

    `,
    `
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦💎
    `,
    `
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦💎🟦🟦
    `,
    `
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦💎🟦🟦🟦
💎🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
🟦🟦🟦🟦💎
💎🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦💎🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
💎🟦🟦💎🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
💎🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦💎
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦💎🟦🟦
🟦🟦💎🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
💎🟦💎🟦🟦
🟦🟦💎🟦💎
    `,
    `
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦💎🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
🟦💎💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
    `,
    `
🟦🟦🟦💎🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
    `,
    `
🟦💎🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
    `,
    `
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦💎
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦💎🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎💎💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
    `,
    `
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦💎🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦💎
    `,
    `
💎🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💎🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
    `,
    `
🟦💎🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦💎💎
    `,
    `
🟦🟦🟦🟦💎
🟦🟦🟦🟦💎
🟦💎🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
💎🟦💎🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
    `,
    `
💎🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦💎
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦💎🟦
🟦🟦🟦💎🟦
    `,
    `
💎🟦💎🟦🟦
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💎🟦🟦🟦🟦
💎💎🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦💎💎
🟦🟦🟦🟦💎
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦💎🟦💎🟦
🟦💎🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦💎💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦💎🟦🟦🟦
    `,
    `
🟦💎💎🟦🟦
🟦💎💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦💎💎🟦
🟦🟦💎💎🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦💎🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦💎💎
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦💎🟦💎🟦
🟦🟦🟦💎💎
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
💎🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💎🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
💎🟦💎🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
💎🟦🟦🟦💎
🟦🟦💎🟦🟦
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
💎🟦💎🟦💎
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
💎🟦💎🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦💎🟦🟦
🟦🟦🟦🟦🟦
💎🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦💎💎
🟦🟦🟦🟦🟦
    `,
    `
🟦💎🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦🟦🟦🟦
🟦🟦💎🟦🟦
    `,
    `
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦💎
🟦🟦🟦🟦🟦
🟦🟦🟦🟦💎
    `,
    `
🟦🟦🟦🟦🟦
🟦💎🟦💎🟦
🟦🟦🟦🟦🟦
🟦💎🟦🟦🟦
🟦🟦🟦🟦🟦
    `
]

console.log(sinais.length)

// função de sinal do jogo mines
function mineS(ctx){
    mode = 1
    // Responde o usuario com a mensagem abaixo
    ctx.reply("✅ Mines Iniciado!")

    // Inicia um timer que quando termina reponde o usuario com
    // a mensagem abaixo dentro do scopo
    setTimeout(()=>{
        ctx.reply("🎲 Analisando Sinais...")
    },500)

    // Inicia um intervalo de tempo de 5 minutos que fica executando
    // Infinitamente o código dentro do scopo
    const laco = setInterval(()=>{

        var text = `
🤑 ENTRADA CONFIRMADA
💣 Bombas: value0
⏰ Validade: value1
🎯 Tentativas: 2
    `

        // Verifica se o modo continua igual a um se não ele para a execução
        // do sinal.
        if(mode != 1){ 
            setTimeout(()=>{
                // Diz para o cliente que a ação foi interrompida e o motivo.
                ctx.reply("Ação interrompida: Modo de jogo alterado")
            },100)
            
            // Para a execução do código
            clearInterval(laco)
        };
        // Cria uma váriavel que vai criar um valor aleatorio
        // dentre 0 e o tamanho da lista "sinais"
        const randomI = Math.floor(Math.random()*sinais.length)

        // Pega um item do array com o indice da variavel "randomI"
        // e substitui a string "value0" por um numero aleatorio dentre 3 e 4
        // OBS: esse "value0" é o número de bombas que o usuario deve jogar
        const sinal = sinais[randomI]

        // Cria duas variaveis que armazenam as horas e minutos atuais
        var minutos = 57+20

        var horas = new Date().getHours()

        // Condicional que verifica se os minutos possuem o valor maior
        // ou igual a 55
        if (minutos >= 57){
            
            // Se a condição bater, minutos vai virar uma string com o nmr
            // 0 + a subtração de minutos - 60
            minutos = `0${(minutos - 60)}`

            // Troca o valor das horas pra horas + 1
            horas = horas + 1
        }
        else minutos = minutos 

        // Cria e altera o texto da variavel text
        var alt2 = text.replace("value1", `${horas}:${minutos}`)
        alt2 = alt2.replace("value0", Math.floor(Math.random()+3))
        alt2 = alt2+sinal+"\n🚨 APENAS FUNCIONA PARA A PLATAFORMA ABAIXO 🚨"
        
        // Responde o usuario com a mensagem abaixo quando o intervalo
        // de tempo for atingido
        ctx.reply("✅✅✅✅✅ SINAL ENCONTRADO ✅✅✅✅✅")
        
        // Inicia outro timer de 1 segundo que envia o sinal
        setTimeout(()=>{
            ctx.reply(alt2, platBtn)
            
            // Timer de 0,5 segundos que envia uma mensagem de proucurando
            // outros sinais
            setTimeout(()=>{ 
                ctx.reply("🎲 Analisando mais sinais...")
            },3000)
        },1000)
    },300000)
}

//função de sinal do jogo crash
function crashS(ctx){

    mode = 2

    // Responde o usuario com a mensagem abaixo
    ctx.reply("✅ Crash Iniciado!")

    // Inicia um timer que quando termina reponde o usuario com
    // a mensagem abaixo dentro do scopo
    setTimeout(()=>{
        ctx.reply("🛩️ Analisando Vôo...")
    },500)

    const laco = setInterval(()=>{

        // Vai verificar se o modo continua sendo igual à 2
        // Se não for igual a 2 vai parar a execução do código
        if (mode != 2){

            // Diz ao usuário que a ação foi interrompida
            
            ctx.reply("Ação interrompida")
            // Para a execução do código
            clearInterval(laco)
        }

        // Gerar um número aleatório entre 0 e 1
        const randomNumber = Math.random()+1
        const stringNumber = randomNumber.toString()
        const formatedNumber = stringNumber.slice(0, 4)

        var msg1 = `
🤑 ENTRADA CONFIRMADA (1.10x+)
🚀 Jogo: Crash
👉 Sair em: valor1
        
🚨 FUNCIONA APENAS NA PLATAFORMA ABAIXO! ⬇️
⚠️ NÃO TENTE EM OUTRO SITE! ⬆️
        `
        var msg2 = `
🚨 Partida recuperação detectada! 🚨
⛔ Não entrar na aposta.
📈 Multiplicador previsto: valor1`

var msg3 = `
🤑 ENTRADA CONFIRMADA (2x+)
🚀 Jogo: Crash
👉 Sair em: valor1
        
🚨 FUNCIONA APENAS NA PLATAFORMA ABAIXO! ⬇️
⚠️ NÃO TENTE EM OUTRO SITE! ⬆️
        `

        msg3 = msg3.replace("valor1", formatedNumber)
        msg1 = msg1.replace("valor1", formatedNumber)
        msg2 = msg2.replace("valor1", formatedNumber)

        if(randomNumber <= 1.10){
            ctx.reply(msg2)
            setTimeout(()=>{
                ctx.reply("🛩️ Analisando proximos vôos...")
            },2000)
        }
        else if(randomNumber >= 2){
            ctx.reply(msg3, platBtn)
            setTimeout(()=>{
                
                ctx.reply("🛩️ Analisando proximos vôos...")
            },2000)
        }
        else{
            ctx.reply(`${msg1}`, platBtn)
            setTimeout(()=>{
                ctx.reply(`
🛩️ ENTRADA FINALIZADA 🛩️
✅✅✅ VITORIA ✅✅✅`)
            },5500)
            setTimeout(()=>{
                ctx.reply("🛩️ Analisando proximos vôos...")
            },11000)
        }

    },60000)
}

// Comando /start
bot.start( (ctx) =>{
    ctx.reply(`
Eae apostador, seja muito bem-vindo ao Yknats! 🎉 

🤩 Inicialização - Para inicializar o envio de sinais apenas selecione o jogo desejado em algum dos botões abaixo que o bot vai começar a proucurar pela source do nosso cassino um que esteja funcionando e vai começar a fazer o envio deles.

💎 Mines: Acerte os diamantes, e quanto mais acertados maior o multiplicador. (mas uma bomba pode acabar com tudo)

🛩️ Crash: Teste a sua agilidade nesse jogo e tente prever até onde o aviãozinho pode subir, quanto mais alto maior o multiplicador.

⚽ Goals: Acerte a bola e evite tomar um cartão vermelho. Quanto mais bolas maior o lucro, mas se tomar o cartão vermelho está expulso do jogo.

OBS: Tente não ultilizar dois jogos ao mesmo tempo.
Obrigado por usar o yknatsbot! 💰🚀`, actions)

})


bot.action("crashgame", (ctx)=>{
    if(mode != 2){
        mode = 2
        ctx.reply("Iniciando: Crash📈")
        crashS(ctx)
    }else{
        ctx.reply("Jogo já iniciado")
    }
})

bot.action("minegame", (ctx)=>{
    if(mode != 1){
        mode = 1
        ctx.reply("Iniciando: Mines💣")
        mineS(ctx)
    }else{
        ctx.reply("Jogo já iniciado")
    }
})

// Inicia o bot
bot.launch(console.log("Servidor Iniciado..."))