const { SlashCommandBuilder } = require('discord.js');

const adultArr = [
    "cumshot",
    "horse cock",
    "donkey dick"
]

const adultWord = arr => {
    adultNum = Math.floor(Math.random() * 3)

    return arr[adultNum]
}

module.exports = {
    data: new SlashCommandBuilder()
        .setName('adult-tour')
        .setDescription('You can say whatever the HELL you want'),
    async execute(interaction) {
        await interaction.reply(adultWord(adultArr));
    },
}