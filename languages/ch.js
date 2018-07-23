if( currentLanguage == "ch"){
	app.controller("language", function ($scope) {
	    $scope.language = {
	    	// Menu
	        "menu-item-1": '首页',
	        "menu-item-3": 'Token分配',
	        "menu-item-4": '关于',
	        "menu-item-5": '白皮书',
	        "menu-item-white-paper": 'LP_Whitepaper_CN_1.0.pdf',

	        // ticker
	        "ticker": 'PMD将在8月开展全球超级节点竞选，届时PMD运营方新加坡JIAHE基金将会对竞选节点开展空投奖励，空投总奖励约2亿PMD，空投奖励将用于全球市场推广，本次空投全部来自于基金会锁仓的3.5亿PMD。',
	        
	    	// HOME PAGE
	    	// slide 1
	        "slide1-title-1": '无忧链',
	        "slide1-title-2": '劳动力共享公益透明化服务平台',
	        "slide1-p": '无忧链代币平台基于区块链技术的建立，以智能合约作为支付技术，充分发挥区块链去中心化、信息公正透明化特点，是平台所有信息都得以共享与信任，为用户提供高品质的劳动力服务。',
	        "slide1-right-p": '上线倒计时',
	        // slide2
	        "slide2-title-1": '无忧链',
	        "slide2-title-2": '生态系统',
	        "slide2-ecosystem-1": 'LP Ecosystem',
	        "slide2-ecosystem-2": 'LP Chain',
	        "slide2-ecosystem-3": 'LP Coin',
	        "slide2-ecosystem-text-1": 'LP Ecosystem 开启全球化共享劳动力服务数字化时代，实现没有中间商剥削劳动者的收益，平台也不抽取任何佣金。',
	        "slide2-ecosystem-text-2": 'LP Chain 是全球第一个劳动力共享公益透明化服务平台，是基于区块链技术开发的新生态，致力于建立一个实现全球共享透明的劳动力服务平台。。',
	        "slide2-ecosystem-text-3": 'LP Token 通过将底层闲散劳动力通证化，每个 Token 代表的劳动力每小时可创造的平均经济效益。',
	        // slide3
	        "slide3-title-1": '无忧链',
	        "slide3-title-2": '生态构图',
<<<<<<< HEAD
	        "slide3-img": './img/diagramma.png',
	        "slide3-p-1": 'PYRAMID是一个全球分布式IaaS生态服务平台，结合了最新的区块链技术，专为下一代智能商品流通交易平台而设计，解决了供应链中的认证、 安全和互操作性方面的问题，有助于保护网络同时消除对中心化管理的依赖。',
=======
	        "slide3-img": 'img/diagramma.png',
	        "slide3-p-1": '无忧链的运行系统采用了模块组件化的底层架构，在用户搭建区块链应用或子链的时候，大部分组件被设计为可以相互引用以及可插拔技术，例如工时组件就支持 POW、POS、DPOS、PBFT 等。',
>>>>>>> 4047b91c26fd0a3e27ef1972de993cc32a51f5c2
	        // slide 4
	        "slide4-title-1": '无忧链',
	        "slide4-title-2": '新闻',
	        "slide4-p": '媒体报道、新闻发布等更多讯息!',
	        "slide4-menu-1": '',
	        "slide4-menu-2": '',
	        "slide4-menu-3": '',
	        // slie5
	        "slide5-title-1": '无忧链',
	        "slide5-title-2": '订阅邮箱',
	        "slide5-button": '订阅',
	        "slide5-p": '订阅我们，及时获得更多讯息!',
	        "slide5-placeholder": '请输入您的邮箱',
	        // slie6
	        "slide6-title-1": '无忧链',
	        "slide6-title-2": '联系我们',
	        "slide6-p": '疑问、咨询、合作等，期待你给我们来信！!',

	        // ABOUT PAGE
	        "about-title": '关于',
	        "about-img": './img/ORG_ZH.jpg',
	        "about-p-1": 'Pyramid 隶属于新加坡嘉禾基金会（以下简称“基金会”），致力于 Pyramid 生态的开发建设和治理透明度倡导及推进工作',
	        "about-p-2": '促进开源生态社会的安全、和谐发展。基金会将通过制定良好的治理结构，帮助管理开源社区项目的可 持续性、管理有效性及募集资金的安全性。',
	        "about-p-3": '基金会由生态化中心、技术开发中心、市场营销中心、日常管理中心构成。',
	        "about-p-4": 'Pyramid 决策委员会负责重大事项的管理和决定，包括聘任或解聘执行负责人以及各中心负责人、制定 重要决定等。决策委员会成员任期三年，可以连任。委员会设主席一名，由委员会成员投票决定。',
	        "about-p-5": '首届决策委员会成员由 Pyramid 创始团队及投资人选举产生。',
	        "about-p-6": '技术开发中心：负责底层技术开发、测试、上线、审核等。技术中心成员在社区中与Token持有者进行沟通交流，并不定期的举办技术交流会。',
	        "about-p-7": '生态化建设中心：负责探索Pyramid与落地行业应用场景的可行性，从而实现Pyramid的商业落地。重点探索领域：跨境电商、二手车交易、供应链金融、大数据、跨境交易等。',
	        "about-p-8": '市场营销中心：负责技术、产品、社区、开源项目的推广和宣传。',
	        "about-p-9": '日常管理中心：负责包括财务、法务、人事、行政等事项。',

	        // TOKEN PAGE
	        "token-title-1": 'Token分配',
	        "token-p-1": '项目',
	        "token-p-2": '计划总发行量 10 亿枚 LP Token。',
	        "token-p-3": '具体分配方案：',

	        "token-progress-title-1": '私募比例',
	        "token-progress-p-1": '总发行量的 39%。',

	        "token-progress-title-2": '团队运营',
	        "token-progress-p-2": '总发行量的 30%。',

	        "token-progress-title-3": '团队激励',
	        "token-progress-p-3": '总发行量的 20%。',

	        "token-progress-title-4": '技术应用研发',
	        "token-progress-p-4": '总发行量的 11%。',

	    };
	});
}