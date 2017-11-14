// Copyright (C) 2017 Favna
// 
// This file is part of Discord-Self-Bot.
// 
// Discord-Self-Bot is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
// 
// Discord-Self-Bot is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
// 
// You should have received a copy of the GNU General Public License
// along with Discord-Self-Bot.  If not, see <http://www.gnu.org/licenses/>.
// 

const commando = require('discord.js-commando');
const Discord = require("discord.js");

module.exports = class infoCommnad extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'info',
            aliases: ['shill', 'plug'],
            group: 'links',
            memberName: 'info',
            description: 'Link to Favna\'s discord-self-bot',
            examples: ['info'],
            guildOnly: false
        });
    }

    async run(msg) {
        const shillEmbed = new Discord.MessageEmbed();
        shillEmbed
            .setTitle('Discord-Self-Bot by Favna')
            .setDescription('Empower your Discord experience with a fully modular and expansive set of commands')
            .setThumbnail('https://selfbot.favna.xyz/images/selfbot.png')
            .setURL('https://selfbot.favna.xyz')
            .addField('​', '[Website](https://selfbot.favna.xyz) | [GitHub](https://github.com/Favna/Discord-Self-Bot) | [Wiki](https://github.com/Favna/Discord-Self-Bot/wiki)')

        await msg.embed(shillEmbed, 'Find information on the bot here https://selfbot.favna.xyz');
    };
};