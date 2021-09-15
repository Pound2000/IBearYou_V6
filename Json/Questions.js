const Questions = {
  "Question" : [
    
    {
      "questionId" : "40001",
      "detial" : "ปัญหาเรื่องเรียนกระทบต่อจิตใจเธอมากแค่ไหน",
      "choices" : [
        {"seq" : "1", "desc" : "อารมณ์ดีมาก","nextQuestionId" : "40002"},
        {"seq" : "2", "desc" : "อารมณ์ดี","nextQuestionId" : "40002"},
        {"seq" : "3", "desc" : "รู้สึกเฉยๆ","nextQuestionId" : "40002"},
        {"seq" : "4", "desc" : "ไม่ค่อยดีเลย","nextQuestionId" : "40002"},
        {"seq" : "5", "desc" : "รู้สึกเศร้า","nextQuestionId" : "40002"}
      ],
      "questionType" : "1"
    },

    {
      "questionId" : "40002",
      "detial" : "เธอกําลังรู้สึกเศร้าหรือเครียดอยู่ใช่ไหม",
      "choices" : [
        {"seq" : "1", "desc" : "ใช่","nextQuestionId" : "40003"},
        {"seq" : "2", "desc" : "ไม่ใช่","nextQuestionId" : "40003"}
      ],
      "questionType" : "1"
    },

    {
      "questionId" : "40003",
      "detial" : "ปัญหาเรื่องเรียนกระทบต่อจิตใจเธอมากแค่ไหน",
      "choices" : [
        {"seq" : "1", "desc" : "เรื่องเพื่อน","nextQuestionId" : "41001"},
        {"seq" : "2", "desc" : "เรื่องเรียน","nextQuestionId" : "42001"},
        {"seq" : "3", "desc" : "เรื่องครอบครัว","nextQuestionId" : "43001"},
        {"seq" : "4", "desc" : "เรื่องความรัก","nextQuestionId" : "44001"},
        {"seq" : "5", "desc" : "เรื่องการเงิน","nextQuestionId" : "46001"}
      ],
      "questionType" : "1"
    },

    {
      "questionId" : "41001",
      "detial" : "ปัญหาเรื่องเรียนกระทบต่อจิตใจเธอมากแค่ไหน",
      "choices" : [
        {"seq" : "1", "desc" : "มากที่สุด","nextQuestionId" : "41002"},
        {"seq" : "2", "desc" : "มาก","nextQuestionId" : "41002"},
        {"seq" : "3", "desc" : "ปานกลาง","nextQuestionId" : "41002"},
        {"seq" : "4", "desc" : "น้อย","nextQuestionId" : "41002"},
        {"seq" : "5", "desc" : "น้อยที่สุด","nextQuestionId" : "41002"}
      ],
      "questionType" : "1"
    },

    {
      "questionId" : "41002",
      "detial" : "เธออยากปรับความเข้าใจกับเพื่อนไหม",
      "choices" : [
        {"seq" : "1", "desc" : "อยากปรับความเข้าใจ","nextQuestionId" : "41003"},
        {"seq" : "2", "desc" : "ไม่อยากปรับความเข้าใจ","nextQuestionId" : "41003"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "41003",
    "detial" : "หากตอนนี้เธอรู้สึกไม่ดีอยู่ ไม่เป็นไรนะ เราจะมาข้ามผ่านอุปสรรคนี้ไปด้วยกันนะโดยน้องหมีอยากให้เธอลองทบทวนดูว่าจริงๆแล้วปัญหาที่เกิดขึ้นเกิดจากอะไร",
    "choices" : [
      {"seq" : "1", "desc" : "เกิดจากตัวเอง","nextQuestionId" : "41004"},
      {"seq" : "2", "desc" : "เกิดจากคนอื่น","nextQuestionId" : "41004"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "41004",
    "detial" : "ถ้าเธอกำลังรู้สึกผิดหรือ อยากที่จะขอโทษใครสักคนเธออยากแสดงออกทางใดมากกว่ากัน",
    "choices" : [
      {"seq" : "1", "desc" : "แสดงออกแบบทางตรง","nextQuestionId" : "41005"},
      {"seq" : "2", "desc" : "แสดงออกแบบทางอ้อม","nextQuestionId" : "41005"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "41005",
    "detial" : "เธอกล้าที่จะไปปรับความเข้าใจกับเพื่อนก่อนหรือไม่",
    "choices" : [
      {"seq" : "1", "desc" : "กล้าที่จะเข้าหาก่อน","nextQuestionId" : "41006"},
      {"seq" : "2", "desc" : "ไม่กล้าที่จะเข้าหาก่อน","nextQuestionId" : "41006"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "41006",
    "detial" : "เธอยังอยากที่จะรักษาความสัมพันธ์ของการเป็นเพื่อนอยู่ไหม",
    "choices" : [
      {"seq" : "1", "desc" : "อยากเป็นเพื่อนต่อไป","nextQuestionId" : "41007"},
      {"seq" : "2", "desc" : "ไม่อยากเป็นเพื่อนแล้ว","nextQuestionId" : "41007"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "41007",
    "detial" : "เธออยากระบายให้น้องหมีฟังไหม  พิมพ์มาได้เลย น้องหมีจะคอยรับฟังเธอเองแต่ถ้ายังไม่พร้อมสามารถกดถัดไปได้นะ",
    "nextQuestionId" : "41008",
    "questionType" : "2"
  },

  {
    "questionId" : "41008",
    "detial" : "อยากให้เธอทำใจให้สบายก่อน",
    "nextQuestionId" : "41009",
    "questionType" : "3"
  },

  {
    "questionId" : "41009",
    "detial" : "เธออาจต้องการใครสักคน ให้น้องหมีอยู่ข้างๆเธอนะ",
    "nextQuestionId" : "",
    "questionType" : "4"
  },
  {
    "questionId" : "42001",
    "detial" : "ปัญหาเรื่องเรียนกระทบต่อจิตใจเธอมากแค่ไหน",
    "choices" : [
      {"seq" : "1", "desc" : "มากที่สุด","nextQuestionId" : "42002"},
      {"seq" : "2", "desc" : "มาก","nextQuestionId" : "42002"},
      {"seq" : "3", "desc" : "ปานกลาง","nextQuestionId" : "42002"},
      {"seq" : "4", "desc" : "น้อย","nextQuestionId" : "42002"},
      {"seq" : "5", "desc" : "น้อยที่สุด","nextQuestionId" : "42002"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "42002",
    "detial" : "เธอกําลังรู้สึกท้อแท้เรื่องเรียนใช่ไหม",
    "choices" : [
      {"seq" : "1", "desc" : "ใช่ รู้สึกท้อเเท้","nextQuestionId" : "42003"},
      {"seq" : "2", "desc" : "ไม่ใช่ ไม่ได้รู้สึกท้อเเท้","nextQuestionId" : "42003"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "42003",
    "detial" : "สาเหตุมาจากอะไรกันนะ เลือกสิ่งที่ตรงกับเธอมากที่สุด",
    "choices" : [
      {"seq" : "1", "desc" : "ไม่ชอบสิ่งที่เรียนอยู่","nextQuestionId" : "42004"},
      {"seq" : "2", "desc" : "ผลลัพธ์กับความพยายามสวนทางกัน","nextQuestionId" : "42004"},
      {"seq" : "3", "desc" : "รู้สึกถึงความกดดันที่มากเกินไป","nextQuestionId" : "42004"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "42004",
    "detial" : "เธอมาลองพยายามกันอีกสักครั้งกันไหม",
    "choices" : [
      {"seq" : "1", "desc" : "อยากพยายาม","nextQuestionId" : "42005"},
      {"seq" : "2", "desc" : "ไม่ไหวแล้ว","nextQuestionId" : "42005"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "42005",
    "detial" : "เธอคิดว่าอะไรคือสิ่งที่ทำให้ไม่ชอบในการเรียน",
    "choices" : [
      {"seq" : "1", "desc" : "รู้สึกว่าตัวเองตัดสินใจผิด","nextQuestionId" : "42006"},
      {"seq" : "2", "desc" : "ไม่ได้กำหนดทางเลือกในการเรียนด้วยตัวเอง","nextQuestionId" : "42006"},
      {"seq" : "3", "desc" : "เนื้อหาที่เรียนยากเกินไป","nextQuestionId" : "42006"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "42006",
    "detial" : "ความรู้สึกกดดันที่เธอกำลังเผชิญอยู่นั้นเกิดมาจากอะไร",
    "choices" : [
      {"seq" : "1", "desc" : "กดดันตนเองมากเกินไป","nextQuestionId" : "41007"},
      {"seq" : "2", "desc" : "ได้รับความกดดันจากผู้อื่น","nextQuestionId" : "41007"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "42007",
    "detial" : "เรื่องที่เธอกังวลในใจตอนนี้ เธอสามารถพิมพ์ลงในกล่องข้อความได้นะ น้องหมีจะรับฟังอย่างตั้งใจเลย ถ้าไม่พร้อมสามารถกดถัดไปได้นะ",
    "nextQuestionId" : "41008",
    "questionType" : "2"
  },

  {
    "questionId" : "42008",
    "detial" : "เธอเก่งมากที่สุดแล้ว ความพยายามของเธอจะไม่สูญเปล่า",
    "nextQuestionId" : "42009",
    "questionType" : "3"
  },

  {
    "questionId" : "42009",
    "detial" : "ในวันที่รู้สึกไม่ไหว หยุดพักได้นะ ไม่ต้องรีบเดิน",
    "nextQuestionId" : "",
    "questionType" : "4"
  },

  {
    "questionId" : "43001",
    "detial" : "ปัญหาครอบครัวของเธอกระทบต่อจิตใจเธอแค่ไหน",
    "choices" : [
      {"seq" : "1", "desc" : "มากที่สุด","nextQuestionId" : "43002"},
      {"seq" : "2", "desc" : "มาก","nextQuestionId" : "43002"},
      {"seq" : "3", "desc" : "ปานกลาง","nextQuestionId" : "43002"},
      {"seq" : "4", "desc" : "น้อย","nextQuestionId" : "43002"},
      {"seq" : "5", "desc" : "น้อยที่สุด","nextQuestionId" : "43002"}
    ],
    "questionType" : "1"
  },
  
  {
    "questionId" : "43002",
    "detial" : "เธออยากปรับความเข้าใจกับครอบครัวไหม",
    "choices" : [
      {"seq" : "1", "desc" : "อยากปรับความเข้าใจ","nextQuestionId" : "43003"},
      {"seq" : "2", "desc" : "ไม่อยากปรับความเข้าใจ","nextQuestionId" : "43003"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "43003",
    "detial" : "หากตอนนี้เธอกำลังรู้สึกแย่ หรือไม่สบายใจ ไม่เป็นไรนะ เราจะมาข้ามผ่านช่วงเวลานี้ไปด้วยกันโดยเราอยากให้เธอลองทบทวนดูว่าจริง ๆ แล้วปัญหาที่เกิดขึ้นเกิดจากอะไร",
    "choices" : [
      {"seq" : "1", "desc" : "เกิดจากตัวเอง","nextQuestionId" : "43004"},
      {"seq" : "2", "desc" : "เกิดจากตัวเองและคนอื่น","nextQuestionId" : "43004"},
      {"seq" : "3", "desc" : "เกิดจากคนอื่น","nextQuestionId" : "43004"}
    ],
    "questionType" : "1"
  },

  {
      "questionId" : "43004",
      "detial" : "น้องหมีอยากให้เธอได้ลองเลือกวิธีที่เหมาะสมกับเธอมากที่สุด",
      "choices" : [
        {"seq" : "1", "desc" : "หาเวลาพูดคุยกับครอบครัวแบบพร้อมหน้าพร้อมตา","nextQuestionId" : "43005"},
        {"seq" : "2", "desc" : "ลองแสดงออกทางการกระทำ","nextQuestionId" : "43005"},
        {"seq" : "3", "desc" : "รอให้เธอและอีกฝ่ายอารมณ์เย็นลงก่อน","nextQuestionId" : "43005"},
        {"seq" : "4", "desc" : "ลองเป็นฝ่ายที่เข้าไปพูดคุยกับครอบครัวก่อน","nextQuestionId" : "43005"}
      ],
      "questionType" : "1"
  },

  {
    "questionId" : "43005",
    "detial" : "เธอคิดว่าเธอต้องการคนช่วยในการไกล่เกลี่ยปัญหานี้ไหม",
    "choices" : [
      {"seq" : "1", "desc" : "ต้องการคนไกล่เกลี่ย","nextQuestionId" : "43006"},
      {"seq" : "2", "desc" : "ไม่ต้องการคนไกล่เกลี่ย","nextQuestionId" : "43006"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "43006",
    "detial" : "ถ้าเธออยากปรับความเข้าใจกับครอบครัว เธอจะแสดงออกทางใด",
    "choices" : [
      {"seq" : "1", "desc" : "แสดงออกว่าอยากปรับความเข้าใจทางตรง","nextQuestionId" : "43007"},
      {"seq" : "2", "desc" : "แสดงออกว่าอยากปรับความเข้าใจทางอ้อม","nextQuestionId" : "43007"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "43007",
    "detial" : "เธออยากระบายความทุกข์ในใจ ให้น้องหมีฟังไหม พิมพ์มาได้เลยนะน้องหมีจะคอยรับฟังเธอเอง แต่ถ้ายังไม่อยากระบายกดถัดไปได้นะ",
    "nextQuestionId" : "43008",
    "questionType" : "2"
  },

  {
    "questionId" : "43008",
    "detial" : "ตอนนี้คุณกำลังหมดกำลังใจในการแก้ปัญหาต่างๆอยู่รึเปล่านะ",
    "nextQuestionId" : "43009",
    "questionType" : "3"
  },

  {
    "questionId" : "43009",
    "detial" : "แต่น้องหมีพกกำลังใจมาให้คุณเต็มเลย",
    "nextQuestionId" : "",
    "questionType" : "4"
  },
 
  {
    "questionId" : "44001",
    "detial" : "ตอนนี้เธอกําลังอยู่ในสถานะไหน",
    "choices" : [
      {"seq" : "1", "desc" : "โสด","nextQuestionId" : "45001"},
      {"seq" : "2", "desc" : "มีแฟน","nextQuestionId" : "45009"},
      {"seq" : "3", "desc" : "คนคุย","nextQuestionId" : "45017"},
      {"seq" : "4", "desc" : "มือที่ 3","nextQuestionId" : "45025"}
    ],
    "questionType" : "1"

  },

  {
    "questionId" : "45001",
    "detial" : "สาเหตุอะไรที่ทําให้เธอรู้สึกกังวลใจ",
    "choices" : [
      {"seq" : "1", "desc" : "กลัวการมีความรัก กลัวการเริ่มต้นใหม่ ไม่กล้าเปิดใจ","nextQuestionId" : "45002"},
      {"seq" : "2", "desc" : "เหงา โสดนานเกินไป","nextQuestionId" : "45002"},
      {"seq" : "3", "desc" : "คิดถึงแฟนเก่า / move on ไม่","nextQuestionId" : "45002"}
    ],
    "questionType" : "1"
  },
  
  {
    "questionId" : "45002",
    "detial" : "เธอพอใจกับความรู้สึกในตอนนี้หรือไม่",
    "choices" : [
      {"seq" : "1", "desc" : "พอใจ","nextQuestionId" : "45003"},
      {"seq" : "2", "desc" : "ไม่พอใจ","nextQuestionId" : "45003"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45003",
    "detial" : "สาเหตุอะไรที่ทำให้เธอรู้สึกกลัวการมีความรักครั้งใหม่",
    "choices" : [
      {"seq" : "1", "desc" : "ไม่อยากผูกมัดกับใคร","nextQuestionId" : "45004"},
      {"seq" : "2", "desc" : "ยังเจ็บจากรักเก่า","nextQuestionId" : "45004"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45004",
    "detial" : "เธออยากมีใครสักคนมาเป็นคนพิเศษในชีวิตใช่ไหม",
    "choices" : [
      {"seq" : "1", "desc" : "ใช่","nextQuestionId" : "45005"},
      {"seq" : "2", "desc" : "ไม่ใช่","nextQuestionId" : "45005"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45005",
    "detial" : "ถ้าตอนนี้เธอกำลังตกหลุมรักใครสักคนหนึ่งอยู่ หากวันนึงเขาจากไปเพราะเราไม่ได้ผูกมัดกัน เธอจะยอมรับได้หรือไม่",
    "choices" : [
      {"seq" : "1", "desc" : "ยอมรับได้","nextQuestionId" : "45006"},
      {"seq" : "2", "desc" : "ยอมรับไม่ได้","nextQuestionId" : "45006"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45006",
    "detial" : "เธอมีอะไรที่อยากจะบอกกับตัวเองในวันนี้ไหม พิมพ์สิ่งที่เธออยากบอกกับตัวเองในกล่องข้อความได้เลย แต่ถ้ายังไม่อยากบอกกดถัดไปได้เลยนะ",
    "nextQuestionId" : "45007",
    "questionType" : "2"
  },

  {
    "questionId" : "45007",
    "detial" : "วันนึงที่เธอพร้อมจะเปิดใจ สิ่งดี ๆ ก็จะเข้ามาหาเธอเอง",
    "nextQuestionId" : "45008",
    "questionType" : "3"
  },

  {
    "questionId" : "45008",
    "detial" : "ต่อจากนี้ให้น้องหมีได้ช่วยเยียวยาจิตใจของเธอนะ",
    "nextQuestionId" : "",
    "questionType" : "4"
  },
 
  {
    "questionId" : "45009",
    "detial" : "เธอพอใจในความสัมพันธ์ของเธอในตอนนี้หรือไม่",
    "choices" : [
      {"seq" : "1", "desc" : "พอใจ","nextQuestionId" : "45010"},
      {"seq" : "2", "desc" : "ไม่พอใจ","nextQuestionId" : "45010"}
    ],
    "questionType" : "1"
  },
  
  {
    "questionId" : "45010",
    "detial" : "อาทิตย์ที่ผ่านมาเธอทะเลาะกับแฟนบ่อยแค่ไหน",
    "choices" : [
      {"seq" : "1", "desc" : "ทะเลาะกันบ่อยมาก","nextQuestionId" : "45011"},
      {"seq" : "2", "desc" : "ทะเลาะกันปานกลาง","nextQuestionId" : "45011"},
      {"seq" : "2", "desc" : "ทะเลาะค่อนข้างน้อย","nextQuestionId" : "45011"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45011",
    "detial" : "เธอได้เปิดใจพูดคุยถึงปัญหากันหรือยัง",
    "choices" : [
      {"seq" : "1", "desc" : "ได้ลองเปิดใจคุยกันแล้ว","nextQuestionId" : "45012"},
      {"seq" : "2", "desc" : "ยังไม่เคยลองเปิดใจคุยกันเลย","nextQuestionId" : "45012"}
    ],
    "questionType" : "1"
  },
  
  {
    "questionId" : "45012",
    "detial" : "บอกได้ไหมว่า แฟนของเธอมีข้อดีหรือข้อเสียมากกว่ากัน",
    "choices" : [
      {"seq" : "1", "desc" : "แฟนของเธอมีข้อดีมากกว่า","nextQuestionId" : "45013"},
      {"seq" : "2", "desc" : "แฟนของเธอมีข้อเสียมากกว่า","nextQuestionId" : "45013"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45013",
    "detial" : "ลองทบทวนตัวเองว่าความรักครั้งนี้คุณยังอยากจับมือกันและพยายามต่อหรือไม่",
    "choices" : [
      {"seq" : "1", "desc" : "ยังอยากพยายามต่อกับความรัก","nextQuestionId" : "45014"},
      {"seq" : "2", "desc" : "รู้สึกเหนื่อย ไม่อยากพยายามแล้ว","nextQuestionId" : "45014"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45014",
    "detial" : "เธอมีอะไรที่อยากจะบอกกับตัวเองในวันนี้ไหม พิมพ์สิ่งที่เธออยากบอกกับตัวเองในกล่องข้อความได้เลย แต่ถ้ายังไม่อยากบอกกดถัดไปได้เลยนะ",
    "nextQuestionId" : "45015",
    "questionType" : "2"
  },

  {
    "questionId" : "45015",
    "detial" : "เธออาจจะต้องใช้เวลาในการทบทวนสิ่งต่างๆที่ผ่านมานะ",
    "nextQuestionId" : "45016",
    "questionType" : "3"
  },

  {
    "questionId" : "45016",
    "detial" : "หากวันไหนที่เธอไม่สบายใจ สามารถมาคุยกับน้องหมีได้เสมอนะ",
    "nextQuestionId" : "",
    "questionType" : "4"
  },

  {
    "questionId" : "45017",
    "detial" : "เธออยู่ในสถานะคนคุยมานานแค่ไหน",
    "choices" : [
      {"seq" : "1", "desc" : "เพิ่งเริ่มคุยได้ไม่นาน","nextQuestionId" : "45018"},
      {"seq" : "2", "desc" : "คุยมาสักพักแต่ไม่นานมาก","nextQuestionId" : "45018"},
      {"seq" : "3", "desc" : "คุยมานานมาก","nextQuestionId" : "45018"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45018",
    "detial" : "เธอกับเข้ากันได้ดีกับอีกฝ่ายมากแค่ไหน",
    "choices" : [
      {"seq" : "1", "desc" : "เข้ากันได้ดีมาก","nextQuestionId" : "45019"},
      {"seq" : "2", "desc" : "เข้ากันได้บ้าง","nextQuestionId" : "45019"},
      {"seq" : "3", "desc" : "เข้ากันไม่ได้เลย","nextQuestionId" : "45019"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45019",
    "detial" : "ความสัมพันธ์ของเธอตอนนี้อีกฝ่ายมีความชัดเจนหรือไม่",
    "choices" : [
      {"seq" : "1", "desc" : "ความสัมพันธ์ชัดเจน","nextQuestionId" : "45020"},
      {"seq" : "2", "desc" : "ความสัมพันธ์ที่ไม่ชัดเจน","nextQuestionId" : "45020"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45020",
    "detial" : "เธออยากคุยและพัฒนาความสัมพันธ์ต่อกับคนนี้ไหม",
    "choices" : [
      {"seq" : "1", "desc" : "อยากความสัมพันธ์ต่อไป","nextQuestionId" : "45021"},
      {"seq" : "2", "desc" : "ไม่อยากความสัมพันธ์ต่อ","nextQuestionId" : "45021"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45021",
    "detial" : "เขาปฏิบัติกับเธอเป็นคนพิเศษหรือทำแบบนี้กับเหมือนคนทั่วไป",
    "choices" : [
      {"seq" : "1", "desc" : "เขาปฎิบัติกับเราเหมือนคนพิเศษ","nextQuestionId" : "45022"},
      {"seq" : "2", "desc" : "เขาปฎิบัติกับเราเหมือนคนทั่วไป","nextQuestionId" : "45022"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45022",
    "detial" : "เธอมีอะไรที่อยากจะบอกกับตัวเองในวันนี้ไหม พิมพ์สิ่งที่เธออยากบอกกับตัวเองในกล่องข้อความได้เลย แต่ถ้ายังไม่อยากบอกกดถัดไปได้เลยนะ",
    "nextQuestionId" : "45023",
    "questionType" : "2"
  },

  {
    "questionId" : "45023",
    "detial" : "เหนื่อยมั้ย พักสักหน่อยได้นะ",
    "nextQuestionId" : "45024",
    "questionType" : "3"
  },

  {
    "questionId" : "45024",
    "detial" : "เธอเหมาะสมกับการได้รับความรัก",
    "nextQuestionId" : "",
    "questionType" : "4"
  },

  {
    "questionId" : "45025",
    "detial" : "เธอพอใจในความสัมพันธ์ในตอนนี้หรือไม่",
    "choices" : [
      {"seq" : "1", "desc" : "พอใจ","nextQuestionId" : "45026"},
      {"seq" : "2", "desc" : "ไม่พอใจ","nextQuestionId" : "45026"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45026",
    "detial" : "เธอรู้หรือไม่ว่าคนที่คุณรักตอนนี้เขามีเจ้าของแล้ว",
    "choices" : [
      {"seq" : "1", "desc" : "รู้ตั้งแต่แรก","nextQuestionId" : "45027"},
      {"seq" : "2", "desc" : "รู้เมื่อได้คุยมาสักพัก","nextQuestionId" : "45027"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45027",
    "detial" : "เธอรู้ได้อย่างไรว่าเขามีเจ้าของ",
    "choices" : [
      {"seq" : "1", "desc" : "เขามาบอก","nextQuestionId" : "45028"},
      {"seq" : "2", "desc" : "รู้ด้วยตัวเอง","nextQuestionId" : "45028"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45028",
    "detial" : "เธอคิดว่าเขาจริงใจกับเธอแค่ไหน",
    "choices" : [
      {"seq" : "1", "desc" : "100%","nextQuestionId" : "45029"},
      {"seq" : "2", "desc" : "75%","nextQuestionId" : "45029"},
      {"seq" : "3", "desc" : "50%","nextQuestionId" : "45029"},
      {"seq" : "2", "desc" : "25%","nextQuestionId" : "45029"},
      {"seq" : "3", "desc" : "ไม่มีความจริงใจ","nextQuestionId" : "45029"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45029",
    "detial" : "ถ้ามีโอกาสได้พัฒนาความสัมพันธ์จนเป็นแฟนกัน เธอคิดว่าเขาจะนอกใจหรือไม่",
    "choices" : [
      {"seq" : "1", "desc" : "นอกใจแน่นอน","nextQuestionId" : "45030"},
      {"seq" : "2", "desc" : "ไม่นอกใจ เชื่อมั่นในตัวเขา","nextQuestionId" : "45030"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "45030",
    "detial" : "เธอมีอะไรที่อยากจะบอกกับตัวเองในวันนี้ไหมพิมพ์สิ่งที่เธออยากบอกกับตัวเองในกล่องข้อความได้เลย แต่ถ้าไม่มีสามารถกดถัดไปได้เลยนะ",
    "nextQuestionId" : "45031",
    "questionType" : "2"
  },

  {
    "questionId" : "45031",
    "detial" : "ยังมีคนดี ๆ ที่รอให้เราไปเจออีกเยอะ",
    "nextQuestionId" : "46009",
    "questionType" : "3"
  },

  {
    "questionId" : "45032",
    "detial" : "ความรักที่ดี จะไม่ทำให้เรานั้นทุกข์ใจมากกว่ามีความสุข ",
    "nextQuestionId" : "",
    "questionType" : "4"
  },

  {
    "questionId" : "46001",
    "detial" : "ตอนนี้ปัญหาเรื่องการเงินของเธอกระทบต่อจิตใจเธอแค่ไหน",
    "choices" : [
      {"seq" : "1", "desc" : "มากที่สุด","nextQuestionId" : "46002"},
      {"seq" : "2", "desc" : "มาก","nextQuestionId" : "46002"},
      {"seq" : "3", "desc" : "ปานกลาง","nextQuestionId" : "46002"},
      {"seq" : "4", "desc" : "น้อย","nextQuestionId" : "46002"},
      {"seq" : "5", "desc" : "น้อยที่สุด","nextQuestionId" : "46002"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "46002",
    "detial" : "หากตอนนี้เธอกำลังรู้สึกกังวลใจ ไม่ต้องกลัวไปนะ เรามาข้ามผ่านอุปสรรคนี้ไปด้วยกัน โดยน้องหมีอยากนำเสนอรูปแบบเหล่านี้มาให้เธอได้ลองเลือก",
    "choices" : [
      {"seq" : "1", "desc" : "ลองจัดลำดับความสำคัญของหนี้กัน","nextQuestionId" : "46003"},
      {"seq" : "2", "desc" : "มาลองวางแผนการใช้เงินกัน","nextQuestionId" : "46003"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "46003",
    "detial" : "ถ้าให้เธอลองวางแผนจัดระเบียบหนี้เธอพอจะนึกออกกันไหม",
    "choices" : [
      {"seq" : "1", "desc" : "คิดออกๆ","nextQuestionId" : "46004"},
      {"seq" : "2", "desc" : "ยังไม่เข้าใจเท่าไหร่","nextQuestionId" : "46004"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "46004",
    "detial" : "เธอมองว่ารูปแบบใดที่เธอสามารถพอที่จะทำให้หนี้ลดลงไปได้",
    "choices" : [
      {"seq" : "1", "desc" : "ยืม/กู้เงินจากคนอื่นมาโปะหนี้","nextQuestionId" : "46005"},
      {"seq" : "2", "desc" : "ขายสินทรัพย์ที่ตนเองมีอยู่","nextQuestionId" : "46005"},
      {"seq" : "3", "desc" : "ขายสินทรัพย์ที่ตนเองมีอยู่","nextQuestionId" : "46005"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "46005",
    "detial" : "เธอคิดว่าการยืม/กู้เงินเพื่อมาโปะหนี้",
    "choices" : [
      {"seq" : "1", "desc" : "ข้อดีมากกว่า","nextQuestionId" : "46006"},
      {"seq" : "2", "desc" : "ข้อเสียมากกว่า","nextQuestionId" : "46006"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "46006",
    "detial" : "น้องหมีอยากให้เธอทำใจให้สบาย และลองคิดว่ามีวิธีใดที่จะช่วยทำให้ตัดสินใจขายได้ง่ายขึ้น",
    "choices" : [
      {"seq" : "1", "desc" : "เช็คว่ามีทรัพย์สินใดที่จะนำมาขายได้บ้าง","nextQuestionId" : "46007"},
      {"seq" : "2", "desc" : "ดูว่าทรัพย์สินใดจำเป็นหรือไม่จำเป็นกับเราบ้าง","nextQuestionId" : "46007"},
      {"seq" : "2", "desc" : "ทำทั้ง 2 วิธีข้างต้น","nextQuestionId" : "46007"}
    ],
    "questionType" : "1"
  },

  {
    "questionId" : "46007",
    "detial" : "เธอมีอะไรที่อยากจะบอกกับตัวเองในวันนี้ไหมพิมพ์สิ่งที่เธออยากบอกกับตัวเองในกล่องข้อความได้เลย แต่ถ้าไม่มีสามารถกดถัดไปได้เลยนะ",
    "nextQuestionId" : "46008",
    "questionType" : "2"
  },

  {
    "questionId" : "46008",
    "detial" : "อาจจะใช้เวลาสักหน่อยนะ อย่าเพิ่งท้อน้าาา",
    "nextQuestionId" : "46009",
    "questionType" : "3"
  },

  {
    "questionId" : "46009",
    "detial" : "น้องหมีเชื่อมั่นในตัวเธอเสมอ ",
    "nextQuestionId" : "",
    "questionType" : "3"
  }
  ]
}
export default Questions