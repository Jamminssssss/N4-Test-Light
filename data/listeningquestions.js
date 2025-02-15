const listeningQuestions = [
    {
      question: '1 ばん',
      image: require('../assets/audioimages/audioimage1.png'),
      audio: 'n4q1.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'アウ' },
        { id: 2, text: 'アエ' },
        { id: 3, text: 'イウ' },
        { id: 4, text: 'イエ' },
      ],
      correctAnswer: 1,
    },
    {
      question: '2 ばん',
      image: require('../assets/audioimages/audioimage2.png'),
      audio: 'n4q2.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 3,
    },
    {
      question: '3 ばん',
      image: require('../assets/audioimages/audioimage3.png'),
      audio: 'n4q3.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 2,
    },
    {
      question: '4 ばん',
      image: require('../assets/audioimages/audioimage4.png'),
      audio: 'n4q4.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'アイウエ' },
        { id: 2, text: 'アイウ' },
        { id: 3, text: 'イウエ' },
        { id: 4, text: 'イウ' },
      ],
      correctAnswer: 4,
    },
    {
      question: '5 ばん',
      image: require('../assets/audioimages/audioimage5.png'),
      audio: 'n4q5.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 3,
    },
    {
      question: '6 ばん',
      image: require('../assets/audioimages/audioimage6.png'),
      audio: 'n4q6.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 3,
    },
    {
      question: '7 ばん',
      audio: 'n4q7.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'えき前の ほんや' },
        { id: 2, text: '大学の 中の ほんや' },
        { id: 3, text: 'じむしょ' },
        { id: 4, text: 'しょくどうの 前' },
      ],
      correctAnswer: 3,
    },
    {
      question: '8 ばん',
      image: require('../assets/audioimages/audioimage7.png'),
      audio: 'n4q8.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'アイ' },
        { id: 2, text: 'アウ' },
        { id: 3, text: 'イウ' },
        { id: 4, text: 'イ' },
      ],
      correctAnswer: 1,
    },
    {
      question: '1 ばん',
      audio: 'n4q9.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'うみの ちかくで しょくじした' },
        { id: 2, text: '山に のぼった' },
        { id: 3, text: 'うみで およいだ' },
        { id: 4, text: 'かいがんを さんぽした' },
      ],
      correctAnswer: 1,
    },
    {
      question: '2 ばん',
      audio: 'n4q10.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'ジュース' },
        { id: 2, text: 'アイスクリーム' },
        { id: 3, text: 'キャンディー' },
        { id: 4, text: 'クッキー' },
      ],
      correctAnswer: 2,
    },
    {
      question: '3 ばん',
      audio: 'n4q11.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '山本さんが きょうしつに いるとき' },
        { id: 2, text: '山本さんが きょうしつを 出たとき' },
        { id: 3, text: '山本さんが きょうしつを 出たとき' },
        { id: 4, text: '山本さんが としょかんを 出たとき' },
      ],
      correctAnswer: 4,
    },
    {
      question: '4 ばん',
      audio: 'n4q12.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'あく 時間が はやく なる' },
        { id: 2, text: 'しまる 時間が おそく なる' },
        { id: 3, text: '中学生いかは ただに なる' },
        { id: 4, text: 'チケットが 安く なる' },
      ],
      correctAnswer: 2,
    },
    {
      question: '5 ばん',
      audio: 'n4q13.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: 'いろいろな ばしょに おいて あること' },
        { id: 2, text: 'うって いる ものの しゅるいが 多いこと' },
        { id: 3, text: 'ことばを 話すこと' },
        { id: 4, text: 'お金が ぬすまれないこと' },
      ],
      correctAnswer: 2,
    },
    {
      question: '6 ばん',
      audio: 'n4q14.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '5 時から 5 時半まで' },
        { id: 2, text: '5 時から 6 時まで' },
        { id: 3, text: '5 時半から 6 時まで' },
        { id: 4, text: '5 時半から 6 時半まで' },
      ],
      correctAnswer: 4,
    },
    {
      question: '7 ばん',
      audio: 'n4q15.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '食べものの 店が たくさん あるから' },
        { id: 2, text: 'まつりが あって にぎやかだから' },
        { id: 3, text: 'ふねの 上で さくらが 見られるから' },
        { id: 4, text: '会社から あるいて 行けるから' },
      ],
      correctAnswer: 3,
    },
    {
      question: '1 ばん',
      image: require('../assets/audioimages/audioimage8.png'),
      audio: 'n4q16.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '2 ばん',
      image: require('../assets/audioimages/audioimage9.png'),
      audio: 'n4q17.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '3 ばん',
      image: require('../assets/audioimages/audioimage10.png'),
      audio: 'n4q18.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '4 ばん',
      image: require('../assets/audioimages/audioimage11.png'),
      audio: 'n4q19.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '5 ばん',
      image: require('../assets/audioimages/audioimage12.png'),
      audio: 'n4q20.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '1 ばん',
      audio: 'n4q21.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '2 ばん',
      audio: 'n4q22.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '3 ばん',
      audio: 'n4q23.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '4 ばん',
      audio: 'n4q24.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
    {
      question: '5 ばん',
      audio: 'n4q25.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '6 ばん',
      audio: 'n4q26.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 3,
    },
    {
      question: '7 ばん',
      audio: 'n4q27.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 2,
    },
    {
      question: '8 ばん',
      audio: 'n4q28.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
      ],
      correctAnswer: 1,
    },
];
  
export default listeningQuestions;
