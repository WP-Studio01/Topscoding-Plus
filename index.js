//console.log(window,'Topscoding Plus插件成功运行');
//window.alert('Topscoding Plus插件成功运行');
var check_run=function(id,callback){/*
	chrome.storage.sync.get([id],function(result){
		if(result[id]!='false'){
			callback();
		}
	});*/
	callback();
}
check_run('屏蔽超大图片',function(){
	var imgs=document.getElementsByTagName('img');
	for(var it of imgs)
	{
		if(it.height>1000)
		{
			//it.style.display='none';
			it.outerHTML='超大图片已被屏蔽';
		}
	}
});
check_run('纯净模式',function(){
	var footer=document.getElementsByClassName('footer__extra-link');
	footer[0].style.display='none';
	var cato=document.getElementsByClassName('footer__category');
	cato[0].style.display='none';
	cato[1].style.display='none';
	cato[2].style.display='none';
	cato[3].style.display='none';
	cato[4].style.display='none';
	cato[5].style.display='none';
	if(location=='https://www.topscoding.com/')
	{
		var d=document.getElementsByClassName('discussion__list');
		d[0].style.display='none';
	}
});