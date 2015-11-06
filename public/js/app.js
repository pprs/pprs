
angular.module('pprsApp', [])
  .controller('mainCtrl', function($scope, $window, $http) {

    $scope.event_container = [];
    $scope.sub_info = { user: '' };

    //$scope.url = "http://127.0.0.1:3080";
    $scope.url = "http://p.quizn.co.kr";
    
    $scope.event = function(index) {
      $scope.me = $scope.event_container[index];

      /*
      $scope.me.title = 'The Beginning of Papyrus';
      $scope.me.detail_ko = '"1992년 드디어 우리가 기대하던 파피루스 아이웨어의 서막이 올랐다. 기존 안경 산업에서 탈피하여 인테리어에 하우스 브랜드를 접목시킴으로써, 그 둘의 환상의 하모니는 국내 최초 편집샵이라는 타이틀을 거머주게 만든것! 기존 샵들과 다르게 차별화된 전략으로 올 화이트로 세련된 인테리어와 다양한 상품 구성으로 이목을 이끌었다. 더불어 프레스와 스타마케팅을 통해 고객들에게 파피루스 브랜드를 선보일 수 있었던 것 또한 현명한 선택이었다."';
      $scope.me.detail_en = '"1992 is the year is called the beginning of Papyrus. Papyrus merged the interior and house brand in Korea to bring the idea of ""multi-brand"" store in Korea."';
      $scope.me.img_container = [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/open/1.jpg'},
		      {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/open/2.jpg'},
		      {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/open/3.jpg'},
		      {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/open/4.jpg'},
		      {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/open/5.jpg'}
		     ];
       */
    };


    $scope.event_db_container = [

      // #14
      {card_title:"THE TRUNK SHOW", card_body: "CUTLER AND GROSS", card_since: "2015.10", card_where: "Korea",
       about_ko: "영국의 대표 Vintage Eyewear로 손 꼽히는 Cutler and Gross가 또한번 파피루스와 손을 잡기 시작했다. 이번 칵테일 컬렉션을 파피루스에서 한국 최초로 공개를 한다고. 문화와 패션이 가장 다양하고 시크한 매력을 지녔던 80년대 영국 런던의 모습을 담은 이번 컬렉션을 누가 마다 할 수 있을 것인가.",
       about_title: 'Cutler and Gross ‘s new collection is coming!',
       about_subtitle: "New collection of Dior 2015",
       about_en: "Cutler and Gross 2015 F/W Cocktail collection is now presented only in Papyrus. This collection represents the England 80’s glamorous life.",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/15/1.png'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/15/2.png'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/15/3.png'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/15/4.png'}]},
      

      // #13
      {card_title:"LAUNCH EVENT", card_body: "RE-BRANDING", card_since: "2015.08", card_where: "Korea",
       about_ko: "Papyrus가 쌓아온 정통성에 New Generation의 색을 입혔다! 핵심 아이덴티티를 유지하며 더욱 자유로워진 파피루스는 비단 로고뿐만 아니라 로고를 이용한 패턴에서도 찾을 수 있다. 전 파피루스 매장에 다양한 페이퍼 아트워크를 볼 수 있으니 매장을 방문해 가며 다른 점을 찾는 것도 색다른 재미가 아닐까.",
       about_title: 'This is new Papyrus with Papyrus',
       about_subtitle: "New collection of Dior 2015",
       about_en: "Papyrus finalized their rebranding work. They spread their concept with paper, which is, their brand’s etymology.",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/14/1.png'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/14/2.png'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/14/3.png'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/14/4.png'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/14/5.png'}]},

      // #12
      {card_title:"THE RENOVATION", card_body: "THE RENOVATION", card_since: "2015.07", card_where: "Korea",
       about_ko: "분당 AK 플라자에 아테네에서나 볼 법한 그리스 신전이 세워졌다. 새로 리뉴얼한 분당 파피루스는 4층으로 이동함으로써 더 넓은 공간을 확보하여 더 많은 볼거리를 고객들에게 제공하고 있다. 웅장함과 경외심을 가지게 하는 분당 파피루스에게 브라보를 외치고 싶다.",
       about_title: 'Welcome back! Bundang Papyrus',
       about_subtitle: "New collection of Dior 2015",
       about_en: "Welcome back! Bundang Papyrus. Finally, finished the renewal of Bundang Papyrus. It is now located in 4th floor in AK Plaza",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/13/1.png'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/13/2.png'},
                       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/13/3.png'},
                       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/13/4.png'}]},
      

      // #11
      {card_title:"Dior", card_body: "Dior", card_since: "2015.06", card_where: "Korea",
       about_ko: "디올과 파피루스가 또 다시 한번 일을 내기 시작했다! 첫 흑인 muse가 된 RIHANNA의 limited edition SO-REAL은 오직 파피루스에서만 기간한정 독점판매한다고 한다. 발품 팔지 말고 파피루스를 방문하면 SO-REAL전 제품을 볼 수 있는 것이 팁!",
       about_title: 'Dior with New Muse “RIHANNA"',
       about_subtitle: "New collection of Dior 2015",
       about_en: "Dior collaborated with Diva Rihanna and produced blue black version of SO-REAL. This will sell exclusively only in Papyrus for three months.",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/12/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/12/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/12/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/12/4.jpg'}]},

      // #10
      {card_title:"Papyrus Event", card_body: "THE Promotion Event", card_since: "2015.06", card_where: "Korea",
       about_ko: "언제나 사람을 깜짝 놀라게 만드는 파피루스는 한발 앞써 다가오는 여름의 시작을 알리기  시작했다. 유난히 내리 쬐는 태양 아래 톡톡 튀는 컬러와 다양한 선글라스로 여름 나기를 준비하는 것이 어떤가.",
       about_title: "BE READY FOR SUMMER, SUMMER IS JUST IS JUST AROUNT THE CORNER!",
       about_subtitle: "BE READY FOR SUMMER",
       about_en: "Hey guyz! Summer is just around the corner. Papyrus started the summer sales with new arrival sunglasses. Don't miss this great chance!",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/11/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/11/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/11/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/11/4.jpg'}]},

      // #9
      {card_title:"Papyrus Event", card_body: "The HOLIDAY", card_since: "2014.12", card_where: "Korea",
       about_ko: "서울 한복판에 세상과 소통하기 위한 예술 작품이 나타났다! 파피루스와 COL.L.AGE+가 콜라보로 진행한 Holiday Seasonal Project는 장승효 작가의 화려한 패턴처럼 고객의 연말연시도 누구보다 빛나길 바라는 마음으로 시작한 프로젝트라고. 실제로 매장에서 체스게임을 할 수 있다니 한번쯤 방문해 볼 것.",
       about_title: "Holiday Seasonal Collaboration Project with COL.L.L.AGE+",
       about_subtitle: "Happy Holiday 2014",
       about_en: "Papyrus exhibited the remarkable art work by collaborating with COL.L.AGE+. They planned the event for hoping the customer had happy holiday.",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/10/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/10/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/10/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/10/4.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/10/5.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/10/6.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/10/7.jpg'}]},
      
      // #8
      {card_title:"Papyrus Event", card_body: "Pre-launch Event", card_since: "2014.06", card_where: "Korea",
       about_ko: "인생은 마치 체스와 같다는 벤자민 프랭클린의 말처럼, 눈 앞의 유행이 아닌 더 먼 트렌드의 흐름을 읽기 위해 파피루스가 나섰다. Infinite mirror를 이용한 디스플레이로 마치 유럽에 온듯한 느낌을 주어 화려한 변신을 하였으니 방문하는 사람마다 입을 다물지 못했다는 소문이!",
       about_title: "Life Is a Kind of Chess -Benjamin Franklin",
       about_subtitle: "What is Papyrus",
       about_en: "The concept of Papyrus was inspired from the intelligence and rational thinking involved in the chess - if you can see a good move, find a better move. Papyrus reads future trends instead of chasing the latest trend.",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/9/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/9/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/9/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/9/4.jpg'}]},

      // #7
      {card_title:"Max Pittion", card_body: "Max Pittion", card_since: "2014.05", card_where: "Korea",
       about_ko: "세계적인 뮤지션 존 메이어가 왔다! 잠실 종합운동장이 아닌 파피루스에! 왜? 프랑스의 빈티지 브랜드, 막스티피옹을 부활시키기 위하여! 오래전에 중단된 브랜드를 살리기 위해, 존 메이어는 자신의 이름을 숨기고 오너가 되었다. 앞으로 막스피티옹은 파피루스에서만 찾아볼 수 있으니 패션 피플은 참고 하시길.",
       about_title: "JOHN MAYER IS COMING PAPYRUS, NOT STADIUM",
       about_subtitle: "Max Piton Launch Event",
       about_en: "World famous Singer-songwriter John Mayer presented the France vintage eyewear brand called Max Pittion. For brand launching in Korea, he visited Papyrus. You could see the Max Pittion only in Papyrus for a while.",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/8/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/8/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/8/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/8/4.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/8/5.jpg'}]},
      

      // #6
      {card_title:"Papyrus Event", card_body: "The HOLIDAY", card_since: "2013.12", card_where: "Korea",
       about_ko: "2013년도를 무사히 마감하고 다가오는 신년을 맞이하는 HAPPY HOLIDAY! 산타클로스의 장갑 모양의 클리너, 고객들의 행복을 기원하는 메시지를 담은 한정 gift bag 등 다양한 이벤트로 기쁨을 전달하려는 파피루스 매장에서 포근함을 느껴보는 것도 나쁘지 않는 연말이 아닐까.",
       about_title: "We Wish Your HAPPY HAPPY HOLIDAY!",
       about_subtitle: "Happy Holiday 2013",
       about_en: "Papyrus celebrated the end of 2013, and welcomed the New Year with HAPPY HOLIDAY EVENT. The event's purpose was showing the love to the consumer with best wishes for a joyous day filled with love and laughter.",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/7/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/7/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/7/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/7/4.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/7/5.jpg'}]},
      

      // #5
      {card_title:"Dior Homme", card_body: "Dior Homme", card_since: "2013.04", card_where: "Korea",
       about_ko: "이번 디올 옴므 컬렉션은 세계 최초로 디올 하우스가 아닌 파피루스 플래그쉽 스토어에서 선보인다! 세계 어디에서도 디올 옴 컬렉션을 프리런칭 한적이 없었지만 파피루스의 독창성에 디올하우스에서 먼저 제의 했다고 한다. 라프시몬스의 등장으로 디올의 새 컬렉션은 모던함을 입어 더욱 간결해지고, 더욱 시크해졌다. 남몰래 디올 옴므를 사랑해왔던 남성분들여, 이번 기회에 파피루스를 방문하여 라프 시몬스의 감각과 함께 파피루스의 아이덴티티를 느껴보라!",
       about_title: "New Dior Homme, The First Show Ever, But Only in Papyrus",
       about_subtitle: "Dior Homme 2013 collection",
       about_en: "Raf Simone's new Dior Homme collection is presented in Papyrus Flagship store, which was the first time ever as the collection always had been presented only in Dior House. Please feel free to visit Papyrus!",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/6/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/6/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/6/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/6/4.jpg'}]},
      

      // #4
      {card_title:"Papyrus Event", card_body: "THE RENOVATION", card_since: "2013.03", card_where: "Korea",
       about_ko: "굳이 파리의 루브르나 뉴욕의 모마에 가지 않아도 서울의 더 갤러리 파피루스를 방문하면 작품을 구경할 수 있다. 획기적인 '인테리어'와 파리, 뉴욕, 밀란 쇼에서 초이스 해온 '작품'은 패션이라는 카테고리에 묶여 시대를 넘나드는 궁합이다.",
       about_title: "The Gallery Of The GALLERIA",
       about_subtitle: "The Gallery of The GALLERIA",
       about_en: 'Galleria Papyrus newly renovated the store. Papyrus had a heated agreement with Chicago Designer Team to deviate the old image and become the "Gallery" to enjoy the precious "art pieces”.',
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/5/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/5/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/5/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/5/4.jpg'}]},
      

      // #3
      {card_title:"Papyrus Event", card_body: "THE RENOVATION", card_since: "2012.03", card_where: "Korea",
       about_ko: "20년의 역사를 간직한 본점에 파피루스의 철학을 새겨넣기 시작했다. 2층으로 확장한 파피루스는 고객에게 값비싼 보석을 공개하듯 끌어 당기고 있다. 그 뿐 아니라 앞으로 정기적인 브랜드 데이를 진행하여 다양한 하우스 브랜드의 가치를 선보일 예정이라고 한다.",
       about_title: "WAIT! Papyrus is Back",
       about_subtitle: "We are back again!",
       about_en: "All the customer's all the waited for a long time to reopened Papyrus Flagship store. Papyrus is keeping the precious and most valuable products and only presenting it for their consumers.",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/3/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/3/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/3/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/3/4.jpg'}]},
      
      
      // #2
      {card_title:"Papyrus Event", card_body: "THE ANNIVERSARY", card_since: "2012.02", card_where: "Korea",
       about_ko: "패션피플이라면 누구나 한번쯤 방문하여 단골이 되고 만다는 파피루스. 국내 안경 트렌드를 이끌어 나가는 리더답게 20주년을 기념하기 위해 여러가지 이벤트를 선보인다. 일본 최고의 안경 장인인 코닷케토베이와 타이하치로가 만든 콜라보 제품을 한정판매하고 있으니 패션 피플이라면 빨리 매장에 방문해볼 것!",
       about_title: "Let's Celebrate 20th anniversary of Papyrus!",
       about_subtitle: "20th Anniversary!",
       about_en: "All the hipster had been visited Papyrus once and became royal customer as they love Papyrus. To remember Papyrus's 20th anniversary, they produced limited edition frames.",
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/2/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/2/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/2/3.jpg'}]},

      // #1
      {card_title:"Papyrus Event", card_body: "THE FIRST START", card_since: "1992.12", card_where: "Korea",
       about_ko: "1992년 드디어 우리가 기대하던 파피루스 아이웨어의 서막이 올랐다. 기존 안경산업에서 탈피한 국내 최초 편집샵이라는 타이틀을 거머쥐게 만든 것! 기존 샵들과 다르게 차별화된 전략으로 올 화이트의 세련된 인테리어와 다양한 상품 구성으로 이목을 이끌었다.",
       about_title: "The Beginning of Papyrus",
       about_subtitle: "The Beginning of Papyrus",
       about_en: '1992 is the year is called the beginning of Papyrus. Papyrus merged the interior and house brand in Korea to bring the idea of "multi-brand" store in Korea.',
       img_container: [{img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/1/1.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/1/2.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/1/3.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/1/4.jpg'},
		       {img:'https://s3-ap-northeast-1.amazonaws.com/papyrus.eyewear/1/5.jpg'}]}

    ];
    
/*
    $scope.event_db_container = [{brand:"Asahi Glass", name: "NAME", since: "1980", where: "FRANCE1"
				 },
				 {brand:"Macor", name: "NAME", since: "1985", where: "FRANCE2"},
				 {brand:"Tiffany glass", name: "NAME", since: "1988", where: "FRANCE3"},
				 {brand:"Baccarat", name: "NAME", since: "2001", where: "FRANCE4"},
				 {brand:"Ray Ban", name: "NAME", since: "2008", where: "FRANCE5"},
				 {brand:"OAKLEY", name: "NAME", since: "2010", where: "FRANCE6"},
				 {brand:"Burberry", name: "NAME", since: "2014", where: "FRANCE7"},
				 {brand:"SPY", name: "NAME", since: "2015", where: "FRANCE8"},
				 {brand:"Elizabeth Arden", name: "NAME", since: "2016", where: "FRANCE9"},
				 {brand:"Roberto Cavalli", name: "NAME", since: "2017", where: "FRANCE10"},
				 {brand:"Ray-Ban Asian Fit", name: "NAME", since: "2018", where: "FRANCE11"},
				 {brand:"Zeal Optics", name: "NAME", since: "2019", where: "FRANCE12"},
				 {brand:"Vogue", name: "NAME", since: "2020", where: "FRANCE13"},
				 {brand:"Seraphin", name: "NAME", since: "2021", where: "FRANCE14"},
				 {brand:"Roxy", name: "NAME", since: "2022", where: "FRANCE15"},
				 {brand:"Jones New York Petite", name: "NAME", since: "2023", where: "FRANCE16"},
				 {brand:"Gucci", name: "NAME", since: "2024", where: "FRANCE17"},
				 {brand:"Ermenegildo Zegna", name: "NAME", since: "2025", where: "FRANCE18"},
				 {brand:"Ray-Ban Asian Fit", name: "NAME", since: "2026", where: "FRANCE19"}
				];
    */

    $scope.is_more = true;
    var check_is_next = function() {
      if($scope.event_db_container.length > $scope.event_container.length) {
	$scope.is_more = true;
      } else {
	$scope.is_more = false;
      }
    };

    $scope.subscribe = function() {

      var pos = $scope.sub_info.user.search('@');
      if(pos == -1) {
	alert('정상적인 이메일이 아닙니다 확인 부탁드립니다.');
	return;
      }
      


      if($scope.sub_info.user == '') {
	return;
      }

      var req_url = $scope.url + '/sub/add/' + $scope.sub_info.user;
      $http.get(req_url).
	success(function(data, status, headers, config) {
	  var rtn = data;
	  //alert('정상적으로 구독 신청완료');
	}).
	error(function(data, status, headers, config) {
	  alert('[error] 구독 신청실패');
	});
      
      $scope.sub_info.user = '';
    };


    var is_mobile = function() {
      if ($window.innerWidth >= 992 ){
	return false;
      }
      else if ($window.innerWidth >= 768 ){
	return false;
      }       
      return true;
    };

    $scope.more = function() {
      var rtn = is_mobile();
      var start = $scope.event_container.length;
      if(rtn) {
	$scope.event_container = $scope.event_container.concat($scope.event_db_container.slice(start, start+4));
      } else {
	$scope.event_container = $scope.event_container.concat($scope.event_db_container.slice(start, start+8));
      }
      check_is_next();
    };

    var init = function() {
      
      if ($window.innerWidth >= 992 ){
	$scope.event_container = $scope.event_db_container.slice(0, 8);
      }
      else if ($window.innerWidth >= 768 ){
	$scope.event_container = $scope.event_db_container.slice(0, 8);
      }       
      else {
	$scope.event_container = $scope.event_db_container.slice(0, 4);
      }

      check_is_next();
      $scope.me = $scope.event_container[0];
    };
    init();

    $scope.event(0);

    $scope.is_video = false;

  
    
   
   
  });
