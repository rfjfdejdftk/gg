import fg from 'api-dylux' 
import { tiktokdl, tiktokdlv2, tiktokdlv3 } from '@bochilteam/scraper'

let handler = async (m, { conn, text, args, usedPrefix, command}) => {
  if (!args[0]) throw أين هو رابط فيديو التكتوك الذي تود تحميله\n\n📌 مثال :\n${usedPrefix + command} https://vm.tiktok.com/ZMNqyusVD/?k=1
  if (!args[0].match(/tiktok/gi)) throw ❎ تأكد من أن الرابط هو من تطبيق تيك توك

  try {
    let p = await fg.tiktok(args[0]) 
    let te = `
┌─⊷ تـيـك تـوك
💌 الاســم: ${p.unique_id}
🍄 وصـف: ${p.title}
🌐 الوقت: ${p.duration}
└───────────ـ`
    conn.sendFile(m.chat, p.play, 'tiktok.mp4', te, m)
  } catch {  	
    const { author: { nickname }, video, description } = await tiktokdl(args[0])
      .catch(async _ => await tiktokdlv2(args[0]))
      .catch(async _ => await tiktokdlv3(args[0]))
    const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd
    if (!url) throw '❎ خطأ في تحميل الفيديو '
    conn.sendFile(m.chat, url, 'fb.mp4', `
┌─⊷ TIKTOK DL
▢ الاسم: ${nickname} ${description ? \n▢ *الوصف:* ${description} : ''}
└───────────`, m)
  } 
}  

handler.help = ['tiktok']
handler.tags = ['dl']
handler.command = /^(tiktok|تيكتوك|تيك|tiktoknowm)$/i
handler.diamond = false

export default handler