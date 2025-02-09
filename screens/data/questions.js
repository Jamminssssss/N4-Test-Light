const questions = [
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\n今日は とても [楽しかった]ですね。',
      options: [
        { id: 1, text: 'いそがしかった' },
        { id: 2, text: 'すずしかった' },
        { id: 3, text: 'たのしかった' },
        { id: 4, text: 'かなしかった' },
      ],
      correctAnswer: 3,
    },
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nわたしは この [味]が すきです。',
      options: [
        { id: 1, text: 'かたち' },
        { id: 2, text: 'いろ' },
        { id: 3, text: 'におい' },
        { id: 4, text: 'あじ' },
      ],
      correctAnswer: 4,
    },
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nこの あたりは ちょっと [不便]ですね。',
      options: [
        { id: 1, text: 'ふべん' },
        { id: 2, text: 'ぶべん' },
        { id: 3, text: 'ふへん' },
        { id: 4, text: 'ぶへん' },
      ],
      correctAnswer: 1,
    },
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nやさいを [切って] ください。',
      options: [
        { id: 1, text: 'とって' },
        { id: 2, text: 'きって' },
        { id: 3, text: 'あらって ' },
        { id: 4, text: 'もって' },
      ],
      correctAnswer: 2,
    },
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nはやしさん [以外]は みんな 来ました。',
      options: [
        { id: 1, text: 'にそと' },
        { id: 2, text: 'にがい' },
        { id: 3, text: 'いそと' },
        { id: 4, text: 'いがい' },
      ],
      correctAnswer: 4,
    },
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nまどから ずっと [雲]を 見て いました。',
      options: [
        { id: 1, text: 'ほし' },
        { id: 2, text: 'ゆき' },
        { id: 3, text: 'くも' },
        { id: 4, text: 'そら' },
      ],
      correctAnswer: 3,
    },
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nまどから ずっと [雲]を 見て いました。',
      options: [
        { id: 1, text: 'ほし' },
        { id: 2, text: 'ゆき' },
        { id: 3, text: 'くも' },
        { id: 4, text: 'そら' },
      ],
      correctAnswer: 3,
    },
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nその 電車は [急行]ですよ。',
      options: [
        { id: 1, text: 'きゅこ' },
        { id: 2, text: 'きゅこう' },
        { id: 3, text: 'きゅうこ' },
        { id: 4, text: 'きゅうこう' },
      ],
      correctAnswer: 4,
    },
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nこれは [写さないで] ください。',
      options: [
        { id: 1, text: 'おさないで' },
        { id: 2, text: 'うつさないで' },
        { id: 3, text: 'けさないで' },
        { id: 4, text: 'おとさないで' },
      ],
      correctAnswer: 2,
    },
    {
      question:'[  ]の ことばは ひらがなで どう かきますか。\n\nその いけんには [反対]です。',
      options: [
        { id: 1, text: 'はんたい' },
        { id: 2, text: 'ほんたい' },
        { id: 3, text: 'はんだい' },
        { id: 4, text: 'ほんだい' },
      ],
      correctAnswer: 1,
    },
    {
      question:'[  ]の ことばは どう かきますか。\n\n[くろい] くつしたが ほしいです。',
      options: [
        { id: 1, text: '白い' },
        { id: 2, text: '黒い' },
        { id: 3, text: '赤い' },
        { id: 4, text: '青い' },
      ],
      correctAnswer: 2,
    },
    {
      question:'[  ]の ことばは どう かきますか。\n\nなつやすみの [けいかく]は まだ きまって いません。',
      options: [
        { id: 1, text: '計書' },
        { id: 2, text: '訂画' },
        { id: 3, text: '計画' },
        { id: 4, text: '訂書' },
      ],
      correctAnswer: 3,
    },
    {
      question:'[  ]の ことばは どう かきますか。\n\nわたしは [いしゃ]に なりたいです。',
      options: [
        { id: 1, text: '匠員' },
        { id: 2, text: '医員' },
        { id: 3, text: '匠者' },
        { id: 4, text: '医者' },
      ],
      correctAnswer: 4,
    },
    {
      question:'[  ]の ことばは どう かきますか。\n\nあしたの [よる] かぞくと 出かけます。',
      options: [
        { id: 1, text: '夜' },
        { id: 2, text: '昼' },
        { id: 3, text: '夕' },
        { id: 4, text: '朝' },
      ],
      correctAnswer: 1,
    },
    {
      question:'[  ]の ことばは どう かきますか。\n\nかさを [かして] ください。',
      options: [
        { id: 1, text: '貨して' },
        { id: 2, text: '資して' },
        { id: 3, text: '貸して' },
        { id: 4, text: '質して' },
      ],
      correctAnswer: 1,
    },
    {
      question:'[  ]の ことばは どう かきますか。\n\nあしたは サッカーの [しあい]が あります。',
      options: [
        { id: 1, text: '誡会' },
        { id: 2, text: '誡合' },
        { id: 3, text: '試会' },
        { id: 4, text: '試合' },
      ],
      correctAnswer: 4,
    },
    {
      question:'(  )に なにを いれますか。\n\nさとうさんが けがを したと 聞いて、みんな（ ）しました。',
      options: [
        { id: 1, text: 'しんぱい' },
        { id: 2, text: 'けいけん' },
        { id: 3, text: 'しつれい' },
        { id: 4, text: 'おじぎ' },
      ],
      correctAnswer: 1,
    },
    {
      question:'(  )に なにを いれますか。\n\nわたしには、しょうらい かしゅに なると いう ( ）が あります。',
      options: [
        { id: 1, text: 'けしき' },
        { id: 2, text: 'ゆめ' },
        { id: 3, text: 'おもいで' },
        { id: 4, text: 'せわ' },
      ],
      correctAnswer: 2,
    },
];
  
export default questions;
