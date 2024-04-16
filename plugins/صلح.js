import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '⌯استخدم هذا الأمر مباشرة في الرقم الرئيسي للبوت'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './HinaSession/';
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    }
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '⌯لم يتم العثور على ملف يتضمن معرف الشات'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: ⌯ تم حذف ${filesDeleted} من ملفات الجلسه}, {quoted: m});
    }
  } catch (err) {
    console.error('خطأ في قراءة مجلد الجلسة أو الملفات :', err);
    await conn.sendMessage(m.chat, {text: '⌯حدث خطأ أثناء حذف ملفات الجلسة'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: ⌯لو البوت مستجبش اعمل اسبام باي امر عشان جلسه الشات تنضاف\n\n⌯ مثال : \n${usedPrefix}الاوامر\n${usedPrefix}الاوامر\n${usedPrefix}الاوامر}, {quoted: m});
};
handler.help = ['S H A D O W'];
handler.tags = ['S H A D O W'];
handler.command = /^(صلح|اصلاح)$/i;
export default handler;