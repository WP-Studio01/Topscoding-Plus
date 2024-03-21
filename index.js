//console.log(window,'Topscoding Plus插件成功运行');
//window.alert('Topscoding Plus插件成功运行');
var check_run=function(id,callback){
	chrome.storage.sync.get(id,function(result){
		if(result[id]!=false){
			callback();
		}
	});
	// callback();
}
check_run('1',function(){
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
check_run('2',function(){
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
/*check_run('3',function(){
	// alert(location.href);
	// if(location.href.endsWith('discuss'))
	{
		let times=document.getElementsByClassName('time');
		alert(times.length);
		for(let i of times)
		{
			if(i.tagName!='SPAN') continue;
			if(Data().now()-i.dataset.timestamp > 31536000)
			{
				console.log(i);
				console.log(i.dataset.timestamp);
				i.parentElement.parentElement.parentElement.parentElement.parentElement.style.display='none';
			}
		}
	}
});*/
check_run('3',function(){
	if(location.href.endsWith('discuss'))
	{
		let times=document.getElementsByClassName('time');
		for(let i of times)
		{
			if(i.tagName!='SPAN') continue;
			let str=i.outerHTML;
			let idxb=str.indexOf('datetime');
			idxb+=10;
			let idxe=(str.indexOf('"',idxb));
			let datetime=str.substring(idxb,idxe);
			if(new Date().getTime()-datetime > 31536000000)
			{
				i.parentNode.parentNode.parentNode.parentNode.parentNode.style.display='none';
			}
		}
	}
	
});
