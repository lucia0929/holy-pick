const words = [
    {
      content: "새 포도주는 새 부대에 담아야 한다.",
      book: "마태오",
      chapter: 2,
      verse: 22
    },
    {
      content: "베드로는 그 말을 부인하면서 “여보시오, 나는 그런 사람을 모르오.” 하였다.",
      book: "루카",
      chapter: 22,
      verse: 57
    },
    {
      content: "이 몸은 주님의 종입니다. 지금 말씀대로 저에게 이루어지기를 바랍니다.",
      book: "루카",
      chapter: 1,
      verse: 38 
    },
    {
      content: "안식일이 사람을 위하여 생긴 것이지, 사람이 안식일을 위하여 생긴 것은 아니다.",
      book: "마르코",
      chapter: 2,
      verse: 27
    },
    {
      content: "누구의 죄든지 너희가 용서해 주면 그들의 죄는 용서받을 것이고 용서해 주지 않으면 용서받지 못한 채 남아 있을 것이다.",
      book: "루카",
      chapter: 22,
      verse: 57
    },
    {
      content: "빌라도가 예수님께 “당신이 유다인들의 임금이오?” 하고 묻자, 그분께서 “네가 그렇게 말하고 있다.” 하고 대답하셨다.",
      book: "마르코",
      chapter: 15,
      verse: 2
    },
    {
      content: "그분은 각자에게 그 행실대로 갚아 주실 것입니다.",
      book: "로마",
      chapter: 2,
      verse: 6
    },
    {
      content: "장차 우리에게 나타날 영광에 비추어보면 지금 우리가 겪고 있는 고통은 아무것도 아니라고 생각합니다.",
      book: "로마",
      chapter: 8,
      verse: 18
    },
    {
      content: "우리에게 남의 종을 판단할 권리가 있습니까? 그가 서거나 넘어지거나, 그것은 그의 주인이 상관할 일입니다.",
      book: "로마",
      chapter: 14,
      verse: 4
    },
    {
      content: "하느님께서 하시는 일이 사람의 눈에는 어리석어 보이지만 사람들이 하는 일보다 지혜롭고, 하느님의 힘이 사람의 눈에는 약하게 보이지만 사람의 힘보다 강합니다.",
      book: "코린토 1서",
      chapter: 1,
      verse: 25
    },
    {
      content: "불의하게 고난을 겪으면서도, 하느님을 생각하는 양심 때문에 그 괴로움을 참아 내면 그것이 바로 은총입니다.",
      book: "베드로",
      chapter: 2,
      verse: 19
    },
    {
      content: "너희 가운데에서 높은 사람이 되려는 이는 너희를 섬기는 사람이 되어야 한다.",
      book: "마르코",
      chapter: 10,
      verse: 43
    },
    {
      content: "너희는 유혹에 빠지지 않도록 깨어 기도하여라. 마음은 간절하나 몸이 따르지 못한다.",
      book: "마르코",
      chapter: 14,
      verse: 38
    },
    {
      content: "누구든지 내 뒤를 따라오려면, 자신을 버리고 날마다 제 십자가를 지고 나를 따라야 한다.",
      book: "루카",
      chapter: 9,
      verse: 23
    },
    {
      content: "너희를 반대하지 않는 이는 너희를 지지하는 사람이다",
      book: "루카",
      chapter: 9,
      verse: 50
    },
    {
      content: "하느님께는 불가능한 일이 없다.",
      book: "루카",
      chapter: 1,
      verse: 37
    },
    {
      content: "누구든지 청하는 이는 받고, 찾는 이는 얻고, 문을 두드리는 이에게는 열릴 것이다.",
      book: "루카",
      chapter: 11,
      verse: 10
    },
    {
      content: "너희는 주의하여라. 모든 탐욕을 경계하여라. 아무리 부유하더라도 사람의 생명은 그의 재산에 달려 있지 않다.",
      book: "루카",
      chapter: 12,
      verse: 15
    },
    {
      content: "너희는 무엇을 먹을까, 무엇을 마실까 하고 찾지 마라. 염려하지 마라.",
      book: "루카",
      chapter: 12,
      verse: 29
    },
    {
      content: "모든 사람이 너희를 좋게 말하면, 너희는 불행하다! 사실 그들의 조상들도 거짓 예언자들을 그렇게 대하였다.",
      book: "루카",
      chapter: 6,
      verse: 26
    },
    {
      content: "남이 너희에게 해 주기를 바라는 그대로 너희도 남에게 해 주어라.",
      book: "루카",
      chapter: 6,
      verse: 31
    },
    {
      content: "좋은 나무는 나쁜 열매를 맺지 않는다. 또 나쁜 나무는 좋은 열매를 맺지 않는다.",
      book: "루카",
      chapter: 6,
      verse: 43
    },
    {
      content: "이 여자는 그 많은 죄를 용서받았다. 그래서 큰 사랑을 드러낸 것이다. 그러나 적게 용서받은 사람은 적게 사랑한다.",
      book: "루카",
      chapter: 7,
      verse: 47
    },
    {
      content: "숨겨진 것은 드러나고 감추어진 것은 알려져 훤히 나타나기 마련이다.",
      book: "루카",
      chapter: 8,
      verse: 17
    },
    {
      content: "정녕 가진 자는 더 받고, 가진 것이 없는 자는 가진 줄로 여기는 것마저 빼앗길 것이다.",
      book: "루카",
      chapter: 8,
      verse: 18
    },
    {
      content: "‘사람은 빵만으로 살지 않는다.’고 성경에 기록되어 있다.",
      book: "루카",
      chapter: 4,
      verse: 4
    },
    {
      content: "내 어머니와 내 형제들은 하느님의 말씀을 듣고 실행하는 이 사람들이다.",
      book: "루카",
      chapter: 8,
      verse: 21
    },
    {
      content: "제 목숨을 보존하려고 애쓰는 사람은 목숨을 잃고, 목숨을 잃는 사람은 목숨을 살릴 것이다.",
      book: "루카",
      chapter: 17,
      verse: 33
    },
    {
      content: "이 성전을 허물어라. 그러면 내가 사흘 안에 다시 세우겠다.",
      book: "요한",
      chapter: 2,
      verse: 19
    },
    {
      content: " 너희가 기도하며 청하는 것은 무엇이든 이미 받은 줄로 믿어라. 너희에게 그대로 이루어지리라.",
      book: "마태오",
      chapter: 11,
      verse: 23
    },
    {
      content: "예수님께서 그에게 “다시 보아라. 네 믿음이 너를 구원하였다.” 하고 이르시니, 그가 즉시 다시 보게 되었다. ",
      book: "루카",
      chapter: 18,
      verse: 42
    },
    {
      content: "하늘과 땅은 사라질지라도 내 말은 결코 사라지지 않을 것이다.",
      book: "루카",
      chapter: 21,
      verse: 33
    },
    {
      content: "너희가 가장 작은 내 형제 하나에게 해 준 것이 바로 나에게 해 준 것이다.",
      book: "마태오",
      chapter: 25,
      verse: 40
    },
    {
      content: "어떠한 종도 두 주인을 섬길 수 없다. 한쪽은 미워하고 다른 쪽은 사랑하며, 한쪽은 떠받들고 다른 쪽은 업신여기게 된다.",
      book: "루카",
      chapter: 16,
      verse: 13
    },
    {
      content: "내 나라는 이 세상에 속하지 않는다. 내 나라가 이 세상에 속한다면, 내 신하들이 싸워 내가 유다인들에게 넘어가지 않게 하였을 것이다.",
      book: "요한",
      chapter: 18,
      verse: 36
    },
    {
      content: "예수 그리스도께서는 성실한 증인이시고 죽은 이들의 맏이이시며 세상 임금들의 지배자이십니다.",
      book: "묵시",
      chapter: 1,
      verse: 4
    },
    {
      content: "늘 깨어 기도하여라.",
      book: "루카",
      chapter: 21,
      verse: 36
    },
    {
      content: "하늘에 계신 내 아버지의 뜻을 실행하는 사람이 내 형제요 누이요 어머니다.",
      book: "마태오",
      chapter: 12,
      verse: 50
    },
    {
      content: "나를 따라오너라. 내가 너희를 사람 낚는 어부로 만들겠다.",
      book: "마태오",
      chapter: 4,
      verse: 19
    },
    {
      content: "너희는 스스로 조심하여, 방탕과 만취와 일상의 근심으로 너희 마음이 물러지는 일이 없게 하여라.",
      book: "루카",
      chapter: 21,
      verse: 34
    },
    {
      content: "네 이웃을 너 자신처럼 사랑해야 한다. 이보다 더 큰 계명은 없다.",
      book: "마르코",
      chapter: 12,
      verse: 31
    },
    {
      content: "누구든지 자신을 높이는 이는 낮아지고 자신을 낮추는 이는 높아질 것이다.",
      book: "루카",
      chapter: 14,
      verse: 11
    },
    {
      content: "행복하여라, 마음이 가난한 사람들! 하늘 나라가 그들의 것이다.",
      book: "마태오",
      chapter: 5,
      verse: 3
    },
    {
      content: "너희는 내 이름 때문에 모든 사람에게 미움을 받을 것이다. 그러나 너희는 머리카락 하나도 잃지 않을 것이다.",
      book: "루카",
      chapter: 21,
      verse: 17
    },
    {
      content: "이와 같이 하늘에서는, 회개할 필요가 없는 의인 아흔아홉보다 회개하는 죄인 한 사람 때문에 더 기뻐할 것이다.",
      book: "루카",
      chapter: 15,
      verse: 7
    },
    {
      content: "주님께서는 당신을 시험하지 않는 이들을 만나 주시고 당신을 불신하지 않는 이들에게 당신 자신을 드러내 보이신다.",
      book: "지혜",
      chapter: 1,
      verse: 2
    },
    {
      content: "온 세상에 충만한 주님의 영은 만물을 총괄하는 존재로서 사람이 하는 말을 다 안다.",
      book: "지혜",
      chapter: 1,
      verse: 7
    },
    {
      content: "그러니 조심하여 쓸데없이 투덜거리지 말고 비방하지 않도록 혀를 잡도리하여라. 은밀히 하는 말도 반드시 결과를 가져오고 거짓을 말하는 입은 영혼을 죽인다.",
      book: "지혜",
      chapter: 1,
      verse: 11
    },
    {
      content: "정녕 하느님께서는 인간을 불멸의 존재로 창조하시고 당신 본성의 모습에 따라 인간을 만드셨다.",
      book: "지혜",
      chapter: 2,
      verse: 23
    },
    {
      content: "어리석은 자들의 눈에는 의인들이 죽은 것처럼 보이고 그들의 말로가 고난으로 생각되며 우리에게서 떠나는 것이 파멸로 여겨지지만 그들은 평화를 누리고 있다.",
      book: "지혜",
      chapter: 3,
      verse: 2
    },
    {
      content: "사람들이 보기에 의인들이 벌을 받는 것 같지만 그들은 불사의 희망으로 가득 차 있다. 그들은 단련을 조금 받은 뒤 은혜를 크게 얻을 것이다. ",
      book: "지혜",
      chapter: 3,
      verse: 4
    },
    {
      content: "주님을 신뢰하는 이들은 진리를 깨닫고 그분을 믿는 이들은 그분과 함께 사랑 속에 살 것이다. 은총과 자비가 주님의 거룩한 이들에게 주어지고 그분께서는 선택하신 이들을 돌보시기 때문이다.",
      book: "지혜",
      chapter: 3,
      verse: 9
    },
    {
      content: "좋은 노력의 결과는 영광스럽고 예지의 뿌리는 소멸되지 않는다.",
      book: "지혜",
      chapter: 3,
      verse: 15
    },
    {
      content: "자식이 없어도 덕이 있는 편이 더 낫다. 덕이 하느님과 사람들에게 인정을 받고 덕에 대한 기억 속에 불사가 들어 있기 때문이다.",
      book: "지혜",
      chapter: 4,
      verse: 1
    },
    {
      content: "영예로운 나이는 장수로 결정되지 않고 살아온 햇수로 셈해지지 않는다.",
      book: "지혜",
      chapter: 4,
      verse: 8
    },
    {
      content: "사람에게는 예지가 곧 백발이고 티 없는 삶이 곧 원숙한 노년이다.",
      book: "지혜",
      chapter: 4,
      verse: 9
    },
    {
      content: "죽은 의인이 살아 있는 악인들을, 일찍 죽은 젊은이가 불의하게 오래 산 자들을 단죄한다.",
      book: "지혜",
      chapter: 4,
      verse: 16
    },
    {
      content: "악인의 희망은 바람에 날리는 검불 같고 태풍에 흩날리는 가벼운 거품 같다. 그것은 바람 앞의 연기처럼 흩어지고 단 하루 머물렀던 손님에 대한 기억처럼 흘러가 버린다.",
      book: "지혜",
      chapter: 5,
      verse: 14
    },
    {
      content: "주님께서는 당신의 원수들을 징벌하시려고 당신의 열정을 갑옷으로 입으시고 온 피조물을 무장시키실 것이다.",
      book: "지혜",
      chapter: 5,
      verse: 17
    },
    {
      content: "만물의 주님께서는 누구 앞에서도 움츠러들지 않으시고 누가 위대하다고 하여 어려워하지도 않으신다. 작거나 크거나 다 그분께서 만드셨고 모두 똑같이 생각해 주신다.",
      book: "지혜",
      chapter: 6,
      verse: 7
    },
    {
      content: "지혜는 바래지 않고 늘 빛이 나서 그를 사랑하는 이들은 쉽게 알아보고 그를 찾는 이들은 쉽게 발견할 수 있다.",
      book: "지혜",
      chapter: 6,
      verse: 12
    },
    {
      content: "지혜의 시작은 가르침을 받으려는 진실한 소망이다.",
      book: "지혜",
      chapter: 6,
      verse: 17
    },
    {
      content: "온 세상의 금도 지혜와 마주하면 한 줌의 모래이고 은도 지혜 앞에서는 진흙처럼 여겨지기 때문이다.",
      book: "지혜",
      chapter: 7,
      verse: 9
    },
    {
      content: "나는 지혜를 건강이나 미모보다 더 사랑하고 빛보다 지혜를 갖기를 선호하였다. 지혜에서 끊임없이 광채가 나오기 때문이다.",
      book: "지혜",
      chapter: 7,
      verse: 10
    },
    {
      content: "지혜와 함께 좋은 것이 다 나에게 왔다. 지혜의 손에 헤아릴 수 없이 많은 재산이 들려 있었다.",
      book: "지혜",
      chapter: 7,
      verse: 11
    },
    {
      content: "밤은 빛을 밀어내지만 악은 지혜를 이겨 내지 못한다.",
      book: "지혜",
      chapter: 7,
      verse: 30
    },
    {
      content: "살아가면서 많은 재산을 갖는 것이 바람직하다면 모든 것을 이루는 지혜보다 더 큰 재산이 어디 있겠는가?",
      book: "지혜",
      chapter: 8,
      verse: 5
    },
    {
      content: "그러나 지혜는 하느님께서 주지 않으시면 달리 얻을 수 없음을 깨달았다.",
      book: "지혜",
      chapter: 8,
      verse: 21
    },
    {
      content: "사실 사람들 가운데 누가 완전하다 하더라도 당신에게서 오는 지혜가 없으면 아무것도 아닌 것으로 여겨집니다.",
      book: "지혜",
      chapter: 9,
      verse: 6
    },
    {
      content: "목마른 그들이 당신께 간청하자 깎아지른 듯한 바위에서 물이, 단단한 돌에서 목마름을 풀어 주는 것이 나왔습니다.",
      book: "지혜",
      chapter: 11,
      verse: 4
    },
    {
      content: "나는 내가 자비를 베풀려는 이에게 자비를 베풀고, 동정을 베풀려는 이에게 동정을 베푼다.",
      book: "탈출",
      chapter: 33,
      verse: 19
    },
    {
      content: "의인들의 길은 주님께서 알고 계시고 악인들의 길은 멸망에 이르기 때문일세.",
      book: "시편",
      chapter: 1,
      verse: 2
    },
    {
      content: "나에게 청하여라. 내가 민족들을 너의 재산으로, 땅끝까지 너의 소유로 주리라.",
      book: "시편",
      chapter: 2,
      verse: 8
    },
    {
      content: "주님, 당신은 저를 에워싼 방패, 저의 영광, 저의 머리를 들어 올려 주시는 분이십니다.",
      book: "시편",
      chapter: 3,
      verse: 4
    },
    {
      content: "제 의로움을 지켜 주시는 하느님 제가 부르짖을 때 응답해 주소서. 곤경에서 저를 끌어내셨으니 자비를 베푸시어 제 기도를 들으소서.",
      book: "시편",
      chapter: 4,
      verse: 2
    },
    {
      content: "주님께서는 당신께 충실한 이에게 기적을 베푸심을 알아라. 내가 부르짖으면 주님께서는 들어 주신다.",
      book: "시편",
      chapter: 4,
      verse: 4
    },
    {
      content: "주님, 당신만이 저를 평안히 살게 하시니 저는 평화로이 자리에 누워 잠이 듭니다.",
      book: "시편",
      chapter: 4,
      verse: 9
    },
    {
      content: "주님, 당신께서는 의인에게 복을 내리시고 큰 방패 같은 호의로 그를 덮어 주십니다.",
      book: "시편",
      chapter: 5,
      verse: 13
    },
    {
      content: "나의 방패가 하느님께 있으니 그분은 마음 바른 이들을 구하시는 분.",
      book: "시편",
      chapter: 7,
      verse: 11
    },
    {
      content: "주님께서는 억눌린 이에게 피신처, 환난 때에 피신처가 되어 주시네.",
      book: "시편",
      chapter: 9,
      verse: 10
    },
    {
      content: "그러나 가난한 이는 영원히 잊히지 않고 가련한 이들의 희망은 영원토록 헛되지 않으리라",
      book: "시편",
      chapter: 9,
      verse: 19
    },
    {
      content: "주님께서는 의인도 악인도 가려내시고 그분의 얼은 폭행을 사랑하는 자를 미워하신다.",
      book: "시편",
      chapter: 11,
      verse: 5
    },
    {
      content: "주님께서는 의로우시어 의로운 일들을 사랑하시니 올곧은 이는 그분의 얼굴을 뵙게 되리라.",
      book: "시편",
      chapter: 11,
      verse: 7
    },
    {
      content: "당신께서 저에게 생명의 길을 가르치시니 당신 면전에서 넘치는 기쁨을, 당신 오른쪽에서 길이 평안을 누리리이다.",
      book: "시편",
      chapter: 16,
      verse: 11
    },
    {
      content: "주님은 저의 반석, 저의 산성, 저의 구원자 저의 하느님, 이 몸 피신하는 저의 바위 저의 방패, 제 구원의 뿔, 저의 성채이십니다.",
      book: "시편",
      chapter: 18,
      verse: 3
    },
    {
      content: "이 곤경 중에 내가 주님을 부르고 내 하느님께 도움을 청하였더니 당신 궁전에서 내 목소리 들으셨네. 도움 청하는 내 소리 그분 귀에 다다랐네.",
      book: "시편",
      chapter: 18,
      verse: 7
    },
    {
      content: "하느님의 길은 결백하고 주님의 말씀은 순수하며 그분께서는 당신께 피신하는 모든 이에게 방패가 되신다.",
      book: "시편",
      chapter: 18,
      verse: 31
    },
    {
      content: "주님, 저의 반석, 저의 구원자시여 당신 앞에 드리는 제 입의 말씀과 제 마음의 생각이 당신 마음에 들게 하소서.",
      book: "시편",
      chapter: 19,
      verse: 15
    },
    {
      content: "나는 이제 안다네, 주님께서 당신의 기름부음받은이에게 구원을 베푸심을. 그분께서 당신의 거룩한 하늘에서 당신 오른손의 구원 위업으로 그에게 응답하시리라.",
      book: "시편",
      chapter: 20,
      verse: 7
    },
    {
      content: "주님, 당신께서는 멀리 계시지 마소서. 저의 힘이시여, 어서 저를 도우소서.",
      book: "시편",
      chapter: 22,
      verse: 20
    },
    {
      content: "저는 당신 이름을 제 형제들에게 전하고 모임 한가운데에서 당신을 찬양하오리다.",
      book: "시편",
      chapter: 22,
      verse: 23
    },
    {
      content: "그분께서는 가련한 이의 가엾음을 업신여기지도 싫어하지도 않으시고 그에게서 당신 얼굴을 감추지도 않으시며 그가 당신께 도움 청할 때 들어 주신다.",
      book: "시편",
      chapter: 22,
      verse: 25
    },
    {
      content: "주님은 나의 목자, 나는 아쉬울 것 없어라.",
      book: "시편",
      chapter: 23,
      verse: 1
    },
    {
      content: "푸른 풀밭에 나를 쉬게 하시고 잔잔한 물가로 나를 이끄시어 내 영혼에 생기를 돋우어 주시고 바른길로 나를 끌어 주시니 당신의 이름 때문이어라.",
      book: "시편",
      chapter: 23,
      verse: 2
    },
    {
      content: "제가 비록 어둠의 골짜기를 간다 하여도 재앙을 두려워하지 않으리니 당신께서 저와 함께 계시기 때문입니다. 당신의 막대와 지팡이가 저에게 위안을 줍니다.",
      book: "시편",
      chapter: 23,
      verse: 4
    },
    {
      content: "저의 한평생 모든 날에 호의와 자애만이 저를 따르리니 저는 일생토록 주님의 집에 사오리다.",
      book: "시편",
      chapter: 23,
      verse: 6
    },
    {
      content: "주님, 당신의 길을 제게 알려 주시고 당신의 행로를 제게 가르쳐 주소서.",
      book: "시편",
      chapter: 25,
      verse: 4
    },
    {
      content: "당신의 계약과 법규를 지키는 이들에게 주님의 길은 모두 자애와 진실이라네.",
      book: "시편",
      chapter: 25,
      verse: 10
    },
    {
      content: "주님, 저의 죄가 크니 당신 이름 생각하시어 용서하소서.",
      book: "시편",
      chapter: 25,
      verse: 11
    },
    {
      content: "주님은 나의 힘, 나의 방패. 내 마음 그분께 의지하여 도움을 받았으니 내 마음 기뻐 뛰놀며 나의 노래로 그분을 찬송하리라.",
      book: "시편",
      chapter: 28,
      verse: 7
    },
    {
      content: "주님께서 당신 백성에게 권능을 주시리라. 주님께서 당신 백성에게 평화로 강복하시리라.",
      book: "시편",
      chapter: 29,
      verse: 11
    },
    {
      content: "그분의 진노는 잠시뿐이나 그분의 호의는 한평생 가니 저녁에 울음이 깃들지라도 아침에는 환호하게 되리라.",
      book: "시편",
      chapter: 30,
      verse: 6
    },
    {
      content: "당신께서는 저의 비탄을 춤으로 바꾸시고 저의 자루옷 푸시어 저를 기쁨으로 띠 두르셨습니다.",
      book: "시편",
      chapter: 30,
      verse: 12
    },
    {
      content: "당신은 저의 바위, 저의 성채이시니 당신 이름 생각하시어 저를 이끌고 인도하소서.",
      book: "시편",
      chapter: 31,
      verse: 4
    },
    {
      content: "당신의 자애로 저는 기뻐하고 즐거워하리니 당신께서 저의 가련함을 굽어보시어 제 영혼의 곤경을 살펴 아시고 저를 원수의 손에 넘기지 않으시며 제 발을 넓은 곳에 세우셨기 때문입니다.",
      book: "시편",
      chapter: 31,
      verse: 8
    },
    {
      content: "당신 얼굴을 당신 종 위에 비추시고 당신 자애로 저를 구하소서.",
      book: "시편",
      chapter: 31,
      verse: 17
    },
    {
      content: "주님께 충실한 이들아, 모두 주님을 사랑하여라. 주님께서는 진실한 이들은 지켜 주시나 거만하게 구는 자에게는 호되게 갚으신다.",
      book: "시편",
      chapter: 31,
      verse: 24
    },
    {
      content: "행복하여라, 주님께서 허물을 헤아리지 않으시고 그 얼에 거짓이 없는 사람!",
      book: "시편",
      chapter: 32,
      verse: 2
    },
    {
      content: "당신은 저의 피신처. 곤경에서 저를 보호하시고 구원의 환호로 저를 에워싸십니다.",
      book: "시편",
      chapter: 32,
      verse: 7
    },
    {
      content: "악인에게는 고통이 많으나 주님을 신뢰하는 이는 자애가 에워싸리라.",
      book: "시편",
      chapter: 32,
      verse: 10
    },
    {
      content: "주님의 말씀은 바르고 그분의 행적은 모두 진실하다. 그분은 정의와 공정을 사랑하시는 분. 주님의 자애가 땅에 가득하네.",
      book: "시편",
      chapter: 33,
      verse: 4
    },
    {
      content: "우리의 영혼은 주님을 기다리니 그분은 우리의 도움, 우리의 방패이시다.",
      book: "시편",
      chapter: 33,
      verse: 20
    },
    {
      content: "주님을 찾았더니 내게 응답하시고 온갖 두려움에서 나를 구하셨네.",
      book: "시편",
      chapter: 34,
      verse: 5
    },
    {
      content: "너희는 맛보고 눈여겨보아라, 주님께서 얼마나 좋으신지! 행복하여라, 그분께 피신하는 사람!",
      book: "시편",
      chapter: 34,
      verse: 9
    },
    {
      content: "악을 피하고 선을 행하며 평화를 찾고 또 추구하여라.",
      book: "시편",
      chapter: 34,
      verse: 15
    },
    {
      content: "주님의 눈은 의인들을 굽어보시고 그분의 귀는 그들의 부르짖음을 들으신다.",
      book: "시편",
      chapter: 34,
      verse: 16
    },
    {
      content: "주님께서는 마음이 부서진 이들에게 가까이 계시고 넋이 짓밟힌 이들을 구원해 주신다.",
      book: "시편",
      chapter: 34,
      verse: 19
    },
    {
      content: "의인의 불행이 많을지라도 주님께서는 그 모든 것에서 그를 구하시리라.",
      book: "시편",
      chapter: 34,
      verse: 20
    },
    {
      content: "정녕 당신께는 생명의 샘이 있고 당신 빛으로 저희는 빛을 봅니다.",
      book: "시편",
      chapter: 36,
      verse: 10
    },
    {
      content: "주님 안에서 즐거워하여라. 그분께서 네 마음이 청하는 바를 주시리라.",
      book: "시편",
      chapter: 37,
      verse: 4
    },
    {
      content: "네 길을 주님께 맡기고 그분을 신뢰하여라. 그분께서 몸소 해 주시리라.",
      book: "시편",
      chapter: 37,
      verse: 5
    },
    {
      content: "너는 악을 저지르는 자들 때문에 격분하지 말고 불의를 일삼는 자들 때문에 흥분하지 마라.",
      book: "시편",
      chapter: 37,
      verse: 1
    },
    {
      content: "주님 앞에 고요히 머물며 그분을 고대하여라. 제 길에서 성공을 거두는 자 때문에, 음모를 실행에 옮기는 사람 때문에 격분하지 마라.",
      book: "시편",
      chapter: 37,
      verse: 7
    },
    {
      content: "노여움을 그치고 성을 가라앉혀라. 격분하지 마라. 악을 저지를 뿐이다.",
      book: "시편",
      chapter: 37,
      verse: 8
    },
    {
      content: "의인이 가진 적은 것이 악인들의 많은 재산보다 낫다.",
      book: "시편",
      chapter: 37,
      verse: 16
    },
    {
      content: "너는 악을 피하고 선을 행하여라. 그러면 길이 살리라.",
      book: "시편",
      chapter: 37,
      verse: 27
    },
    {
      content: "너는 주님께 바라고 그분의 길을 따라라. 그분께서 너를 들어 올려 땅을 차지하게 하시고 너는 악인들이 뿌리째 뽑힘을 즐거이 보리라.",
      book: "시편",
      chapter: 37,
      verse: 34
    },
    {
      content: "의인들의 구원은 주님에게서 오고 그분께서는 곤경의 때에 그들의 피신처가 되어 주신다.",
      book: "시편",
      chapter: 37,
      verse: 39
    },
    {
      content: "주님, 저를 버리지 마소서. 저의 하느님, 제게서 멀리 계시지 마소서.",
      book: "시편",
      chapter: 38,
      verse: 22
    },
    {
      content: "주님, 저의 구원이시여 어서 저를 도우소서.",
      book: "시편",
      chapter: 38,
      verse: 23
    },
    {
      content: "주님, 제가 무엇을 바라겠습니까? 저의 희망은 오직 당신께 있습니다.",
      book: "시편",
      chapter: 39,
      verse: 8
    },
    {
      content: "주님, 당신께서는 제게 당신의 자비를 거절하지 않으시니 당신의 자애와 진실이 항상 저를 지켜 주리이다.",
      book: "시편",
      chapter: 40,
      verse: 12
    },
    {
      content: "행복하여라, 가련한 이를 돌보아 주는 이! 불행의 날에 주님께서 그를 구하시리라.",
      book: "시편",
      chapter: 41,
      verse: 2
    },
    {
      content: "암사슴이 시냇물을 그리워하듯 하느님, 제 영혼이 당신을 이토록 그리워합니다.",
      book: "시편",
      chapter: 42,
      verse: 2
    },
    {
      content: "내 영혼아, 어찌하여 녹아내리며 어찌하여 내 안에서 신음하느냐? 하느님께 바라라. 나 그분을 다시 찬송하게 되리라, 나의 구원, 나의 하느님을.",
      book: "시편",
      chapter: 43,
      verse: 5
    },
    {
      content: "하느님께서 우리의 피신처와 힘이 되시어 어려울 때마다 늘 도우셨기에 우리는 두려워하지 않네",
      book: "시편",
      chapter: 46,
      verse: 3
    },
    {
      content: "하느님께서는 내 영혼을 구원하시고 저승의 손에서 나를 기어이 빼내시리라. ",
      book: "시편",
      chapter: 49,
      verse: 16
    },
    {
      content: "누가 부자가 된다 하여도, 제집의 영광을 드높인다 하여도 불안해하지 마라. 죽을 때 그 모든 것을 가지고 갈 수 없으며 그의 영광도 그를 따라 내려가지 못한다.",
      book: "시편",
      chapter: 49,
      verse: 17
    },
    {
      content: "불행의 날에 나를 불러라. 나 너를 구하여 주고 너는 나를 공경하리라.",
      book: "시편",
      chapter: 50,
      verse: 15
    },
    {
      content: "하느님, 깨끗한 마음을 제게 만들어 주시고 굳건한 영을 제 안에 새롭게 하소서.",
      book: "시편",
      chapter: 51,
      verse: 12
    },
    {
      content: "하느님께 맞갖은 제물은 부서진 영. 부서지고 꺾인 마음을 하느님, 당신께서는 업신여기지 않으십니다.",
      book: "시편",
      chapter: 51,
      verse: 19
    },
    {
      content: "보라, 하느님은 나를 도우시는 분, 주님은 내 생명을 받쳐 주시는 분이시다.",
      book: "시편",
      chapter: 54,
      verse: 6
    },
    {
      content: "네 근심을 주님께 맡겨라. 그분께서 너를 붙들어 주시리라. 의인이 흔들림을 결코 내버려 두지 않으시리라.",
      book: "시편",
      chapter: 55,
      verse: 23
    },
    {
      content: "하느님께 의지하여 두려워하지 않으니 사람이 나에게 무엇을 할 수 있으랴?",
      book: "시편",
      chapter: 56,
      verse: 12
    },
    {
      content: "당신께서 제 목숨을 죽음에서 건지시어 제 발이 넘어지지 않게 해 주셨으니 하느님 앞에서, 생명의 빛 속에서 걸어가도록 하심입니다.",
      book: "시편",
      chapter: 56,
      verse: 14
    },
    {
      content: "하느님과 함께 우리가 큰일을 이루리라. 그분께서 우리 원수들을 짓밟으시리라.",
      book: "시편",
      chapter: 60,
      verse: 14
    },
    {
      content: "당신께서는 저에게 피신처, 원수 앞에서 굳건한 탑이 되셨습니다.",
      book: "시편",
      chapter: 61,
      verse: 4
    },
    {
      content: "내 영혼은 오직 하느님을 향해 말없이 기다리니 그분에게서 나의 구원이 오기 때문이네.",
      book: "시편",
      chapter: 62,
      verse: 2
    },
    {
      content: "내 도움과 내 영광이 하느님께 있으며 내 견고한 바위와 피신처가 하느님 안에 있네.",
      book: "시편",
      chapter: 62,
      verse: 8
    },
    {
      content: "당신께서는 각자에게 그 행실대로 갚으십니다.",
      book: "시편",
      chapter: 62,
      verse: 13
    },
    {
      content: "하느님, 당신은 저의 하느님, 저는 당신을 찾습니다. 제 영혼이 당신을 목말라합니다. 물기 없이 마르고 메마른 땅에서 이 몸이 당신을 애타게 그립니다.",
      book: "시편",
      chapter: 63,
      verse: 2
    },
    {
      content: "당신의 자애가 생명보다 낫기에 제 입술이 당신을 찬미합니다.",
      book: "시편",
      chapter: 63,
      verse: 4
    },
    {
      content: "의인은 주님 안에서 기뻐하며 그분께 피신하고 마음 바른 이들은 모두 자랑스러워하리라.",
      book: "시편",
      chapter: 64,
      verse: 11
    },
    {
      content: "정녕 하느님께서는 들으셨네. 내 기도 소리를 새겨들으셨네.",
      book: "시편",
      chapter: 66,
      verse: 19
    },
    {
      content: "하느님은 외로운 이들에게 집을 마련해 주시고 사로잡힌 이들을 행복으로 이끌어 내시는 분이시다.",
      book: "시편",
      chapter: 68,
      verse: 7
    },
    {
      content: "하느님을 찾는 이들아, 너희 마음 기운 차려라.",
      book: "시편",
      chapter: 69,
      verse: 33
    },
    {
      content: "주님께서는 불쌍한 이들의 소리를 들어 주시고 사로잡힌 당신 백성을 멸시하지 않으신다",
      book: "시편",
      chapter: 69,
      verse: 34
    },
    {
      content: "당신을 찾는 이들은 모두 당신 안에서 기뻐하고 즐거워하리이다.",
      book: "시편",
      chapter: 70,
      verse: 5
    },
    {
      content: "이 몸 보호할 반석 되시고 저를 구할 산성 되소서. 당신은 저의 바위, 저의 성곽이십니다.",
      book: "시편",
      chapter:71 ,
      verse: 3
    },
    {
      content: "낮도 당신의 것, 밤도 당신의 것. 당신께서 빛과 해를 세우셨습니다.",
      book: "시편",
      chapter: 74,
      verse: 16
    },
    {
      content: "오직 하느님만이 심판자, 어떤 이는 낮추시고 어떤 이는 높이신다.",
      book: "시편",
      chapter: 75,
      verse: 8
    },
    {
      content: "주 만군의 하느님, 저희를 다시 일으켜 주소서. 당신 얼굴을 비추소서. 저희가 구원되리이다.",
      book: "시편",
      chapter: 80,
      verse: 20
    },
    {
      content: "곤경 속에서 네가 부르짖자 나 너를 구하였고 천둥 구름 속에서 너에게 대답하였으며 므리바의 샘에서 너를 시험하였노라.",
      book: "시편",
      chapter: 81,
      verse: 8
    },
    {
      content: "내가 주님, 너의 하느님이다. 너를 이집트 땅에서 끌어 올린 이다. 네 입을 한껏 벌려라, 내가 채워 주리라.",
      book: "시편",
      chapter: 81,
      verse: 11
    },
    {
      content: "행복합니다, 마음속으로 순례의 길을 생각할 때 당신께 힘을 얻는 사람들!",
      book: "시편",
      chapter: 84,
      verse: 6
    },
    {
      content: "주님, 저희에게 당신 자애를 보이시고 저희에게 당신 구원을 베푸소서.",
      book: "시편",
      chapter: 85,
      verse: 8
    },
    {
      content: "주님, 당신은 어지시고 기꺼이 용서하시는 분 당신을 부르는 모든 이에게 자애가 크십니다.",
      book: "시편",
      chapter: 86,
      verse: 5
    },
    {
      content: "당신께서 제게 응답해 주시리니 곤경의 날 제가 당신께 부르짖습니다.",
      book: "시편",
      chapter: 86,
      verse: 7
    },
    {
      content: "주님, 당신께서는 대대로 저희에게 안식처가 되셨습니다.",
      book: "시편",
      chapter: 90,
      verse: 1
    },
    {
      content: "정녕 천 년도 당신 눈에는 지나간 어제 같고 야경의 한때와도 같습니다.",
      book: "시편",
      chapter: 90,
      verse: 4
    },
    {
      content: "당신 깃으로 너를 덮으시어 네가 그분 날개 밑으로 피신하리라. 그분의 진실은 큰 방패와 갑옷이라네.",
      book: "시편",
      chapter: 91,
      verse: 4
    },
    {
      content: "정녕 주님께서는 당신 백성을 물리치지 않으시고 당신 소유를 저버리지 않으신다.",
      book: "시편",
      chapter: 94,
      verse: 14
    },
    {
      content: "주님을 사랑하는 이들아, 악을 미워하여라. 그분께서 당신께 충실한 이들의 목숨을 지키시고 악인들의 손에서 그들을 구출해 주신다.",
      book: "시편",
      chapter: 97,
      verse: 10
    },
    {
      content: "주님께서는 정의를 실천하시고 억눌린 이들 모두에게 공정을 베푸신다.",
      book: "시편",
      chapter: 103,
      verse: 6
    },
    {
      content: "주님께서는 자비하시고 너그러우시며 분노에 더디시고 자애가 넘치신다.",
      book: "시편",
      chapter: 103,
      verse: 8
    },
    {
      content: "아버지가 자식들을 가엾이 여기듯 주님께서는 당신을 경외하는 이들을 가엾이 여기시니 우리의 됨됨이를 아시고 우리가 티끌임을 기억하시기 때문이다.",
      book: "시편",
      chapter: 103,
      verse: 13
    },
    {
      content: "주님의 자애는 영원에서 영원까지 당신을 경외하는 이들 위에 머무르고 그분의 의로움은 대대에 이르리라",
      book: "시편",
      chapter: 103,
      verse: 17
    },
    {
      content: "주님과 그 권능을 구하여라. 언제나 그 얼굴을 찾아라.",
      book: "시편",
      chapter: 105,
      verse: 4
    },
    {
      content: "주님께 피신함이 더 낫네, 사람을 믿기보다.",
      book: "시편",
      chapter: 118,
      verse: 8
    },
    {
      content: "행복하여라, 그 길이 온전한 이들 주님의 가르침을 따라 걷는 이들!",
      book: "시편",
      chapter: 119,
      verse: 1
    },
    {
      content: "제 마음 다하여 당신을 찾습니다. 당신 계명을 떠나 헤매지 않게 하소서.",
      book: "시편",
      chapter: 119,
      verse: 10
    },
    {
      content: "당신께 죄짓지 않으려고 마음속에 당신 말씀을 간직합니다.",
      book: "시편",
      chapter: 119,
      verse: 11
    },
    {
      content: "당신 법이 저의 즐거움이며 저의 조언자입니다.",
      book: "시편",
      chapter: 119,
      verse: 24
    },
    {
      content: "당신 말씀이 저를 살리신다는 것 이것이 고통 가운데 제 위로입니다.",
      book: "시편",
      chapter: 119,
      verse: 50
    },
    {
      content: "주님, 당신의 법규가 의로움을 제가 압니다. 성실하시기에 저에게 고통을 겪게 하셨습니다.",
      book: "시편",
      chapter: 119,
      verse: 75
    },
    {
      content: "당신 말씀은 제 발에 등불, 저의 길에 빛입니다.",
      book: "시편",
      chapter: 119,
      verse: 105
    },
    {
      content: "당신의 가르침을 사랑하는 이들에게는 큰 평화가 있고 무엇 하나 거칠 것이 없습니다.",
      book: "시편",
      chapter: 119,
      verse: 165
    },
    {
      content: "곤경 속에서 주님께 부르짖자 나에게 응답하셨네.",
      book: "시편",
      chapter: 120,
      verse: 1
    },
    {
      content: "주님은 너를 지키시는 분 주님은 너의 그늘 네 오른쪽에 계시다.",
      book: "시편",
      chapter: 121,
      verse: 5
    },
    {
      content: "낮에는 해도, 밤에는 달도 너를 해치지 않으리라.",
      book: "시편",
      chapter: 121,
      verse: 6
    },
    {
      content: "나거나 들거나 주님께서 너를 지키신다, 이제부터 영원까지.",
      book: "시편",
      chapter: 121,
      verse: 8
    },
    {
      content: "주 우리 하느님의 집을 위하여 너의 행복을 나는 기원하네.",
      book: "시편",
      chapter: 122,
      verse: 9
    },
    {
      content: "우리의 도우심은 주님 이름에 있으니 하늘과 땅을 만드신 분이시네.",
      book: "시편",
      chapter: 124,
      verse: 8
    },
    {
      content: "주님을 신뢰하는 이들은 시온 산 같아 흔들리지 아니하고 영원히 서 있으리라.",
      book: "시편",
      chapter: 125,
      verse: 1
    },
    {
      content: "눈물로 씨 뿌리던 이들 환호하며 거두리라.",
      book: "시편",
      chapter: 126,
      verse: 5
    },
    {
      content: "뿌릴 씨 들고 울며 가던 이 곡식 단 들고 환호하며 돌아오리라.",
      book: "시편",
      chapter: 126,
      verse: 6
    },
    {
      content: "일찍 일어남도 늦게 자리에 듦도 고난의 빵을 먹음도 너희에게 헛되리라. 당신께서 사랑하시는 이에게는 잘 때에 그만큼을 주신다.",
      book: "시편",
      chapter: 127,
      verse: 2
    },
    {
      content: "행복하여라, 주님을 경외하는 이 모두 그분의 길을 걷는 이 모두! 네 손으로 벌어들인 것을 네가 먹으리니 너는 행복하여라, 너는 복이 있어라.",
      book: "시편",
      chapter: 128,
      verse: 1
    },
    {
      content: "그러나 당신께는 용서가 있으니 사람들이 당신을 경외하리이다.",
      book: "시편",
      chapter: 130,
      verse: 4
    },
    {
      content: "나 주님께 바라네. 내 영혼이 주님께 바라며 그분 말씀에 희망을 두네.",
      book: "시편",
      chapter: 130,
      verse: 5
    },
    {
      content: "파수꾼들이 아침을 기다리기보다 내 영혼이 주님을 더 기다리네.",
      book: "시편",
      chapter: 130,
      verse: 6
    }
  ];
  
  export default words;
  

  