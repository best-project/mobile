import {
  FETCH_COURSE,
  SAVE_COURSE
} from '../actions/types';

const initialState = {

  coursesList: [
    {
      id: 1,
      name: 'Owoce i warzywa',
      description: 'W tym kursie nauczysz się nazw owoców i warzyw.',
      image: 'https://www.ang.pl/img/slownik/fruit.jpg',
      language: 'en',
      inProgress: false,
      active: true,
      difficultyLevel: 'easy',
      rate: 4.8,
      data: [
        {
          word: 'apple',
          translate: 'jabłko'
        },
        {
          word: 'aubergine',
          translate: 'bakłażan'
        },
        {
          word: 'banana',
          translate: 'banan'
        },
        {
          word: 'beans',
          translate: 'fasola'
        },
        {
          word: 'beetroot',
          translate: 'burak'
        },
        {
          word: 'blackberry',
          translate: 'jeżyna'
        },
        {
          word: 'broccoli',
          translate: 'brokuły'
        },
        {
          word: 'cabbage',
          translate: 'kapusta'
        },
      ]
    },
    {
      id: 2,
      name: 'Człowiek',
      active: false,
    },
    {
      id: 3,
      name: 'Praca',
      active: false,
    },
    {
      id: 4,
      name: 'Zwierzęta',
      active: false,
    },
    {
      id: 5,
      name: 'Dom',
      active: false,
    },
    {
      id: 6,
      name: 'Podróże i turystyka',
      active: false,
    },
    {
      id: 7,
      name: 'Szkoła',
      active: false,
    },
    {
      id: 8,
      name: 'Rośliny',
      active: false,
    },
    {
      id: 9,
      name: 'Rodzina',
      active: false,
    },
    {
      id: 10,
      name: 'Pogoda',
      active: false,
    },
    {
      id: 11,
      name: 'Charakter',
      active: false,
    },
    {
      id: 12,
      name: 'Zawody',
      active: false,
    },
    {
      id: 13,
      name: 'Kultura',
      description: 'Słowo kultura ma wiele znaczeń. Interpretuje się ją w różny sposób przez przedstawicieli wielu dziedzin. Kulturę można określić jako ogół wytworów ludzi, zarówno fizycznych, materialnych, jak i duchowych, symbolicznych.',
      image: 'https://culture360.asef.org/media/2018/5/european_commission_shutterstock_584963080.jpg',
      language: 'en',
      inProgress: false,
      active: true,
      difficultyLevel: 'normal', //easy, normal, medium, hard
      rate: 4.0, // 0 - 5
      data: [
        {
          word: 'aisle',
          translate: 'przejście, nawa boczna',
          image: 'https://pixabay.com/get/52e9dd464857b108f5d08460962034761d3cdfe04e50744f722c72d4904cc2_1280.jpg'
        },
        {
          word: 'art',
          translate: 'sztuka',
          image: 'https://pixabay.com/get/54e6dc454356ab14f6da8c7dda793f7d1d37dde4564c704c732878dc9f4ec25d_640.jpg'
        },
        {
          word: 'artist',
          translate: 'artysta',
          image: 'https://pixabay.com/get/57e2d1454c53a514f6da8c7dda793f7d1d37dde4564c704c732878dc9f4bc25c_1280.jpg'
        },
        {
          word: 'artistic',
          translate: 'artystyczny',
          image: 'https://pixabay.com/get/54e4d34b4255a814f6da8c7dda793f7d1d37dde4564c704c732878dd9748c65d_1280.jpg'
        },
        {
          word: 'band',
          translate: 'zespół, kapela',
          image: 'https://pixabay.com/get/50e9d4414856b108f5d08460962034761d3cdfe04e50744f722c72d4924ac2_1280.jpg'
        },
        {
          word: 'brush',
          translate: 'szczotka, pędzel',
          image: 'https://pixabay.com/get/55e4d1464955aa14f6da8c7dda793f7d1d37dde4564c704c732878dd974bc45d_1280.jpg'
        },
        {
          word: 'camera',
          translate: 'kamera, aparat fotograficzny',
          image: 'https://pixabay.com/get/54e5dc4b4f52ab14f6da8c7dda793f7d1d37dde4564c704c732878dd974bc05e_1280.jpg'
        },
        {
          word: 'canvas',
          translate: 'płótno',
          image: 'https://pixabay.com/get/57e8d3454d50a914f6da8c7dda793f7d1d37dde4564c704c732878dd9644c55b_1280.jpg'
        },
        {
          word: 'character',
          translate: 'charakter, natura',
          image: 'https://pixabay.com/get/5fe8d1434953b108f5d08460962034761d3cdfe04e50744f722c72d59e4ec5_1280.jpg'
        },
        {
          word: 'chisel',
          translate: 'dłuto',
          image: 'https://pixabay.com/get/57e2d54a4d54a814f6da8c7dda793f7d1d37dde4564c704c732878dd9644c05c_1280.jpg'
        },
        {
          word: 'choir',
          translate: 'chór',
          image: 'https://pixabay.com/get/5ee4d54a4255b108f5d08460962034761d3cdfe04e50744f722c72d59e4ac4_1280.jpg'
        },
        {
          word: 'cinema',
          translate: 'kino',
          image: 'https://pixabay.com/get/5fe1dd454f57b108f5d08460962034761d3cdfe04e50744f722c72d69749c3_1280.jpg'
        },
        {
          word: 'composer',
          translate: 'kompozytor',
          image: 'https://pixabay.com/get/57e6d0464f57a414f6da8c7dda793f7d1d37dde4564c704c732878dd954dc25c_1280.jpg'
        },
        {
          word: 'culture',
          translate: 'kultura',
          image: 'https://pixabay.com/get/57e8d5444f51af14f6da8c7dda793f7d1d37dde4564c704c732878dd954cc459_1280.jpg'
        },
        {
          word: 'dance',
          translate: 'taniec',
          image: 'https://pixabay.com/get/57e9d1434856a914f6da8c7dda793f7d1d37dde4564c704c732878dd954cc75c_1280.jpg'
        },
        {
          word: 'director',
          translate: 'reżyser, dyrektor',
          image: 'https://pixabay.com/get/54e1d1434c52ae14f6da8c7dda793f7d1d37dde4564c704c732878dd954cc15e_1280.jpg'
        },
        {
          word: 'drama',
          translate: 'aktorstwo, dramat',
          image: 'https://pixabay.com/get/55e1d7404b5ab108f5d08460962034761d3cdfe04e50744f722c72d6964bc2_1280.png'
        },
        {
          word: 'dramatic',
          translate: 'dramatyczny',
          image: 'https://pixabay.com/get/55e1d7404b5ab108f5d08460962034761d3cdfe04e50744f722c72d6964bc2_1280.png'
        },
        {
          word: 'dramatist',
          translate: 'dramaturg',
          image: 'https://pixabay.com/get/54e0d74a4357ad14f6da8c7dda793f7d1d37dde4564c704c732878dd954fc45f_1280.png'
        },
        {
          word: 'encyclopaedia',
          translate: 'encyklopedia',
          image: 'https://pixabay.com/get/57e1d5434857a814f6da8c7dda793f7d1d37dde4564c704c732878dd954fc058_1280.jpg'
        },
        {
          word: 'entertainment',
          translate: 'rozrywka',
          image: 'https://pixabay.com/get/57e2d6404255af14f6da8c7dda793f7d1d37dde4564c704c732878dd954fc35e_1280.jpg'
        },
        {
          word: 'fiction',
          translate: 'fikcja',
          image: 'https://pixabay.com/get/57e2d3464b5aaa14f6da8c7dda793f7d1d37dde4564c704c732878dd954fcc5b_1280.jpg'
        },
        {
          word: 'film',
          translate: 'film',
          image: 'https://pixabay.com/get/57e6d34b4353a414f6da8c7dda793f7d1d37dde4564c704c732878dd954ec45b_1280.jpg'
        },
        {
          word: 'fine arts',
          translate: 'sztuki plastyczne',
          image: 'https://pixabay.com/get/57e9dc434f56b108f5d08460962034761d3cdfe04e50744f722c72d69449c0_1280.jpg'
        },
        {
          word: 'frame',
          translate: 'rama, ramka',
          image: 'https://pixabay.com/get/57e8d34b4f52ae14f6da8c7dda793f7d1d37dde4564c704c732878dd954ec35d_1280.jpg'
        },
        {
          word: 'gallery',
          translate: 'galeria',
          image: 'https://pixabay.com/get/57e2dd404a52a514f6da8c7dda793f7d1d37dde4564c704c732878dd954ecd5b_1280.jpg'
        },
        {
          word: 'instruments',
          translate: 'przyrządy, instrumenty',
          image: 'https://pixabay.com/get/55e4dc444352b108f5d08460962034761d3cdfe04e50744f722c72d6934dc1_1280.jpg'
        },
        {
          word: 'literature',
          translate: 'literatura',
          image: 'https://pixabay.com/get/51e9d14a4d5ab108f5d08460962034761d3cdfe04e50744f722c72d6934cc2_1280.jpg'
        },
        {
          word: 'modern art',
          translate: 'sztuka współczesna',
          image: 'https://pixabay.com/get/54e9d3474851ad14f6da8c7dda793f7d1d37dde4564c704c732878dd9549c65c_1280.jpg'
        }
      ]
    },
    {
      id: 14,
      name: 'Święta',
      active: false,
    },
    {
      id: 15,
      name: 'Example Puzzle',
      description: '',
      image: '',
      language: 'en',
      inProgress: false,
      active: false,
      difficultyLevel: 'normal', //easy, normal, medium, hard
      rate: 4.0, // 0 - 5
      data: [
        {
          word: 'Can I leave a message for him?',
          translate: 'Czy mogę zostawić wiadomość dla niego?'
        },
        {
          word: 'Can I speak to Caroline, please?',
          translate: 'Czy mogę rozmawiać z Karoliną?'
        },
        {
          word: 'Can you ask him to call me back?',
          translate: 'Czy możesz poprosić go, żeby zadzwonił do mnie?'
        },
        {
          word: 'Can you tell him I called?',
          translate: 'Czy możesz mu powiedzieć, że dzwoniłem?'
        },
        {
          word: 'Do you want to leave a message?',
          translate: 'Czy chcesz zostawić wiadomość?'
        },
        {
          word: "He isn't here at the moment",
          translate: 'Nie ma go teraz.'
        },
        {
          word: 'Hello. Is that John?',
          translate: 'Halo. Czy to John?'
        },
        {
          word: "I'll call back later",
          translate: 'Zadzwonię póżniej.'
        },
        {
          word: "I'll call him on his mobile",
          translate: 'Zadzwonię na jego komórkę.'
        },
        {
          word: "I'll text him",
          translate: 'Wyślę mu SMS.'
        },
        {
          word: "I'll try again later",
          translate: 'Spróbuję później'
        },
        {
          word: 'Just a moment.',
          translate: 'Chwileczkę.'
        },
        {
          word: 'This is Ben.',
          translate: 'Tu Ben.'
        },
        {
          word: 'Yes, speaking.',
          translate: 'Tak, przy telefonie.'
        }   
      ]
    }
  ]
}

export default function (state = initialState, action) {
  switch(action.type) {
    case FETCH_COURSE:
      return {...state}
    case SAVE_COURSE:
      return {...state}
    default: 
      return state;
  }
}