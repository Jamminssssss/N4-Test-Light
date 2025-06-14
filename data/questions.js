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
        { id: 3, text: 'あらって' },
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
        { id: 1, text: '貸して' },
        { id: 2, text: '資して' },
        { id: 3, text: '借して' },
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
        { id: 1, text: 'けしき'},
        { id: 2, text: 'ゆめ'},
        { id: 3, text: 'おもいで'},
        { id: 4, text: 'せわ' },
      ],
      correctAnswer: 2,
    },
    {
      question:'(  )に なにを いれますか。\n\nリーさんも こんどの パーティーに ( ）来て くださいね。',
      options: [
        { id: 1, text: 'ひじょうに'},
        { id: 2, text: 'ぜひ'},
        { id: 3, text: 'じゅうぶん'},
        { id: 4, text: 'いつも' },
      ],
      correctAnswer: 2,
    },
    {
      question:'(  )に なにを いれますか。\n\nこれから きかいの つかいかたを (  ) しますから、よく 聞いてください。',
      options: [
        { id: 1, text: 'じゅんび' },
        { id: 2, text: 'りよう' },
        { id: 3, text: 'せつめい' },
        { id: 4, text: 'せいさん' },
      ],
      correctAnswer: 3,
    },
    {
      question:'(  )に なにを いれますか。\n\nはが わるいので、 (  ) ものは 食べられません。',
      options: [
        { id: 1, text: 'きびしい' },
        { id: 2, text: 'かたい' },
        { id: 3, text: 'はやい' },
        { id: 4, text: 'ふかい' },
      ],
      correctAnswer: 2,
    },
    {
      question:'(  )に なにを いれますか。\n\nもりさんを デートに (  ) が、行けないと 言われました。',
      options: [
        { id: 1, text: 'さそいました' },
        { id: 2, text: 'つたえました' },
        { id: 3, text: 'あんないしました' },
        { id: 4, text: 'しょうかいしました' },
      ],
      correctAnswer: 1,
    },
    {
      question:'(  )に なにを いれますか。\n\nわたしの むすこは、1年で 5 (  ) くらい せが 高く なりました。',
      options: [
        { id: 1, text: 'グラム' },
        { id: 2, text: 'ばん' },
        { id: 3, text: 'けん' },
        { id: 4, text: 'センチ' },
      ],
      correctAnswer: 4,
    },
    {
      question:'(  )に なにを いれますか。\n\nお店で 3だいの パソコンを (  )、いちばん かるい パソコンを えらびました。',
      options: [
        { id: 1, text: 'かたづけて' },
        { id: 2, text: 'かぞえて' },
        { id: 3, text: 'くらべて' },
        { id: 4, text: 'はらって' },
      ],
      correctAnswer: 3,
    },
    {
      question:'(  )に なにを いれますか。\n\nたなかさんの いえの 電気が ついて いませんね。たなかさんは (  ) の ようです。',
      options: [
        { id: 1, text: 'うそ' },
        { id: 2, text: 'じゆう' },
        { id: 3, text: 'ちゅうし' },
        { id: 4, text: 'るす' },
      ],
      correctAnswer: 4,
    },
    {
      question:'(  )に なにを いれますか。\n\nへやの かぎを さがして いますが、まだ (  )。',
      options: [
        { id: 1, text: '見つかりません' },
        { id: 2, text: 'つかまえません' },
        { id: 3, text: 'しりません' },
        { id: 4, text: 'さわりません' },
      ],
      correctAnswer: 1,
    },
    {
      question:'[ ]の ぶんと だいたい おなじ いみの ぶんが あります。いちばん いい ものを ひとつ えらんで ください。\n\n[おとうとは あの きっさてんで アルバイトを して います。]',
      options: [
        { id: 1, text: 'おとうとは あの きっさてんで まって います。' },
        { id: 2, text: 'おとうとは あの きっさてんで はたらいて います。' },
        { id: 3, text: 'おとうとは あの きっさてんで コーヒーを 飲んで います。' },
        { id: 4, text: 'おとうとは あの きっさてんで コーヒーを 飲んで います。' },
      ],
      correctAnswer: 2,
    },
    {
      question:'[ ]の ぶんと だいたい おなじ いみの ぶんが あります。いちばん いい ものを ひとつ えらんで ください。\n\n[わたしは すいえいが すきです。]',
      options: [
        { id: 1, text: 'わたしは はしるのが すきです。' },
        { id: 2, text: 'わたしは およぐのが すきです。' },
        { id: 3, text: 'わたしは ごはんを 食べるのが すきです。' },
        { id: 4, text: 'わたしは 本を 読むのが すきです。' },
      ],
      correctAnswer: 2,
    },
    {
      question:'[ ]の ぶんと だいたい おなじ いみの ぶんが あります。いちばん いい ものを ひとつ えらんで ください。\n\n[それを 聞いて びっくりしました。]',
      options: [
        { id: 1, text: 'それを 聞いて わらいました。' },
        { id: 2, text: 'それを 聞いて こまりました。' },
        { id: 3, text: 'それを 聞いて おこりました。' },
        { id: 4, text: 'それを 聞いて おどろきました。' },
      ],
      correctAnswer: 4,
    },
    {
      question:'[ ]の ぶんと だいたい おなじ いみの ぶんが あります。いちばん いい ものを ひとつ えらんで ください。\n\n[あの 人は うつくしいですね。]',
      options: [
        { id: 1, text: 'あの 人は きれいですね。' },
        { id: 2, text: 'あの 人は 元気ですね。' },
        { id: 3, text: 'あの 人は おもしろいですね。' },
        { id: 4, text: 'あの 人は わかいですね。' },
      ],
      correctAnswer: 1,
    },
    {
      question:'[ ]の ぶんと だいたい おなじ いみの ぶんが あります。いちばん いい ものを ひとつ えらんで ください。\n\n[この 国は こめを ゆにゅうして います。]',
      options: [
        { id: 1, text: 'この 国は こめを ほかの 国に うって います。' },
        { id: 2, text: 'この 国は こめを ほかの 国から もらって います。' },
        { id: 3, text: 'この 国は こめを ほかの 国から 買って います。' },
        { id: 4, text: 'この 国は こめを ほかの 国に あげて います。' },
      ],
      correctAnswer: 3,
    },
    {
      question:'つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらんで ください。\n\nさいきん',
      options: [
        { id: 1, text: 'さいきん りょうりが できたので、いっしょに 食べましょう。' },
        { id: 2, text: 'さいきん しゅくだいを 出して ください。' },
        { id: 3, text: 'きむらさんは さいきん けっこんした そうです。' },
        { id: 4, text: 'さいきん 電車が 来ますから、いそいで えきに 行きましょう。' },
      ],
      correctAnswer: 3,
    },
    {
      question:'つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらんで ください。\n\nおと',
      options: [
        { id: 1, text: 'ラジオの おとが 大きいので、もう 少し 小さく して ください。' },
        { id: 2, text: '日本語の おとが じょうずに なりたいので、毎日 たくさん 話します。' },
        { id: 3, text: '店の 人に 大きな おとで 名前を よばれました。' },
        { id: 4, text: 'すずきさんが ギターで ゆうめいな おとを ひいて くれました。' },
      ],
      correctAnswer: 1,
    },
    {
      question:'つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらんで ください。\n\nけんがく',
      options: [
        { id: 1, text: 'かばんが ほしいので、デパートに 行って けんがくします。' },
        { id: 2, text: 'わからない かんじは じしょで けんがくして ください。' },
        { id: 3, text: '先生や 友だちと こうじょうを けんがくしました。' },
        { id: 4, text: 'まいばん テレビで ニュースを けんがくして います。' },
      ],
      correctAnswer: 3,
    },
    {
      question:'つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらんで ください。\n\nかざる',
      options: [
        { id: 1, text: 'やまだ先生は テストの おしらせを きょうしつに かざりました。' },
        { id: 2, text: 'おきゃくさんが 来ますから、へやに 花を かざりましょう。' },
        { id: 3, text: '天気が わるいので、せんたくものは うちの 中に かざります。' },
        { id: 4, text: 'こっちの エアコンは、となりの へやの かべに かざって ください。' },
      ],
      correctAnswer: 2,
    },
    {
      question:'つぎの ことばの つかいかたで いちばん いい ものを ひとつ えらんで ください。\n\nこうじ',
      options: [
        { id: 1, text: 'はが いたかったので、はいしゃで こうじを して もらいました。' },
        { id: 2, text: 'この セーターは 古いですが、こうじを して、ずっと きて います。' },
        { id: 3, text: 'ほんだなが こわれて しまったので、こうじを しました。' },
        { id: 4, text: 'この みちは こうじを して いるので、とおれません。' },
      ],
      correctAnswer: 4,
    },
    {
      question:'（ ）に 何を 入れますか。\n\nきのうの しゅくだいは 少なかったので、(  ) 終わりました。',
      options: [
        { id: 1, text: '20 分' },
        { id: 2, text: '20 分しか' },
        { id: 3, text: '20 分で' },
        { id: 4, text: '20 分を' },
      ],
      correctAnswer: 3,
    },
    {
      question:'（ ）に 何を 入れますか。\n\nこの ロボットは 人 (  ) 会話することが できます。',
      options: [
        { id: 1, text: 'や' },
        { id: 2, text: 'を' },
        { id: 3, text: 'へ' },
        { id: 4, text: 'と' },
      ],
      correctAnswer: 4,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n弟は 小さいとき よく けがを して、両親 (  ) 心配させました。',
      options: [
        { id: 1, text: 'で' },
        { id: 2, text: 'を' },
        { id: 3, text: 'の' },
        { id: 4, text: 'や' },
      ],
      correctAnswer: 2,
    },
    {
      question:'（ ）に 何を 入れますか。\n\nホテルの 朝ご飯の パンが とても おいしかったので、八つ (  ) 食べました。',
      options: [
        { id: 1, text: 'も' },
        { id: 2, text: 'に' },
        { id: 3, text: 'が' },
        { id: 4, text: 'で' },
      ],
      correctAnswer: 1,
    },
    {
      question:'（ ）に 何を 入れますか。\n\nこの 日本語の じしょは、150年前に 外国人 (  ) 作られました。',
      options: [
        { id: 1, text: 'から' },
        { id: 2, text: 'を' },
        { id: 3, text: 'について' },
        { id: 4, text: 'によって' },
      ],
      correctAnswer: 4,
    },
    {
      question:'（ ）に 何を 入れますか。\n\nＡ市の 運動場は (  ) 使えますが、予約が ひつようです。',
      options: [
        { id: 1, text: 'だれでも' },
        { id: 2, text: 'だれを' },
        { id: 3, text: 'だれに' },
        { id: 4, text: 'だれが' },
      ],
      correctAnswer: 1,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n前田「リーさん、いつも （ ）国の かぞくに れんらくしますか。」\n\nリー「メールを 書くことが 多いです。」',
      options: [
        { id: 1, text: 'どのぐらい' },
        { id: 2, text: 'どの' },
        { id: 3, text: 'どうやって' },
        { id: 4, text: 'どういう' },
      ],
      correctAnswer: 3,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n娘は 先月 高校を 卒業しました。（ ）大学の 入学式です。',
      options: [
        { id: 1, text: 'だんだん' },
        { id: 2, text: 'あまり' },
        { id: 3, text: 'だいたい' },
        { id: 4, text: 'もうすぐ' },
      ],
      correctAnswer: 4,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n今朝は 駅に 行く バスが （ ） 来なかったので、タクシーで行きました。',
      options: [
        { id: 1, text: 'やっと' },
        { id: 2, text: 'なかなか' },
        { id: 3, text: 'きっと' },
        { id: 4, text: 'いつか' },
      ],
      correctAnswer: 2,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n山下「南さん、あしたか あさって、カラオケに 行かない」\n\n南 「あ、いいね。あしたは 都合が 悪いけど、あさって（ ）だいじょうぶだよ。」',
      options: [
        { id: 1, text: 'なのに' },
        { id: 2, text: 'だから' },
        { id: 3, text: 'でも' },
        { id: 4, text: 'なら' },
      ],
      correctAnswer: 4,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n私は（ ） 間、スーパーで アルバイトを して いました。',
      options: [
        { id: 1, text: '夏休みに' },
        { id: 2, text: '夏休みで' },
        { id: 3, text: '夏休みの' },
        { id: 4, text: '夏休み' },
      ],
      correctAnswer: 3,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n 先週 庭の 木の えだを 切りました。ぜんぶ（ ） 2時間かかりました。',
      options: [
        { id: 1, text: '切ったり' },
        { id: 2, text: '切るのに' },
        { id: 3, text: '切りに' },
        { id: 4, text: '切るか どうか' },
      ],
      correctAnswer: 2,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n 木村「山田さん、あしたの 午後、サッカーの 練習に 行きますか。」\n\n山田「ええ、行きます。でも、午前中に 用事が あるので、（ ） 。」',
      options: [
        { id: 1, text: '遅れないで ください ' },
        { id: 2, text: '遅れないほうが いいです' },
        { id: 3, text: '遅れるかもしれません' },
        { id: 4, text: '遅れては いけません' },
      ],
      correctAnswer: 3,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n（食堂で）\n森 「空いて いる 席が ありませんね。」\n\n田中「ええ。あ、でも、あそこの 席が（ ）よ。」\n\n森 「本当ですね。空くまで、少し 待ちましょう。」',
      options: [
        { id: 1, text: '空きそうです' },
        { id: 2, text: '空きました' },
        { id: 3, text: '空いて います' },
        { id: 4, text: '空いたようです' },
      ],
      correctAnswer: 1,
    },
    {
      question:'（ ）に 何を 入れますか。\n\n（会議室で）\n林 「上田さん、会議の じゅんびは 終わりましたか。てつだいましょうか。」\n\n上田「ありがとうございます。じゃあ、いすが 一つ 足りないので、となりの 会議室から（ ） 。」\n\n林 「はい、わかりました。」',
      options: [
        { id: 1, text: '持って こなくても いいですか' },
        { id: 2, text: '持って きて もらえますか' },
        { id: 3, text: '持って こないと いけませんか' },
        { id: 4, text: '持って きて いませんか' },
      ],
      correctAnswer: 2,
    },
    {
      question:'★に 入る ものは どれですか。\n\n先月まで 花屋が あった __ ★ __ __ おいしいです。',
      options: [
        { id: 1, text: 'できた' },
        { id: 2, text: 'りんごの ケーキが' },
        { id: 3, text: 'きっさてんは' },
        { id: 4, text: '場所に' },
      ],
      correctAnswer: 1,
    },
    {
      question:'★に 入る ものは どれですか。\n\n私は ピアノを __ __ ★ __ 時間が ありません。',
      options: [
        { id: 1, text: 'ひくのが' },
        { id: 2, text: 'ひく' },
        { id: 3, text: '最近 いそがしくて' },
        { id: 4, text: '好きですが' },
      ],
      correctAnswer: 3,
    },
    {
      question:'★に 入る ものは どれですか。\n\n私は 20さいの たんじょうびに そふが __ __ ★ __ います。',
      options: [
        { id: 1, text: '大切に' },
        { id: 2, text: 'くれた' },
        { id: 3, text: '使って' },
        { id: 4, text: 'カメラを' },
      ],
      correctAnswer: 1,
    },
    {
      question:'★に 入る ものは どれですか。\n\n林 「来週、野球の 試合を 見に 行こうと 思って いるんですが、リーさんも いっしょに どうですか。」\nリー「えっ、野球の 試合ですか。いいですね。__ __ ★ __ です。」',
      options: [
        { id: 1, text: 'ぜひ 行きたい ' },
        { id: 2, text: 'ことが ない' },
        { id: 3, text: '見に 行った' },
        { id: 4, text: 'ので' },
      ],
      correctAnswer: 4,
    },
    {
      question:'21',
      image: require('../assets/readingimages/readingimage0.png'),
      options: [
        { id: 1, text: 'それに' },
        { id: 2, text: 'だから' },
        { id: 3, text: 'しかし' },
        { id: 4, text: 'たとえば' },
      ],
      correctAnswer: 3,
    },
    {
      question:'22',
      image: require('../assets/readingimages/readingimage0.png'),
      options: [
        { id: 1, text: 'は' },
        { id: 2, text: 'なら' },
        { id: 3, text: 'でも' },
        { id: 4, text: 'より' },
      ],
      correctAnswer: 1,
    },
    {
      question:'23',
      image: require('../assets/readingimages/readingimage0.png'),
      options: [
        { id: 1, text: '教えて いました' },
        { id: 2, text: '教えて あげました' },
        { id: 3, text: '教えて くれました ' },
        { id: 4, text: '教えて くれました ' },
      ],
      correctAnswer: 1,
    },
    {
      question:'24',
      image: require('../assets/readingimages/readingimage0.png'),
      options: [
        { id: 1, text: '泳いで おきました ' },
        { id: 2, text: '泳げるように なりました' },
        { id: 3, text: '泳いで しまいました' },
        { id: 4, text: '泳げることに なりました' },
      ],
      correctAnswer: 2,
    },
    {
      question:'25',
      image: require('../assets/readingimages/readingimage0.png'),
      options: [
        { id: 1, text: '練習するためです' },
        { id: 2, text: '練習したようです' },
        { id: 3, text: '練習したいです' },
        { id: 4, text: '練習するそうです' },
      ],
      correctAnswer: 3,
    },
    {
      question:'試験中の 3日間に忘れ物を取りに行きたい人は、どうしなければなりませんか。\n\nこのお知らせが日本語学校の教室にあります。\n\n忘れ物がありました\n\n忘れた人は、先生たちの部屋へ取りに来てください。\n\n1.辞書（103教室にありました）\n2.帽子（食堂にありました）\n\n 12月 5日（月） から 7日（水）までは、試験中ですから、\n先生たちの部屋には入れません。教室でクラスの先生に\n言ってください。\n\n2016年 12月 1日 （木） 大西日本語学校',
      options: [
        { id: 1, text: '試験が終わるまで待ちます。' },
        { id: 2, text: '先生たちの部屋へ取りに行きます。' },
        { id: 3, text: '忘れ物があった場所へ取りに行きます。' },
        { id: 4, text: '教室で、自分のクラスの先生に話します。' },
      ],
      correctAnswer: 4,
    },
    {
      question:'[私の楽しみ]は何ですか。\n\nアイスクリームは、夏に食べるととてもおいしいですが、私は寒い冬でも時々\n食べます。夏は毎日食べるので安いものしか買いませんが、冬は高いものを\n買います。暖かい部屋でいいアイスクリームを食べるのが、[私の楽しみ]なのです。',
      options: [
        { id: 1, text: '冬に暖かい部屋で毎日アイスクリームを食べること' },
        { id: 2, text: '冬に暖かい部屋で高いアイスクリームを食べること' },
        { id: 3, text: '夏に毎日アイスクリームを食べること' },
        { id: 4, text: '夏に高いアイスクリームを食べること' },
      ],
      correctAnswer: 2,
    },
    {
      question:'このメモを読んで、高田先生は林さんに何を知らせなければなりませんか。\n\n（日本語学校で）\n高田先生の机の上に、このメモがあります。\n\n高田先生\n\nみそ工場の林さんから竜話がありました。\n1月に工場見学ができるのは、19日（木）10時、11時と26日（木）\n14時、15時だそうです。\n見学の日と時間が決まったら、話がほしいと言っていました。\n行く人の数も教えてもらいたいそうです。\n12月1日10:20 ヒマル',
      options: [
        { id: 1, text: '工場見学に行く人の数だけ' },
        { id: 2, text: '工場見学に行く日と時間だけ' },
        { id: 3, text: '工場見学に行く日と時間と、行く人の数' },
        { id: 4, text: '工場見学に行く日と時間が、いつごろ決まるか' },
      ],
      correctAnswer: 3,
    },
    {
      question:'「私」はどうして黒い消しゴムを買いましたか。\n\n昨日初めて黒い消しゴムを買いました。レジの人が「白いのは、使うと\n消しゴムが黒く汚れて嫌だと言う人が多いから、黒いのを作ったそうですよ。」\nと教えてくれました。私は色がかっこいいから買ったので、理由を聞いて\n面白いなと思いました。',
      options: [
        { id: 1, text: '工場見学に行く人の数だけ' },
        { id: 2, text: '工場見学に行く日と時間だけ' },
        { id: 3, text: '工場見学に行く日と時間と、行く人の数' },
        { id: 4, text: '工場見学に行く日と時間が、いつごろ決まるか' },
      ],
      correctAnswer: 4,
    },
    {
      question:'「なぜ「どうしよう。」と思いましたか。',
      image: require('../assets/readingimages/readingimage1.png'),
      options: [
        { id: 1, text: '友達が見つからないから' },
        { id: 2, text: '間違えて東京駅で電車を降りてしまったから' },
        { id: 3, text: '乗りたい電車の場所がわからないから' },
        { id: 4, text: '知らない女の人に声をかけられたから' },
      ],
      correctAnswer: 3,
    },
    {
      question:'なぜ山田さんは「私」に声をかけましたか。',
      image: require('../assets/readingimages/readingimage1.png'),
      options: [
        { id: 1, text: '「私」が行ったり来たりしているのを見たから' },
        { id: 2, text: '「私」と一緒にお茶を飲みたいと思ったから' },
        { id: 3, text: '「私」を山田さんの友達と間違えたから' },
        { id: 4, text: '「私」が落としたメモを拾ったから' },
      ],
      correctAnswer: 1,
    },
    {
      question:'なぜお礼を言いましたか。',
      image: require('../assets/readingimages/readingimage1.png'),
      options: [
        { id: 1, text: '山田さんが、京都に行く新幹線がたくさんあると「私」に教えてくれたから' },
        { id: 2, text: '「山田さんが、帰りが遅くなるかもしれないのに、 「私」を案内してくれたから' },
        { id: 3, text: '山田さんが、「私」が乗る予定の電車の時間のことを心配してくれたから' },
        { id: 4, text: '「山田さんが、「私」の国のいろいろな人に親切にしてくれたと聞いたから' },
      ],
      correctAnswer: 2,
    },
    {
      question:'（ ）に入れるのに、いちばんいい文はどれですか。',
      image: require('../assets/readingimages/readingimage1.png'),
      options: [
        { id: 1, text: '仕事を頑張ろう' },
        { id: 2, text: '外国に住んでみたい' },
        { id: 3, text: '困っている人に親切にしよう' },
        { id: 4, text: '東京駅のことをよく知りたい' },
      ],
      correctAnswer: 3,
    },
    {
      question:'ハメスさんとマリアさんは、「春を楽しもう」に行きたいと思っています。\n4月に行われるもので、お店の中で音楽を聞きながら、お昼に食事ができる\nものがいいです。ハメスさんたちが選べるのは、どれですか。',
      image: require('../assets/readingimages/readingimage2.png'),
      options: [
        { id: 1, text: '②' },
        { id: 2, text: '③' },
        { id: 3, text: '⑤' },
        { id: 4, text: '⑥' },
      ],
      correctAnswer: 4,
    },
    {
      question:'ジーナさんは、「春を楽しもう」に行こうと思っています。土曜日に行きたい\nですが、集まる時間が13時より早いものには行けません。料金は1,000円以下が\nいいです。ジーナさんが選べるのは、どれですか。',
      image: require('../assets/readingimages/readingimage2.png'),
      options: [
        { id: 1, text: '②と③' },
        { id: 2, text: '②と③と④' },
        { id: 3, text: '②と③と⑤' },
        { id: 4, text: '③と⑤' },
      ],
      correctAnswer: 1,
    },
];
  
export default questions;
