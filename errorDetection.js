/**
 * L'array pour le système de detection d'erreur.
 * @type {Array}
 */
 module.exports.ErrorDetection = [
    {
        detection: ["CLIENT_MISSING_INTENTS", "ClientMissingIntents"],
        send: {
            content:
                `Tu dois activer les intents lorsque tu instancies ton Client.\`\`\`js\n` +
                `const { Client } = require('discord.js');\n` +
                `const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS"] });\`\`\``
        }
    },
    {
        detection: ["DISALLOWED_INTENTS", "DisallowedIntents"],
        send: {
            content:
                `Tu dois activer les intents de ton bot sur ton [Portail Développeur](https://discord.com/developers/applications).\n` +
                `⚠ **Si ton bot est certifié, il faut faire une demande à Discord.**`,
            files: [new MessageAttachment("./src/assets/DISALLOWED_INTENTS_video.mp4", "disallowed_intents.mp4")]
        }
    },
    {
        detection: ["TOKEN_MISSING", "TokenMissing"],
        send: {
            content:
                `Tu n'as pas passé de token dans ton client.login.\n` +
                `Vérifie qu'il est importé correctement depuis ta config par exemple.\`\`\`js\n` +
                `const { Client } = require('discord.js');\n` +
                `const client = new Client({ intents: ["GUILDS", "GUILD_MEMBERS"] });\n` +
                `client.login('TOKEN');\`\`\``
        }
    },
    {
        detection: ["TOKEN_INVALID", "TokenInvalid"],
        send: {
            content:
                `Le token que tu as passé dans ton login est invalide.\n` +
                `Cela peut être soit une faute de frappe, soit le fait qu'il n'existe plus : dans ce cas, régénère-le depuis ton [Portail Développeur](https://discord.com/developers/applications) pour en avoir un nouveau.`
        }
    },
    {
        detection: ["Missing Permission"],
        send: {
            content:
                `Cette erreur peut provenir de différentes façons:\n` +
                `∟ Ton bot n'a pas la permission d'effectuer une certaine action (ajout/suppression de rôles/bans...)\n` +
                `∟ Si cela vient de tes slash commands, il faut que tu invites ton bot avec le scope "application.commands" comme le montre la vidéo.`,
            files: [
                new MessageAttachment("./src/assets/MissingPermissions_video.mp4", "missing_permissions.mp4")
            ]
        }
    },
    {
        detection: ["USER_BANNER_NOT_FETCHED", "UserBannerNotFetched"],
        send: {
            content:
                `Il faut obligatoirement fetch un utilisateur pour obtenir sa bannière.\n` +
                `\`\`\`js\n` +
                `await user.fetch();\n` +
                `console.log(user.bannerURL()); \`\`\``
        }
    },
    {
        detection: ["INTERACTION_ALREADY_REPLIED", "InteractionAlreadyReplied"],
        send: {
            content:
                `Vous avez déjà répondu à une interaction avec un reply, update, deferReply ou deferUpdate.\n` +
                `Privilégiez un followUp pour envoyer un nouveau message ou un editReply pour modifier la réponse existante.`
        }
    },
    {
        detection: ["Cannot read properties of undefined (reading 'send')"],
        send: {
            content:
                `L'objet situé juste avant ton send est undefined:\n` +
                `∟ Si tu essayes de get un salon, vérifie bien que l'identifiant est correct et est un String.\n` +
                `∟ Si tu essayes de l'envoyer à un utilisateur/membre, vérifie que tu gères bien le cas où il est undefined.\`\`\`diff\n` +
                `> Si mon identifiant de salon est 12345:\n` +
                `- client.channels.cache.get(12345);\n` +
                `- client.channels.cache.get("123");\n` +
                `+ client.channels.cache.get("12345");\`\`\``

        }
    },
    {
        detection: ["EMBED_FIELD_VALUE"],
        send: {
            content:
                `Il y a un problème avec la valeur d'un des fields de ton embed.\n` +
                `Il faut que tu aies un String qui ne soit pas vide.\`\`\`diff\n` +
                `> const embed = new MessageEmbed();\n` +
                `> const textes = ["bonjour", "hello", "buen día", "buongiorno"];\n` +
                `- embed.addField("Les façons de saluer.", undefined);\n` +
		            `> La valeur du field est vide.\n` +
                `- embed.addField("Les façons de saluer.", "");\n` +
		            `> La valeur du field est un String vide.\n` +
                `- embed.addField("Les façons de saluer.", textes);\n` +
		            `> La valeur du field n'est pas un String.\n` +
                `+ embed.addField("Les façons de saluer.", textes.join(", "));\n` +
		            `> "bonjour, hello, buen día, buongiorno"\`\`\``
        }
    },
    {
        detection: ["Cannot find module"],
        send: {
            content:
                `Il y a un soucis avec l'un de tes requires:\n` +
                `∟ Si c'est un module, vérifie que tu l'as bien installé et que tu l'as écrit correctement avec \`npm install tonModule\`.\n` +
                `∟ Si c'est un chemin vers un autre fichier, vérifie que tu l'as écrit correctement en te positionnant depuis le dossier où est contenu le fichier du require.\n` +
                `\`\`\`\n` +
                `Imagineons cette arborescence de dossiers:\n` +
                `| src\n` +
                `| | commands\n` +
                `| | | test.js\n` +
                `| | main\n` +
                `| | | index.js\`\`\` \`\`\`diff\n` +
                `> Depuis notre fichier index.js pour récupérer test.js.\n` +
                `- require("./src/commands/test.js");\n` +
                `- require("./commands/test.js");\n` +
                `+ require("../commands/test.js");\`\`\``
        }
    },
    {
        detection: ["ERR_REQUIRE_ESM"],
        send: {
            content:
                `Le module que tu essayes de require est un module ES6:\n` +
                `∟ Si possible, reviens à une version plus ancienne du module où le require est possible.\n` +
                `∟ Sinon, utilise import plutôt que require. Fais attention, il renvoie une promesse.\`\`\`diff\n` +
                `> Prenons exemple sur parse-ms qui est désormais un module ES6.\n` +
                `- require("parse-ms");\n` +
                `+ npm install parse-ms@2.1.0\n` +
                `+ const parse = require("parse-ms");\n` +
                `> Ou bien\n` +
                `+ const parse = (await import("parse-ms")).default;\`\`\``
        }
    },
    {
        detection: ["INTERACTION_NOT_REPLIED", "InteractionNotReplied"],
        send: {
            content:
                `Tu essayes de faire un editReply ou un followUp alors que tu n'as pas encore répondu à l'interaction.\n` +
                `Fais d'abord un reply, update, deferReply ou deferUpdate.`
        }
    },
    {
        detection: ["DiscordAPIError: Cannot send an empty message"],
        send: {
            content:
                `Il y a un problème avec l'envoi de ton message ou embed:\n` +
                `∟ Vérifie que les propriétés de la function send ne soient pas vide.\n` +
                `∟ Vérifie que tu aies mis au moins une propriété dans l'objet de ton send telle que \`content\`, \`embeds\`, \`stickers\` ou \`files\`.`
        }
    },
    {
        detection: ["Unexpected token"],
        send: {
            content:
                `Il y a un problème de syntaxe dans un de tes fichiers.\n` +
                `Tu peux facilement les repérer à l'aide de ton IDE comme le montre les images ci-dessous.`,
	        files: [
                new MessageAttachment("./src/assets/UnexpectedToken_img.png", "UnexpectedToken.png"),
                new MessageAttachment("./src/assets/UnexpectedToken_img2.png", "UnexpectedToken2.png")
            ]
        }
    },
    {
        detection: ["Cannot read properties of undefined", "Cannot read properties of null"],
        send: {
            content:
                `Tu essayes d'accéder à une propriété sur quelque chose qui renvoie nullish (null/undefined).\n` +
                `Tu obtiens souvent des valeurs indéfinies par exemple lorsque:\n` +
		            `∟ Tu accédes à une propriété qui n'existe pas sur un objet.\n` +
		            `∟ Accéder à un index qui n'est pas présent dans un tableau.\`\`\`diff\n` +
                `- message.member.id;\n` +
                `> Erreur: "Cannot read properties of null (reading "id")" car message.member peut renvoyer null.\n` +
                `+ message.author.id; \n` +
                `> "12345678987654321"\`\`\` \`\`\`diff\n` +
                `> const fruits = ["pomme", "pêche", "poire", "abricot"];\n` +
                `- fruits[4].toUpperCase();\n` +
		            `> Erreur: "Cannot read properties of undefined (reading "toUpperCase")" car fruits ne contient pas d'élément d'index 4.\n` +
                `+ fruits[3].toUpperCase();\n` +
		            `> "ABRICOT"\`\`\``
        }
    },
    {
        detection: ["is not a function"],
        send: {
            content:
                `Une valeur a été utilisée comme une fonction alors qu'elle est d'un autre type.\n` +
                `∟ Vérifie le nom de ta fonction.\n` +
                `∟ L'objet sur lequel t'utilises cette méthode ne la possède pas.\n` +
                `∟ Vérifie que tes callback soient bien des fonctions.\`\`\`diff\n` +
		            `> const array = [ 1, 2, 3 ];\n` +
                `- array.filtrer(...);\n` +
                `> Array.prototype.filtrer n'existe pas.\n` +
                `- array.filter(3);\n` +
                `> 3 n'est pas une fonction mais un nombre.\n` +
                `+ array.filter((n) => n !== 3);\n` +
                `> [ 1, 2 ]\`\`\``
        }
    },
    {
        detection: ["missing ) after argument list"],
        send: {
            content:
                `Il y a une erreur avec la façon dont une fonction est appelée.\n` +
		            `Cela peut être une faute de frappe, un opérateur manquant, ou une chaîne non-échappée.\`\`\`diff\n` +
                `- console.log("π = " Math.PI);\n` +
                `> "SyntaxError: missing ) after argument list" car il manque l'opérateur "+" pour la concaténation.\n` +
                `+ console.log("π = " + Math.PI);\n` +
                `> "π = 3.141592653589793"\`\`\``
        }
    }
];
