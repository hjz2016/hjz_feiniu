	// 渲染头部
	$('.header').load('html/header.html',function(){

		// 我的飞牛显示/隐藏
		var $myfeiniu = $('.myFeiniu')
		$myfeiniu.hover(
			function(){
				$myfeiniu.addClass('hoverFeiniu');
				$('.hide_feiniu').show();
				$myfeiniu.find('.arrow').css({
					transform : "rotate(180deg)"
				})
			},
			function(){
				$myfeiniu.removeClass('hoverFeiniu');
				$('.hide_feiniu').hide();
				$myfeiniu.find('.arrow').css({
					transform : "rotate(0deg)"
				})
			}
		)

		// 手机飞牛网显示/隐藏
		$('.feiniu_app').hover(
			function(){
				$('.feiniu_app').addClass('hoverFeiniu_app');
				$('.hide_feiniu_app').show();
				$('.feiniu_app').find('.arrow').css({
					transform : "rotate(180deg)"
				})
			},
			function(){
				$('.feiniu_app').removeClass('hoverFeiniu_app');
				$('.hide_feiniu_app').hide();
				$('.feiniu_app').find('.arrow').css({
					transform : "rotate(0deg)"
				})
			}
		)

		var flag = true;

		$('#spread').click(function() {
			var $this = $(this);
			if(flag){
				flag = !flag;

				$('.outer').stop().animate({
					height : 60
				},500,function(){
					$this.css({
						backgroundPosition : '-52px 0'
					});
					$('.outer').find('img')
					.attr('src','//img03.fn-mart.com/pic/ec9e133e84a21ba51e01/k2q2nn72FzflKgUM3T/7iSaeaFyKyhaSR/CsmRsVm_PlGAJq5FAABR8VuZs2o143.jpg')
				});

			}else{
				flag = !flag;

				$('.outer').find('img')
					.attr('src','//img03.fn-mart.com/pic/6431133e84ac1ba56430/K26z225zF2tMBlUdO2/5xoGoR_yhaKaoa/CsmRslm_PlaAQq_6AADQLIkJwr0163.jpg')
				$('.outer').stop().animate({
					height : 300
				},500,function(){
					$this.css({
						backgroundPosition : '-74px 0'
					});	
				});
			}
		});

		$('#close').click(function() {
			$('.ad').hide();
		});
	});

	// 渲染食品区
	initParams('food');

	// 渲染美妆区
	initParams('beauty');

	// 渲染家电区
	initParams('appliance');

	// 渲染内衣区
	initParams('clothes');


	// 顶层广告
	;(function(){
		console.log($('#spread'))
		
	})()

	// 顶部banner轮播图
	var roller = $.Roller.create();


	// banner选项卡
	(function(){
		var $slider = $('.mid_slide');
		var $items = $slider.children('ul').children();

		$items.click(function() {
			$(this).siblings().removeClass('charging_active')
			$(this).addClass('charging_active')
			if($(this).index() == 0){
				$('.ph_money').show();
				$('.liu_money').hide();
			}else{
				$('.liu_money').show();
				$('.ph_money').hide();
			}
		});
	})();

	// banner右侧功能区
	(function(){
		var flag = false;

		// 小箭头
		$('.num_type').click(function(){
			$(this).parent().siblings('.selector').show();
		})
		.siblings('i')
		.mouseover(function() {
			$(this).css({
				backgroundPosition : '-38px -162px'
			}).parent()
			.siblings('.selector').show();
		}).mouseout(function() {
			$(this).css({
				backgroundPosition : '-29px -162px'
			}).parent()
			.siblings('.selector').mouseout();
		});


		// 整个选择框
		$('.selector').mouseover(function() {
			$(this).show();
			flag = true;
		}).mouseout(function() {
			flag = false;
			var $that = $(this);
			myMouseout($that)
		})
		.children()
		.click(function() {
			var oVal = $(this).find('a').html();
			$(this).parent().parent().find('.num_type').html(oVal);
			$(this).parent().hide();

			var num = parseInt(oVal) - 1.9,
				num2 = parseInt(oVal);
			// 修改底部价格
			$(this).parent().parent().find('.charging_price').html('￥'+ num +'元-'+ num2 + '元')
		})
		.mouseover(function() {
			$(this).addClass('li_active');
			$(this).find('a').css("color","#d7063b");
		})
		.mouseout(function() {
			$(this).removeClass('li_active');
			$(this).find('a').css("color","#000");
		});

		function myMouseout($that){
			var timer = setTimeout(function(){
				if(flag){
					return false;
				}else{
					$that.hide();
				}
			},500)
		}
		
	})();

	

	// 悬浮层特效
	(function(){
		// scrollTop大于600出现
		$(window).scroll(function(){
			if($(document).scrollTop() > 600){
					
					
				$('.fix_search').css({
					display:'block'
				})
				$('.fix_rt').css({
					display:'block'
				})
			}else{
				$('.fix_search').css({
					display:'none'
				})
				$('.fix_rt').css({
					display:'none'
				})	
			}
		})

		// top回顶
		$('#goTop').click(function() {
			$(window).scrollTop(0);
		});

		// 点击购物车左移
		var res;

		$('.my_cart').click(function() {
			$('.fix_rt').animate({
				right:0
			},500)
		});

		$('.fix_rt').find('*').click(function() {	
			res = 1;
		});

		$(document).click(function() {
			if(res == 1){
				res = 0;
				return;
			}else{
				$('.fix_rt').animate({
					right:'-280px'
				},500)
			}
		});

		//屏幕可视高度小于630时隐藏中部小图标
		var timer = setInterval(function(){
			if(document.documentElement.clientHeight < 630){
				$('.fix_rt_mid').find('li:not(.my_cart)')
				.css({
					opacity:'0'
				})
			}else{
				$('.fix_rt_mid').find('li:not(.my_cart)')
				.css({
					opacity:'1'
				})
			}
		},1000)

		// hover
		$('.fix_rt_mid').find('li:not(.my_cart)')
		.hover(function() {
			$(this)
			.find('a')
			.css({
				background:'#d7063b'	
			})
			.find('.rt_hide')
			.stop()
			.animate({
				right:'35px'
			},500)
		},function(){
			$(this)
			.find('a')
			.css({
				background:'#000'	
			})
			.find('.rt_hide')
			.stop()
			.animate({
				right:'-90px'
			},500)
		});

		$('.fix_rt_bot').find('li:not(.my_cart)')
		.hover(function() {
			$(this)
			.find('a')
			.css({
				background:'#d7063b'	
			})
			.find('.rt_hide')
			.stop()
			.animate({
				right:'35px'
			},500)
		},function(){
			$(this)
			.find('a')
			.css({
				background:'#333'	
			})
			.find('.rt_hide')
			.stop()
			.animate({
				right:'-90px'
			},500)
		});
	})();


	// 楼层区域
	$.fn.extend({
		beginRender(){
			// 区域选项卡
			$(this).find('.block_top>ul').children('li')
				.mouseover(function() {
					$(this).addClass('acti');
					$(this).siblings().removeClass('acti');

					$(this).parent().parent().siblings('.block_mid_main')
					.children('li').eq($(this).index())
					.css({
						display : 'block'
					})
					.siblings()
					.css({
						display : 'none'
					})
				});
		}
	})
	

	function stopBubble(e){
		e = e || window.event;

		if(e.stopPropagation){
			e.stopPropagation();
		}else{
			e.cancelBubble = true;
		}
	}

	