let handler = m => m; 
 handler.all = async function (m) { 

   let chat = global.db.data.chats[m.chat]; 
   let responses; 
   if (/^هلا$/i.test(m.text)) { 
     responses = [ 
 '*هلا بيك يعمري 😩❤‍🔥*'  
     ]; 
} else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
     responses = [ 
       '*♥🐥وعليكم السلام*',  
     ]; 
   }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
'*بوت توجي تحت امرك*'
     ]; 
 }else if (/^توجي عمك|فونيكس عمك|عبد الرحمن عمك$/i.test(m.text)) { 
     responses = [ 
'*انا المشطشط اككيد😩❤‍🔥*'
     ]; 
   }else if (/^توجي$/i.test(m.text)) { 
     responses = [ 
'*عاوز ايه يا الي معاملني خدام عندك🏌🏻‍♂💔*'
   ]; 
   }else if (/^خدتك عليه$/i.test(m.text)) { 
     responses = [ 
'*عقبال لما ناخدك عليه🥺💔*',
'*ادز🙂❤️*',
'*يلعن ابو بيضك يا اخي 😂*',
]; 
   }else if (/^توجي تكرهني؟$/i.test(m.text)) { 
     responses = [ 
'*مين الي مزعلك وانا افشخهولك اكيد مش هكرهك*',
'*لو انتا شاذ اكرهك 😂✨*',
'*اعشقك يا قلبي بس بطل بضينه في الجروب 🙂*',   ]; 

     }else if (/^هاي|هالو$/i.test(m.text)) { 
     responses = [ 
       '*هالو🌚♥*',  

     ]; 
}else if (/^بحبك/i.test(m.text)) { 
     responses = [ 
       '*بحبك اكتر🌚❤*',  

     ]; 
   }else if (/^هوتاو من وين انت؟$/i.test(m.text)) { 
     responses = [ 
'❤🇪🇬مصر'
     ]; 
   } else if (/^احبك$/i.test(m.text)) { 
     responses = [ 
'*مـي تو 🙂🫀*'
     ]; 
     }else if (/^عامل ايه|عامل اي|عامل اية$/i.test(m.text)) { 
     responses = [ 
       ' الحمدالله احسن منك يا زنجي ❤️',  

     ];
     }else if (/^تحبني$/i.test(m.text)) { 
     responses = [ 
       '🌚♥اكيد',  

     ];
     }else if (/^هاي$/i.test(m.text)) { 
     responses = [ 
       'هاي',  

     ];
     }else if (/^❤|♥$/i.test(m.text)) { 
     responses = [ 
       '*اعشقق♥*',  

     ];
     }else if (/^اهلا$/i.test(m.text)) { 
     responses = [ 
       '*اهلا♥*',  

     ]; 
     }else if (/^مساء|مساء$/i.test(m.text)) { 
     responses = [ 
       'مساء الخير',  

     ];
     }else if (/^صباح|صباح$/ .test(m.text)) { 
     responses = [ 
       '*صباح الورد♥*',  
     ];
       }else if (/^اوامر$/i.test(m.text)) { 
     responses = [ 
       '*لا تنسى ال .*',  
     ];
            }else if (/^بوت بقولك$/i.test(m.text)) { 
     responses = [ 
       '*تحت امرك حبي*',  
     ];
            }else if (/^مرحبا$/i.test(m.text)) { 
     responses = [ 
       '*مرحبا♥*',  
     ];

     }else if (/^توجي$/i.test(m.text)) { 
       responses = [ 
         'عمك',  

         ];

     }else if (/^احا$/i.test(m.text)) { 
     responses = [ 
       'افتحها في الحوض واسوحها متتكررهاش يا عبيط😉',  
     ];

     }else if (/^اه$/i.test(m.text)) { 
     responses = [ 
       'الشارع الي وراه هعملك محضر ابن فاجرة لو مش عاوز قول لي فونيكس',  
     ];

     }else if (/^بوت$/i.test(m.text)) { 
     responses = [ 
       'اسمي توجي يا زنجي',  
     ];

     }else if (/^جميل$/i.test(m.text)) { 
     responses = [ 
       'انت اجمل♥',  
     ];

     }else if (/^بحبك يا بوت$/i.test(m.text)) { 
     responses = [ 
       'احا حبك برص انا مش شاذ😞',  
     ];

      }else if (/^اخرس$/i.test(m.text)) { 
       responses = [ 
         'طيزك',  
       ];

      }else if (/^فاجر$/i.test(m.text)) { 
     responses = [ 
       'قلب اخوك 😂🔥✨',  
     ];

     }else if (/^مين مطورك$/i.test(m.text)) { 
      responses = [ 
        'عمك وعم عيالك عبده رقمه 01154261845',  
      ];

     }else if (/^متيجي$/i.test(m.text)) { 
     responses = [ 
       'لا',  
     ];

       }else if (/^البوت$/i.test(m.text)) { 
      responses = [ 
        'تحت امرك حبي',  
      ];

       }else if (/^اه$/i.test(m.text)) { 
      responses = [ 
        'وجع ولا دلع',  
      ];

      }else if (/^توجي$/i.test(m.text)) { 
         responses = [ 
      '*نعم*',
      '*ايه*',
      '*متخلص*',
     '*عايز اي يا زفت*',
      ]; 

       }else if (/^.$/i.test(m.text)) { 
      responses = [ 
        'تحت امرك حبي',  
      ];

       }else if (/^مين عمك$/i.test(m.text)) { 
      responses = [ 
        'انا عم نفسي يباشا ده انا ابن بيه',  
      ];

     }else if (/^المطرشم$/i.test(m.text)) { 
     responses = [ 
       'انا',  
     ];

     }else if (/^حبيبي$/i.test(m.text)) { 
      responses = [ 
        '*حب الناس حلو بس انتا زنجي كده كده*',  
      ];

     }else if (/^تست$/i.test(m.text)) { 
      responses = [ 
        '*شغال وربنا متخلينيش اكفر*',  
      ];

     }else if (/^عبد الرحمن$/i.test(m.text)) { 
      responses = [ 
        '*مش موجود البوت الي بيتكلم المهم فكك من عبده ده وخليك معايا امي عامله محشي اكل ولا اجيب سوري*',  
      ];

     }else if (/^حلو$/i.test(m.text)) { 
     responses = [ 
       '*فاجر*',  
     ];

     }else if (/^ااا$/i.test(m.text)) { 
      responses = [ 
        '*يلعن ابو ام دي شغلانة يا جدع *',  
      ];

     }else if (/^هات السورس$/i.test(m.text)) { 
     responses = [ 
       '*عند امك*',  
     ];

     }else if (/^كسمك$/i.test(m.text)) { 
     responses = [ 
       '*عيب يا طفل*',  
     ];
   }
   if (responses) { 
     let randomIndex = Math.floor(Math.random() * responses.length); 
     conn.reply(m.chat, responses[randomIndex], m); 
   } 
   return !0 
 }; 

 export default handler;
