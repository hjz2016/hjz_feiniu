	var totalLoad = 0;// 加载模块的次数

	function initParams(type){
			var data = {};
			switch (type) {
				case "food":
					data = {
								c:"widget",
								a:"get_widget_data",
								t:1505549960099,
								widgetId:2486
							};
					break;
				case "beauty":
					data = {
								c:"widget",
								a:"get_widget_data",
								t:1505549960099,
								widgetId:2486
							};
					break;
				case "appliance":
					data = {
								c:"widget",
								a:"get_widget_data",
								t:1505549960099,
								widgetId:2486
							};
					break;
				case "clothes":
					data = {
								c:"widget",
								a:"get_widget_data",
								t:1505549960099,
								widgetId:2486
							};
					break;
				case "shoes":
					data = {
								c:"widget",
								a:"get_widget_data",
								t:1505553256537,
								widgetId:3913
							};
					break;
				case "sports":
					data = {
								c:"widget",
								a:"get_widget_data",
								t:1505553256537,
								widgetId:3916
							};
			}
			beginAjax(type,data);
	}

	
	function beginAjax(type,data){
		var type_tabs = [];

		$.ajax({
			url:'http://www.feiniu.com',
			type:'GET',
			data:data
		})
		.then(function(res){
			res = JSON.parse(res);
			for(var i = 0 , tab; tab = res.message.tabs[i++];){
				type_tabs[i] = tab;
			}

			$('body').append('<script src="js/'+ type +'.js"></script>');

			renderHTML(type,type_tabs);
		});
			
	}



	