const vocabulary = [
  {
    japanese: "アフリカ",
    translations: {
      english: "Africa",
      chinese: "非洲",
      korean: "아프리카",
      vietnamese: "Châu Phi",
      thai: "แอฟริกา"
    }
  },
  {
    japanese: "上がる",
    translations: {
      english: "to rise",
      chinese: "上升；升起",
      korean: "오르다; 올라가다",
      vietnamese: "lên; tăng lên",
      thai: "ขึ้น; เพิ่มขึ้น"
    }
  },
  {
    japanese: "挨拶",
    translations: {
      english: "to greet; greeting",
      chinese: "打招呼；问候",
      korean: "인사하다; 인사",
      vietnamese: "chào hỏi; lời chào",
      thai: "ทักทาย; การทักทาย"
    }
  },
  {
    japanese: "味",
    translations: {
      english: "flavor; taste; uniqueness; attractiveness; experience",
      chinese: "味道；滋味；特色",
      korean: "맛; 풍미; 특색",
      vietnamese: "vị; hương vị; đặc sắc",
      thai: "รส; รสชาติ; เอกลักษณ์"
    }
  },
  {
    japanese: "アジア",
    translations: {
      english: "Asia",
      chinese: "亚洲",
      korean: "아시아",
      vietnamese: "Châu Á",
      thai: "เอเชีย"
    }
  },
  {
    japanese: "赤ちゃん",
    translations: {
      english: "baby; infant",
      chinese: "婴儿；宝宝",
      korean: "아기; 유아",
      vietnamese: "em bé; trẻ sơ sinh",
      thai: "ทารก; เด็กเล็ก"
    }
  },
  {
    japanese: "赤ん坊",
    translations: {
      english: "baby; infant",
      chinese: "婴儿；婴孩",
      korean: "아기; 갓난아기",
      vietnamese: "em bé; trẻ sơ sinh",
      thai: "ทารก; เด็กทารก"
    }
  },
  {
    japanese: "アクセサリー",
    translations: {
      english: "accessory",
      chinese: "饰品；配件",
      korean: "액세서리; 장신구",
      vietnamese: "phụ kiện; đồ trang sức",
      thai: "เครื่องประดับ; อุปกรณ์เสริม"
    }
  },
  {
    japanese: "アメリカ",
    translations: {
      english: "America",
      chinese: "美国",
      korean: "미국",
      vietnamese: "Mỹ; Hoa Kỳ",
      thai: "อเมริกา"
    }
  },
  {
    japanese: "アナウンサー",
    translations: {
      english: "announcer",
      chinese: "播音员；主播",
      korean: "아나운서; 방송인",
      vietnamese: "người dẫn chương trình; phát thanh viên",
      thai: "นักข่าว; ผู้ประกาศ"
    }
  },
  {
    japanese: "あんな",
    translations: {
      english: "such; that kind of",
      chinese: "那样的；那种",
      korean: "그런; 저런",
      vietnamese: "như thế; loại đó",
      thai: "แบบนั้น; อย่างนั้น"
    }
  },
  {
    japanese: "案内",
    translations: {
      english: "to guide; guidance; information",
      chinese: "向导；指引；案内",
      korean: "안내하다; 안내",
      vietnamese: "hướng dẫn; chỉ dẫn",
      thai: "แนะนำ; ชี้แนะ"
    }
  },
  {
    japanese: "安心",
    translations: {
      english: "peace of mind; relief",
      chinese: "安心；放心",
      korean: "안심; 마음의 평화",
      vietnamese: "yên tâm; an tâm",
      thai: "สบายใจ; วางใจ"
    }
  },
  {
    japanese: "安全",
    translations: {
      english: "safety; security",
      chinese: "安全；安保",
      korean: "안전; 보안",
      vietnamese: "an toàn; bảo mật",
      thai: "ปลอดภัย; ความปลอดภัย"
    }
  },
  {
    japanese: "アルバイト",
    translations: {
      english: "part-time job",
      chinese: "打工；兼职",
      korean: "아르바이트; 파트타임",
      vietnamese: "làm thêm; công việc bán thời gian",
      thai: "งานพาร์ทไทม์; งานเสริม"
    }
  },
  {
    japanese: "アルコール",
    translations: {
      english: "alcohol",
      chinese: "酒精；酒类",
      korean: "알코올; 술",
      vietnamese: "rượu; cồn",
      thai: "แอลกอฮอล์; เหล้า"
    }
  },
  {
    japanese: "浅い",
    translations: {
      english: "shallow",
      chinese: "浅的；肤浅的",
      korean: "얕다; 피상적이다",
      vietnamese: "nông; hời hợt",
      thai: "ตื้น; ผิวเผิน"
    }
  },
  {
    japanese: "遊び",
    translations: {
      english: "playing; play; game",
      chinese: "游戏；玩耍",
      korean: "놀이; 게임",
      vietnamese: "chơi; trò chơi",
      thai: "การเล่น; เกม"
    }
  },
  {
    japanese: "集まる",
    translations: {
      english: "to gather; to collect; to assemble",
      chinese: "聚集；集合",
      korean: "모이다; 집합하다",
      vietnamese: "tập hợp; họp mặt",
      thai: "รวมตัว; รวมกัน"
    }
  },
  {
    japanese: "集める",
    translations: {
      english: "to collect; to assemble; to gather",
      chinese: "收集；搜集",
      korean: "모으다; 수집하다",
      vietnamese: "thu thập; sưu tập",
      thai: "เก็บรวบรวม; สะสม"
    }
  },
  {
    japanese: "謝る",
    translations: {
      english: "to apologize",
      chinese: "道歉；谢罪",
      korean: "사과하다; 미안해하다",
      vietnamese: "xin lỗi; tạ lỗi",
      thai: "ขอโทษ; กราบขอโทษ"
    }
  },
  {
    japanese: "倍",
    translations: {
      english: "double; times",
      chinese: "倍；双倍",
      korean: "배; 두 배",
      vietnamese: "gấp đôi; lần",
      thai: "เท่า; สองเท่า"
    }
  },
  {
    japanese: "番組",
    translations: {
      english: "program (e.g. TV)",
      chinese: "节目；程序",
      korean: "프로그램; 방송",
      vietnamese: "chương trình",
      thai: "รายการ; โปรแกรม"
    }
  },
  {
    japanese: "場所",
    translations: {
      english: "place; location",
      chinese: "地方；场所",
      korean: "장소; 곳",
      vietnamese: "nơi; địa điểm",
      thai: "สถานที่; ที่"
    }
  },
  {
    japanese: "ベル",
    translations: {
      english: "bell",
      chinese: "铃；钟",
      korean: "벨; 종",
      vietnamese: "chuông; cồng",
      thai: "กระดิ่ง; ระฆัง"
    }
  },
  {
    japanese: "美術館",
    translations: {
      english: "art gallery; art museum",
      chinese: "美术馆；艺术馆",
      korean: "미술관; 예술관",
      vietnamese: "bảo tàng mỹ thuật; phòng tranh",
      thai: "พิพิธภัณฑ์ศิลปะ; หอศิลป์"
    }
  },
  {
    japanese: "びっくり",
    translations: {
      english: "to be surprised; surprised",
      chinese: "吃惊；惊讶",
      korean: "놀라다; 깜짝",
      vietnamese: "ngạc nhiên; bất ngờ",
      thai: "ตกใจ; แปลกใจ"
    }
  },
  {
    japanese: "ビル",
    translations: {
      english: "building",
      chinese: "大楼；建筑物",
      korean: "빌딩; 건물",
      vietnamese: "tòa nhà; cao ốc",
      thai: "อาคาร; ตึก"
    }
  },
  {
    japanese: "僕",
    translations: {
      english: "I (used by males)",
      chinese: "我（男性用）",
      korean: "나 (남성이 사용)",
      vietnamese: "tôi (nam giới dùng)",
      thai: "ผม; กู (ผู้ชายใช้)"
    }
  },
  {
    japanese: "貿易",
    translations: {
      english: "trade; commerce",
      chinese: "贸易；商业",
      korean: "무역; 교역",
      vietnamese: "thương mại; buôn bán",
      thai: "การค้า; พาณิชย์"
    }
  },
  {
    japanese: "部長",
    translations: {
      english: "manager; head (chief, director) of a section or department",
      chinese: "部长；科长",
      korean: "부장; 부서장",
      vietnamese: "trưởng phòng; giám đốc bộ phận",
      thai: "หัวหน้าแผนก; ผู้จัดการฝ่าย"
    }
  },
  {
    japanese: "ぶどう",
    translations: {
      english: "grapes",
      chinese: "葡萄",
      korean: "포도",
      vietnamese: "nho",
      thai: "องุ่น"
    }
  },
  {
    japanese: "文学",
    translations: {
      english: "literature",
      chinese: "文学",
      korean: "문학",
      vietnamese: "văn học",
      thai: "วรรณคดี; วรรณกรรม"
    }
  },
  {
    japanese: "文化",
    translations: {
      english: "culture",
      chinese: "文化",
      korean: "문화",
      vietnamese: "văn hóa",
      thai: "วัฒนธรรม"
    }
  },
  {
    japanese: "文法",
    translations: {
      english: "grammar",
      chinese: "语法；文法",
      korean: "문법",
      vietnamese: "ngữ pháp",
      thai: "ไวยากรณ์"
    }
  },
  {
    japanese: "ちゃん",
    translations: {
      english: "suffix for familiar female person",
      chinese: "亲昵称呼后缀（女性）",
      korean: "친근한 여성 호칭 접미사",
      vietnamese: "hậu tố thân mật cho phụ nữ",
      thai: "คำต่อท้ายสำหรับผู้หญิงที่สนิท"
    }
  },
  {
    japanese: "チェック",
    translations: {
      english: "to check; check",
      chinese: "检查；核对",
      korean: "체크하다; 확인하다",
      vietnamese: "kiểm tra; xem xét",
      thai: "ตรวจสอบ; เช็ค"
    }
  },
  {
    japanese: "血",
    translations: {
      english: "blood",
      chinese: "血；血液",
      korean: "피; 혈액",
      vietnamese: "máu",
      thai: "เลือด"
    }
  },
  {
    japanese: "力",
    translations: {
      english: "energy; force; strength; might; power",
      chinese: "力量；力气；能力",
      korean: "힘; 력량; 능력",
      vietnamese: "sức mạnh; năng lực",
      thai: "พลัง; แรง; กำลัง"
    }
  },
  {
    japanese: "地理",
    translations: {
      english: "geography",
      chinese: "地理",
      korean: "지리",
      vietnamese: "địa lý",
      thai: "ภูมิศาสตร์"
    }
  },
  {
    japanese: "中学校",
    translations: {
      english: "junior high school; middle school",
      chinese: "中学；初中",
      korean: "중학교",
      vietnamese: "trường trung học cơ sở",
      thai: "โรงเรียนมัธยมต้น"
    }
  },
  {
    japanese: "注意",
    translations: {
      english: "caution; attention; care",
      chinese: "注意；小心",
      korean: "주의; 조심",
      vietnamese: "chú ý; cẩn thận",
      thai: "ระวัง; ให้ความสนใจ"
    }
  },
  {
    japanese: "注射",
    translations: {
      english: "injection; shot",
      chinese: "注射；打针",
      korean: "주사; 주입",
      vietnamese: "tiêm; tiêm thuốc",
      thai: "ฉีดยา; การฉีด"
    }
  },
  {
    japanese: "駐車場",
    translations: {
      english: "parking lot",
      chinese: "停车场",
      korean: "주차장",
      vietnamese: "bãi đậu xe",
      thai: "ที่จอดรถ"
    }
  },
  {
    japanese: "大分",
    translations: {
      english: "considerably; greatly; a lot",
      chinese: "相当；很多",
      korean: "상당히; 많이",
      vietnamese: "khá nhiều; đáng kể",
      thai: "มาก; อย่างมาก"
    }
  },
  {
    japanese: "大学生",
    translations: {
      english: "university student; college student",
      chinese: "大学生",
      korean: "대학생",
      vietnamese: "sinh viên đại học",
      thai: "นักศึกษามหาวิทยาลัย"
    }
  },
  {
    japanese: "大事",
    translations: {
      english: "important; serious; crucial",
      chinese: "重要；大事",
      korean: "중요한; 소중한",
      vietnamese: "quan trọng; nghiêm trọng",
      thai: "สำคัญ; ใหญ่"
    }
  },
  {
    japanese: "大体",
    translations: {
      english: "roughly; approximately; generally",
      chinese: "大概；大体",
      korean: "대체로; 대략",
      vietnamese: "đại khái; khoảng chừng",
      thai: "โดยประมาณ; โดยทั่วไป"
    }
  },
  {
    japanese: "暖房",
    translations: {
      english: "heating; heater",
      chinese: "暖气；取暖",
      korean: "난방; 히터",
      vietnamese: "sưởi ấm; hệ thống sưởi",
      thai: "เครื่องทำความร้อน; ระบบทำความร้อน"
    }
  },
  {
    japanese: "男性",
    translations: {
      english: "man; male",
      chinese: "男性；男人",
      korean: "남성; 남자",
      vietnamese: "nam giới; đàn ông",
      thai: "ชาย; เพศชาย"
    }
  },
  {
    japanese: "できるだけ",
    translations: {
      english: "as much as possible",
      chinese: "尽可能；尽量",
      korean: "가능한 한; 될 수 있는 대로",
      vietnamese: "càng nhiều càng tốt; hết sức có thể",
      thai: "มากที่สุดเท่าที่จะทำได้"
    }
  },
  {
    japanese: "電報",
    translations: {
      english: "telegram",
      chinese: "电报",
      korean: "전보",
      vietnamese: "điện báo",
      thai: "โทรเลข"
    }
  },
  {
    japanese: "電灯",
    translations: {
      english: "electric light",
      chinese: "电灯",
      korean: "전등; 전기등",
      vietnamese: "đèn điện",
      thai: "หลอดไฟ; ไฟฟ้า"
    }
  },
  {
    japanese: "どんどん",
    translations: {
      english: "rapidly; more and more",
      chinese: "越来越；不断地",
      korean: "점점; 자ꢴ만",
      vietnamese: "ngày càng; liên tục",
      thai: "เรื่อยๆ; มากขึ้นเรื่อยๆ"
    }
  },
  {
    japanese: "泥棒",
    translations: {
      english: "thief; burglar",
      chinese: "小偷；盗贼",
      korean: "도둑; 도적",
      vietnamese: "kẻ trộm; kẻ cắp",
      thai: "ขโมย; นักขโมย"
    }
  },
  {
    japanese: "動物園",
    translations: {
      english: "zoo; zoological gardens",
      chinese: "动物园",
      korean: "동물원",
      vietnamese: "sở thú; vườn bách thú",
      thai: "สวนสัตว์"
    }
  },
  {
    japanese: "道具",
    translations: {
      english: "tool; implement; instrument",
      chinese: "工具；道具",
      korean: "도구; 기구",
      vietnamese: "dụng cụ; công cụ",
      thai: "เครื่องมือ; อุปกรณ์"
    }
  },
  {
    japanese: "枝",
    translations: {
      english: "branch; twig",
      chinese: "树枝；枝条",
      korean: "가지; 나뭇가지",
      vietnamese: "cành; nhánh",
      thai: "กิ่ง; กิ่งไม้"
    }
  },
  {
    japanese: "遠慮",
    translations: {
      english: "reserve; refraining; restraint",
      chinese: "客气；谦让",
      korean: "사양; 유보; 자제",
      vietnamese: "khách sáo; dè dặt",
      thai: "สำรวม; เกรงใจ"
    }
  },
  {
    japanese: "選ぶ",
    translations: {
      english: "to choose; to select",
      chinese: "选择；挑选",
      korean: "선택하다; 고르다",
      vietnamese: "chọn; lựa chọn",
      thai: "เลือก; คัดเลือก"
    }
  },
  {
    japanese: "エスカレーター",
    translations: {
      english: "escalator",
      chinese: "自动扶梯；电梯",
      korean: "에스컬레이터",
      vietnamese: "thang cuốn",
      thai: "บันไดเลื่อน"
    }
  },
  {
    japanese: "ファックス",
    translations: {
      english: "fax",
      chinese: "传真；传真机",
      korean: "팩스",
      vietnamese: "fax; máy fax",
      thai: "แฟกซ์"
    }
  },
  {
    japanese: "不便",
    translations: {
      english: "inconvenience; inconvenient",
      chinese: "不便；不方便",
      korean: "불편; 불편한",
      vietnamese: "bất tiện; không thuận lợi",
      thai: "ไม่สะดวก; ลำบาก"
    }
  },
  {
    japanese: "増える",
    translations: {
      english: "to increase; to grow",
      chinese: "增加；增长",
      korean: "늘어나다; 증가하다",
      vietnamese: "tăng; gia tăng",
      thai: "เพิ่ม; เพิ่มขึ้น"
    }
  },
  {
    japanese: "深い",
    translations: {
      english: "deep; profound",
      chinese: "深的；深刻的",
      korean: "깊다; 심오한",
      vietnamese: "sâu; sâu sắc",
      thai: "ลึก; ลึกซึ้ง"
    }
  },
  {
    japanese: "復習",
    translations: {
      english: "review (of learned material); revision",
      chinese: "复习；温习",
      korean: "복습; 재검토",
      vietnamese: "ôn tập; ôn lại",
      thai: "ทบทวน; ประทับ"
    }
  },
  {
    japanese: "複雑",
    translations: {
      english: "complexity; complication; complex",
      chinese: "复杂；复合",
      korean: "복잡; 복합적",
      vietnamese: "phức tạp; rắc rối",
      thai: "ซับซ้อน; ยุ่งยาก"
    }
  },
  {
    japanese: "踏む",
    translations: {
      english: "to step on; to tread on",
      chinese: "踩；踏",
      korean: "밟다; 디디다",
      vietnamese: "giẫm; đạp",
      thai: "เหยียบ; ย่ำ"
    }
  },
  {
    japanese: "船",
    translations: {
      english: "ship; boat; vessel",
      chinese: "船；船只",
      korean: "배; 선박",
      vietnamese: "tàu; thuyền",
      thai: "เรือ; ยาน"
    }
  },
  {
    japanese: "降り出す",
    translations: {
      english: "to start to rain; to begin to fall",
      chinese: "开始下雨；开始降落",
      korean: "비가 내리기 시작하다",
      vietnamese: "bắt đầu mưa; rơi xuống",
      thai: "เริ่มฝนตก; เริ่มหล่น"
    }
  },
  {
    japanese: "布団",
    translations: {
      english: "Japanese bedding; futon",
      chinese: "被褥；日式床垫",
      korean: "이불; 후톤",
      vietnamese: "chăn màn; futon",
      thai: "ที่นอนญี่ปุ่น; ฟูก"
    }
  },
  {
    japanese: "太る",
    translations: {
      english: "to become fat; to gain weight",
      chinese: "变胖；发胖",
      korean: "살찌다; 뚱뚱해지다",
      vietnamese: "béo lên; tăng cân",
      thai: "อ้วนขึ้น; น้ำหนักเพิ่ม"
    }
  },
  {
    japanese: "普通",
    translations: {
      english: "usually; ordinary; normal",
      chinese: "普通；通常",
      korean: "보통; 일반적",
      vietnamese: "thông thường; bình thường",
      thai: "ปกติ; ธรรมดา"
    }
  },
  {
    japanese: "ガラス",
    translations: {
      english: "glass",
      chinese: "玻璃",
      korean: "유리; 글라스",
      vietnamese: "kính; thủy tinh",
      thai: "แก้ว; กระจก"
    }
  },
  {
    japanese: "ガソリン",
    translations: {
      english: "gasoline; petrol",
      chinese: "汽油",
      korean: "가솔린; 휘발유",
      vietnamese: "xăng; dầu xăng",
      thai: "น้ำมันเบนซิน"
    }
  },
  {
    japanese: "ガソリンスタンド",
    translations: {
      english: "petrol station; gas station",
      chinese: "加油站",
      korean: "주유소",
      vietnamese: "trạm xăng",
      thai: "ปั้มน้ำมัน"
    }
  },
  {
    japanese: "ガス",
    translations: {
      english: "gas; petrol",
      chinese: "燃气；瓦斯",
      korean: "가스",
      vietnamese: "khí đốt; ga",
      thai: "แก๊ส"
    }
  },
  {
    japanese: "原因",
    translations: {
      english: "cause; reason; factor",
      chinese: "原因；起因",
      korean: "원인; 이유",
      vietnamese: "nguyên nhân; lý do",
      thai: "สาเหตุ; เหตุผล"
    }
  },
  {
    japanese: "下宿",
    translations: {
      english: "lodging; boarding",
      chinese: "寄宿；住宿",
      korean: "하숙; 기숙",
      vietnamese: "ở trọ; nhà trọ",
      thai: "ที่พัก; หอพัก"
    }
  },
  {
    japanese: "技術",
    translations: {
      english: "art; technology; skill",
      chinese: "技术；技能",
      korean: "기술; 기능",
      vietnamese: "kỹ thuật; công nghệ",
      thai: "เทคโนโลยี; ทักษะ"
    }
  },
  {
    japanese: "ごちそう",
    translations: {
      english: "a feast; treat; banquet",
      chinese: "盛宴；美食",
      korean: "잔치; 대접",
      vietnamese: "tiệc; đãi",
      thai: "งานเลี้ยง; อาหารดี"
    }
  },
  {
    japanese: "ごみ",
    translations: {
      english: "rubbish; garbage; trash",
      chinese: "垃圾；废物",
      korean: "쓰레기; 폐물",
      vietnamese: "rác; chất thải",
      thai: "ขยะ; ของเสีย"
    }
  },
  {
    japanese: "ご覧になる",
    translations: {
      english: "(respectful) to see; to look at",
      chinese: "（敬语）看；观看",
      korean: "(존경어) 보시다",
      vietnamese: "(kính ngữ) xem; nhìn",
      thai: "(สุภาพ) ดู; มอง"
    }
  },
  {
    japanese: "ご主人",
    translations: {
      english: "your husband; her husband",
      chinese: "您的丈夫；她的丈夫",
      korean: "당신의 남편; 그녀의 남편",
      vietnamese: "chồng của bạn; chồng của cô ấy",
      thai: "สามีของคุณ; สามีของเธอ"
    }
  },
   {
    "japanese": "ご存じ",
    "translations": {
      "english": "knowing",
      "chinese": "知道",
      "korean": "알고 계시는",
      "vietnamese": "biết",
      "thai": "รู้"
    }
  },
  {
    "japanese": "具合",
    "translations": {
      "english": "condition; health",
      "chinese": "状况；健康",
      "korean": "상태; 건강",
      "vietnamese": "tình trạng; sức khỏe",
      "thai": "สภาพ; สุขภาพ"
    }
  },
  {
    "japanese": "葉",
    "translations": {
      "english": "leaves; leaf",
      "chinese": "叶子",
      "korean": "잎",
      "vietnamese": "lá",
      "thai": "ใบไม้"
    }
  },
  {
    "japanese": "拝見",
    "translations": {
      "english": "seeing; looking at",
      "chinese": "拜见；观看",
      "korean": "뵙기; 보기",
      "vietnamese": "xem; nhìn",
      "thai": "ดู; มอง"
    }
  },
  {
    "japanese": "歯医者",
    "translations": {
      "english": "dentist",
      "chinese": "牙医",
      "korean": "치과의사",
      "vietnamese": "nha sĩ",
      "thai": "หมอฟัน"
    }
  },
  {
    "japanese": "はっきり",
    "translations": {
      "english": "clearly",
      "chinese": "清楚地",
      "korean": "명확히",
      "vietnamese": "rõ ràng",
      "thai": "อย่างชัดเจน"
    }
  },
  {
    "japanese": "運ぶ",
    "translations": {
      "english": "to carry",
      "chinese": "搬运；携带",
      "korean": "나르다; 운반하다",
      "vietnamese": "mang; vận chuyển",
      "thai": "ขน; แบก"
    }
  },
  {
    "japanese": "花見",
    "translations": {
      "english": "cherry blossom viewing; flower viewing",
      "chinese": "赏花；赏樱",
      "korean": "꽃구경; 벚꽃구경",
      "vietnamese": "ngắm hoa anh đào",
      "thai": "ชมดอกซากุระ"
    }
  },
  {
    "japanese": "ハンドバッグ",
    "translations": {
      "english": "handbag",
      "chinese": "手提包",
      "korean": "핸드백",
      "vietnamese": "túi xách",
      "thai": "กระเป๋าถือ"
    }
  },
  {
    "japanese": "反対",
    "translations": {
      "english": "opposition",
      "chinese": "反对",
      "korean": "반대",
      "vietnamese": "phản đối",
      "thai": "ตรงข้าม; คัดค้าน"
    }
  },
  {
    "japanese": "払う",
    "translations": {
      "english": "to pay",
      "chinese": "支付",
      "korean": "지불하다",
      "vietnamese": "trả tiền",
      "thai": "จ่ายเงิน"
    }
  },
  {
    "japanese": "発音",
    "translations": {
      "english": "pronunciation",
      "chinese": "发音",
      "korean": "발음",
      "vietnamese": "phát âm",
      "thai": "การออกเสียง"
    }
  },
  {
    "japanese": "林",
    "translations": {
      "english": "woods; forest",
      "chinese": "树林；森林",
      "korean": "숲",
      "vietnamese": "rừng nhỏ",
      "thai": "ป่าไผ่"
    }
  },
  {
    "japanese": "恥ずかしい",
    "translations": {
      "english": "embarrassed",
      "chinese": "害羞的；尴尬的",
      "korean": "부끄러운",
      "vietnamese": "xấu hổ",
      "thai": "อับอาย; ขายหน้า"
    }
  },
  {
    "japanese": "変",
    "translations": {
      "english": "strange; peculiar; weird",
      "chinese": "奇怪的；古怪的",
      "korean": "이상한; 기이한",
      "vietnamese": "kỳ lạ; dị thường",
      "thai": "แปลก; พิกล"
    }
  },
  {
    "japanese": "返事",
    "translations": {
      "english": "reply; answer; response",
      "chinese": "回答；回复",
      "korean": "대답; 응답",
      "vietnamese": "trả lời; đáp án",
      "thai": "คำตอบ; การตอบกลับ"
    }
  },
  {
    "japanese": "火",
    "translations": {
      "english": "fire",
      "chinese": "火",
      "korean": "불",
      "vietnamese": "lửa",
      "thai": "ไฟ"
    }
  },
  {
    "japanese": "酷い",
    "translations": {
      "english": "terrible; awful",
      "chinese": "糟糕的；可怕的",
      "korean": "끔찍한; 심한",
      "vietnamese": "khủng khiếp; tồi tệ",
      "thai": "แย่มาก; น่ากลัว"
    }
  },
  {
    "japanese": "冷える",
    "translations": {
      "english": "to grow cold",
      "chinese": "变冷；冷却",
      "korean": "차가워지다",
      "vietnamese": "trở nên lạnh",
      "thai": "เย็นลง; เซาะเซา"
    }
  },
  {
    "japanese": "髭",
    "translations": {
      "english": "beard",
      "chinese": "胡须；胡子",
      "korean": "수염",
      "vietnamese": "râu",
      "thai": "หนวดเคราหรือหนวด"
    }
  },
  {
    "japanese": "非常に",
    "translations": {
      "english": "extremely",
      "chinese": "非常；极其",
      "korean": "매우; 극히",
      "vietnamese": "cực kỳ; rất",
      "thai": "อย่างยิ่ง; มาก"
    }
  },
  {
    "japanese": "光",
    "translations": {
      "english": "light",
      "chinese": "光；光线",
      "korean": "빛",
      "vietnamese": "ánh sáng",
      "thai": "แสง"
    }
  },
  {
    "japanese": "光る",
    "translations": {
      "english": "to shine",
      "chinese": "发光；闪亮",
      "korean": "빛나다",
      "vietnamese": "tỏa sáng; chiếu sáng",
      "thai": "ส่องแสง; เปล่งแสง"
    }
  },
  {
    "japanese": "引き出し",
    "translations": {
      "english": "drawer",
      "chinese": "抽屉",
      "korean": "서랍",
      "vietnamese": "ngăn kéo",
      "thai": "ลิ้นชัก"
    }
  },
  {
    "japanese": "引き出す",
    "translations": {
      "english": "to withdraw",
      "chinese": "取出；提取",
      "korean": "인출하다; 뽑아내다",
      "vietnamese": "rút ra; lấy ra",
      "thai": "ดึงออก; ถอนออก"
    }
  },
  {
    "japanese": "引っ越す",
    "translations": {
      "english": "to move house",
      "chinese": "搬家",
      "korean": "이사하다",
      "vietnamese": "chuyển nhà",
      "thai": "ย้ายบ้าน"
    }
  },
  {
    "japanese": "飛行場",
    "translations": {
      "english": "airfield; airport",
      "chinese": "机场；航空港",
      "korean": "비행장; 공항",
      "vietnamese": "sân bay",
      "thai": "สนามบิน"
    }
  },
  {
    "japanese": "開く",
    "translations": {
      "english": "to open; to undo; to unseal; to unpack",
      "chinese": "打开；开启",
      "korean": "열다; 펼치다",
      "vietnamese": "mở; mở ra",
      "thai": "เปิด; แกะ"
    }
  },
  {
    "japanese": "拾う",
    "translations": {
      "english": "to pick up",
      "chinese": "捡起；拾取",
      "korean": "줍다; 집다",
      "vietnamese": "nhặt lên; thu lượm",
      "thai": "เก็บ; หยิบขึ้น"
    }
  },
  {
    "japanese": "昼間",
    "translations": {
      "english": "daytime; during the day",
      "chinese": "白天；白昼",
      "korean": "낮; 낮시간",
      "vietnamese": "ban ngày",
      "thai": "เวลากลางวัน"
    }
  },
  {
    "japanese": "昼休み",
    "translations": {
      "english": "lunch break; noon recess; noon rest period",
      "chinese": "午休；午间休息",
      "korean": "점심시간; 점심휴식",
      "vietnamese": "giờ nghỉ trưa",
      "thai": "พักเที่ยง"
    }
  },
  {
    "japanese": "久しぶり",
    "translations": {
      "english": "after a long time",
      "chinese": "好久不见；久违",
      "korean": "오랜만에",
      "vietnamese": "lâu rồi; sau một thời gian dài",
      "thai": "นานแล้ว; หลังจากที่ไม่ได้เจอกันนาน"
    }
  },
  {
    "japanese": "褒める",
    "translations": {
      "english": "to praise",
      "chinese": "表扬；称赞",
      "korean": "칭찬하다",
      "vietnamese": "khen ngợi; ca tụng",
      "thai": "ชม; สรรเสริญ"
    }
  },
  {
    "japanese": "翻訳",
    "translations": {
      "english": "translation",
      "chinese": "翻译",
      "korean": "번역",
      "vietnamese": "dịch thuật",
      "thai": "การแปล"
    }
  },
  {
    "japanese": "星",
    "translations": {
      "english": "star",
      "chinese": "星星",
      "korean": "별",
      "vietnamese": "ngôi sao",
      "thai": "ดาว"
    }
  },
  {
    "japanese": "ほとんど",
    "translations": {
      "english": "mostly",
      "chinese": "大部分；几乎",
      "korean": "거의",
      "vietnamese": "hầu hết",
      "thai": "เกือบทั้งหมด"
    }
  },
  {
    "japanese": "法律",
    "translations": {
      "english": "law",
      "chinese": "法律",
      "korean": "법률",
      "vietnamese": "pháp luật",
      "thai": "กฎหมาย"
    }
  },
  {
    "japanese": "放送",
    "translations": {
      "english": "to broadcast",
      "chinese": "广播；播放",
      "korean": "방송하다",
      "vietnamese": "phát sóng",
      "thai": "ออกอากาศ"
    }
  },
  {
    "japanese": "一度",
    "translations": {
      "english": "once; one time; on one occasion",
      "chinese": "一次；一度",
      "korean": "한 번",
      "vietnamese": "một lần",
      "thai": "ครั้งหนึ่ง"
    }
  },
  {
    "japanese": "以外",
    "translations": {
      "english": "with the exception of; excepting",
      "chinese": "除了…之外",
      "korean": "이외",
      "vietnamese": "ngoại trừ",
      "thai": "นอกจาก"
    }
  },
  {
    "japanese": "医学",
    "translations": {
      "english": "medical science; medicine",
      "chinese": "医学",
      "korean": "의학",
      "vietnamese": "y học",
      "thai": "แพทยศาสตร์"
    }
  },
  {
    "japanese": "いじめる",
    "translations": {
      "english": "to tease",
      "chinese": "欺负；捉弄",
      "korean": "괴롭히다",
      "vietnamese": "bắt nạt; trêu chọc",
      "thai": "แกล้ง; รังแก"
    }
  },
  {
    "japanese": "以上",
    "translations": {
      "english": "... and more; ... and upwards",
      "chinese": "以上",
      "korean": "이상",
      "vietnamese": "trên; từ ... trở lên",
      "thai": "ขึ้นไป"
    }
  },
  {
    "japanese": "以下",
    "translations": {
      "english": "not exceeding",
      "chinese": "以下",
      "korean": "이하",
      "vietnamese": "dưới; không quá",
      "thai": "ลงมา; ไม่เกิน"
    }
  },
  {
    "japanese": "意見",
    "translations": {
      "english": "opinion; view; comment",
      "chinese": "意见；看法",
      "korean": "의견",
      "vietnamese": "ý kiến",
      "thai": "ความเห็น"
    }
  },
  {
    "japanese": "生き物",
    "translations": {
      "english": "living thing",
      "chinese": "生物",
      "korean": "생물",
      "vietnamese": "sinh vật",
      "thai": "สิ่งมีชีวิต"
    }
  },
  {
    "japanese": "生きる",
    "translations": {
      "english": "to live",
      "chinese": "生活；活着",
      "korean": "살다",
      "vietnamese": "sống",
      "thai": "มีชีวิต; อยู่"
    }
  },
  {
    "japanese": "以内",
    "translations": {
      "english": "within",
      "chinese": "以内",
      "korean": "이내",
      "vietnamese": "trong vòng",
      "thai": "ภายใน"
    }
  },
  {
    "japanese": "田舎",
    "translations": {
      "english": "countryside",
      "chinese": "乡下；农村",
      "korean": "시골",
      "vietnamese": "nông thôn",
      "thai": "ชนบท"
    }
  },
  {
    "japanese": "祈る",
    "translations": {
      "english": "to pray",
      "chinese": "祈祷；祈求",
      "korean": "기도하다",
      "vietnamese": "cầu nguyện",
      "thai": "อธิษฐาน"
    }
  },
  {
    "japanese": "いっぱい",
    "translations": {
      "english": "full",
      "chinese": "满；很多",
      "korean": "가득",
      "vietnamese": "đầy; nhiều",
      "thai": "เต็ม; มาก"
    }
  },
  {
    "japanese": "色んな",
    "translations": {
      "english": "various",
      "chinese": "各种各样的",
      "korean": "여러 가지",
      "vietnamese": "nhiều loại",
      "thai": "หลากหลาย"
    }
  },
  {
    "japanese": "石",
    "translations": {
      "english": "stone",
      "chinese": "石头",
      "korean": "돌",
      "vietnamese": "đá",
      "thai": "หิน"
    }
  },
  {
    "japanese": "急ぐ",
    "translations": {
      "english": "to hurry; to rush; to hasten; to make something happen sooner",
      "chinese": "匆忙；赶快",
      "korean": "서두르다",
      "vietnamese": "vội vàng; gấp",
      "thai": "รีบ; เร่ง"
    }
  },
  {
    "japanese": "一生懸命",
    "translations": {
      "english": "very hard; with utmost effort",
      "chinese": "拼命；全力以赴",
      "korean": "열심히",
      "vietnamese": "hết sức; cố gắng",
      "thai": "อย่างเต็มที่"
    }
  },
  {
    "japanese": "頂く",
    "translations": {
      "english": "(humble) to receive",
      "chinese": "接受（谦让语）",
      "korean": "받다 (겸양어)",
      "vietnamese": "nhận (khiêm nhường)",
      "thai": "รับ (ถ่อมตน)"
    }
  },
  {
    "japanese": "致す",
    "translations": {
      "english": "(humble) to do",
      "chinese": "做（谦让语）",
      "korean": "하다 (겸양어)",
      "vietnamese": "làm (khiêm nhường)",
      "thai": "ทำ (ถ่อมตน)"
    }
  },
  {
    "japanese": "糸",
    "translations": {
      "english": "thread",
      "chinese": "线",
      "korean": "실",
      "vietnamese": "chỉ",
      "thai": "เส้นด้าย"
    }
  },
  {
    "japanese": "ジャム",
    "translations": {
      "english": "jam",
      "chinese": "果酱",
      "korean": "잼",
      "vietnamese": "mứt",
      "thai": "แยม"
    }
  },
  {
    "japanese": "字",
    "translations": {
      "english": "character",
      "chinese": "字",
      "korean": "글자",
      "vietnamese": "chữ",
      "thai": "ตัวอักษร"
    }
  },
  {
    "japanese": "時代",
    "translations": {
      "english": "period",
      "chinese": "时代",
      "korean": "시대",
      "vietnamese": "thời đại",
      "thai": "ยุคสมัย"
    }
  },
  {
    "japanese": "事故",
    "translations": {
      "english": "accident",
      "chinese": "事故",
      "korean": "사고",
      "vietnamese": "tai nạn",
      "thai": "อุบัติเหตุ"
    }
  },
  {
    "japanese": "事務所",
    "translations": {
      "english": "office",
      "chinese": "办公室",
      "korean": "사무소",
      "vietnamese": "văn phòng",
      "thai": "สำนักงาน"
    }
  },
  {
    "japanese": "神社",
    "translations": {
      "english": "Shinto shrine",
      "chinese": "神社",
      "korean": "신사",
      "vietnamese": "đền thần đạo",
      "thai": "ศาลเจ้าชินโต"
    }
  },
  {
    "japanese": "人口",
    "translations": {
      "english": "population",
      "chinese": "人口",
      "korean": "인구",
      "vietnamese": "dân số",
      "thai": "ประชากร"
    }
  },
  {
    "japanese": "人生",
    "translations": {
      "english": "human life",
      "chinese": "人生",
      "korean": "인생",
      "vietnamese": "cuộc đời",
      "thai": "ชีวิตมนุษย์"
    }
  },
  {
    "japanese": "地震",
    "translations": {
      "english": "earthquake",
      "chinese": "地震",
      "korean": "지진",
      "vietnamese": "động đất",
      "thai": "แผ่นดินไหว"
    }
  },
  {
    "japanese": "辞典",
    "translations": {
      "english": "dictionary",
      "chinese": "辞典",
      "korean": "사전",
      "vietnamese": "từ điển",
      "thai": "พจนานุกรม"
    }
  },
  {
    "japanese": "自由",
    "translations": {
      "english": "freedom",
      "chinese": "自由",
      "korean": "자유",
      "vietnamese": "tự do",
      "thai": "เสรีภาพ"
    }
  },
  {
    "japanese": "女性",
    "translations": {
      "english": "woman; female",
      "chinese": "女性",
      "korean": "여성",
      "vietnamese": "phụ nữ",
      "thai": "ผู้หญิง"
    }
  },
  {
    "japanese": "準備",
    "translations": {
      "english": "to prepare",
      "chinese": "准备",
      "korean": "준비",
      "vietnamese": "chuẩn bị",
      "thai": "เตรียม"
    }
  },
  {
    "japanese": "十分",
    "translations": {
      "english": "enough; sufficient",
      "chinese": "十分",
      "korean": "충분",
      "vietnamese": "đủ",
      "thai": "เพียงพอ"
    }
  },
  {
    "japanese": "柔道",
    "translations": {
      "english": "judo",
      "chinese": "柔道",
      "korean": "유도",
      "vietnamese": "judo",
      "thai": "ยูโด"
    }
  },
  {
    "japanese": "住所",
    "translations": {
      "english": "address",
      "chinese": "住所",
      "korean": "주소",
      "vietnamese": "địa chỉ",
      "thai": "ที่อยู่"
    }
  },
  {
    "japanese": "カーテン",
    "translations": {
      "english": "curtain",
      "chinese": "窗帘",
      "korean": "커튼",
      "vietnamese": "rèm cửa",
      "thai": "ผ้าม่าน"
    }
  },
  {
    "japanese": "壁",
    "translations": {
      "english": "wall",
      "chinese": "墙",
      "korean": "벽",
      "vietnamese": "tường",
      "thai": "กำแพง"
    }
  },
  {
    "japanese": "課長",
    "translations": {
      "english": "section manager; section chief",
      "chinese": "课长",
      "korean": "과장",
      "vietnamese": "trưởng phòng",
      "thai": "หัวหน้าแผนก"
    }
  },
  {
    "japanese": "帰り",
    "translations": {
      "english": "return; coming back",
      "chinese": "回去",
      "korean": "돌아감",
      "vietnamese": "về",
      "thai": "การกลับ"
    }
  },
  {
    "japanese": "変える",
    "translations": {
      "english": "to change; to transform",
      "chinese": "改变",
      "korean": "바꾸다",
      "vietnamese": "thay đổi",
      "thai": "เปลี่ยน"
    }
  },
  {
    "japanese": "科学",
    "translations": {
      "english": "science",
      "chinese": "科学",
      "korean": "과학",
      "vietnamese": "khoa học",
      "thai": "วิทยาศาสตร์"
    }
  },
  {
    "japanese": "鏡",
    "translations": {
      "english": "mirror",
      "chinese": "镜子",
      "korean": "거울",
      "vietnamese": "gương",
      "thai": "กระจก"
    }
  },
  {
    "japanese": "海岸",
    "translations": {
      "english": "coast",
      "chinese": "海岸",
      "korean": "해안",
      "vietnamese": "bờ biển",
      "thai": "ชายฝั่ง"
    }
  },
  {
    "japanese": "会議",
    "translations": {
      "english": "meeting; conference",
      "chinese": "会议",
      "korean": "회의",
      "vietnamese": "cuộc họp",
      "thai": "การประชุม"
    }
  },
  {
    "japanese": "会議室",
    "translations": {
      "english": "conference room",
      "chinese": "会议室",
      "korean": "회의실",
      "vietnamese": "phòng họp",
      "thai": "ห้องประชุม"
    }
  },
  {
    "japanese": "会場",
    "translations": {
      "english": "assembly hall; meeting place; venue",
      "chinese": "会场",
      "korean": "회장",
      "vietnamese": "hội trường",
      "thai": "สถานที่จัดงาน"
    }
  },
  {
    "japanese": "会話",
    "translations": {
      "english": "conversation",
      "chinese": "会话",
      "korean": "회화",
      "vietnamese": "cuộc trò chuyện",
      "thai": "การสนทนา"
    }
  },
  {
    "japanese": "火事",
    "translations": {
      "english": "fire",
      "chinese": "火灾",
      "korean": "화재",
      "vietnamese": "hỏa hoạn",
      "thai": "ไฟไหม้"
    }
  },
  {
    "japanese": "格好",
    "translations": {
      "english": "appearance",
      "chinese": "样子",
      "korean": "모양",
      "vietnamese": "vẻ ngoài",
      "thai": "รูปร่างหน้าตา"
    }
  },
  {
    "japanese": "構う",
    "translations": {
      "english": "to mind",
      "chinese": "在意",
      "korean": "신경쓰다",
      "vietnamese": "quan tâm",
      "thai": "ใส่ใจ"
    }
  },
  {
    "japanese": "髪",
    "translations": {
      "english": "hair",
      "chinese": "头发",
      "korean": "머리카락",
      "vietnamese": "tóc",
      "thai": "ผม"
    }
  },
  {
    "japanese": "噛む",
    "translations": {
      "english": "to bite; to chew",
      "chinese": "咬",
      "korean": "물다",
      "vietnamese": "cắn",
      "thai": "กัด"
    }
  },
  {
    "japanese": "家内",
    "translations": {
      "english": "(my) wife; inside the home",
      "chinese": "妻子",
      "korean": "아내",
      "vietnamese": "vợ tôi",
      "thai": "ภรรยา"
    }
  },
  {
    "japanese": "必ず",
    "translations": {
      "english": "always; certainly",
      "chinese": "必须",
      "korean": "반드시",
      "vietnamese": "nhất định",
      "thai": "แน่นอน"
    }
  },
  {
    "japanese": "悲しい",
    "translations": {
      "english": "sad",
      "chinese": "悲伤",
      "korean": "슬프다",
      "vietnamese": "buồn",
      "thai": "เศร้า"
    }
  },
  {
    "japanese": "考える",
    "translations": {
      "english": "to think",
      "chinese": "考虑",
      "korean": "생각하다",
      "vietnamese": "suy nghĩ",
      "thai": "คิด"
    }
  },
  {
    "japanese": "看護婦",
    "translations": {
      "english": "female nurse",
      "chinese": "护士",
      "korean": "간호사",
      "vietnamese": "y tá",
      "thai": "พยาบาล"
    }
  },
  {
    "japanese": "関係",
    "translations": {
      "english": "relationship",
      "chinese": "关系",
      "korean": "관계",
      "vietnamese": "mối quan hệ",
      "thai": "ความสัมพันธ์"
    }
  },
  {
    "japanese": "彼女",
    "translations": {
      "english": "she; her",
      "chinese": "她",
      "korean": "그녀",
      "vietnamese": "cô ấy",
      "thai": "เธอ"
    }
  },
  {
    "japanese": "簡単",
    "translations": {
      "english": "simple; easy",
      "chinese": "简单",
      "korean": "간단",
      "vietnamese": "đơn giản",
      "thai": "ง่าย"
    }
  },
  {
    "japanese": "彼",
    "translations": {
      "english": "he; him",
      "chinese": "他",
      "korean": "그",
      "vietnamese": "anh ấy",
      "thai": "เขา"
    }
  },
  {
    "japanese": "彼ら",
    "translations": {
      "english": "they; them",
      "chinese": "他们",
      "korean": "그들",
      "vietnamese": "họ",
      "thai": "พวกเขา"
    }
  },
  {
    "japanese": "形",
    "translations": {
      "english": "shape",
      "chinese": "形状",
      "korean": "모양",
      "vietnamese": "hình dạng",
      "thai": "รูปร่าง"
    }
  },
  {
    "japanese": "片付ける",
    "translations": {
      "english": "to tidy up",
      "chinese": "整理",
      "korean": "정리하다",
      "vietnamese": "dọn dẹp",
      "thai": "จัดระเบียบ"
    }
  },
  {
    "japanese": "硬い",
    "translations": {
      "english": "hard",
      "chinese": "硬",
      "korean": "딱딱하다",
      "vietnamese": "cứng",
      "thai": "แข็ง"
    }
  },
  {
    "japanese": "勝つ",
    "translations": {
      "english": "to win",
      "chinese": "赢",
      "korean": "이기다",
      "vietnamese": "thắng",
      "thai": "ชนะ"
    }
  },
  {
    "japanese": "乾く",
    "translations": {
      "english": "to get dry",
      "chinese": "干",
      "korean": "마르다",
      "vietnamese": "khô",
      "thai": "แห้ง"
    }
  },
  {
    "japanese": "代わり",
    "translations": {
      "english": "instead; in place",
      "chinese": "代替",
      "korean": "대신",
      "vietnamese": "thay thế",
      "thai": "แทน"
    }
  },
  {
    "japanese": "変わる",
    "translations": {
      "english": "to change",
      "chinese": "变化",
      "korean": "바뀌다",
      "vietnamese": "thay đổi",
      "thai": "เปลี่ยนแปลง"
    }
  },
  {
    "japanese": "通う",
    "translations": {
      "english": "to commute",
      "chinese": "通勤",
      "korean": "다니다",
      "vietnamese": "đi lại",
      "thai": "เดินทางไปมา"
    }
  },
  {
    "japanese": "飾る",
    "translations": {
      "english": "to decorate",
      "chinese": "装饰",
      "korean": "장식하다",
      "vietnamese": "trang trí",
      "thai": "ตกแต่ง"
    }
  },
  {
    "japanese": "毛",
    "translations": {
      "english": "hair or fur",
      "chinese": "毛",
      "korean": "털",
      "vietnamese": "lông",
      "thai": "ขน"
    }
  },
  {
    "japanese": "ケーキ",
    "translations": {
      "english": "cake",
      "chinese": "蛋糕",
      "korean": "케이크",
      "vietnamese": "bánh kem",
      "thai": "เค้ก"
    }
  },
  {
    "japanese": "怪我",
    "translations": {
      "english": "to injure",
      "chinese": "受伤",
      "korean": "부상",
      "vietnamese": "thương tích",
      "thai": "บาดเจ็ب"
    }
  },
  {
    "japanese": "計画",
    "translations": {
      "english": "to plan",
      "chinese": "计划",
      "korean": "계획",
      "vietnamese": "kế hoạch",
      "thai": "แผนการ"
    }
  },
   {
    "japanese": "経験",
    "translations": {
      "english": "to experience",
      "chinese": "经验",
      "korean": "경험",
      "vietnamese": "kinh nghiệm",
      "thai": "ประสบการณ์"
    }
  },
  {
    "japanese": "警察",
    "translations": {
      "english": "police",
      "chinese": "警察",
      "korean": "경찰",
      "vietnamese": "cảnh sát",
      "thai": "ตำรวจ"
    }
  },
  {
    "japanese": "経済",
    "translations": {
      "english": "finance, economy",
      "chinese": "经济",
      "korean": "경제",
      "vietnamese": "kinh tế",
      "thai": "เศรษฐกิจ"
    }
  },
  {
    "japanese": "見物",
    "translations": {
      "english": "sightseeing; visit",
      "chinese": "观光",
      "korean": "구경",
      "vietnamese": "tham quan",
      "thai": "ชม"
    }
  },
  {
    "japanese": "喧嘩",
    "translations": {
      "english": "to quarrel",
      "chinese": "吵架",
      "korean": "싸움",
      "vietnamese": "cãi nhau",
      "thai": "ทะเลาะ"
    }
  },
  {
    "japanese": "研究",
    "translations": {
      "english": "research",
      "chinese": "研究",
      "korean": "연구",
      "vietnamese": "nghiên cứu",
      "thai": "วิจัย"
    }
  },
  {
    "japanese": "研究室",
    "translations": {
      "english": "laboratory",
      "chinese": "研究室",
      "korean": "연구실",
      "vietnamese": "phòng thí nghiệm",
      "thai": "ห้องปฏิบัติการ"
    }
  },
  {
    "japanese": "消しゴム",
    "translations": {
      "english": "eraser",
      "chinese": "橡皮擦",
      "korean": "지우개",
      "vietnamese": "cục tẩy",
      "thai": "ยางลบ"
    }
  },
  {
    "japanese": "景色",
    "translations": {
      "english": "scenery",
      "chinese": "景色",
      "korean": "경치",
      "vietnamese": "phong cảnh",
      "thai": "ทิวทัศน์"
    }
  },
  {
    "japanese": "気",
    "translations": {
      "english": "spirit",
      "chinese": "气",
      "korean": "기",
      "vietnamese": "khí",
      "thai": "จิตใจ"
    }
  },
  {
    "japanese": "厳しい",
    "translations": {
      "english": "strict",
      "chinese": "严格",
      "korean": "엄격한",
      "vietnamese": "nghiêm khắc",
      "thai": "เข้มงวด"
    }
  },
  {
    "japanese": "気分",
    "translations": {
      "english": "feeling; mood",
      "chinese": "心情",
      "korean": "기분",
      "vietnamese": "tâm trạng",
      "thai": "อารมณ์"
    }
  },
  {
    "japanese": "機会",
    "translations": {
      "english": "chance; opportunity",
      "chinese": "机会",
      "korean": "기회",
      "vietnamese": "cơ hội",
      "thai": "โอกาส"
    }
  },
  {
    "japanese": "危険",
    "translations": {
      "english": "danger",
      "chinese": "危险",
      "korean": "위험",
      "vietnamese": "nguy hiểm",
      "thai": "อันตราย"
    }
  },
  {
    "japanese": "聞こえる",
    "translations": {
      "english": "to be heard; to be audible; to be said",
      "chinese": "听得见",
      "korean": "들리다",
      "vietnamese": "có thể nghe thấy",
      "thai": "ได้ยิน"
    }
  },
  {
    "japanese": "決まる",
    "translations": {
      "english": "to be decided",
      "chinese": "决定",
      "korean": "정해지다",
      "vietnamese": "được quyết định",
      "thai": "ตัดสินใจ"
    }
  },
  {
    "japanese": "決める",
    "translations": {
      "english": "to decide",
      "chinese": "决定",
      "korean": "결정하다",
      "vietnamese": "quyết định",
      "thai": "ตัดสินใจ"
    }
  },
  {
    "japanese": "君",
    "translations": {
      "english": "You",
      "chinese": "你",
      "korean": "너",
      "vietnamese": "bạn",
      "thai": "คุณ"
    }
  },
  {
    "japanese": "気持ち",
    "translations": {
      "english": "feeling",
      "chinese": "心情",
      "korean": "기분",
      "vietnamese": "cảm giác",
      "thai": "ความรู้สึก"
    }
  },
  {
    "japanese": "着物",
    "translations": {
      "english": "kimono; Japanese traditional clothing",
      "chinese": "和服",
      "korean": "기모노",
      "vietnamese": "kimono",
      "thai": "กิโมโน"
    }
  },
  {
    "japanese": "近所",
    "translations": {
      "english": "neighbourhood",
      "chinese": "附近",
      "korean": "동네",
      "vietnamese": "hàng xóm",
      "thai": "ละแวกใกล้เคียง"
    }
  },
  {
    "japanese": "絹",
    "translations": {
      "english": "silk",
      "chinese": "丝绸",
      "korean": "비단",
      "vietnamese": "lụa",
      "thai": "ผ้าไหม"
    }
  },
  {
    "japanese": "季節",
    "translations": {
      "english": "season",
      "chinese": "季节",
      "korean": "계절",
      "vietnamese": "mùa",
      "thai": "ฤดูกาล"
    }
  },
  {
    "japanese": "汽車",
    "translations": {
      "english": "train",
      "chinese": "火车",
      "korean": "기차",
      "vietnamese": "xe lửa",
      "thai": "รถไฟ"
    }
  },
  {
    "japanese": "規則",
    "translations": {
      "english": "rule",
      "chinese": "规则",
      "korean": "규칙",
      "vietnamese": "quy tắc",
      "thai": "กฎ"
    }
  },
  {
    "japanese": "子",
    "translations": {
      "english": "child",
      "chinese": "孩子",
      "korean": "아이",
      "vietnamese": "trẻ em",
      "thai": "เด็ก"
    }
  },
  {
    "japanese": "心",
    "translations": {
      "english": "heart",
      "chinese": "心",
      "korean": "마음",
      "vietnamese": "trái tim",
      "thai": "หัวใจ"
    }
  },
  {
    "japanese": "国際",
    "translations": {
      "english": "international",
      "chinese": "国际",
      "korean": "국제",
      "vietnamese": "quốc tế",
      "thai": "นานาชาติ"
    }
  },
  {
    "japanese": "細かい",
    "translations": {
      "english": "small, fine",
      "chinese": "细小",
      "korean": "세밀한",
      "vietnamese": "nhỏ, tinh tế",
      "thai": "ละเอียด"
    }
  },
  {
    "japanese": "米",
    "translations": {
      "english": "(husked grains of) rice",
      "chinese": "米",
      "korean": "쌀",
      "vietnamese": "gạo",
      "thai": "ข้าว"
    }
  },
  {
    "japanese": "込む",
    "translations": {
      "english": "to be crowded",
      "chinese": "拥挤",
      "korean": "붐비다",
      "vietnamese": "đông đúc",
      "thai": "แออัด"
    }
  },
  {
    "japanese": "今度",
    "translations": {
      "english": "this time; next time",
      "chinese": "这次",
      "korean": "이번",
      "vietnamese": "lần này",
      "thai": "ครั้งนี้"
    }
  },
  {
    "japanese": "この間",
    "translations": {
      "english": "the other day; recently",
      "chinese": "前几天",
      "korean": "지난번",
      "vietnamese": "hôm trước",
      "thai": "เมื่อวันก่อน"
    }
  },
  {
    "japanese": "このごろ",
    "translations": {
      "english": "these days; nowadays",
      "chinese": "最近",
      "korean": "요즘",
      "vietnamese": "dạo này",
      "thai": "ช่วงนี้"
    }
  },
  {
    "japanese": "コンピュータ",
    "translations": {
      "english": "computer",
      "chinese": "计算机",
      "korean": "컴퓨터",
      "vietnamese": "máy tính",
      "thai": "คอมพิวเตอร์"
    }
  },
  {
    "japanese": "コンサート",
    "translations": {
      "english": "concert",
      "chinese": "音乐会",
      "korean": "콘서트",
      "vietnamese": "buổi hòa nhạc",
      "thai": "คอนเสิร์ต"
    }
  },
  {
    "japanese": "今夜",
    "translations": {
      "english": "this evening; tonight",
      "chinese": "今晚",
      "korean": "오늘 밤",
      "vietnamese": "tối nay",
      "thai": "คืนนี้"
    }
  },
  {
    "japanese": "これから",
    "translations": {
      "english": "after this",
      "chinese": "从现在开始",
      "korean": "이제부터",
      "vietnamese": "từ bây giờ",
      "thai": "ตั้งแต่นี้ไป"
    }
  },
  {
    "japanese": "故障",
    "translations": {
      "english": "to break-down",
      "chinese": "故障",
      "korean": "고장",
      "vietnamese": "hư hỏng",
      "thai": "เสีย"
    }
  },
  {
    "japanese": "答え",
    "translations": {
      "english": "response",
      "chinese": "答案",
      "korean": "답",
      "vietnamese": "câu trả lời",
      "thai": "คำตอบ"
    }
  },
  {
    "japanese": "小鳥",
    "translations": {
      "english": "small bird",
      "chinese": "小鸟",
      "korean": "작은 새",
      "vietnamese": "chim nhỏ",
      "thai": "นกเล็ก"
    }
  },
  {
    "japanese": "こう",
    "translations": {
      "english": "this way",
      "chinese": "这样",
      "korean": "이렇게",
      "vietnamese": "như thế này",
      "thai": "แบบนี้"
    }
  },
  {
    "japanese": "校長",
    "translations": {
      "english": "principal; headmaster",
      "chinese": "校长",
      "korean": "교장",
      "vietnamese": "hiệu trưởng",
      "thai": "ผู้อำนวยการโรงเรียน"
    }
  },
  {
    "japanese": "講堂",
    "translations": {
      "english": "auditorium",
      "chinese": "礼堂",
      "korean": "강당",
      "vietnamese": "hội trường",
      "thai": "หอประชุม"
    }
  },
  {
    "japanese": "郊外",
    "translations": {
      "english": "suburb; residential area on the outskirt of a city",
      "chinese": "郊外",
      "korean": "교외",
      "vietnamese": "ngoại ô",
      "thai": "ชานเมือง"
    }
  },
  {
    "japanese": "講義",
    "translations": {
      "english": "lecture",
      "chinese": "讲义",
      "korean": "강의",
      "vietnamese": "bài giảng",
      "thai": "การบรรยาย"
    }
  },
  {
    "japanese": "工業",
    "translations": {
      "english": "industry",
      "chinese": "工业",
      "korean": "공업",
      "vietnamese": "công nghiệp",
      "thai": "อุตสาหกรรม"
    }
  },
  {
    "japanese": "工場",
    "translations": {
      "english": "factory",
      "chinese": "工厂",
      "korean": "공장",
      "vietnamese": "nhà máy",
      "thai": "โรงงาน"
    }
  },
  {
    "japanese": "高校",
    "translations": {
      "english": "senior high school; high school",
      "chinese": "高中",
      "korean": "고등학교",
      "vietnamese": "trường trung học phổ thông",
      "thai": "โรงเรียนมัธยมปลาย"
    }
  },
  {
    "japanese": "高校生",
    "translations": {
      "english": "high school student",
      "chinese": "高中生",
      "korean": "고등학생",
      "vietnamese": "học sinh trung học phổ thông",
      "thai": "นักเรียนมัธยมปลาย"
    }
  },
  {
    "japanese": "公務員",
    "translations": {
      "english": "government worker",
      "chinese": "公务员",
      "korean": "공무원",
      "vietnamese": "công chức",
      "thai": "ข้าราชการ"
    }
  },
  {
    "japanese": "高等学校",
    "translations": {
      "english": "high school",
      "chinese": "高等学校",
      "korean": "고등학교",
      "vietnamese": "trường trung học phổ thông",
      "thai": "โรงเรียนมัธยมปลาย"
    }
  },
  {
    "japanese": "交通",
    "translations": {
      "english": "traffic",
      "chinese": "交通",
      "korean": "교통",
      "vietnamese": "giao thông",
      "thai": "การจราจร"
    }
  },
  {
    "japanese": "怖い",
    "translations": {
      "english": "frightening",
      "chinese": "可怕",
      "korean": "무서운",
      "vietnamese": "đáng sợ",
      "thai": "น่ากลัว"
    }
  },
  {
    "japanese": "壊れる",
    "translations": {
      "english": "to be broken",
      "chinese": "坏了",
      "korean": "부서지다",
      "vietnamese": "bị hỏng",
      "thai": "เสีย"
    }
  },
  {
    "japanese": "壊す",
    "translations": {
      "english": "to break",
      "chinese": "弄坏",
      "korean": "부수다",
      "vietnamese": "phá",
      "thai": "ทำลาย"
    }
  },
  {
    "japanese": "首",
    "translations": {
      "english": "neck",
      "chinese": "脖子",
      "korean": "목",
      "vietnamese": "cổ",
      "thai": "คอ"
    }
  },
  {
    "japanese": "下さる",
    "translations": {
      "english": "(respectful) to give",
      "chinese": "给予(敬语)",
      "korean": "주시다",
      "vietnamese": "cho (kính ngữ)",
      "thai": "ให้ (สุภาพ)"
    }
  },
  {
    "japanese": "雲",
    "translations": {
      "english": "cloud",
      "chinese": "云",
      "korean": "구름",
      "vietnamese": "mây",
      "thai": "เมฆ"
    }
  },
  {
    "japanese": "君",
    "translations": {
      "english": "suffix for familiar young male",
      "chinese": "君(后缀)",
      "korean": "군",
      "vietnamese": "kun (hậu tố)",
      "thai": "คุง (คำต่อท้าย)"
    }
  },
  {
    "japanese": "比べる",
    "translations": {
      "english": "to compare",
      "chinese": "比较",
      "korean": "비교하다",
      "vietnamese": "so sánh",
      "thai": "เปรียบเทียบ"
    }
  },
  {
    "japanese": "暮れる",
    "translations": {
      "english": "to get dark",
      "chinese": "天黑",
      "korean": "어두워지다",
      "vietnamese": "tối",
      "thai": "มืด"
    }
  },
  {
    "japanese": "草",
    "translations": {
      "english": "grass",
      "chinese": "草",
      "korean": "풀",
      "vietnamese": "cỏ",
      "thai": "หญ้า"
    }
  },
  {
    "japanese": "空気",
    "translations": {
      "english": "air",
      "chinese": "空气",
      "korean": "공기",
      "vietnamese": "không khí",
      "thai": "อากาศ"
    }
  },
  {
    "japanese": "空港",
    "translations": {
      "english": "airport",
      "chinese": "机场",
      "korean": "공항",
      "vietnamese": "sân bay",
      "thai": "สนามบิน"
    }
  },
  {
    "japanese": "客",
    "translations": {
      "english": "guest; customer",
      "chinese": "客人",
      "korean": "손님",
      "vietnamese": "khách",
      "thai": "แขก"
    }
  },
  {
    "japanese": "教育",
    "translations": {
      "english": "education",
      "chinese": "教育",
      "korean": "교육",
      "vietnamese": "giáo dục",
      "thai": "การศึกษา"
    }
  },
  {
    "japanese": "教会",
    "translations": {
      "english": "church; congregation; Christian church",
      "chinese": "教会",
      "korean": "교회",
      "vietnamese": "nhà thờ",
      "thai": "โบสถ์"
    }
  },
  {
    "japanese": "興味",
    "translations": {
      "english": "interest (in something); curiosity (about something); zest (for)",
      "chinese": "兴趣",
      "korean": "관심",
      "vietnamese": "sự quan tâm",
      "thai": "ความสนใจ"
    }
  },
  {
    "japanese": "競争",
    "translations": {
      "english": "competition",
      "chinese": "竞争",
      "korean": "경쟁",
      "vietnamese": "cạnh tranh",
      "thai": "การแข่งขัน"
    }
  },
  {
    "japanese": "急",
    "translations": {
      "english": "sudden; abrupt; unexpected",
      "chinese": "急",
      "korean": "급한",
      "vietnamese": "gấp",
      "thai": "เร่งด่วน"
    }
  },
  {
    "japanese": "急行",
    "translations": {
      "english": "hurrying (to somewhere); rushing; hastening",
      "chinese": "急行",
      "korean": "급행",
      "vietnamese": "tàu tốc hành",
      "thai": "รถด่วน"
    }
  },
  {
    "japanese": "間違える",
    "translations": {
      "english": "to make a mistake (in)",
      "chinese": "弄错",
      "korean": "틀리다",
      "vietnamese": "nhầm lẫn",
      "thai": "ผิดพลาด"
    }
  },
  {
    "japanese": "参る",
    "translations": {
      "english": "(humble) to go; to come",
      "chinese": "去/来(谦让语)",
      "korean": "가다/오다 (겸양어)",
      "vietnamese": "đi/đến (khiêm nhường)",
      "thai": "ไป/มา (ถ่อมตัว)"
    }
  },
  {
    "japanese": "負ける",
    "translations": {
      "english": "to lose",
      "chinese": "输",
      "korean": "지다",
      "vietnamese": "thua",
      "thai": "แพ้"
    }
  },
  {
    "japanese": "漫画",
    "translations": {
      "english": "comic",
      "chinese": "漫画",
      "korean": "만화",
      "vietnamese": "truyện tranh",
      "thai": "การ์ตูน"
    }
  },
  {
    "japanese": "間に合う",
    "translations": {
      "english": "to be in time (for)",
      "chinese": "来得及",
      "korean": "간에 맞다",
      "vietnamese": "kịp",
      "thai": "ทัน"
    }
  },
  {
    "japanese": "真ん中",
    "translations": {
      "english": "middle; centre; center",
      "chinese": "中间",
      "korean": "가운데",
      "vietnamese": "giữa",
      "thai": "ตรงกลาง"
    }
  },
  {
    "japanese": "周り",
    "translations": {
      "english": "around",
      "chinese": "周围",
      "korean": "주위",
      "vietnamese": "xung quanh",
      "thai": "รอบๆ"
    }
  },
  {
    "japanese": "回る",
    "translations": {
      "english": "to go around",
      "chinese": "转",
      "korean": "돌다",
      "vietnamese": "quay",
      "thai": "หมุน"
    }
  },
  {
    "japanese": "まず",
    "translations": {
      "english": "first of all",
      "chinese": "首先",
      "korean": "먼저",
      "vietnamese": "trước tiên",
      "thai": "ก่อนอื่น"
    }
  },
  {
    "japanese": "召し上がる",
    "translations": {
      "english": "to eat; to drink",
      "chinese": "用餐(敬语)",
      "korean": "드시다",
      "vietnamese": "ăn/uống (kính ngữ)",
      "thai": "รับประทาน (สุภาพ)"
    }
  },
  {
    "japanese": "珍しい",
    "translations": {
      "english": "unusual; rare",
      "chinese": "稀奇",
      "korean": "드문",
      "vietnamese": "hiếm",
      "thai": "หายาก"
    }
  },
  {
    "japanese": "見える",
    "translations": {
      "english": "to be seen; to be in sight; to look; to seem",
      "chinese": "看得见",
      "korean": "보이다",
      "vietnamese": "có thể thấy",
      "thai": "เห็น"
    }
  },
  {
    "japanese": "港",
    "translations": {
      "english": "harbour",
      "chinese": "港口",
      "korean": "항구",
      "vietnamese": "cảng",
      "thai": "ท่าเรือ"
    }
  },
  {
    "japanese": "味噌",
    "translations": {
      "english": "fermented condiment made from soybeans",
      "chinese": "味噌",
      "korean": "된장",
      "vietnamese": "tương đậu",
      "thai": "มิโซะ"
    }
  },
  {
    "japanese": "見つかる",
    "translations": {
      "english": "to be found; to be discovered",
      "chinese": "被发现",
      "korean": "발견되다",
      "vietnamese": "được tìm thấy",
      "thai": "ถูกพบ"
    }
  },
  {
    "japanese": "見つける",
    "translations": {
      "english": "to discover; to find; to come across; to detect; to spot",
      "chinese": "发现",
      "korean": "찾다",
      "vietnamese": "tìm thấy",
      "thai": "พบ"
    }
  },
  {
    "japanese": "都",
    "translations": {
      "english": "capital",
      "chinese": "都",
      "korean": "도",
      "vietnamese": "thủ đô",
      "thai": "เมืองหลวง"
    }
  },
  {
    "japanese": "湖",
    "translations": {
      "english": "lake",
      "chinese": "湖",
      "korean": "호수",
      "vietnamese": "hồ",
      "thai": "ทะเลสาบ"
    }
  },
  {
    "japanese": "戻る",
    "translations": {
      "english": "to turn back",
      "chinese": "回去",
      "korean": "돌아가다",
      "vietnamese": "quay lại",
      "thai": "กลับ"
    }
  },
  {
    "japanese": "木綿",
    "translations": {
      "english": "cotton (material)",
      "chinese": "棉花",
      "korean": "목면",
      "vietnamese": "cotton",
      "thai": "ฝ้าย"
    }
  },
  {
    "japanese": "森",
    "translations": {
      "english": "forest",
      "chinese": "森林",
      "korean": "숲",
      "vietnamese": "rừng",
      "thai": "ป่า"
    }
  },
  {
    "japanese": "もし",
    "translations": {
      "english": "if; in case; supposing",
      "chinese": "如果",
      "korean": "만약",
      "vietnamese": "nếu",
      "thai": "ถ้า"
    }
  },
  {
    "japanese": "申し上げる",
    "translations": {
      "english": "to say; to offer",
      "chinese": "说(谦让语)",
      "korean": "말씀드리다",
      "vietnamese": "nói (khiêm nhường)",
      "thai": "พูด (ถ่อมตัว)"
    }
  },
  {
    "japanese": "申す",
    "translations": {
      "english": "to be called; to say",
      "chinese": "叫/说(谦让语)",
      "korean": "말하다 (겸양어)",
      "vietnamese": "nói (khiêm nhường)",
      "thai": "พูด (ถ่อมตัว)"
    }
  },
  {
    "japanese": "もうすぐ",
    "translations": {
      "english": "soon",
      "chinese": "马上",
      "korean": "곧",
      "vietnamese": "sắp",
      "thai": "เร็วๆ นี้"
    }
  },
  {
    "japanese": "迎える",
    "translations": {
      "english": "to go out to meet",
      "chinese": "迎接",
      "korean": "맞이하다",
      "vietnamese": "đón",
      "thai": "ต้อนรับ"
    }
  },
  {
    "japanese": "昔",
    "translations": {
      "english": "olden days, former",
      "chinese": "以前",
      "korean": "옛날",
      "vietnamese": "ngày xưa",
      "thai": "สมัยก่อน"
    }
  },
   {
    "japanese": "無理",
    "translations": {
      "english": "impossible",
      "chinese": "不可能",
      "korean": "불가능",
      "vietnamese": "không thể",
      "thai": "เป็นไปไม่ได้"
    }
  },
  {
    "japanese": "虫",
    "translations": {
      "english": "insect",
      "chinese": "昆虫",
      "korean": "벌레",
      "vietnamese": "côn trùng",
      "thai": "แมลง"
    }
  },
  {
    "japanese": "息子",
    "translations": {
      "english": "son",
      "chinese": "儿子",
      "korean": "아들",
      "vietnamese": "con trai",
      "thai": "ลูกชาย"
    }
  },
  {
    "japanese": "娘",
    "translations": {
      "english": "daughter",
      "chinese": "女儿",
      "korean": "딸",
      "vietnamese": "con gái",
      "thai": "ลูกสาว"
    }
  },
  {
    "japanese": "投げる",
    "translations": {
      "english": "to throw or cast away",
      "chinese": "扔",
      "korean": "던지다",
      "vietnamese": "ném",
      "thai": "โยน"
    }
  },
  {
    "japanese": "泣く",
    "translations": {
      "english": "to weep",
      "chinese": "哭",
      "korean": "울다",
      "vietnamese": "khóc",
      "thai": "ร้องไห้"
    }
  },
  {
    "japanese": "無くなる",
    "translations": {
      "english": "to disappear; to get lost",
      "chinese": "消失",
      "korean": "없어지다",
      "vietnamese": "biến mất",
      "thai": "หายไป"
    }
  },
  {
    "japanese": "亡くなる",
    "translations": {
      "english": "to die",
      "chinese": "去世",
      "korean": "돌아가시다",
      "vietnamese": "qua đời",
      "thai": "เสียชีวิต"
    }
  },
  {
    "japanese": "生",
    "translations": {
      "english": "raw",
      "chinese": "生的",
      "korean": "날것의",
      "vietnamese": "sống",
      "thai": "ดิบ"
    }
  },
  {
    "japanese": "直る",
    "translations": {
      "english": "to be fixed, to be repaired",
      "chinese": "修好",
      "korean": "고쳐지다",
      "vietnamese": "được sửa",
      "thai": "ซ่อมแซม"
    }
  },
  {
    "japanese": "治る",
    "translations": {
      "english": "to be cured; to heal",
      "chinese": "治愈",
      "korean": "낫다",
      "vietnamese": "khỏi bệnh",
      "thai": "หาย"
    }
  },
  {
    "japanese": "慣れる",
    "translations": {
      "english": "to get used to",
      "chinese": "习惯",
      "korean": "익숙해지다",
      "vietnamese": "quen",
      "thai": "ชิน"
    }
  },
  {
    "japanese": "鳴る",
    "translations": {
      "english": "to sound",
      "chinese": "响",
      "korean": "울리다",
      "vietnamese": "kêu",
      "thai": "ส่งเสียง"
    }
  },
  {
    "japanese": "なるほど",
    "translations": {
      "english": "now I understand",
      "chinese": "原来如此",
      "korean": "그렇구나",
      "vietnamese": "ra vậy",
      "thai": "เข้าใจแล้ว"
    }
  },
  {
    "japanese": "寝坊",
    "translations": {
      "english": "sleeping in late; oversleeping",
      "chinese": "睡过头",
      "korean": "늦잠",
      "vietnamese": "ngủ quên",
      "thai": "ตื่นสาย"
    }
  },
  {
    "japanese": "値段",
    "translations": {
      "english": "price; cost",
      "chinese": "价格",
      "korean": "가격",
      "vietnamese": "giá cả",
      "thai": "ราคา"
    }
  },
  {
    "japanese": "眠い",
    "translations": {
      "english": "sleepy",
      "chinese": "困",
      "korean": "졸리다",
      "vietnamese": "buồn ngủ",
      "thai": "ง่วงนอน"
    }
  },
  {
    "japanese": "眠る",
    "translations": {
      "english": "to sleep",
      "chinese": "睡觉",
      "korean": "잠들다",
      "vietnamese": "ngủ",
      "thai": "หลับ"
    }
  },
  {
    "japanese": "熱",
    "translations": {
      "english": "fever",
      "chinese": "发烧",
      "korean": "열",
      "vietnamese": "sốt",
      "thai": "ไข้"
    }
  },
  {
    "japanese": "苦い",
    "translations": {
      "english": "bitter",
      "chinese": "苦的",
      "korean": "쓰다",
      "vietnamese": "đắng",
      "thai": "ขม"
    }
  },
  {
    "japanese": "逃げる",
    "translations": {
      "english": "to escape",
      "chinese": "逃跑",
      "korean": "도망가다",
      "vietnamese": "chạy trốn",
      "thai": "หนี"
    }
  },
  {
    "japanese": "二階建て",
    "translations": {
      "english": "two-storied building",
      "chinese": "两层楼",
      "korean": "2층집",
      "vietnamese": "nhà hai tầng",
      "thai": "อาคารสองชั้น"
    }
  },
  {
    "japanese": "人形",
    "translations": {
      "english": "doll",
      "chinese": "娃娃",
      "korean": "인형",
      "vietnamese": "búp bê",
      "thai": "ตุ๊กตา"
    }
  },
  {
    "japanese": "匂い",
    "translations": {
      "english": "a smell",
      "chinese": "气味",
      "korean": "냄새",
      "vietnamese": "mùi",
      "thai": "กลิ่น"
    }
  },
  {
    "japanese": "似る",
    "translations": {
      "english": "to be similar",
      "chinese": "相似",
      "korean": "닮다",
      "vietnamese": "giống",
      "thai": "คล้าย"
    }
  },
  {
    "japanese": "喉",
    "translations": {
      "english": "throat",
      "chinese": "喉咙",
      "korean": "목",
      "vietnamese": "cổ họng",
      "thai": "คอ"
    }
  },
  {
    "japanese": "残る",
    "translations": {
      "english": "to remain",
      "chinese": "剩下",
      "korean": "남다",
      "vietnamese": "còn lại",
      "thai": "เหลือ"
    }
  },
  {
    "japanese": "乗り換える",
    "translations": {
      "english": "to change between buses or trains",
      "chinese": "换乘",
      "korean": "갈아타다",
      "vietnamese": "chuyển xe",
      "thai": "เปลี่ยนรถ"
    }
  },
  {
    "japanese": "乗り物",
    "translations": {
      "english": "vehicle",
      "chinese": "交通工具",
      "korean": "탈것",
      "vietnamese": "phương tiện",
      "thai": "ยานพาหนะ"
    }
  },
  {
    "japanese": "濡れる",
    "translations": {
      "english": "to get wet",
      "chinese": "湿",
      "korean": "젖다",
      "vietnamese": "ướt",
      "thai": "เปียก"
    }
  },
  {
    "japanese": "塗る",
    "translations": {
      "english": "to paint; to plaster",
      "chinese": "涂",
      "korean": "칠하다",
      "vietnamese": "sơn",
      "thai": "ทาสี"
    }
  },
  {
    "japanese": "盗む",
    "translations": {
      "english": "to steal",
      "chinese": "偷",
      "korean": "훔치다",
      "vietnamese": "ăn cắp",
      "thai": "ขโมย"
    }
  },
  {
    "japanese": "入学",
    "translations": {
      "english": "entry to school or university; enrollment",
      "chinese": "入学",
      "korean": "입학",
      "vietnamese": "nhập học",
      "thai": "เข้าเรียน"
    }
  },
  {
    "japanese": "入院",
    "translations": {
      "english": "hospitalization",
      "chinese": "住院",
      "korean": "입원",
      "vietnamese": "nhập viện",
      "thai": "เข้าโรงพยาบาล"
    }
  },
  {
    "japanese": "落ちる",
    "translations": {
      "english": "to fall or drop",
      "chinese": "掉",
      "korean": "떨어지다",
      "vietnamese": "rơi",
      "thai": "ตก"
    }
  },
  {
    "japanese": "踊り",
    "translations": {
      "english": "a dance",
      "chinese": "舞蹈",
      "korean": "춤",
      "vietnamese": "múa",
      "thai": "การเต้น"
    }
  },
  {
    "japanese": "驚く",
    "translations": {
      "english": "to be surprised",
      "chinese": "惊讶",
      "korean": "놀라다",
      "vietnamese": "ngạc nhiên",
      "thai": "แปลกใจ"
    }
  },
  {
    "japanese": "踊る",
    "translations": {
      "english": "to dance",
      "chinese": "跳舞",
      "korean": "춤추다",
      "vietnamese": "nhảy múa",
      "thai": "เต้น"
    }
  },
  {
    "japanese": "お出でになる",
    "translations": {
      "english": "(respectful) to be",
      "chinese": "在(敬语)",
      "korean": "계시다(존경어)",
      "vietnamese": "có mặt (kính ngữ)",
      "thai": "อยู่ (สุภาพ)"
    }
  },
  {
    "japanese": "お祝い",
    "translations": {
      "english": "congratulation",
      "chinese": "祝贺",
      "korean": "축하",
      "vietnamese": "chúc mừng",
      "thai": "ขอแสดงความยินดี"
    }
  },
  {
    "japanese": "お嬢さん",
    "translations": {
      "english": "(another's) daughter",
      "chinese": "小姐",
      "korean": "따님",
      "vietnamese": "cô gái",
      "thai": "คุณหนู"
    }
  },
  {
    "japanese": "可笑しい",
    "translations": {
      "english": "strange or funny",
      "chinese": "奇怪的",
      "korean": "이상하다",
      "vietnamese": "lạ",
      "thai": "แปลก"
    }
  },
  {
    "japanese": "行う",
    "translations": {
      "english": "to perform; to do; to carry out",
      "chinese": "进行",
      "korean": "행하다",
      "vietnamese": "thực hiện",
      "thai": "ดำเนินการ"
    }
  },
  {
    "japanese": "怒る",
    "translations": {
      "english": "to be angry",
      "chinese": "生气",
      "korean": "화내다",
      "vietnamese": "tức giận",
      "thai": "โกรธ"
    }
  },
  {
    "japanese": "起こす",
    "translations": {
      "english": "to wake",
      "chinese": "叫醒",
      "korean": "깨우다",
      "vietnamese": "đánh thức",
      "thai": "ปลุก"
    }
  },
  {
    "japanese": "億",
    "translations": {
      "english": "one hundred million",
      "chinese": "亿",
      "korean": "억",
      "vietnamese": "trăm triệu",
      "thai": "ร้อยล้าน"
    }
  },
  {
    "japanese": "屋上",
    "translations": {
      "english": "rooftop",
      "chinese": "屋顶",
      "korean": "옥상",
      "vietnamese": "sân thượng",
      "thai": "หลังคา"
    }
  },
  {
    "japanese": "遅れる",
    "translations": {
      "english": "to be late",
      "chinese": "迟到",
      "korean": "늦다",
      "vietnamese": "trễ",
      "thai": "สาย"
    }
  },
  {
    "japanese": "贈り物",
    "translations": {
      "english": "present; gift",
      "chinese": "礼物",
      "korean": "선물",
      "vietnamese": "quà tặng",
      "thai": "ของขวัญ"
    }
  },
  {
    "japanese": "送る",
    "translations": {
      "english": "to send",
      "chinese": "寄",
      "korean": "보내다",
      "vietnamese": "gửi",
      "thai": "ส่ง"
    }
  },
  {
    "japanese": "お祭り",
    "translations": {
      "english": "festival",
      "chinese": "节日",
      "korean": "축제",
      "vietnamese": "lễ hội",
      "thai": "เทศกาล"
    }
  },
  {
    "japanese": "お見舞い",
    "translations": {
      "english": "visiting ill or distressed people",
      "chinese": "探病",
      "korean": "문병",
      "vietnamese": "thăm bệnh",
      "thai": "เยี่ยมคนป่วย"
    }
  },
  {
    "japanese": "お土産",
    "translations": {
      "english": "souvenir",
      "chinese": "纪念品",
      "korean": "선물",
      "vietnamese": "quà lưu niệm",
      "thai": "ของฝาก"
    }
  },
  {
    "japanese": "おもちゃ",
    "translations": {
      "english": "toy",
      "chinese": "玩具",
      "korean": "장난감",
      "vietnamese": "đồ chơi",
      "thai": "ของเล่น"
    }
  },
  {
    "japanese": "思い出す",
    "translations": {
      "english": "to remember",
      "chinese": "想起",
      "korean": "기억하다",
      "vietnamese": "nhớ ra",
      "thai": "นึกขึ้นได้"
    }
  },
  {
    "japanese": "表",
    "translations": {
      "english": "the front",
      "chinese": "表面",
      "korean": "앞면",
      "vietnamese": "mặt trước",
      "thai": "หน้า"
    }
  },
  {
    "japanese": "オートバイ",
    "translations": {
      "english": "motorcycle",
      "chinese": "摩托车",
      "korean": "오토바이",
      "vietnamese": "xe máy",
      "thai": "รถจักรยานยนต์"
    }
  },
  {
    "japanese": "お礼",
    "translations": {
      "english": "thanks",
      "chinese": "谢谢",
      "korean": "감사",
      "vietnamese": "cảm ơn",
      "thai": "ขอบคุณ"
    }
  },
  {
    "japanese": "折れる",
    "translations": {
      "english": "to break; to be broken",
      "chinese": "断",
      "korean": "부러지다",
      "vietnamese": "gãy",
      "thai": "หัก"
    }
  },
  {
    "japanese": "下りる",
    "translations": {
      "english": "to get off",
      "chinese": "下车",
      "korean": "내리다",
      "vietnamese": "xuống",
      "thai": "ลง"
    }
  },
  {
    "japanese": "折る",
    "translations": {
      "english": "to break or to fold",
      "chinese": "折",
      "korean": "꺾다",
      "vietnamese": "gấp",
      "thai": "พับ"
    }
  },
  {
    "japanese": "押し入れ",
    "translations": {
      "english": "closet",
      "chinese": "壁橱",
      "korean": "벽장",
      "vietnamese": "tủ quần áo",
      "thai": "ตู้เสื้อผ้า"
    }
  },
  {
    "japanese": "仰る",
    "translations": {
      "english": "(respectful) to say",
      "chinese": "说(敬语)",
      "korean": "말씀하시다",
      "vietnamese": "nói (kính ngữ)",
      "thai": "กล่าว (สุภาพ)"
    }
  },
  {
    "japanese": "お宅",
    "translations": {
      "english": "your home",
      "chinese": "您家",
      "korean": "댁",
      "vietnamese": "nhà bạn",
      "thai": "บ้านของคุณ"
    }
  },
  {
    "japanese": "音",
    "translations": {
      "english": "sound; note",
      "chinese": "声音",
      "korean": "소리",
      "vietnamese": "âm thanh",
      "thai": "เสียง"
    }
  },
  {
    "japanese": "落とす",
    "translations": {
      "english": "to drop",
      "chinese": "掉下",
      "korean": "떨어뜨리다",
      "vietnamese": "làm rơi",
      "thai": "ทำตก"
    }
  },
  {
    "japanese": "お釣り",
    "translations": {
      "english": "change (for a purchase)",
      "chinese": "找零",
      "korean": "거스름돈",
      "vietnamese": "tiền thừa",
      "thai": "เงินทอน"
    }
  },
  {
    "japanese": "夫",
    "translations": {
      "english": "husband",
      "chinese": "丈夫",
      "korean": "남편",
      "vietnamese": "chồng",
      "thai": "สามี"
    }
  },
  {
    "japanese": "終わり",
    "translations": {
      "english": "the end",
      "chinese": "结束",
      "korean": "끝",
      "vietnamese": "kết thúc",
      "thai": "จบ"
    }
  },
  {
    "japanese": "親",
    "translations": {
      "english": "parents",
      "chinese": "父母",
      "korean": "부모",
      "vietnamese": "cha mẹ",
      "thai": "พ่อแม่"
    }
  },
  {
    "japanese": "泳ぎ方",
    "translations": {
      "english": "way of swimming",
      "chinese": "游泳方法",
      "korean": "수영법",
      "vietnamese": "cách bơi",
      "thai": "วิธีว่ายน้ำ"
    }
  },
  {
    "japanese": "パート",
    "translations": {
      "english": "part; part time",
      "chinese": "兼职",
      "korean": "파트타임",
      "vietnamese": "bán thời gian",
      "thai": "งานพาร์ทไทม์"
    }
  },
  {
    "japanese": "パソコン",
    "translations": {
      "english": "personal computer",
      "chinese": "电脑",
      "korean": "컴퓨터",
      "vietnamese": "máy tính",
      "thai": "คอมพิวเตอร์"
    }
  },
  {
    "japanese": "ピアノ",
    "translations": {
      "english": "piano",
      "chinese": "钢琴",
      "korean": "피아노",
      "vietnamese": "đàn piano",
      "thai": "เปียโน"
    }
  },
  {
    "japanese": "プレゼント",
    "translations": {
      "english": "present; gift",
      "chinese": "礼物",
      "korean": "선물",
      "vietnamese": "quà tặng",
      "thai": "ของขวัญ"
    }
  },
  {
    "japanese": "冷房",
    "translations": {
      "english": "air conditioning",
      "chinese": "空调",
      "korean": "에어컨",
      "vietnamese": "điều hòa",
      "thai": "เครื่องปรับอากาศ"
    }
  },
  {
    "japanese": "レジ",
    "translations": {
      "english": "cashier",
      "chinese": "收银台",
      "korean": "계산대",
      "vietnamese": "quầy tính tiền",
      "thai": "เครื่องคิดเงิน"
    }
  },
  {
    "japanese": "歴史",
    "translations": {
      "english": "history",
      "chinese": "历史",
      "korean": "역사",
      "vietnamese": "lịch sử",
      "thai": "ประวัติศาสตร์"
    }
  },
  {
    "japanese": "連絡",
    "translations": {
      "english": "to contact; to get in touch",
      "chinese": "联系",
      "korean": "연락",
      "vietnamese": "liên lạc",
      "thai": "ติดต่อ"
    }
  },
  {
    "japanese": "レポート",
    "translations": {
      "english": "report",
      "chinese": "报告",
      "korean": "리포트",
      "vietnamese": "báo cáo",
      "thai": "รายงาน"
    }
  },
  {
    "japanese": "利用",
    "translations": {
      "english": "use; utilization; application",
      "chinese": "利用",
      "korean": "이용",
      "vietnamese": "sử dụng",
      "thai": "การใช้"
    }
  },
  {
    "japanese": "理由",
    "translations": {
      "english": "reason",
      "chinese": "理由",
      "korean": "이유",
      "vietnamese": "lý do",
      "thai": "เหตุผล"
    }
  },
  {
    "japanese": "留守",
    "translations": {
      "english": "absence",
      "chinese": "不在家",
      "korean": "부재",
      "vietnamese": "vắng nhà",
      "thai": "ไม่อยู่บ้าน"
    }
  },
  {
    "japanese": "旅館",
    "translations": {
      "english": "traditional inn; Japanese-style lodging",
      "chinese": "旅馆",
      "korean": "료칸",
      "vietnamese": "lữ quán",
      "thai": "โรงแรมแบบญี่ปุ่น"
    }
  },
  {
    "japanese": "両方",
    "translations": {
      "english": "both sides",
      "chinese": "双方",
      "korean": "양쪽",
      "vietnamese": "cả hai",
      "thai": "ทั้งสอง"
    }
  },
  {
    "japanese": "寂しい",
    "translations": {
      "english": "lonely",
      "chinese": "寂寞",
      "korean": "외롭다",
      "vietnamese": "cô đơn",
      "thai": "เหงา"
    }
  },
  {
    "japanese": "下がる",
    "translations": {
      "english": "to get down",
      "chinese": "下降",
      "korean": "내려가다",
      "vietnamese": "xuống",
      "thai": "ลง"
    }
  },
  {
    "japanese": "探す",
    "translations": {
      "english": "to look for",
      "chinese": "寻找",
      "korean": "찾다",
      "vietnamese": "tìm kiếm",
      "thai": "หา"
    }
  },
  {
    "japanese": "下げる",
    "translations": {
      "english": "to lower",
      "chinese": "降低",
      "korean": "내리다",
      "vietnamese": "hạ xuống",
      "thai": "ลด"
    }
  },
  {
    "japanese": "最後",
    "translations": {
      "english": "end; last",
      "chinese": "最后",
      "korean": "마지막",
      "vietnamese": "cuối cùng",
      "thai": "สุดท้าย"
    }
  },
  {
    "japanese": "最近",
    "translations": {
      "english": "recently",
      "chinese": "最近",
      "korean": "최근",
      "vietnamese": "gần đây",
      "thai": "เมื่อเร็วๆ นี้"
    }
  },
  {
    "japanese": "最初",
    "translations": {
      "english": "beginning; first",
      "chinese": "最初",
      "korean": "처음",
      "vietnamese": "đầu tiên",
      "thai": "ตอนแรก"
    }
  },
  {
    "japanese": "坂",
    "translations": {
      "english": "slope; hill",
      "chinese": "斜坡",
      "korean": "언덕",
      "vietnamese": "dốc",
      "thai": "ทางลาด"
    }
  },
  {
    "japanese": "盛ん",
    "translations": {
      "english": "popularity; prosperous",
      "chinese": "繁荣",
      "korean": "번성한",
      "vietnamese": "thịnh vượng",
      "thai": "เจริญรุ่งเรือง"
    }
  },
  {
    "japanese": "昨夜",
    "translations": {
      "english": "last night",
      "chinese": "昨晚",
      "korean": "어젯밤",
      "vietnamese": "đêm qua",
      "thai": "เมื่อคืน"
    }
  },
  {
    "japanese": "サンダル",
    "translations": {
      "english": "sandal",
      "chinese": "凉鞋",
      "korean": "샌들",
      "vietnamese": "dép",
      "thai": "รองเท้าแตะ"
    }
  },
  {
    "japanese": "サンドイッチ",
    "translations": {
      "english": "sandwich",
      "chinese": "三明治",
      "korean": "샌드위치",
      "vietnamese": "bánh sandwich",
      "thai": "แซนด์วิช"
    }
  },
  {
    "japanese": "産業",
    "translations": {
      "english": "industry",
      "chinese": "产业",
      "korean": "산업",
      "vietnamese": "công nghiệp",
      "thai": "อุตสาหกรรม"
    }
  },
  {
    "japanese": "サラダ",
    "translations": {
      "english": "salad",
      "chinese": "沙拉",
      "korean": "샐러드",
      "vietnamese": "salad",
      "thai": "สลัด"
    }
  },
   {
    "japanese": "再来週",
    "translations": {
      "english": "week after next",
      "chinese": "下下周",
      "korean": "다다음 주",
      "vietnamese": "tuần sau nữa",
      "thai": "อาทิตย์หน้าถัดไป"
    }
  },
  {
    "japanese": "差し上げる",
    "translations": {
      "english": "to give (humble)",
      "chinese": "给予（谦让语）",
      "korean": "드리다",
      "vietnamese": "tặng (khiêm nhường)",
      "thai": "ให้ (ถ่อมตัว)"
    }
  },
  {
    "japanese": "騒ぐ",
    "translations": {
      "english": "to make noise, to be excited",
      "chinese": "吵闹，兴奋",
      "korean": "시끄럽게 하다, 흥분하다",
      "vietnamese": "làm ồn, phấn khích",
      "thai": "ส่งเสียงดัง, ตื่นเต้น"
    }
  },
  {
    "japanese": "触る",
    "translations": {
      "english": "to touch",
      "chinese": "触摸",
      "korean": "만지다",
      "vietnamese": "chạm",
      "thai": "สัมผัส"
    }
  },
  {
    "japanese": "生物",
    "translations": {
      "english": "living thing",
      "chinese": "生物",
      "korean": "생물",
      "vietnamese": "sinh vật",
      "thai": "สิ่งมีชีวิต"
    }
  },
  {
    "japanese": "政治",
    "translations": {
      "english": "politics",
      "chinese": "政治",
      "korean": "정치",
      "vietnamese": "chính trị",
      "thai": "การเมือง"
    }
  },
  {
    "japanese": "生活",
    "translations": {
      "english": "to live, life",
      "chinese": "生活",
      "korean": "생활",
      "vietnamese": "sống, cuộc sống",
      "thai": "การใช้ชีวิต"
    }
  },
  {
    "japanese": "生命",
    "translations": {
      "english": "life",
      "chinese": "生命",
      "korean": "생명",
      "vietnamese": "mạng sống",
      "thai": "ชีวิต"
    }
  },
  {
    "japanese": "生産",
    "translations": {
      "english": "production",
      "chinese": "生产",
      "korean": "생산",
      "vietnamese": "sản xuất",
      "thai": "การผลิต"
    }
  },
  {
    "japanese": "西洋",
    "translations": {
      "english": "the west, Western countries",
      "chinese": "西洋",
      "korean": "서양",
      "vietnamese": "phương Tây",
      "thai": "ตะวันตก"
    }
  },
  {
    "japanese": "世界",
    "translations": {
      "english": "the world",
      "chinese": "世界",
      "korean": "세계",
      "vietnamese": "thế giới",
      "thai": "โลก"
    }
  },
  {
    "japanese": "席",
    "translations": {
      "english": "seat",
      "chinese": "座位",
      "korean": "자리",
      "vietnamese": "chỗ ngồi",
      "thai": "ที่นั่ง"
    }
  },
  {
    "japanese": "線",
    "translations": {
      "english": "line",
      "chinese": "线",
      "korean": "선",
      "vietnamese": "đường",
      "thai": "เส้น"
    }
  },
  {
    "japanese": "背中",
    "translations": {
      "english": "back (of body)",
      "chinese": "背部",
      "korean": "등",
      "vietnamese": "lưng",
      "thai": "หลัง"
    }
  },
  {
    "japanese": "先輩",
    "translations": {
      "english": "senior",
      "chinese": "前辈",
      "korean": "선배",
      "vietnamese": "tiền bối",
      "thai": "รุ่นพี่"
    }
  },
  {
    "japanese": "戦争",
    "translations": {
      "english": "war",
      "chinese": "战争",
      "korean": "전쟁",
      "vietnamese": "chiến tranh",
      "thai": "สงคราม"
    }
  },
  {
    "japanese": "説明",
    "translations": {
      "english": "explanation",
      "chinese": "说明",
      "korean": "설명",
      "vietnamese": "giải thích",
      "thai": "คำอธิบาย"
    }
  },
  {
    "japanese": "社長",
    "translations": {
      "english": "company president, manager, director",
      "chinese": "社长",
      "korean": "사장",
      "vietnamese": "giám đốc công ty",
      "thai": "ประธานบริษัท"
    }
  },
  {
    "japanese": "社会",
    "translations": {
      "english": "society, public, community, the world",
      "chinese": "社会",
      "korean": "사회",
      "vietnamese": "xã hội",
      "thai": "สังคม"
    }
  },
  {
    "japanese": "市",
    "translations": {
      "english": "city",
      "chinese": "市",
      "korean": "시",
      "vietnamese": "thành phố",
      "thai": "เมือง"
    }
  },
  {
    "japanese": "試合",
    "translations": {
      "english": "match, game",
      "chinese": "比赛",
      "korean": "시합",
      "vietnamese": "trận đấu",
      "thai": "การแข่งขัน"
    }
  },
  {
    "japanese": "叱る",
    "translations": {
      "english": "to scold",
      "chinese": "责骂",
      "korean": "꾸짖다",
      "vietnamese": "mắng",
      "thai": "ดุ"
    }
  },
  {
    "japanese": "仕方",
    "translations": {
      "english": "way, method",
      "chinese": "方法",
      "korean": "방법",
      "vietnamese": "cách thức",
      "thai": "วิธีการ"
    }
  },
  {
    "japanese": "試験",
    "translations": {
      "english": "examination",
      "chinese": "考试",
      "korean": "시험",
      "vietnamese": "kỳ thi",
      "thai": "การสอบ"
    }
  },
  {
    "japanese": "しっかり",
    "translations": {
      "english": "firmly, steadily",
      "chinese": "牢固地",
      "korean": "단단히",
      "vietnamese": "chắc chắn",
      "thai": "แน่นหนา"
    }
  },
  {
    "japanese": "島",
    "translations": {
      "english": "island",
      "chinese": "岛",
      "korean": "섬",
      "vietnamese": "đảo",
      "thai": "เกาะ"
    }
  },
  {
    "japanese": "市民",
    "translations": {
      "english": "citizen",
      "chinese": "市民",
      "korean": "시민",
      "vietnamese": "công dân",
      "thai": "ประชาชน"
    }
  },
  {
    "japanese": "品物",
    "translations": {
      "english": "goods, article, thing",
      "chinese": "物品",
      "korean": "물건",
      "vietnamese": "hàng hóa",
      "thai": "สิ่งของ"
    }
  },
  {
    "japanese": "新聞社",
    "translations": {
      "english": "newspaper company",
      "chinese": "报社",
      "korean": "신문사",
      "vietnamese": "công ty báo chí",
      "thai": "บริษัทหนังสือพิมพ์"
    }
  },
  {
    "japanese": "親切",
    "translations": {
      "english": "kindness",
      "chinese": "亲切",
      "korean": "친절",
      "vietnamese": "tử tế",
      "thai": "ใจดี"
    }
  },
  {
    "japanese": "失敗",
    "translations": {
      "english": "failure",
      "chinese": "失败",
      "korean": "실패",
      "vietnamese": "thất bại",
      "thai": "ความล้มเหลว"
    }
  },
  {
    "japanese": "調べる",
    "translations": {
      "english": "to investigate",
      "chinese": "调查",
      "korean": "조사하다",
      "vietnamese": "điều tra",
      "thai": "ตรวจสอบ"
    }
  },
  {
    "japanese": "知らせる",
    "translations": {
      "english": "to notify",
      "chinese": "通知",
      "korean": "알리다",
      "vietnamese": "thông báo",
      "thai": "แจ้งให้ทราบ"
    }
  },
  {
    "japanese": "下着",
    "translations": {
      "english": "underwear",
      "chinese": "内衣",
      "korean": "속옷",
      "vietnamese": "đồ lót",
      "thai": "ชุดชั้นใน"
    }
  },
  {
    "japanese": "食料品",
    "translations": {
      "english": "food, groceries",
      "chinese": "食品",
      "korean": "식료품",
      "vietnamese": "thực phẩm",
      "thai": "อาหาร"
    }
  },
  {
    "japanese": "小学校",
    "translations": {
      "english": "elementary school",
      "chinese": "小学",
      "korean": "초등학교",
      "vietnamese": "trường tiểu học",
      "thai": "โรงเรียนประถม"
    }
  },
  {
    "japanese": "生じる",
    "translations": {
      "english": "to produce",
      "chinese": "产生",
      "korean": "생기다",
      "vietnamese": "sinh ra",
      "thai": "เกิดขึ้น"
    }
  },
  {
    "japanese": "紹介",
    "translations": {
      "english": "introduction",
      "chinese": "介绍",
      "korean": "소개",
      "vietnamese": "giới thiệu",
      "thai": "การแนะนำ"
    }
  },
  {
    "japanese": "将来",
    "translations": {
      "english": "future",
      "chinese": "将来",
      "korean": "장래",
      "vietnamese": "tương lai",
      "thai": "อนาคต"
    }
  },
  {
    "japanese": "小説",
    "translations": {
      "english": "novel",
      "chinese": "小说",
      "korean": "소설",
      "vietnamese": "tiểu thuyết",
      "thai": "นวนิยาย"
    }
  },
  {
    "japanese": "趣味",
    "translations": {
      "english": "hobby, pastime, preference",
      "chinese": "爱好",
      "korean": "취미",
      "vietnamese": "sở thích",
      "thai": "งานอดิเรก"
    }
  },
  {
    "japanese": "習慣",
    "translations": {
      "english": "habit, custom, cultural practice",
      "chinese": "习惯",
      "korean": "습관",
      "vietnamese": "thói quen",
      "thai": "นิสัย"
    }
  },
  {
    "japanese": "祖母",
    "translations": {
      "english": "grandmother",
      "chinese": "祖母",
      "korean": "할머니",
      "vietnamese": "bà ngoại",
      "thai": "คุณยาย"
    }
  },
  {
    "japanese": "育てる",
    "translations": {
      "english": "to rear, to bring up",
      "chinese": "培养",
      "korean": "기르다",
      "vietnamese": "nuôi dưỡng",
      "thai": "เลี้ยงดู"
    }
  },
  {
    "japanese": "祖父",
    "translations": {
      "english": "grandfather",
      "chinese": "祖父",
      "korean": "할아버지",
      "vietnamese": "ông ngoại",
      "thai": "คุณปู่"
    }
  },
  {
    "japanese": "ソフト",
    "translations": {
      "english": "soft",
      "chinese": "软的",
      "korean": "소프트",
      "vietnamese": "mềm",
      "thai": "นุ่ม"
    }
  },
  {
    "japanese": "そんな",
    "translations": {
      "english": "that sort of",
      "chinese": "那样的",
      "korean": "그런",
      "vietnamese": "như thế",
      "thai": "แบบนั้น"
    }
  },
  {
    "japanese": "それで",
    "translations": {
      "english": "because of that",
      "chinese": "因此",
      "korean": "그래서",
      "vietnamese": "vì thế",
      "thai": "ด้วยเหตุนั้น"
    }
  },
  {
    "japanese": "それほど",
    "translations": {
      "english": "to that extent",
      "chinese": "那么",
      "korean": "그렇게",
      "vietnamese": "đến mức đó",
      "thai": "ขนาดนั้น"
    }
  },
  {
    "japanese": "そろそろ",
    "translations": {
      "english": "gradually, soon",
      "chinese": "渐渐地",
      "korean": "슬슬",
      "vietnamese": "dần dần",
      "thai": "ค่อยๆ"
    }
  },
  {
    "japanese": "卒業",
    "translations": {
      "english": "graduation",
      "chinese": "毕业",
      "korean": "졸업",
      "vietnamese": "tốt nghiệp",
      "thai": "การจบการศึกษา"
    }
  },
  {
    "japanese": "相談",
    "translations": {
      "english": "to discuss",
      "chinese": "商量",
      "korean": "상담",
      "vietnamese": "thảo luận",
      "thai": "ปรึกษา"
    }
  },
  {
    "japanese": "素晴らしい",
    "translations": {
      "english": "wonderful",
      "chinese": "精彩的",
      "korean": "훌륭하다",
      "vietnamese": "tuyệt vời",
      "thai": "ยอดเยี่ยม"
    }
  },
  {
    "japanese": "滑る",
    "translations": {
      "english": "to slide, to slip",
      "chinese": "滑",
      "korean": "미끄러지다",
      "vietnamese": "trượt",
      "thai": "ลื่น"
    }
  },
  {
    "japanese": "凄い",
    "translations": {
      "english": "terrific",
      "chinese": "厉害",
      "korean": "대단하다",
      "vietnamese": "kinh khủng",
      "thai": "เจ๋ง"
    }
  },
  {
    "japanese": "水道",
    "translations": {
      "english": "water supply",
      "chinese": "自来水",
      "korean": "수도",
      "vietnamese": "cấp nước",
      "thai": "ประปา"
    }
  },
  {
    "japanese": "水泳",
    "translations": {
      "english": "swimming",
      "chinese": "游泳",
      "korean": "수영",
      "vietnamese": "bơi lội",
      "thai": "การว่ายน้ำ"
    }
  },
  {
    "japanese": "すっかり",
    "translations": {
      "english": "completely",
      "chinese": "完全地",
      "korean": "완전히",
      "vietnamese": "hoàn toàn",
      "thai": "สิ้นเชิง"
    }
  },
  {
    "japanese": "空く",
    "translations": {
      "english": "to be hungry",
      "chinese": "饿",
      "korean": "배고프다",
      "vietnamese": "đói",
      "thai": "หิว"
    }
  },
  {
    "japanese": "スクリーン",
    "translations": {
      "english": "screen",
      "chinese": "屏幕",
      "korean": "스크린",
      "vietnamese": "màn hình",
      "thai": "หน้าจอ"
    }
  },
  {
    "japanese": "隅",
    "translations": {
      "english": "corner, nook",
      "chinese": "角落",
      "korean": "모퉁이",
      "vietnamese": "góc",
      "thai": "มุม"
    }
  },
  {
    "japanese": "済む",
    "translations": {
      "english": "to finish",
      "chinese": "完成",
      "korean": "끝나다",
      "vietnamese": "hoàn thành",
      "thai": "เสร็จ"
    }
  },
  {
    "japanese": "砂",
    "translations": {
      "english": "sand",
      "chinese": "沙子",
      "korean": "모래",
      "vietnamese": "cát",
      "thai": "ทราย"
    }
  },
  {
    "japanese": "すり",
    "translations": {
      "english": "pickpocket",
      "chinese": "扒手",
      "korean": "소매치기",
      "vietnamese": "kẻ móc túi",
      "thai": "นักล้วงกระเป๋า"
    }
  },
  {
    "japanese": "スーツケース",
    "translations": {
      "english": "suitcase",
      "chinese": "行李箱",
      "korean": "여행가방",
      "vietnamese": "vali",
      "thai": "กระเป๋าเดินทาง"
    }
  },
  {
    "japanese": "進む",
    "translations": {
      "english": "to make progress",
      "chinese": "前进",
      "korean": "나아가다",
      "vietnamese": "tiến bộ",
      "thai": "ก้าวหน้า"
    }
  },
  {
    "japanese": "ステーキ",
    "translations": {
      "english": "steak",
      "chinese": "牛排",
      "korean": "스테이크",
      "vietnamese": "bít tết",
      "thai": "สเต็ก"
    }
  },
  {
    "japanese": "ステレオ",
    "translations": {
      "english": "stereo",
      "chinese": "立体声",
      "korean": "스테레오",
      "vietnamese": "âm thanh nổi",
      "thai": "สเตริโอ"
    }
  },
  {
    "japanese": "捨てる",
    "translations": {
      "english": "to throw away",
      "chinese": "扔掉",
      "korean": "버리다",
      "vietnamese": "vứt bỏ",
      "thai": "ทิ้ง"
    }
  },
  {
    "japanese": "数学",
    "translations": {
      "english": "mathematics, arithmetic",
      "chinese": "数学",
      "korean": "수학",
      "vietnamese": "toán học",
      "thai": "คณิตศาสตร์"
    }
  },
  {
    "japanese": "スーツ",
    "translations": {
      "english": "suit",
      "chinese": "西装",
      "korean": "정장",
      "vietnamese": "com lê",
      "thai": "สูท"
    }
  },
  {
    "japanese": "正しい",
    "translations": {
      "english": "right, correct",
      "chinese": "正确的",
      "korean": "올바른",
      "vietnamese": "đúng",
      "thai": "ถูกต้อง"
    }
  },
  {
    "japanese": "退院",
    "translations": {
      "english": "leaving hospital, discharge from hospital",
      "chinese": "出院",
      "korean": "퇴원",
      "vietnamese": "xuất viện",
      "thai": "จำหน่ายจากโรงพยาบาล"
    }
  },
  {
    "japanese": "台風",
    "translations": {
      "english": "typhoon",
      "chinese": "台风",
      "korean": "태풍",
      "vietnamese": "bão",
      "thai": "ไต้ฝุ่น"
    }
  },
  {
    "japanese": "タイプ",
    "translations": {
      "english": "type, style",
      "chinese": "类型",
      "korean": "타입",
      "vietnamese": "loại",
      "thai": "ประเภท"
    }
  },
  {
    "japanese": "たいてい",
    "translations": {
      "english": "usually",
      "chinese": "通常",
      "korean": "대개",
      "vietnamese": "thường",
      "thai": "โดยปกติ"
    }
  },
  {
    "japanese": "たまに",
    "translations": {
      "english": "occasionally",
      "chinese": "偶尔",
      "korean": "가끔",
      "vietnamese": "thỉnh thoảng",
      "thai": "บางครั้ง"
    }
  },
  {
    "japanese": "棚",
    "translations": {
      "english": "shelves",
      "chinese": "架子",
      "korean": "선반",
      "vietnamese": "kệ",
      "thai": "ชั้นวาง"
    }
  },
  {
    "japanese": "誕生",
    "translations": {
      "english": "birth",
      "chinese": "诞生",
      "korean": "탄생",
      "vietnamese": "sinh",
      "thai": "การเกิด"
    }
  },
  {
    "japanese": "楽しみ",
    "translations": {
      "english": "looking forward to",
      "chinese": "期待",
      "korean": "즐거움",
      "vietnamese": "mong chờ",
      "thai": "ความสนุกสนาน"
    }
  },
  {
    "japanese": "倒れる",
    "translations": {
      "english": "to fall (over, down)",
      "chinese": "倒下",
      "korean": "쓰러지다",
      "vietnamese": "ngã",
      "thai": "ล้ม"
    }
  },
  {
    "japanese": "足りる",
    "translations": {
      "english": "to be sufficient, to be enough",
      "chinese": "足够",
      "korean": "충분하다",
      "vietnamese": "đủ",
      "thai": "เพียงพอ"
    }
  },
  {
    "japanese": "足す",
    "translations": {
      "english": "to add (numbers/something)",
      "chinese": "加",
      "korean": "더하다",
      "vietnamese": "cộng",
      "thai": "บวก"
    }
  },
  {
    "japanese": "畳",
    "translations": {
      "english": "Japanese straw mat",
      "chinese": "榻榻米",
      "korean": "다다미",
      "vietnamese": "chiếu tatami",
      "thai": "เสื่อญี่ปุ่น"
    }
  },
  {
    "japanese": "建てる",
    "translations": {
      "english": "to build",
      "chinese": "建造",
      "korean": "짓다",
      "vietnamese": "xây dựng",
      "thai": "สร้าง"
    }
  },
  {
    "japanese": "尋ねる",
    "translations": {
      "english": "to ask",
      "chinese": "询问",
      "korean": "묻다",
      "vietnamese": "hỏi",
      "thai": "ถาม"
    }
  },
  {
    "japanese": "訪ねる",
    "translations": {
      "english": "to visit",
      "chinese": "拜访",
      "korean": "방문하다",
      "vietnamese": "thăm",
      "thai": "เยี่ยม"
    }
  },
  {
    "japanese": "手袋",
    "translations": {
      "english": "glove",
      "chinese": "手套",
      "korean": "장갑",
      "vietnamese": "găng tay",
      "thai": "ถุงมือ"
    }
  },
  {
    "japanese": "丁寧",
    "translations": {
      "english": "polite",
      "chinese": "丁寧",
      "korean": "정중한",
      "vietnamese": "lịch sự",
      "thai": "สุภาพ"
    }
  },
  {
    "japanese": "テキスト",
    "translations": {
      "english": "text, textbook",
      "chinese": "课本",
      "korean": "텍스트",
      "vietnamese": "giáo trình",
      "thai": "ตำรา"
    }
  },
  {
    "japanese": "適当",
    "translations": {
      "english": "suitable",
      "chinese": "适当",
      "korean": "적당한",
      "vietnamese": "thích hợp",
      "thai": "เหมาะสม"
    }
  },
  {
    "japanese": "点",
    "translations": {
      "english": "point, dot",
      "chinese": "点",
      "korean": "점",
      "vietnamese": "điểm",
      "thai": "จุด"
    }
  },
  {
    "japanese": "店員",
    "translations": {
      "english": "employee (of a store), shop assistant, clerk",
      "chinese": "店员",
      "korean": "점원",
      "vietnamese": "nhân viên bán hàng",
      "thai": "พนักงานขาย"
    }
  },
  {
    "japanese": "テニス",
    "translations": {
      "english": "tennis",
      "chinese": "网球",
      "korean": "테니스",
      "vietnamese": "quần vợt",
      "thai": "เทนนิส"
    }
  },
  {
    "japanese": "天気予報",
    "translations": {
      "english": "weather forecast",
      "chinese": "天气预报",
      "korean": "일기예보",
      "vietnamese": "dự báo thời tiết",
      "thai": "พยากรณ์อากาศ"
    }
  },
  {
    "japanese": "展覧会",
    "translations": {
      "english": "exhibition",
      "chinese": "展览会",
      "korean": "전람회",
      "vietnamese": "triển lãm",
      "thai": "นิทรรศการ"
    }
  },
  {
    "japanese": "寺",
    "translations": {
      "english": "temple",
      "chinese": "寺庙",
      "korean": "절",
      "vietnamese": "chùa",
      "thai": "วัด"
    }
  },
  {
    "japanese": "手伝う",
    "translations": {
      "english": "to help, to assist, to aid",
      "chinese": "帮助",
      "korean": "돕다",
      "vietnamese": "giúp đỡ",
      "thai": "ช่วยเหลือ"
    }
  },
  {
    "japanese": "途中",
    "translations": {
      "english": "on the way",
      "chinese": "途中",
      "korean": "도중에",
      "vietnamese": "trên đường",
      "thai": "ระหว่างทาง"
    }
  },
  {
    "japanese": "特急",
    "translations": {
      "english": "limited express (train, faster than an express)",
      "chinese": "特急",
      "korean": "특급",
      "vietnamese": "tàu tốc hành",
      "thai": "รถไฟด่วนพิเศษ"
    }
  },
  {
    "japanese": "床屋",
    "translations": {
      "english": "barber",
      "chinese": "理发店",
      "korean": "이발소",
      "vietnamese": "tiệm cắt tóc",
      "thai": "ร้านตัดผม"
    }
  },
  {
    "japanese": "特別",
    "translations": {
      "english": "special; particular; extraordinary; exceptional",
      "chinese": "特别",
      "korean": "특별",
      "vietnamese": "đặc biệt",
      "thai": "พิเศษ"
    }
  },
  {
    "japanese": "特に",
    "translations": {
      "english": "particularly; especially; in particular; expressly",
      "chinese": "特别",
      "korean": "특히",
      "vietnamese": "đặc biệt",
      "thai": "โดยเฉพาะ"
    }
  },
  {
    "japanese": "泊まる",
    "translations": {
      "english": "to stay at",
      "chinese": "住宿",
      "korean": "머물다",
      "vietnamese": "ở lại",
      "thai": "พักค้างคืน"
    }
  },
  {
    "japanese": "止める",
    "translations": {
      "english": "to stop something",
      "chinese": "停止",
      "korean": "멈추다",
      "vietnamese": "dừng lại",
      "thai": "หยุด"
    }
  },
  {
    "japanese": "遠く",
    "translations": {
      "english": "distant",
      "chinese": "远方",
      "korean": "멀리",
      "vietnamese": "xa xôi",
      "thai": "ไกล"
    }
  },
  {
    "japanese": "通る",
    "translations": {
      "english": "to go through",
      "chinese": "通过",
      "korean": "지나가다",
      "vietnamese": "đi qua",
      "thai": "ผ่าน"
    }
  },
  {
    "japanese": "取り替える",
    "translations": {
      "english": "to exchange; to swap; to replace",
      "chinese": "更换",
      "korean": "바꾸다",
      "vietnamese": "thay thế",
      "thai": "แลกเปลี่ยน"
    }
  },
  {
    "japanese": "到頭",
    "translations": {
      "english": "finally, after all",
      "chinese": "终于",
      "korean": "마침내",
      "vietnamese": "cuối cùng",
      "thai": "ในที่สุด"
    }
  },
  {
    "japanese": "続ける",
    "translations": {
      "english": "to continue; to keep up; to keep on",
      "chinese": "继续",
      "korean": "계속하다",
      "vietnamese": "tiếp tục",
      "thai": "ดำเนินต่อ"
    }
  },
  {
    "japanese": "続く",
    "translations": {
      "english": "to continue",
      "chinese": "继续",
      "korean": "계속되다",
      "vietnamese": "tiếp tục",
      "thai": "ต่อเนื่อง"
    }
  },
  {
    "japanese": "都合",
    "translations": {
      "english": "convenience",
      "chinese": "方便",
      "korean": "형편",
      "vietnamese": "thuận tiện",
      "thai": "ความสะดวก"
    }
  },
  {
    "japanese": "捕まえる",
    "translations": {
      "english": "to catch",
      "chinese": "抓住",
      "korean": "잡다",
      "vietnamese": "bắt",
      "thai": "จับ"
    }
  },
  {
    "japanese": "漬ける",
    "translations": {
      "english": "to soak; to pickle",
      "chinese": "腌制",
      "korean": "절이다",
      "vietnamese": "ngâm",
      "thai": "แช่"
    }
  },
  {
    "japanese": "月",
    "translations": {
      "english": "moon",
      "chinese": "月亮",
      "korean": "달",
      "vietnamese": "mặt trăng",
      "thai": "ดวงจันทร์"
    }
  },
  {
    "japanese": "付く",
    "translations": {
      "english": "to be attached",
      "chinese": "附着",
      "korean": "붙다",
      "vietnamese": "dính",
      "thai": "ติด"
    }
  },
  {
    "japanese": "妻",
    "translations": {
      "english": "(humble) wife",
      "chinese": "妻子",
      "korean": "아내",
      "vietnamese": "vợ",
      "thai": "ภรรยา"
    }
  },
  {
    "japanese": "連れる",
    "translations": {
      "english": "to take (someone) with one",
      "chinese": "带着",
      "korean": "데리고 가다",
      "vietnamese": "dẫn theo",
      "thai": "พาไป"
    }
  },
  {
    "japanese": "釣る",
    "translations": {
      "english": "to fish",
      "chinese": "钓鱼",
      "korean": "낚다",
      "vietnamese": "câu cá",
      "thai": "ตกปลา"
    }
  },
  {
    "japanese": "伝える",
    "translations": {
      "english": "to report; to tell",
      "chinese": "传达",
      "korean": "전하다",
      "vietnamese": "truyền đạt",
      "thai": "บอก"
    }
  },
  {
    "japanese": "包む",
    "translations": {
      "english": "to wrap",
      "chinese": "包装",
      "korean": "싸다",
      "vietnamese": "gói",
      "thai": "ห่อ"
    }
  },
  {
    "japanese": "腕",
    "translations": {
      "english": "arm",
      "chinese": "手臂",
      "korean": "팔",
      "vietnamese": "cánh tay",
      "thai": "แขน"
    }
  },
  {
    "japanese": "植える",
    "translations": {
      "english": "to plant; to grow",
      "chinese": "种植",
      "korean": "심다",
      "vietnamese": "trồng",
      "thai": "ปลูก"
    }
  },
  {
    "japanese": "動く",
    "translations": {
      "english": "to move",
      "chinese": "移动",
      "korean": "움직이다",
      "vietnamese": "di chuyển",
      "thai": "เคลื่อนไหว"
    }
  },
  {
    "japanese": "伺う",
    "translations": {
      "english": "to visit",
      "chinese": "拜访",
      "korean": "찾아뵙다",
      "vietnamese": "thăm viếng",
      "thai": "เยี่ยม"
    }
  },
  {
    "japanese": "受ける",
    "translations": {
      "english": "to take a lesson or test",
      "chinese": "接受",
      "korean": "받다",
      "vietnamese": "nhận",
      "thai": "รับ"
    }
  },
  {
    "japanese": "受付",
    "translations": {
      "english": "reception (desk); information desk",
      "chinese": "接待处",
      "korean": "접수처",
      "vietnamese": "quầy tiếp tân",
      "thai": "แผนกต้อนรับ"
    }
  },
  {
    "japanese": "生まれ",
    "translations": {
      "english": "birth",
      "chinese": "出生",
      "korean": "태어남",
      "vietnamese": "sinh ra",
      "thai": "การเกิด"
    }
  },
  {
    "japanese": "運転手",
    "translations": {
      "english": "driver; chauffeur",
      "chinese": "司机",
      "korean": "운전사",
      "vietnamese": "tài xế",
      "thai": "คนขับรถ"
    }
  },
  {
    "japanese": "裏",
    "translations": {
      "english": "reverse side",
      "chinese": "背面",
      "korean": "뒷면",
      "vietnamese": "mặt sau",
      "thai": "ด้านหลัง"
    }
  },
  {
    "japanese": "嬉しい",
    "translations": {
      "english": "happy",
      "chinese": "高兴",
      "korean": "기쁘다",
      "vietnamese": "vui mừng",
      "thai": "มีความสุข"
    }
  },
  {
    "japanese": "売り場",
    "translations": {
      "english": "selling area",
      "chinese": "销售区",
      "korean": "판매장",
      "vietnamese": "khu bán hàng",
      "thai": "พื้นที่ขาย"
    }
  },
  {
    "japanese": "嘘",
    "translations": {
      "english": "a lie",
      "chinese": "谎言",
      "korean": "거짓말",
      "vietnamese": "lời nói dối",
      "thai": "การโกหก"
    }
  },
  {
    "japanese": "打つ",
    "translations": {
      "english": "to hit",
      "chinese": "打击",
      "korean": "치다",
      "vietnamese": "đánh",
      "thai": "ตี"
    }
  },
  {
    "japanese": "美しい",
    "translations": {
      "english": "beautiful",
      "chinese": "美丽",
      "korean": "아름답다",
      "vietnamese": "đẹp",
      "thai": "สวยงาม"
    }
  },
  {
    "japanese": "移る",
    "translations": {
      "english": "to move house or transfer",
      "chinese": "搬家",
      "korean": "이사가다",
      "vietnamese": "chuyển nhà",
      "thai": "ย้าย"
    }
  },
  {
    "japanese": "写す",
    "translations": {
      "english": "to copy or photograph",
      "chinese": "复制",
      "korean": "베끼다",
      "vietnamese": "sao chép",
      "thai": "คัดลอก"
    }
  },
  {
    "japanese": "ワープロ",
    "translations": {
      "english": "word processor",
      "chinese": "文字处理器",
      "korean": "워드프로세서",
      "vietnamese": "máy xử lý văn bản",
      "thai": "โปรแกรมประมวลผลคำ"
    }
  },
  {
    "japanese": "別れる",
    "translations": {
      "english": "to separate",
      "chinese": "分别",
      "korean": "헤어지다",
      "vietnamese": "chia tay",
      "thai": "แยกจาก"
    }
  },
  {
    "japanese": "沸かす",
    "translations": {
      "english": "to boil; to heat",
      "chinese": "烧开",
      "korean": "끓이다",
      "vietnamese": "đun sôi",
      "thai": "ต้ม"
    }
  },
  {
    "japanese": "沸く",
    "translations": {
      "english": "to boil",
      "chinese": "沸腾",
      "korean": "끓다",
      "vietnamese": "sôi",
      "thai": "เดือด"
    }
  },
  {
    "japanese": "笑う",
    "translations": {
      "english": "to laugh; to smile",
      "chinese": "笑",
      "korean": "웃다",
      "vietnamese": "cười",
      "thai": "หัวเราะ"
    }
  },
  {
    "japanese": "割れる",
    "translations": {
      "english": "to break",
      "chinese": "破裂",
      "korean": "깨지다",
      "vietnamese": "vỡ",
      "thai": "แตก"
    }
  },
  {
    "japanese": "割合",
    "translations": {
      "english": "rate; ratio",
      "chinese": "比例",
      "korean": "비율",
      "vietnamese": "tỷ lệ",
      "thai": "อัตราส่วน"
    }
  },
  {
    "japanese": "忘れ物",
    "translations": {
      "english": "lost article",
      "chinese": "遗失物",
      "korean": "잃어버린 물건",
      "vietnamese": "đồ bỏ quên",
      "thai": "ของที่ลืม"
    }
  },
  {
    "japanese": "焼ける",
    "translations": {
      "english": "to burn; to be roasted",
      "chinese": "烧焦",
      "korean": "타다",
      "vietnamese": "cháy",
      "thai": "ไหม้"
    }
  },
  {
    "japanese": "焼く",
    "translations": {
      "english": "to bake; to grill",
      "chinese": "烤",
      "korean": "굽다",
      "vietnamese": "nướng",
      "thai": "ย่าง"
    }
  },
  {
    "japanese": "役に立つ",
    "translations": {
      "english": "to be helpful",
      "chinese": "有用",
      "korean": "도움이 되다",
      "vietnamese": "có ích",
      "thai": "เป็นประโยชน์"
    }
  },
  {
    "japanese": "約束",
    "translations": {
      "english": "promise",
      "chinese": "约定",
      "korean": "약속",
      "vietnamese": "lời hứa",
      "thai": "สัญญา"
    }
  },
  {
    "japanese": "止む",
    "translations": {
      "english": "to stop",
      "chinese": "停止",
      "korean": "그치다",
      "vietnamese": "ngừng",
      "thai": "หยุด"
    }
  },
  {
    "japanese": "やっぱり",
    "translations": {
      "english": "as I thought",
      "chinese": "果然",
      "korean": "역시",
      "vietnamese": "quả nhiên",
      "thai": "อย่างที่คิด"
    }
  },
  {
    "japanese": "優しい",
    "translations": {
      "english": "kind",
      "chinese": "温柔",
      "korean": "친절하다",
      "vietnamese": "tử tế",
      "thai": "ใจดี"
    }
  },
  {
    "japanese": "痩せる",
    "translations": {
      "english": "to become thin",
      "chinese": "变瘦",
      "korean": "마르다",
      "vietnamese": "gầy đi",
      "thai": "ผอม"
    }
  },
  {
    "japanese": "柔らかい",
    "translations": {
      "english": "soft",
      "chinese": "柔软",
      "korean": "부드럽다",
      "vietnamese": "mềm",
      "thai": "นุ่ม"
    }
  },
  {
    "japanese": "汚れる",
    "translations": {
      "english": "to get dirty",
      "chinese": "变脏",
      "korean": "더러워지다",
      "vietnamese": "bẩn",
      "thai": "สกปรก"
    }
  },
  {
    "japanese": "喜ぶ",
    "translations": {
      "english": "to be delighted",
      "chinese": "高兴",
      "korean": "기뻐하다",
      "vietnamese": "vui mừng",
      "thai": "ดีใจ"
    }
  },
  {
    "japanese": "寄る",
    "translations": {
      "english": "to visit; to drop by",
      "chinese": "顺便拜访",
      "korean": "들르다",
      "vietnamese": "ghé thăm",
      "thai": "แวะ"
    }
  },
  {
    "japanese": "予習",
    "translations": {
      "english": "preparation for a lesson",
      "chinese": "预习",
      "korean": "예습",
      "vietnamese": "chuẩn bị bài",
      "thai": "การเตรียมบทเรียน"
    }
  },
  {
    "japanese": "予定",
    "translations": {
      "english": "plan",
      "chinese": "计划",
      "korean": "예정",
      "vietnamese": "kế hoạch",
      "thai": "แผน"
    }
  },
  {
    "japanese": "用",
    "translations": {
      "english": "business; task; errand; use; purpose",
      "chinese": "用途",
      "korean": "용도",
      "vietnamese": "công việc",
      "thai": "ธุระ"
    }
  },
  {
    "japanese": "用意",
    "translations": {
      "english": "preparation; arrangements; provision; getting ready",
      "chinese": "准备",
      "korean": "준비",
      "vietnamese": "chuẩn bị",
      "thai": "การเตรียม"
    }
  },
  {
    "japanese": "用事",
    "translations": {
      "english": "tasks; things to do; errand; business (to take care of)",
      "chinese": "事情",
      "korean": "일",
      "vietnamese": "việc",
      "thai": "ธุระ"
    }
  },
  {
    "japanese": "予約",
    "translations": {
      "english": "reservation",
      "chinese": "预约",
      "korean": "예약",
      "vietnamese": "đặt chỗ",
      "thai": "การจอง"
    }
  },
  {
    "japanese": "湯",
    "translations": {
      "english": "hot water",
      "chinese": "热水",
      "korean": "뜨거운 물",
      "vietnamese": "nước nóng",
      "thai": "น้ำร้อน"
    }
  },
  {
    "japanese": "指",
    "translations": {
      "english": "finger",
      "chinese": "手指",
      "korean": "손가락",
      "vietnamese": "ngón tay",
      "thai": "นิ้ว"
    }
  },
  {
    "japanese": "指輪",
    "translations": {
      "english": "finger ring",
      "chinese": "戒指",
      "korean": "반지",
      "vietnamese": "nhẫn",
      "thai": "แหวน"
    }
  },
  {
    "japanese": "夢",
    "translations": {
      "english": "dream",
      "chinese": "梦",
      "korean": "꿈",
      "vietnamese": "giấc mơ",
      "thai": "ความฝัน"
    }
  },
  {
    "japanese": "揺れる",
    "translations": {
      "english": "to shake",
      "chinese": "摇摆",
      "korean": "흔들리다",
      "vietnamese": "lắc",
      "thai": "สั่น"
    }
  },
  {
    "japanese": "残念",
    "translations": {
      "english": "regrettable; unfortunate",
      "chinese": "遗憾",
      "korean": "유감",
      "vietnamese": "tiếc",
      "thai": "น่าเสียดาย"
    }
  },
  {
    "japanese": "全然",
    "translations": {
      "english": "not entirely (used in a negative sentence)",
      "chinese": "完全不",
      "korean": "전혀",
      "vietnamese": "hoàn toàn không",
      "thai": "เลยไม่"
    }
  }
];

const uniqueVocabulary = Array.from(new Map(vocabulary.map(item => [item.japanese, item])).values()).map((item, index) => ({
  ...item,
}));

export default uniqueVocabulary; 
