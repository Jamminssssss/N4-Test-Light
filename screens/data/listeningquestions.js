const listeningQuestions = [
    {
      question: '1 ばん',
      image: require('../../assets/readingimages/audioimages/audioimage1.png'),
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
      image: require('../../assets/readingimages/audioimages/audioimage2.png'),
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
      image: require('../../assets/readingimages/audioimages/audioimage3.png'),
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
      image: require('../../assets/readingimages/audioimages/audioimage4.png'),
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
      image: require('../../assets/readingimages/audioimages/audioimage5.png'),
      audio: 'n4q5.mp3', // Android raw 리소스 파일 이름 (확장자 제외)
      options: [
        { id: 1, text: '1' },
        { id: 2, text: '2' },
        { id: 3, text: '3' },
        { id: 4, text: '4' },
      ],
      correctAnswer: 3,
    },
];
  
export default listeningQuestions;
