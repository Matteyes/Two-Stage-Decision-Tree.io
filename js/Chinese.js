var nav = new Vue({
	el: '#introNav',
	data: {
		navBar:[
			{
				id:'overview',
				title:'个人概况'
			},{
				id:'education',
				title:'教育背景'
			},{
				id:'work',
				title:'工作经历'
			},{
				id:'research',
				title:'研究方向'
			},{
				id:'paper',
				title:'发表论文'
			}
		]
	}
})

var overview = new Vue({
	el:'#overviewC',
	data:{
		id:'overviewC',
		title:'个人概况',
		photo:'./img/xxm3.jpg',
		name:'徐铣明',
		age:'38',
		nation:'汉',
		positions:[
			{
				pos:'重庆医科大学副教授'
			},{
				pos:'重庆医科大学附属儿童医院大数据中心 PI'
			}
		],
		email:'ximing@hospital.cqmu.edu.cn',
		tele:'18526547007',
		github:'https://github.com/ai4kids',
		github_src:'./img/github-fill.png',
		scholar:'https://scholar.google.ca/citations?user=gi-oCoMAAAAJ&hl=en',
		scholar_src:'./img/googlescholar.png',
		page:'https://loop.frontiersin.org/people/815764/overview',
		researchgate:'https://www.researchgate.net/profile/Ximing-Xu-2',
		researchgate_src:'./img/researchgate.png'
	}
})

var education = new Vue({
	el:'#educationC',
	data:{
		id:'educationC',
		title:'教育背景',
		education:[
			{
				time:'2002/09 至 2006/06:',
				school:'南开大学数学学院统计学系',
				qualification:'本科',
				isT:false
			},{
				time:'2006/09 至 2008/08：',
				school:'加拿大渥太华大学数学与统计系',
				qualification:'硕士',
				teacher:'David Sankof',
				website:'https://albuquerque.bioinformatics.uottawa.ca/',
				isT:true
			},{
				time:'2008/09 至 2012/06：',
				school:'加拿大多伦多大学统计科学系',
				qualification:'博士',
				teacher:'Nancy Reid',
				website:'https://www.utstat.utoronto.ca/reid/',
				isT:true
			}
		]
	}
})

var work = new Vue({
	el:'#workC',
	data:{
		id:'workC',
		title:'工作经历',
		work:[
			{
				time:'2012/09 至 2014/09：',
				pos:'加拿大达尔豪斯大学数学与统计系博士后',
				teacher:'Chris Field',
				website:'https://www.mathstat.dal.ca/~field/wiki/doku.php',
				isT:true
			},{
				time:'2014/09 至 2015/04：',
				pos:'加拿大达尔豪斯大学研究助理',
				isT:false
			},{
				time:'2015/07 至 2021/08：',
				pos:'南开大学统计与数据科学学院讲师，博士生导师',
				isT:false
			}
		]
	}
})

var research = new Vue({
	el:'#researchC',
	data:{
		id:'researchC',
		title:'研究方向',
		direction:[
			{
				research:'生物统计学（Biostatistics）'
			},{
				research:'微生物组数据分析（Microbiome Data Analysis）'
			},{
				research:'复合似然函数方法与理论 （Composite Likelihood Inference）'
			},{
				research:'统计和机器学习在医学的应用 (Statistical and Machine Learning Methods in Medicine）'
			}
		]
	}
})



var paper = new Vue({
	el:'#paperC',
	data:{
		id:'paperC',
		title:'Publications',
		direction:[
			{
				name:'1. 统计学理论',
				papers:[
					{
						info1:'Wei, Q., Cui, Y., Wei, B., Cheng, Q., ',
						name: 'Xu, X.',
						info2: ' (2023). Evaluating the performance of ChatGPT in differential diagnosis of neurodevelopmental disorders: A pediatricians-machine comparison. Psychiatry Research, 327: 115351.'
					},{
						info1:'Xu, L., Reid, N., ',
						name: 'Xu, X.',
						info2: ' (2023+). A note on information bias and efficiency of composite likelihood. Statistica Sinica, the preprint is ',
						site:'https://www3.stat.sinica.edu.tw/ss_newpaper/SS-2022-0167_na.pdf',
						aname:'available online',
						append: '(DOI: 10.5705/ss.202022.0167).'
					},{
						info1:'Wei, Q., Xu, XL., ',
						name: 'Xu, X.',
						info2: ', Cheng, Q. (2023). Early identification of autism spectrum disorder by multi-instrument fusion: A clinically applicable machine learning approach. Psychiatry Research, 320: 115050.'
					},{
						info1:'Xiao, L., ',
						name: 'Xu, X.',
						info2: ', et al. (2023). Low total cholesterol predicts early death in children with hemophagocytic lymphohistiocytosis. Frontiers in Pediatrics, 10: 1006817.'
					},{
						info1:'Wei, Q., Cao, H., Shi, Y., ',
						name: 'Xu, X.',
						info2: ', Li, T. (2022). Machine learning based on eye-tracking data to identify Autism Spectrum Disorder: A systematic review and meta-analysis. Journal of Biomedical Informatics, 137: 104254.'
					},{
						info1:null,
						name: null,
						info2:'Luo, Y., Tan, L., et al. (2022). Characteristics of wild bird resistomes and dissemination of antibiotic resistance genes in interconnected bird-habitat systems revealed by similarity of bla',
						sub: 'TEM',
						info3: ' polymorphic sequences. Environmental Science & Technology, 56 (21), 15084-15095.'
					},{
						info1:'Li, J., An, X., ',
						name: 'Xu, X.',
						info2: ', et al. (2022). Type O blood, the MCHC, and the reticulocyte count impact the early recurrence of primary warm-antibody autoimmune hemolytic anemia in children: a retrospective cohort analysis. Frontiers in Pediatrics, 10: 881064.'
					},{
						info1:'Li, Y., ',
						name:'Xu, X.',
						info2:', Guo, Z., et al. (2022). Neonatal Streptococcus pneumoniae infection induces long-lasting dysbiosis of the gut microbiota in a mouse model. Frontiers in Microbiology, 13: 961684.'
					},{
						info1:'He, J.,  Hu, S., ',
						name:'Xu, X.',
						info2:', et al. (2022).  Association of long-term exposure to PM2. 5 in workplace with fasting plasma glucose among asymptomatic adults: A multicenter study in North China. Environment International, 166: 107353.  (PhD student Songhua Hu is the co-first author)'
					},{
						info1:'Aeberhard, W., Cantoni, E., Field, C., Künsch, H., Mills-Flemming, J., and ',
						name:'Xu, X.',
						info2:' (2021). Robust estimation for discrete-time state space models. Scandinavian Journal of Statistics, 48，1127-1147. (Authors are alphabetically ordered)'
					},{
						info1:'Ma, J., Xu, XL., Li, M., Zhang, Y.…, ',
						name:'Xu, X.',
						info2:', Wang, Y. (2021). Predictive models of aging of the human eye based on ocular anterior segment morphology. Journal of Biomedical Informatics, 120: 103855. (PhD student Xueli Xu is the co-first author)'
					},{
						info1:'Zeng, Q.,  Yang, Z., Wang, F., Li, D., .…, ',
						name:'Xu, X.',
						info2:', Dai, W. (2021). Association between metabolic status and gut microbiome in obese populations. Microbial Genomics, 7：000639.'
					},{
						info1:'',
						name:'Xu, X.',
						info2:' and Xu, L. (2020). Existence and asymptotic behaviour of positive solutions to a stochastic multispecies Holling type II model. Stat, 9: e266.'
					},{
						info1:'Xu, XL., Xie, Z., Yang, Z., Li, D. and ',
						name:'Xu, X.',
						info2:' (2020). A t-SNE based classification approach to compositional microbiome data. Frontiers in Genetics, 11:620143. (PhD student Xueli Xu is the first author)'
					},{
						info1:'Li, H., et al. (2020). The prolonged disruption of a single-course amoxicillin on mice gut microbiota and resistome, and recovery by inulin. Environmental Pollution, 265: 114651.',
						name: null,
						info2: null
					},{
						info1:'Yang, J., Li, D., Yang, Z. …, ',
						name:'Xu, X.',
						info2:', et al. (2020). Establishing high-accuracy biomarkers for colorectal cancer by comparing fecal microbiomes in patients with healthy families. Gut Microbes, 11, 918-929. (PhD student Zhenyu Yang is the co-first author).'
					},{
						info1:'Dong, G., Zhang, J., Yang, Z. …, ',
						name:'Xu, X.',
						info2:', et al. (2020). The association of gut microbiota with idiopathic central precocious puberty in girls. Frontiers in Endocrinology, 10: 941.(PhD student Zhenyu Yang is the co-first author).'
					},{
						info1:'Zhou, P., et al. (2020). Perinatal antibiotic exposure affects the transmission between maternal and neonatal microbiota and is associated with early-onset sepsis. Msphere, 5: e00984-19.',
						name: null,
						info2: null
					},{
						info1:'Huang, C. …, ',
						name:'Xu, X.',
						info2:', et. al. (2019). Distinct gut microbiota composition and functional category in children with cerebral palsy and epilepsy. Frontiers in Pediatrics，7: 394.'
					},{
						info1:'Dai, W., et al. (2019). An integrated respiratory microbial gene catalogue to better understand the microbial aetiology of Mycoplasma pneumoniae pneumonia. GigaScience, 8: giz093.',
						name: null,
						info2: null
					},{
						info1:'Li, D., et al. (2019). Intestinal Bacteroides sp. imbalance associated with the occurrence of childhood undernutrition in China. Frontiers in Microbiology, 10:2635.',
						name: null,
						info2: null
					},{
						info1:'Zeng, Q., et al. (2019). Discrepant gut microbiota markers for the classification of obesity-related metabolic abnormalities. Scientific Reports, 9: 13424.',
						name: null,
						info2: null
					},{
						info1:'',
						name:'Xu, X.',
						info2:', Cantoni, E., Mills-Flemming, J. and Field, C. (2015).  Robust state space models for estimating fish stock maturities. Canadian Journal of Statistics, 43, 133-150.'
					},{
						info1:'',
						name:'Xu, X.',
						info2:', Dunn, K. and Field, C. (2015). A robust ANOVA approach to estimating a phylogeny from multiple genes. Molecular Biology and Evolution, 32, 2186-2194.'
					},{
						info1:'',
						name:'Xu, X.',
						info2:' and Reid, N. (2011). On the robustness of maximum composite likelihood estimate. Journal of Statistical Planning and Inference, 141, 3047-3954.'
					},{
						info1:'Costa, V., Dantas, S., Sankoff, D. and ',
						name:'Xu, X.',
						info2:' (2012). Gene clusters as intersections of powers of paths. Journal of the Brazilian Computer Society, 18, 129-136.'
					},{
						info1:'',
						name:'Xu, X.',
						info2:' and Sankoff, D. (2008). Tests for gene clusters satisfying the generalized adjacency criterion. Lecture Notes in Computer Science, 5167, 152-160. (This paper was chosen as the first best full paper of the 3rd Brazilian Symposium on Bioinformatics)'
					},{
						info1:'王言覃 , 张拔群 , 李秋 , ',
						name:'徐铣明',
						info2:' (2023). 真实世界研究在儿科人群中的应用现状与挑战. 中华儿科杂志, 61(04): 377-380.'
					},{
						info1:'高洁，徐雪丽，',
						name:'徐铣明',
						info2:'，韦秋宏，张站站，程茜 (2021). 真实世界不同出生体重早产儿体格生长规律的研究. 中华儿科杂志, 59(8):665-671.'
					},{
						info1:'魏凤英, 王金杰, ',
						name:'徐铣明',
						info2:', 高建召, 王博灵, 马驰宇, 彭志行, 靳祯, 黄森忠 (2020). 全球新型冠状病毒肺炎疫情发展趋势预测. 疾病监测, 6: 467-472.'
					},{
						info1:'黄森忠， 魏凤英 ，彭志行， 靳祯， 王金杰， ',
						name:'徐铣明',
						info2:'， 张新岩， 徐建国 (2020). 常态化防控下新型冠状病毒肺炎新发疫情研判方法. 疾病监测, 8: 679-686.'
					},{
						info1:'万燕南，隋雅楠，',
						name:'徐铣明',
						info2:'，张站站，钟元峰，程茜 (2019). 出生体重不一致双胎0～4岁体格生长状况研究. 中国实用儿科杂志, 34: 689-693.'
					}
				]
			}
		]
	}
})

var isShowList = false

$(document).ready(function(){
	$(".navBt").click(function(){
		if(isShowList){
			$(".navList").css('display','none')
			isShowList = false
		}else{
			$(".navList").css('display','block')
			isShowList = true
		}
	})
	$(".navLi").click(function(){
		var id = "#"+$(this).attr('id')+"C"
		var top = $(id).offset().top
		$("html,body").animate({scrollTop:top}, 200);
		$(".content").animate({scrollTop:top}, 200);
	})
})