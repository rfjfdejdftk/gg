let handler = async (m, { conn, usedPrefix: _p, args, text, usedPrefix }) => {
  if (!m.quoted) throw 'يرجى الرد على الرسالة التي ترغب في وضع رد فعل عليها';
  if (!text || text.length > 1) throw 'يرجى تحديد رمز تعبيري واحد فقط';
  conn.relayMessage(m.chat, {
      reactionMessage: {
          key: {
              id: m.quoted.id,
              remoteJid: m.chat,
              fromMe: true
          },
          text: ${text}
      }
  }, { messageId: m.id });
};

handler.help = ['react <emoji>'];
handler.tags = ['tools'];
handler.command = /^(تفاعل|ريكت)$/i;

export default handler;