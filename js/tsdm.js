
var treeTitle = new Vue({
	el: '#treeTitle',
	data: {
		title:'Two-Stage Decision Model'
	}
})

var tree1 = new Vue({
	el: '#tree',
	data: {
		nodes: [
			{
			  id: 'node1',
			  text: 'Adaptive < 75',
			  nobrother: true,
			  nodes:[
				  {
				    id: 'node2',
				    text: 'Personal-social <75',
					nobrother: false,
				    nodes:[
						{
							id: 'node3',
							text: 'ASD or GDD',
							nobrother: false,
							nodes:[],
							isLeaf: true,
							isTrue: false
						},
						{
							id: 'node4',
							text: 'Fine motor <75',
							nobrother: false,
							nodes:[
								{
									id: 'node5',
									text: 'ASD or GDD',
									nobrother: false,
									nodes:[],
									isLeaf: true,
									isTrue: false
								},
								{
									id: 'node6',
									text: 'DLD',
									nobrother: false,
									nodes:[],
									isLeaf: true,
									isTrue: false
								}
							],
							isLeaf: false,
							isTrue: false
						}
					],
				    isLeaf: false,
				    isTrue: false
				  },
				  {
				    id: 'node7',
				    text: 'Gross motor < 76',
					nobrother: false,
				    nodes:[
				    	{
				    	  id: 'node8',
				    	  text: 'Personal-social <75',
						  nobrother: false,
				    	  nodes:[
							  {
							    id: 'node9',
							    text: 'ASD or GDD',
							    father: 5,
								nobrother: false,
							    nodes:[],
							    isLeaf: true,
							    isTrue: false
							  },
							  {
							    id: 'node10',
							    text: 'DLD',
							    father: 5,
							  	nobrother: false,
							    nodes:[],
							    isLeaf: true,
							    isTrue: false
							  }
						  ],
				    	  isLeaf: false,
				    	  isTrue: false
				    	},
				    	{
				    	  id: 'node11',
				    	  text: 'Fine motor < 75',
						  nobrother: false,
				    	  nodes:[
							  {
							    id: 'node12',
							    text: 'ASD or GDD',
								nobrother: false,
							    nodes:[],
							    isLeaf: true,
							    isTrue: false
							  },
							  {
							    id: 'node13',
							    text: 'DLD',
								nobrother: false,
							    nodes:[],
							    isLeaf: true,
							    isTrue: false
							  }
						  ],
				    	  isLeaf: false,
				    	  isTrue: false
				    	}
				    ],
				    isLeaf: false,
				    isTrue: false
				  }
			  ],
			  isLeaf: false,
			  isTrue: false
			}
		]
	},
	methods:{
		//重置节点数据
		initialization:function(){
			//第一层
			this.nodes[0].isTrue = false;
			//第二层
			this.nodes[0].nodes[0].isTrue = false;
			this.nodes[0].nodes[1].isTrue = false;
			//第三层
			this.nodes[0].nodes[0].nodes[0].isTrue = false;
			this.nodes[0].nodes[0].nodes[1].isTrue = false;
			
			this.nodes[0].nodes[1].nodes[0].isTrue = false;
			this.nodes[0].nodes[1].nodes[1].isTrue = false;
			//第四层
			this.nodes[0].nodes[0].nodes[1].nodes[0].isTrue = false;
			this.nodes[0].nodes[0].nodes[1].nodes[1].isTrue = false;
	
			this.nodes[0].nodes[1].nodes[0].nodes[0].isTrue = false;
			this.nodes[0].nodes[1].nodes[0].nodes[1].isTrue = false;
			
			this.nodes[0].nodes[1].nodes[1].nodes[0].isTrue = false;
			this.nodes[0].nodes[1].nodes[1].nodes[1].isTrue = false;
		}
	}
})

var tree2 = new Vue({
	el: '#tree2',
	data: {
		nodes:[
			{
				id: 'second1',
				text: 'M-CHAT critical items < 3',
				father: 0,
				nobrother: true,
				nodes:[
					{
						id: 'second2',
						text: 'GDD',
						father: 0,
						nobrother: false,
						nodes:[],
						isLeaf: true,
						isTrue: false
					},
					{
						id: 'second3',
						text: 'ASD',
						father: 0,
						nobrother: false,
						nodes:[],
						isLeaf: true,
						isTrue: false
					}
				],
				isLeaf: false,
				isTrue: false
			}
		]
	},
	methods:{
		//重置节点数据
		initialization:function(){
			//第一层
			this.nodes[0].isTrue = false;
			//第二层
			this.nodes[0].nodes[0].isTrue = false;
			this.nodes[0].nodes[1].isTrue = false;
		}
	}
})

var task = new Vue({
  el: '#dvalue',
  data: {
	hide: false,
	buttonText: "Hide ↑",
	items:[
		{
			name: 'Gesell Developmental Scale:',
			nameadd: 'Adaptive domain',
			suggestT: true,
			value: null
		},
		{
			name: 'Gesell Developmental Scale:',
			nameadd: 'Personal-social domain',
			suggestT: true,
			value: null
		},
		{
			name: 'Gesell Developmental Scale:',
			nameadd: 'Gross motor domain',
			suggestT: true,
			value: null
		},
		{
			name: 'Gesell Developmental Scale:',
			nameadd: 'Fine motor domain',
			suggestT: true,
			value: null
		},
		{
			name: 'M-CHAT critical items',
			nameadd: '',
			suggestT: false,
			value: null
		}
	]
  },
  computed:{
	showSuggestText(){
		return this.item.suggestT
	}
  },
  methods:{
	//重置数据
	initialization:function(){
		for(var i =0; i < this.items.length; i++){
			this.items[i].value = null;
		}
	},
	hideTask: function(){
		if(this.hide){
			this.hide = false;
			this.buttonText = "Hide ↑";
			$('html,body').animate({scrollTop:800},200);
		}else{
			this.hide = true;
			this.buttonText = "Show ↓";
			$('html,body').animate({scrollTop:0},200);//回到顶端
		}
		this.$nextTick( () => {
			// 渲染完毕再执行这个
			makeTrees();
		})
	},
	getResult: function(){
		var isInput = true;
		for(var i = 0; i < this.items.length; i++){
			if(this.items[i].value == null||this.items[i].value == '')	isInput = false;
		}
		tree1.initialization();
		tree2.initialization();
		if(isInput){
			treeTitle.title = 'Decision-Making Process of TS-DM';
			tree1.$set(tree1.nodes[0],'isTrue',true);
			//tree1.nodes[0].isTrue = true;
			//第一层 Adaptive < 75
			if(this.items[0].value < 75){
				tree1.$set(tree1.nodes[0].nodes[0],'isTrue',true);
				//tree1.nodes[0].nodes[0].isTrue = true;
				//第二层 Pesonal-social < 75
				if(this.items[1].value < 75){
					tree1.$set(tree1.nodes[0].nodes[0].nodes[0],'isTrue',true);
					//tree1.nodes[0].nodes[0].nodes[0].isTrue = true;
					tree2.$set(tree2.nodes[0],'isTrue',true);
					//tree2.nodes[0].isTrue = true;
					if(this.items[4].value < 3){
						tree2.$set(tree2.nodes[0].nodes[0],'isTrue',true);
						//tree2.nodes[0].nodes[0].isTrue = true;
					}else{
						tree2.$set(tree2.nodes[0].nodes[1],'isTrue',true);
						//tree2.nodes[0].nodes[1].isTrue = true;
					}
				}else{
					tree1.$set(tree1.nodes[0].nodes[0].nodes[1],'isTrue',true);
					//tree1.nodes[0].nodes[0].nodes[1].isTrue = true;
					//第三层 Fine motor < 75
					if(this.items[3].value < 75){
						tree1.$set(tree1.nodes[0].nodes[0].nodes[1].nodes[0],'isTrue',true);
						//tree1.nodes[0].nodes[0].nodes[1].nodes[0].isTrue = true;
						tree2.$set(tree2.nodes[0],'isTrue',true);
						//tree2.nodes[0].isTrue = true;
						if(this.items[4].value < 3){
							tree2.$set(tree2.nodes[0].nodes[0],'isTrue',true);
							//tree2.nodes[0].nodes[0].isTrue = true;
						}else{
							tree2.$set(tree2.nodes[0].nodes[1],'isTrue',true);
							//tree2.nodes[0].nodes[1].isTrue = true;
						}
					}else{
						tree1.$set(tree1.nodes[0].nodes[0].nodes[1].nodes[1],'isTrue',true);
						//tree1.nodes[0].nodes[0].nodes[1].nodes[1].isTrue = true;
					}
				}
			}else{
				tree1.$set(tree1.nodes[0].nodes[1],'isTrue',true);
				//tree1.nodes[0].nodes[1].isTrue = true;
				//第二层 Gross motor < 76
				if(this.items[2].value < 76){
					tree1.$set(tree1.nodes[0].nodes[1].nodes[0],'isTrue',true);
					//tree1.nodes[0].nodes[1].nodes[0].isTrue = true;
					//第三层 Pesonal-social < 75
					if(this.items[1].value < 75){
						tree1.$set(tree1.nodes[0].nodes[1].nodes[0].nodes[0],'isTrue',true);
						//tree1.nodes[0].nodes[1].nodes[0].nodes[0].isTrue = true;
						tree2.$set(tree2.nodes[0],'isTrue',true);
						//tree2.nodes[0].isTrue = true;
						if(this.items[4].value < 3){
							tree2.$set(tree2.nodes[0].nodes[0],'isTrue',true);
							//tree2.nodes[0].nodes[0].isTrue = true;
						}else{
							tree2.$set(tree2.nodes[0].nodes[1],'isTrue',true);
							//tree2.nodes[0].nodes[1].isTrue = true;
						}
					}else{
						tree1.$set(tree1.nodes[0].nodes[1].nodes[0].nodes[1],'isTrue',true);
						//tree1.nodes[0].nodes[1].nodes[0].nodes[1].isTrue = true;
					}
				}else{
					tree1.$set(tree1.nodes[0].nodes[1].nodes[1],'isTrue',true);
					//tree1.nodes[0].nodes[1].nodes[1].isTrue = true;
					//第三层 Fine motor < 75
					if(this.items[3].value < 75){
						tree1.$set(tree1.nodes[0].nodes[1].nodes[1].nodes[0],'isTrue',true);
						//tree1.nodes[0].nodes[1].nodes[1].nodes[0].isTrue = true;
						tree2.$set(tree2.nodes[0],'isTrue',true);
						//tree2.nodes[0].isTrue = true;
						if(this.items[4].value < 3){
							tree2.$set(tree2.nodes[0].nodes[0],'isTrue',true);
							//tree2.nodes[0].nodes[0].isTrue = true;
						}else{
							tree2.$set(tree2.nodes[0].nodes[1],'isTrue',true);
							//tree2.nodes[0].nodes[1].isTrue = true;
						}
					}else{
						tree1.$set(tree1.nodes[0].nodes[1].nodes[1].nodes[1],'isTrue',true);
						//tree1.nodes[0].nodes[1].nodes[1].nodes[1].isTrue = true;
					}
				}
			}
		}else{
			alert("Incomplete information");
		}
		this.$nextTick( () => {
			// 渲染完毕再执行这个
			makeTrees();
		})
	}
  }
})

$(document).ready(function(){
	makeTrees();
	$(window).resize(function() {
		makeTrees();
	});
})

function makeTrees(){
	var c=document.getElementById("can");
	clearCanves(c);
	var ctx=c.getContext("2d");
	ctx.lineWidth = "3";
	var nodeNum = $(".tree1").length;
	for(var i = 1; i <= nodeNum; i++){
		drawTree(ctx,$("#node"+i));
	}
	nodeNum = $(".tree2").length;
	for(var i = 1; i <= nodeNum; i++){
		drawTree(ctx,$("#second"+i));
	}
}

function drawTree(ctx,node){
	var nodef = node.find(".nodeText").eq(0);
	var isTrue1 = nodef.hasClass("trueNode");
	var pos1 = nodef.position();
	var width1 = nodef.width();
	var paddingl = nodef.css("padding-left");
	var paddinglv = parseInt(paddingl.replace('px', '')); 
	var height1 = nodef.height();
	var paddingt = nodef.css("padding-top");
	var paddingtv = parseInt(paddingt.replace('px', '')); 
	var x1 = pos1.left + width1/2 + paddinglv;
	var y1 = pos1.top + height1 + 2*paddingtv -10;
	var children = node.children(".nodetree");
	
	for(var j = 0; j < children.length; j++){
		var nodes = children.eq(j).find(".nodeText").eq(0);
		var isTrue2 = nodes.hasClass("trueNode");
		if(isTrue1 && isTrue2){
			ctx.strokeStyle = "red";
		}else{
			ctx.strokeStyle = "#CDCDCD";
		}
		var pos2 = nodes.position();
		var width2 = nodes.width();
		var paddingl = nodef.css("padding-left");
		var paddinglv = parseInt(paddingl.replace('px', '')); 
		var height2 = nodes.height();
		var x2 = pos2.left + width2/2 + paddinglv;
		var y2 = pos2.top + 10;
		draw_line(ctx ,x1,y1 , x2,y2);
		if(node.attr("id") == "node1"){
			var suggestT = new Array(2);
			suggestT[0] = "  yes  ";
			suggestT[1] = "  no  ";
			ctx.font = '20px "微软雅黑"';
			ctx.fillStyle = "darkgray";
			if(j == 0) ctx.textAlign = "right";
			else ctx.textAlign = "left";
			ctx.fillText(suggestT[j],(x1+x2)/2,(y1+y2)/2);
		}
	}
}

function clearCanves(canvas) {
    canvas.height = canvas.height;
    canvas.width = canvas.width;
}

function draw_line(ctx, x1,y1 , x2,y2){
    ctx.beginPath();
    
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.stroke();
}