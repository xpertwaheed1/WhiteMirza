`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|`;
`|🍹|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _𝔏𝔞𝔟_ = require(`./_𝔏𝔞𝔟_`);
const ꜰᴜᴄᴋ = require(`./oShit`);
var ᴋᴇɪᴇx = new RegExp(_𝔏𝔞𝔟_.FOXTROT, `g`);
var ᴋᴇɪ = /\/\^\[(.*)+\]\/\g/g.exec(ᴋᴇɪᴇx)[1];
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
const vers = require(`../package.json`);
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Sakura_Text_But = async (ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, MainText) => {
  try {
    if (ֆǟӄʊʀǟ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      const buttonMessage = {
        contentText: MainText,
        footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
        buttons: [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
        ],
        headerType: 1,
      };
      ӄʀǟӄɨռʐ
        .sendMessage(ֆǟӄʊʀǟ.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
        })
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
    } else {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      const buttonMessage = {
        contentText: MainText,
        footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
        buttons: [
          {
            buttonId: `${ᴋᴇɪ}help`,
            buttonText: { displayText: `${ᴋᴇɪ}help` },
            type: 1,
          },
        ],
        headerType: 1,
      };
      ӄʀǟӄɨռʐ
        .sendMessage(ֆǟӄʊʀǟ.chatId, buttonMessage, MessageType.buttonsMessage, {
          quoted: chat,
          contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
        })
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
    }
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
    var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Sakura_Image_But = async (ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, MainText, MediaUrl) => {
  try {
    if (ֆǟӄʊʀǟ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        ֆǟӄʊʀǟ.chatId,
        { url: MediaUrl },
        MessageType.image,
        { mimetype: Mimetype.png }
      );
      return await ӄʀǟӄɨռʐ
        .sendMessage(
          ֆǟӄʊʀǟ.chatId,
          {
            contentText: MainText,
            footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 4,
            imageMessage: media.message.imageMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
    } else {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        ֆǟӄʊʀǟ.chatId,
        { url: MediaUrl },
        MessageType.image,
        { mimetype: Mimetype.png }
      );
      return await ӄʀǟӄɨռʐ
        .sendMessage(
          ֆǟӄʊʀǟ.chatId,
          {
            contentText: MainText,
            footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
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
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
    var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Sakura_Video_But = async (ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, MainText, MediaUrl) => {
  try {
    if (ֆǟӄʊʀǟ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        ֆǟӄʊʀǟ.chatId,
        { url: MediaUrl },
        MessageType.video,
        { mimetype: `video/mp4` }
      );
      return await ӄʀǟӄɨռʐ
        .sendMessage(
          ֆǟӄʊʀǟ.chatId,
          {
            contentText: MainText,
            footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
    } else {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        ֆǟӄʊʀǟ.chatId,
        { url: MediaUrl },
        MessageType.video,
        { mimetype: `video/mp4` }
      );
      return await ӄʀǟӄɨռʐ
        .sendMessage(
          ֆǟӄʊʀǟ.chatId,
          {
            contentText: MainText,
            footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
    }
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
    var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Sakura_GIF_But = async (ӄʀǟӄɨռʐ, chat, ֆǟӄʊʀǟ, MainText, MediaUrl) => {
  try {
    if (ֆǟӄʊʀǟ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        ֆǟӄʊʀǟ.chatId,
        { url: MediaUrl },
        MessageType.video,
        { mimetype: `video/gif` }
      );
      return await ӄʀǟӄɨռʐ
        .sendMessage(
          ֆǟӄʊʀǟ.chatId,
          {
            contentText: MainText,
            footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ, Receiver] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
    } else {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
      const media = await ӄʀǟӄɨռʐ.prepareMessage(
        ֆǟӄʊʀǟ.chatId,
        { url: MediaUrl },
        MessageType.video,
        { mimetype: `video/gif` }
      );
      return await ӄʀǟӄɨռʐ
        .sendMessage(
          ֆǟӄʊʀǟ.chatId,
          {
            contentText: MainText,
            footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
            buttons: [
              {
                buttonId: `${ᴋᴇɪ}help`,
                buttonText: { displayText: `${ᴋᴇɪ}help` },
                type: 1,
              },
            ],
            headerType: 5,
            videoMessage: media.message.videoMessage,
          },
          MessageType.buttonsMessage,
          {
            quoted: chat,
            contextInfo: { mentionedJid: [աɦօֆɛռȶɦǟȶ] },
          }
        )
        .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
    }
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
    var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Sakura_VideoAudio_But = async (
  ӄʀǟӄɨռʐ,
  chat,
  ֆǟӄʊʀǟ,
  MainText,
  MediaUrl
) => {
  try {
    if (ֆǟӄʊʀǟ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
    } else {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    }
    const media = ӄʀǟӄɨռʐ.prepareMessage(
      ֆǟӄʊʀǟ.chatId,
      { url: MediaUrl },
      MessageType.mp4Audio,
      { mimetype: `audio/mp4` }
    );
    const buttonMessages = {
      videoMessage: media.message.videoMessage,
      contentText: MainText,
      footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ],
      headerType: 5,
    };
    ӄʀǟӄɨռʐ
      .sendMessage(ֆǟӄʊʀǟ.chatId, buttonMessages, MessageType.buttonsMessage, {
        mimetype: Mimetype.mp4Audio,

        quoted: chat,
      })
      .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
    var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
const Sakura_Location_But = async (
  ӄʀǟӄɨռʐ,
  chat,
  ֆǟӄʊʀǟ,
  MainText,
  MediaUrl
) => {
  try {
    if (ֆǟӄʊʀǟ.isReply) {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var քɛʀֆօռɢօȶռʊʍ = Receiver.substring(0, Receiver.length - 15);
    } else {
      var աɦօֆɛռȶɦǟȶ = ֆǟӄʊʀǟ.sender;
      var աɦօֆɛռȶɦǟȶռʊʍ = աɦօֆɛռȶɦǟȶ.substring(0, աɦօֆɛռȶɦǟȶ.length - 15);
      const defaultnm = ֆǟӄʊʀǟ.commandName;
      const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    }
    const media = ӄʀǟӄɨռʐ.prepareMessage(
      ֆǟӄʊʀǟ.chatId,
      { url: MediaUrl },
      MessageType.location
    );
    const buttonMessages = {
      locationMessage: media.message.locationMessage,
      contentText: MainText,
      footerText: `⎿ (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚: kryozen${vers.vers} ⏋`,
      buttons: [
        {
          buttonId: `${ᴋᴇɪ}help`,
          buttonText: { displayText: `${ᴋᴇɪ}help` },
          type: 1,
        },
      ],
      headerType: 6,
    };
    ӄʀǟӄɨռʐ
      .sendMessage(ֆǟӄʊʀǟ.chatId, buttonMessages, MessageType.buttonsMessage, {
        quoted: chat,
      })
      .catch((Error) => ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat));
  } catch (Error) {
    return ꜰᴜᴄᴋ.catch(Error, ӄʀǟӄɨռʐ, ֆǟӄʊʀǟ, chat);
    var childs = require(`child_process`).exec(`python3 ӄʀǟӄɨռʐ🐙ʟǟɮ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};
`⬡🍹⬡=========================================================================================⬡ 𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™ ⬡`;
module.exports = {
  MTB: Sakura_Text_But,
  MGB: Sakura_GIF_But,
  MIB: Sakura_Image_But,
  MVB: Sakura_Video_But,
  MLB: Sakura_Location_But,
  MAB: Sakura_VideoAudio_But,
};
`|🍹|`;
`|🍹|`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
`|🍹|      (𝐜)𝐒𝐚𝐤𝐮𝐫𝐚𝐁𝐨𝐭 | 𝐢𝐬 𝐚 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 𝐌𝐮𝐥𝐭𝐢𝐏𝐮𝐫𝐩𝐨𝐬𝐞-𝐔𝐬𝐞𝐫𝐛𝐨𝐭 𝐰𝐢𝐭𝐡 𝐌𝐨𝐝𝐞𝐫𝐚𝐭𝐢𝐨𝐧,𝐀𝐮𝐭𝐨𝐦𝐚𝐭𝐢𝐨𝐧 𝐚𝐧𝐝 𝟏𝟎𝟎+ 𝐦𝐨𝐫𝐞 𝐜𝐨𝐦𝐦𝐚𝐧𝐝𝐬!       |`;
`|🍹|======================================================================================================⬡  𝐊𝐫𝐚𝐤𝐢𝐧𝐳𝐋𝐚𝐛™`;
