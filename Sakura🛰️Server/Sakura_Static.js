`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const speed = require(`performance-now`);
const vers = require(`../package.json`);
const date = require(`date-and-time`);
const cleanRF = require(`./cleanRF`);
const _๐๐๐_ = require(`./_๐๐๐_`);
const ๊ฐแดแดแด = require(`./oShit`);
let Timestamp = speed();
const now = new Date();
const fs = require(`fs`);
const Pong = (speed() - Timestamp) * 120;
const Ping = Pong.toFixed(3);
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Sakura_GIF_Static = async (ำสวำษจีผส, chat, ึวำสสว, MainText, MediaUrl) => {
  try {
    const defaultnm = ึวำสสว.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    if (ึวำสสว.isReply) {
      var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
      var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
      return await ำสวำษจีผส
        .sendMessage(ึวำสสว.chatId, { url: MediaUrl }, MessageType.video, {
          mimetype: `video/gif`,
          quoted: chat,
          caption: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐: kryozen${vers.vers} โ\n\n` + MainText,
          contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, Receiver] },
        })
        .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
    } else {
      var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
      var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
      return await ำสวำษจีผส
        .sendMessage(ึวำสสว.chatId, { url: MediaUrl }, MessageType.video, {
          mimetype: `video/gif`,
          quoted: chat,
          caption: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐: kryozen${vers.vers} โ\n\n` + MainText,
          contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
        })
        .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
    }
  } catch (Error) {
    return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
    var childs = require(`child_process`).exec(`python3 ำสวำษจีผส๐สวษฎ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};

module.exports = {
  MGS: Sakura_GIF_Static,
};
`|๐น|`;
`|๐น|`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
