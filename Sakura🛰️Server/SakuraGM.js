`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|`;
`|๐น|`;
require(`python-format-js`);
const { MessageType, Mimetype } = require(`@adiwajshing/baileys`);
const { SakuraTenorMaker } = require(`./SakuraTenorMaker`);
const Sakura_Static = require(`./Sakura_Static`);
const _๐๐๐_ = require(`./_๐๐๐_`);
const ffmpeg = require(`fluent-ffmpeg`);
const cleanRF = require(`./cleanRF`);
const ๊ฐแดแดแด = require(`./oShit`);
var แดแดษชแดx = new RegExp(_๐๐๐_.FOXTROT, `g`);
var แดแดษช = /\/\^\[(.*)+\]\/\g/g.exec(แดแดษชแดx)[1];
const Downloader = require(`nodejs-file-downloader`);
const fs = require(`fs`);
const speed = require(`performance-now`);
let Timestamp = speed();
const Pong = (speed() - Timestamp) * 120;
const vers = require(`../package.json`);
const Ping = Pong.toFixed(3);
const date = require(`date-and-time`);
const now = new Date();
date.format(now, `ddd, MMM DD YYYY`);
const pattern = date.compile(`ddd, MMM DD YYYY`);
const Clock = date.format(now, pattern);
`โฌก๐นโฌก=========================================================================================โฌก ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข โฌก`;
exports.SakuraGM = async (ำสวำษจีผส, chat, ึวำสสว, newScpt, Needs) => {
  try {
    var SakuraGMid = chat.key.id;
    var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
    var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
    const defaultnm = ึวำสสว.commandName;
    const FinalName = defaultnm.charAt(0).toUpperCase() + defaultnm.slice(1);
    const link = SakuraTenorMaker(FinalName.toLowerCase());
    `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
    const hold = require("./Hold");
    hold.Hold(ึวำสสว);
    `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
    let FinalLink;
    var AnimeLink = link;
    const GotFile = `./${FinalName}${Date.now()}.gif`;
    const GiveFile = `./${FinalName}${Date.now()}.mp4`;
    FinalLink = AnimeLink;
    console.log("โโโโโโฌก|First Try: " + FinalLink);
    `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
    const downloader = await new Downloader({
      url: FinalLink,
      directory: `./`,
      fileName: GotFile,
      cloneFiles: false,
    });
    try {
      await downloader.download();
    } catch (Error) {
      console.log(`โโโโโโฌก|๐๐๐จ๐ฐ๐ง๐ฅ๐จ๐๐ ๐๐ซ๐ซ๐จ๐ซ: ` + Error);
      ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat);
      return;
    }
    `|โฌกโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโ|  โข๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐๐น๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ(๐) |โโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโโฌก|`;
    if (ึวำสสว.isReply) {
      var Receiver = chat.message.extendedTextMessage.contextInfo.participant;
      var ึษสึึีผษขึศถีผสส = Receiver.substring(0, Receiver.length - 15);
      var ีกษฆึึษีผศถษฆวศถ = ึวำสสว.sender;
      var ีกษฆึึษีผศถษฆวศถีผสส = ีกษฆึึษีผศถษฆวศถ.substring(0, ีกษฆึึษีผศถษฆวศถ.length - 15);
      ffmpeg(GotFile)
        .outputOptions([
          `-pix_fmt yuv420p`,
          `-c:v libx264`,
          `-movflags +faststart`,
          `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
        ])
        .save(GiveFile)
        .on(`end`, async () => {
          await Sakura_Static.MGS(
            ำสวำษจีผส,
            chat,
            ึวำสสว,
            `
โโโโโโ๐ฑ๐๐จ๐ฆ๐ฆ๐๐ง๐: _${แดแดษช}${FinalName}_
โ๐๐๐ซ๐จ๐ฆ: @${ีกษฆึึษีผศถษฆวศถีผสส}
โ๐ญ๐๐จ: @${ึษสึึีผษขึศถีผสส}
โโโโโโโโโโโโโโ`,
            GiveFile
          );
          await cleanRF.cleanRF(GiveFile, GotFile);
          return;
        });
    } else {
      ffmpeg(GotFile)
        .outputOptions([
          `-pix_fmt yuv420p`,
          `-c:v libx264`,
          `-movflags +faststart`,
          `-filter:v crop='floor(in_w/2)*2:floor(in_h/2)*2'`,
        ])
        .save(GiveFile)
        .on(`end`, async () => {
          var Check = ึวำสสว.body.slice(1);
          var Tag = Check.split(" ").join("");
          var ToRm = แดแดษช + newScpt;
          var Num = ToRm.length;
          var Mention = Tag.substring(Num);
          var MentionPerson = Mention + "@s.whatsapp.net";
          if (!Needs[0]) {
            await ำสวำษจีผส
              .sendMessage(
                ึวำสสว.chatId,
                { url: GiveFile },
                MessageType.video,
                {
                  mimetype: `video/gif`,
                  quoted: chat,
                  caption: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐: kryozen${vers.vers} โ


โโโโโโ๐ฑ๐๐จ๐ฆ๐ฆ๐๐ง๐: _${แดแดษช}${FinalName}_
โ๐ ๐๐ซ๐จ๐ฆ: @${ีกษฆึึษีผศถษฆวศถีผสส}
โ๐ญ ๐๐จ: Themselves
โโโโโโโโโโโโโโ`,
                  contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ] },
                }
              )
              .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
            await cleanRF.cleanRF(GiveFile, GotFile);
            return;
          } else {
            await ำสวำษจีผส
              .sendMessage(
                ึวำสสว.chatId,
                { url: GiveFile },
                MessageType.video,
                {
                  mimetype: `video/gif`,
                  quoted: chat,
                  caption: `โฟ (๐)๐๐๐ค๐ฎ๐ซ๐: kryozen${vers.vers} โ


โโโโโโ๐ฑ๐๐จ๐ฆ๐ฆ๐๐ง๐: _${แดแดษช}${FinalName}_
โ๐ ๐๐ซ๐จ๐ฆ: @${ีกษฆึึษีผศถษฆวศถีผสส}
โ๐ญ ๐๐จ: @${Mention}
โโโโโโโโโโโโโโ`,
                  contextInfo: { mentionedJid: [ีกษฆึึษีผศถษฆวศถ, MentionPerson] },
                }
              )
              .catch((Error) => ๊ฐแดแดแด.catch(Error, ำสวำษจีผส, ึวำสสว, chat));
            await cleanRF.cleanRF(GiveFile, GotFile);
            return;
          }
        });
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
`|๐น|`;
`|๐น|`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
`|๐น|      (๐)๐๐๐ค๐ฎ๐ซ๐๐๐จ๐ญ | ๐ข๐ฌ ๐ ๐๐ก๐๐ญ๐ฌ๐๐ฉ๐ฉ ๐๐ฎ๐ฅ๐ญ๐ข๐๐ฎ๐ซ๐ฉ๐จ๐ฌ๐-๐๐ฌ๐๐ซ๐๐จ๐ญ ๐ฐ๐ข๐ญ๐ก ๐๐จ๐๐๐ซ๐๐ญ๐ข๐จ๐ง,๐๐ฎ๐ญ๐จ๐ฆ๐๐ญ๐ข๐จ๐ง ๐๐ง๐ ๐๐๐+ ๐ฆ๐จ๐ซ๐ ๐๐จ๐ฆ๐ฆ๐๐ง๐๐ฌ!       |`;
`|๐น|======================================================================================================โฌก  ๐๐ซ๐๐ค๐ข๐ง๐ณ๐๐๐โข`;
