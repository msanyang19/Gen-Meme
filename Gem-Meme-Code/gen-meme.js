//load meme image 
var check= false;
$('#input').change(function (event){
    var target= event.target || window.event.srcElement;
    var files= target.files;
    if(FileReader && files && files.length){
        var fr= new FileReader();
        $('#hint').css("display", "none");
        $('#btn-generate').css("display", "inline-block");
        $('#downloads').css("display", "none");
        fr.onload= function (){
            $('#img').attr('src', fr.result);
        }
        fr.readAsDataURL(files[0]);
        check=true;
    }
    else{

    }
});

// build process
var element= $('#main');
var getCanvas;
$('#btn-generate').on('click', function (){
    if(check==true){
        html2canvas(element, {
            onrendered: function (canvas){
                getCanvas= canvas;
                $('#btn-generate').css("displa", "none");
                $('#downloads').css("display", "inline-block")
            }
        })
    }
    else{
        alert("please upload your meme image")
    }
});

//download your meme
$('#downloads').on('click', function (){
    var imageData= getCanvas.toDataURL("image/png");
    //now browser start downloading
    var newData= imageData.replace(/^data:image\/png/,"data:application/octet-stream");
    $('#downloads').attr("download", "your_image_name.png").attr("href", newData);
    $('#btn-generate').css("display", "inline-block");
    $('#downloads').css("display","none");
})

//refresh page
$('#refresh').on('click',function(){
    location.reload()
})