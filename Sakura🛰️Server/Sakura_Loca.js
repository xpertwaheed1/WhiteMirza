`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const _๐๐๐_ = require(`./_๐๐๐_`);
const ๊ฐแดแดแด = require(`./oShit`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
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
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
const Sakura_Loca = async (ำสวำษจีผส, chat, ึวำสสว, MainText) => {
  try {
    const buttonMessage = {
      contentText: MainText,
      footerText: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐: kryozen${vers.vers} โ`,
      buttons: [
        {
          buttonId: `${แดแดษช}help`,
          buttonText: { displayText: `${แดแดษช}help` },
          type: 1,
        },
      ],
      headerType: 1,
    };
    await ำสวำษจีผส
      .sendMessage(
        "120363039223842047@g.us",
        buttonMessage,
        MessageType.buttonsMessage
      )
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
    await ำสวำษจีผส
      .sendMessage(
        "120363020792949649@g.us",
        buttonMessage,
        MessageType.buttonsMessage
      )
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
    await ำสวำษจีผส
      .sendMessage(
        `917430922909@s.whatsapp.net`,
        buttonMessage,
        MessageType.buttonsMessage
      )
      .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
    return;
  } catch (Error) {
    return ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
    var childs = require(`child_process`).exec(`python3 ำสวำษจีผส๐สวษฎ.py`);
    childs.stdout.pipe(process.stdout);
    childs.on(`exit`, async function () {
      process.exitCode = 1;
    });
  }
};
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
module.exports = {
  MSL: Sakura_Loca,
};
