if( currentLanguage == "ch"){
	app.controller("language", function ($scope) {
	    $scope.language = {
	    	// Menu
	        "menu-item-1": 'PMD',
	        "menu-item-2": '矿机',
	        "menu-item-3": 'Token分配',
	        "menu-item-4": '关于',
	        "menu-item-5": '白皮书',
	        "menu-item-white-paper": 'Pyramid_Whitepaper_CN_1.0.pdf',

	        // ticker
	        "ticker": 'PMD将在8月开展全球超级节点竞选，届时PMD运营方新加坡JIAHE基金将会对竞选节点开展空投奖励，空投总奖励约2亿PMD，空投奖励将用于全球市场推广，本次空投全部来自于基金会锁仓的3.5亿PMD。',
	        
	    	// HOME PAGE
	    	// slide 1
	        "slide1-title-1": 'PYRAMID',
	        "slide1-title-2": '金字塔',
	        "slide1-p": '新一代文件存储底层协议',
	        "slide1-right-p": '上线倒计时',
	        // slide2
	        "slide2-title-1": 'PYRAMID',
	        "slide2-title-2": '生态系统',
	        "slide2-ecosystem-1": 'Pyramid PC',
	        "slide2-ecosystem-2": 'Pyramid Chain',
	        "slide2-ecosystem-3": 'Pyramid Coin',
	        "slide2-ecosystem-text-1": 'Pyramid PC 是一款基于内容寻址技术点对点超媒体协议存储、Pyramid Chain公链管理数字资产，通过智能合约对用户定制奖励制度的硬件主机。',
	        "slide2-ecosystem-text-2": 'Pyramid Chain 是一个服务于网络存储文件的去中介化的公共区块链平台，致力于打造网络存储文件领域信息互通、价值互联、信任互换的区块链网络系统。',
	        "slide2-ecosystem-text-3": 'PMD 是为支持平台生态建设而产生的，一个基于共识机制、为促成一个全新的支付系统和一种完全数字化的货币而构建的去中心化的对等支付网络。',
	        // slide3
	        "slide3-title-1": 'PYRAMID',
	        "slide3-title-2": '生态构图',
	        "slide3-img": 'img/diagramma.png',
	        "slide3-p-1": 'PYRAMID是一个全球分布式IaaS生态服务平台，结合了最新的区块链技术，专为下一代智能商品流通交易平台而设计，解决了供应链中的认证、 安全和互操作性方面的问题，有助于保护网络同时消除对中心化管理的依赖。',
	        // slide 4
	        "slide4-title-1": 'PYRAMID',
	        "slide4-title-2": '新闻',
	        "slide4-p": '媒体报道、新闻发布等更多讯息!',
	        "slide4-menu-1": '金字塔 PYRAMID 与 imToken 建立正式合作伙伴关系',
	        "slide4-menu-2": '金字塔 PYRAMID 到底是什么',
	        "slide4-menu-3": '金字塔 PYRAMID 如何为您带来更多的收益',
	        // slie5
	        "slide5-title-1": 'PYRAMID',
	        "slide5-title-2": '订阅邮箱',
	        "slide5-button": '订阅',
	        "slide5-p": '订阅我们，及时获得更多讯息!',
	        "slide5-placeholder": '请输入您的邮箱',
	        // slie6
	        "slide6-title-1": 'PYRAMID',
	        "slide6-title-2": '联系我们',
	        "slide6-p": '疑问、咨询、合作等，期待你给我们来信！!',

	        // MACHINE PAGE
	        "machine-title-1": 'PYRAMID',
	        "machine-title-2": '技术',
	        "machine-p-1": 'Pyramid将结合实体矿机技术，Pyramid生态中的令牌PMD将由用户通过实体矿机挖矿方式获得。',
	        "machine-p-2": '由此构建丰富可用的分布式节点，维持网络的稳定。',

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
	        "token-p-2": '团队前期投入 800 个比特币用于系统开发及社区运营。计划总发行量 10 亿枚PMD。',
	        "token-p-3": '具体分配方案：',

	        "token-progress-title-1": '挖矿产生',
	        "token-progress-p-1": '总发行量的 45% 将会通过 Pyramid PC 挖矿机制方式投放到用户所在的市场中，高达 4.5 亿 PMD 通过挖矿进行代币奖励。',

	        "token-progress-title-2": '项目基金会储备金',
	        "token-progress-p-2": '总发行量的 35% 作为基金会储备金，用于 Pyramid 生态后续项目的技术开发、社区运 营、商务合作、宣传费用以及项目生态的完善。此部分资金的使用需要基金会决议，并提前进行公示。',

	        "token-progress-title-3": '初始团队',
	        "token-progress-p-3": '总发行量的 12% 用于奖励在 Pyramid Chain 公有链建设、开发过程中做出努力和贡献的相关团队，以保证 PMD 后续几年稳定的运营和发展。',

	        "token-progress-title-4": '技术开发',
	        "token-progress-p-4": '总发行量的 8% 奖励用于技术研发和支持相关的投入。',

	    };
	});
}