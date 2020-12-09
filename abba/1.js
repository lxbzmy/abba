if (document.location.href.indexOf("ipa") >-1){
    $('table tbody a').each((idx,it)=>{
        it.innerText = it.innerText.substring(0,it.innerText.length-1)
        it.href = "itms-services://?action=download-manifest&url="+encodeURIComponent(it.href+'/manifest.plist')
    })
}