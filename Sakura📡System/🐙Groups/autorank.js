`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
const Sakura_Buttons = require(`../../Sakura🛰️Server/Sakura_Buttons`);
const Sakura_Static = require(`../../Sakura🛰️Server/Sakura_Static`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const Ranker = require(`../../Sakura🍃Goose/autorank`);
const _𝔏𝔞𝔟_ = require(`../../Sakura🛰️Server/_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`../../Sakura🛰️Server/oShit`);
const motor = require(`../../Sakura🛰️Server/motor`);
const vers = require(`../../package.json`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
var path = require(`path`);
var scriptName = path.basename(__filename);
var newScpt = scriptName.slice(0, -3).toLowerCase();
`|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
module.exports = {
  name: newScpt,
  ֆǟӄʊʀǟӄǟɨʐօ: `${ᴋᴇɪ}autorank _on/off_`,
  async handle(ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, Needs, ꜱɪᴛʀᴀᴘ, Clock, Ping) {
    try {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      const hold = require("../../Sakura🛰️Server/Hold");
      await hold.Hold(ֆǟӄʊʀǟ);
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (!ֆǟӄʊʀǟ.isGroup) {
        return Sakura_Buttons.MTB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 _This Command is Only For Groups!_
╚════════════╝`
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isSenderGroupAdmin) {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},
╔════◇🔒𝐏𝐞𝐫𝐦𝐢𝐬𝐬𝐢𝐨𝐧 
║💡 *Admins Only*
║❌ _You Are Not Allowed!_
╚════════════╝`,
          `./Sakura☣️Reactor/ֆǟӄʊʀǟMemErr.png`
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (ֆǟӄʊʀǟ.isGroup && !ֆǟӄʊʀǟ.isBotGroupAdmin) {
        return Sakura_Buttons.MIB(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ}, 

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❌ *How Can I Use Admin Only Commands If i am not admin?*
║💡 𝐅𝐢𝐱: _Make Me Admin First!_
╚════════════╝`,
          _`./Sakura☣️Reactor/ֆǟӄʊʀǟNotMeAdmin.png`
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (Needs.length === 0) {
        var 𝓜Usage = ꜱɪᴛʀᴀᴘ.get(ֆǟӄʊʀǟ.commandName);
        var ᴍɪᴢᴜᴋɪᴍᴏʀᴇ =
          𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ === undefined ? `Null` : 𝓜Usage.ֆǟӄʊʀǟӄǟɨʐօ;
        const ᴀʀɢᴜᴍᴇɴᴛ = require(`../../Sakura🛰️Server/ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ`);
        return ᴀʀɢᴜᴍᴇɴᴛ.ɴᴇᴇᴅᴀʀɢᴜᴍᴇɴᴛ(
          ӄʀǟӄɨռʐ,
          chat,
          ֆǟӄʊʀǟ,
          աɦօֆɛռȶɦǟȶ,
          աɦօֆɛռȶɦǟȶռʊʍ,
          ֆǟӄʊʀǟ.commandName,
          ᴍɪᴢᴜᴋɪᴍᴏʀᴇ
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (Needs[0] === `ON` || Needs[0] === `on` || Needs[0] === `On`) {
        Ranker.findOne(
          {
            serverID: ֆǟӄʊʀǟ.chatId,
          },
          async (Error, server) => {
            if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
            if (!server) {
              var newServer = new Ranker({
                serverID: ֆǟӄʊʀǟ.chatId,
              });
              await newServer
                .save()
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
              const media = await ӄʀǟӄɨռʐ.prepareMessage(
                ֆǟӄʊʀǟ.chatId,
                {
                  url: "https://i.postimg.cc/GtzHrQNr/Sakura-Rank-Catelog.png",
                },
                MessageType.image,
                {
                  mimetype: Mimetype.png,
                }
              );
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  ֆǟӄʊʀǟ.chatId,
                  {
                    contentText: `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❣️ 𝐆𝐫𝐨𝐮𝐩: ${ֆǟӄʊʀǟ.groupName}
║🎖️ 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ✅On
╚════════════╝

🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸👇🏽‍`,
                    footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
                    buttons: [
                      {
                        buttonId: `${ᴋᴇɪ}autorank on`,
                        buttonText: { displayText: `${ᴋᴇɪ}autorank on` },
                        type: 1,
                      },
                      {
                        buttonId: `${ᴋᴇɪ}autorank off`,
                        buttonText: { displayText: `${ᴋᴇɪ}autorank off` },
                        type: 1,
                      },
                    ],
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                  },
                  MessageType.buttonsMessage,
                  {
                    quoted: chat,
                    contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
                  }
                )
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
              return;
              `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
            } else {
              const media = await ӄʀǟӄɨռʐ.prepareMessage(
                ֆǟӄʊʀǟ.chatId,
                {
                  url: "https://i.postimg.cc/GtzHrQNr/Sakura-Rank-Catelog.png",
                },
                MessageType.image,
                {
                  mimetype: Mimetype.png,
                }
              );
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  ֆǟӄʊʀǟ.chatId,
                  {
                    contentText: `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❣️ 𝐆𝐫𝐨𝐮𝐩: ${ֆǟӄʊʀǟ.groupName}
║🎖️ 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ✅On
╚════════════╝

🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸👇🏽‍`,
                    footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
                    buttons: [
                      {
                        buttonId: `${ᴋᴇɪ}autorank on`,
                        buttonText: { displayText: `${ᴋᴇɪ}autorank on` },
                        type: 1,
                      },
                      {
                        buttonId: `${ᴋᴇɪ}autorank off`,
                        buttonText: { displayText: `${ᴋᴇɪ}autorank off` },
                        type: 1,
                      },
                    ],
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                  },
                  MessageType.buttonsMessage,
                  {
                    quoted: chat,
                    contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
                  }
                )
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            }
          }
        );
      }
      `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
      if (Needs[0] === `OFF` || Needs[0] === `off` || Needs[0] === `Off`) {
        Ranker.findOne(
          {
            serverID: ֆǟӄʊʀǟ.chatId,
          },
          async (Error, server) => {
            if (Error) return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
            if (!server) {
              const media = await ӄʀǟӄɨռʐ.prepareMessage(
                ֆǟӄʊʀǟ.chatId,
                {
                  url: "https://i.postimg.cc/GtzHrQNr/Sakura-Rank-Catelog.png",
                },
                MessageType.image,
                {
                  mimetype: Mimetype.png,
                }
              );
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  ֆǟӄʊʀǟ.chatId,
                  {
                    contentText: `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❣️ 𝐆𝐫𝐨𝐮𝐩: ${ֆǟӄʊʀǟ.groupName}
║🎖️ 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ❌OFF
╚════════════╝

🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸👇🏽‍`,
                    footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
                    buttons: [
                      {
                        buttonId: `${ᴋᴇɪ}autorank on`,
                        buttonText: { displayText: `${ᴋᴇɪ}autorank on` },
                        type: 1,
                      },
                      {
                        buttonId: `${ᴋᴇɪ}autorank off`,
                        buttonText: { displayText: `${ᴋᴇɪ}autorank off` },
                        type: 1,
                      },
                    ],
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                  },
                  MessageType.buttonsMessage,
                  {
                    quoted: chat,
                    contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
                  }
                )
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
              `|⬡════════════════════════════════════════════|  ™𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛🍹𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭(𝐜) |════════════════════════════════════════════⬡|`;
            } else {
              const media = await ӄʀǟӄɨռʐ.prepareMessage(
                ֆǟӄʊʀǟ.chatId,
                {
                  url: "https://i.postimg.cc/GtzHrQNr/Sakura-Rank-Catelog.png",
                },
                MessageType.image,
                {
                  mimetype: Mimetype.png,
                }
              );
              await ӄʀǟӄɨռʐ
                .sendMessage(
                  ֆǟӄʊʀǟ.chatId,
                  {
                    contentText: `🦋𝐊𝐨𝐧𝐢𝐜𝐡𝐢𝐰𝐚 @${աɦօֆɛռȶɦǟȶռʊʍ},

╔════◇🔱𝐂𝐨𝐦𝐦𝐚𝐧𝐝: _${ᴋᴇɪ}${FinalName}_
║❣️ 𝐆𝐫𝐨𝐮𝐩: ${ֆǟӄʊʀǟ.groupName}
║🎖️ 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸: ❌OFF
╚════════════╝

🌱𝗕𝘂𝘁𝘁𝗼𝗻𝘀 𝗧𝗼 𝗧𝗼𝗴𝗴𝗹𝗲 𝗔𝘂𝘁𝗼𝗥𝗮𝗻𝗸👇🏽‍`,
                    footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
                    buttons: [
                      {
                        buttonId: `${ᴋᴇɪ}autorank on`,
                        buttonText: { displayText: `${ᴋᴇɪ}autorank on` },
                        type: 1,
                      },
                      {
                        buttonId: `${ᴋᴇɪ}autorank off`,
                        buttonText: { displayText: `${ᴋᴇɪ}autorank off` },
                        type: 1,
                      },
                    ],
                    headerType: 4,
                    imageMessage: media.message.imageMessage,
                  },
                  MessageType.buttonsMessage,
                  {
                    quoted: chat,
                    contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
                  }
                )
                .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
            }
          }
        );
      }
    } catch (Error) {
      ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
      return;
    }
  },
};
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
`|                                                                                                                        |`;
`|        (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!            |`;
`|                                                                                                                        |`;
`|⬡════════════════════════════════════════════|                            |═══════════════════════════════════════════⬡|`;
