
/*$(document).on("click","input[name='mats']",function(){
    thisRadio = $(this);
    if(thisRadio.hasClass("imChecked")){
        thisRadio.removeClass("imChecked");
        $().append(``)
    }else{
        thisRadio.prop('checked',true);
        thisRadio.addClass("imChecked");
    }
})
let mat=['ad-bd' , 'ad-s-r','an','droit','entr-d','fond-ia','prog-s-r','proj-fed','tech-comp','tech-index','tech-prog-web','test-log']
let cpd=['cours', 'td','tp']
for(i in mat){
    for(j in cpd){
    let s=mat[i]
    let k=cpd[j]
    let dir = `files/matieres/${s}/${k}/`;
    const fileextension = ".pdf";
    $.ajax({
        url: dir,
        success: function (data) {
            $(data).find("a:contains(" + fileextension + ")").each(function () {
                let filename = this.href.replace("https://hlel-mohamed.github.io/", "");
                console.log(filename)
                $(`#${s}-${k}`).append('<li><a href="' +filename + '" target="_blank">'+ filename.replaceAll("%20"," ").replace(dir,"").replace(".pdf","").replaceAll("_"," ").replaceAll("%C3%A9","é").replaceAll("%C3%A0","à") +"</a></li>");
                
            });
        }
    });
    }
}



https://hlel-mohamed.github.io/files/emplois/2-SI-A-1.pdf
http://127.0.0.1:5500/files/emplois/2-SI-A-1.pdf

$(document).on("click","input[name='s-mats']",function(){
    thisRadio = $(this);
    if(thisRadio.hasClass("imChecked")){
        thisRadio.removeClass("imChecked");
        thisRadio.prop('checked',false);
    }else{
        thisRadio.prop('checked',true);
        thisRadio.addClass("imChecked");
    }
})*/