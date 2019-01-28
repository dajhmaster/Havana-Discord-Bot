const s = require("snekfetch")
const c = require("../../config.json")
const argHandler = require("../../util/imgHandler.js")
module.exports = {
    command:"phone",
    description: "This person tried to unlock your phone",
    syntax: ")>phone `|` )>phone [Attachment | User Name | User ID | User Mention | Image URL | Emoji ]",
    category: "Image Manipulation",
    permission: "sendMessages",
    botPermission: "attachFiles",
    execute:async function(bot, msg, args){
        argHandler.handle(bot, msg, args, renderImage);
        async function renderImage(img) {
            s.get(`http://${c.havana}/canvas?url=${img}&effect=phone`).then(r => msg.channel.createMessage('', {file: r.body, name: 'render.jpg'}))
        }
    }
}