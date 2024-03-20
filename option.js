var save=document.getElementById('save');
var checks=document.getElementsByTagName('input');
for(var i in checks)
{
	chrome.storage.sync.get([i.innerHTML],function(result){
		i.checked=result[i.innerHTML];
	});
}
save.onclick=function()
{
	for(var i in checks)
	{
		if(i.type=='checkbox')
		{
			chrome.storage.sync.set({i.innerHTML:i.checked},function(){alert('保存成功');});
		}
	}
}