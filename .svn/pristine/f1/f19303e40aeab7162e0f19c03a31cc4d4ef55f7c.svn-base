	function renderHTML(type,type_tabs){
		var type_str = '';
		var brand_str = '';

		totalLoad++; // 加载模块次数加一 表示这是第几个模块

		type_str = `<div class="block_top">
						<h3 class="food_title">
								<i id='floor_index'>${totalLoad}F</i>
								食品饮料
						</h3>
						<ul>
							<li class="acti"><a href="javascript:;">精选推荐</a><span></span></li>
							<li ><a href="javascript:;">休闲零食</a><span></span></li>
							<li><a href="javascript:;">酒水饮料</a><span></span></li>
							<li><a href="javascript:;">粮油干货</a><span></span></li>
							<li><a href="javascript:;">调味速食</a><span></span></li>
							<li><a href="javascript:;">茶冲乳品</a></li>
						</ul>
					</div>
					<div class="food_mid_lf">
						<div class="mid_lf_bg">
							<a href="">
								<img src="http://img02.fn-mart.com/pic/cdb4133e86a51964d8de/hzqzTT7nv2LlBdZljn/5YmRSyFGta3ify/CsmRslmuBh2Aejz4AABNe1e_dsA134.jpg" alt="">
							</a>
							<ul>
								<li><a class="point" href="javascript:;">啤酒 夏日纵情畅饮></a></li>
								<li><a class="point" href="javascript:;">粮油干货 生活所需></a></li>
							</ul>
							<p>
								<a href="">薯&nbsp;&nbsp;片</a>
								<a href="">啤&nbsp;&nbsp;酒</a>
								<a href="">坚&nbsp;&nbsp;果</a>
								<a href="">蜜&nbsp;&nbsp;饯</a>
								<a href="">葡萄酒</a>
								<a href="">酸&nbsp;&nbsp;奶</a>
								<a href="">口香糖</a>
								<a href="">白&nbsp;&nbsp;酒</a>
								<a href="">咖&nbsp;&nbsp;啡</a>
								<a href="">肉零食</a>
								<a href="">饮用水</a>
								<a href="">食用油</a>
								<a href="">饼&nbsp;&nbsp;干</a>
								<a href="">茶饮料</a>
								<a href="">大&nbsp;&nbsp;米</a>

							</p>
						</div>
					</div>
					<ul class="block_mid_main">
						<li class="mid_main_list1" style='display: block;'>
							<ul class="list1_ctx">
								<li class="list1_ctx_item_big">
									<div><a href=""><img src="http://img04.fn-mart.com${type_tabs[1].body[1].list.top[0].image_url}" alt=""></a></div>
									<div><a href=""><img src="http://img02.fn-mart.com${type_tabs[1].body[1].list.bottom[0].image_url}" alt=""></a></div>
								</li>
								<li><a href=""><img src="http://img03.fn-mart.com${type_tabs[1].body[2].list[0].image_url}" alt=""></a></li>
								<li><a href=""><img src="http://img02.fn-mart.com${type_tabs[1].body[3].list[0].image_url}" alt=""></a></li>
								<li><a href=""><img src="http://img04.fn-mart.com${type_tabs[1].body[4].list[0].image_url}" alt=""></a></li>
								<li><a href=""><img src="http://img04.fn-mart.com${type_tabs[1].body[2].list[1].image_url}" alt=""></a></li>
								<li><a href=""><img src="http://img03.fn-mart.com${type_tabs[1].body[3].list[1].image_url}" alt=""></a></li>
								<li><a href=""><img src="http://img02.fn-mart.com${type_tabs[1].body[4].list[1].image_url}" alt=""></a></li>
							</ul>
						</li>`;
				

				$.ajax({
					url:'data/food.php',
					type:'GET',
					data:{
						type : 'food'
					}
				})
				.then(function(res){
					res = JSON.parse(res);

					type_str+=`<li class="mid_main_list2" >
									<ul class="list_ctx">`;

					brand_str+=`<ul>`;

					for(var i = 0 ; i < res[0].body.length;i++){			
						type_str+=	`<li>
											<img src=${res[0].body[i].src} alt="">
											<p>${res[0].body[i].title}</p>
											<p class="goods_price"><span>￥</span><span>${res[0].body[i].price}</span></p>
									</li>`;	
					}

					for(var j = 0 ; j < res[0].brand.length;j++){
						if(j == 0){
							brand_str+= `<li class="first_li">
										<a href="">
											<img src=${res[0].brand[j].src} alt="">
										</a>
									</li>`;
						}else{
							brand_str+= `<li >
										<a href="">
											<img src=${res[0].brand[j].src} alt="">
										</a>
									</li>`;
						}
						
					}

					type_str+=`   </ul>
								</li>
							</ul>`;

					brand_str+='</ul>'
					

					$('.mid_block_food').html(type_str);

					$('.mid_block_food').siblings('.brand_wrap').html(brand_str);
			
					setTimeout(function(){
						$('.mid_block_food').beginRender();
					},100);		
				})

		}