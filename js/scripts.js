// animasi intro awal 
function animasiIntro(){
    $("#text span").velocity("transition.slideLeftIn",{
        stagger:150,
        // menjalankan function selanjutnya setelah animasi intro 
        complete: function(){
            // memanggil animasi button start 
            animasiButtonStart();
        }
    });
}

// animasi button start 
function animasiButtonStart(){
    $("#start").velocity("transition.bounceUpIn",{
        duration: 1000
    })
                // mouseenter merupakan suatu fungsi yang aktif ketika pointer mouse diletakan ke arah id terkait 
               .mouseenter(function(){
                $(this).velocity({width:100});
               })
            //    mouse leave adalah suatau fungsi yang aktif ketika mouse di pindahkan dari id yang dimaksud 
               .mouseleave(function(){
                $(this).velocity({width:125});
               })
}

// animasi akhir intro 
function animasiIntroOut(){
    $("#start").attr("disabled", true).css({"color":"black"});
    // mengarahkan ke id start dan mengeksekusi perintah onclick pada button start 
    $("#start").velocity("transition.whirlOut",{
        stagger:150,
        complete: function(){
            $("#text").velocity({
                "font-size":"20px", "top":"95%"
            },
            {
                duration: 1000,
                complete: function(){
                    callMenu();
                    // menjadikan nilai attribut href what_we_do sebagai nilai trigger atau default setelah menjalankan function callmenu 
                    $("#menu ul li a[href='what_we_do']").trigger("click");
                    $("#start").attr("disabled", false).css({"color":"black"});
                }
            }
            );
        }
    });
}
//function untuk menampilkan navbar menu
function callMenu(){
    $("#menu ul li").velocity("transition.slideLeftIn",{
        stagger:250
    });
    $("#menu ul li a").off().click(function(event){
        // memberhentikan event dafault dari tag a yang sebelumnya mengarahkan ke halamaan lain
        event.preventDefault();
        $(this).parent("li").addClass("active").siblings().removeClass("active");
        // this diatas merujuk kepada tag a yang akan kita klik nantinya
        // kemudian dia akan memanggil parent nya yaitu tag li yang akan digunakan untuk menggunakan class active dan kemudian memanggil fungsi siblings untuk memanggil saudara li yang lain dan mematikan class active di li yang lain 
        
        // $(this).parent("li").siblings().removeClass("active");

        // mengambil nilai dari atribut href pada tag nav html 
        var hrefString = $(this).attr("href");
        if (hrefString=="back_to_intro") {
            back_to_intro();
        } else {
            if(!$("#"+ hrefString).is(':visible')){
                
                // menghilangkan konten yang sebelumnya 
                $(".container-content").fadeOut(1000);
                
                setTimeout(function(){
                    // menampilkan semua data yang sebelumnya telah none kan melalui class container content 
                    $("#"+ hrefString).show();
                    
                    // membuat string href yang didapatkan menjadi function
                    window[hrefString]();
                }, 1000);
            }
        }
    });
}

//fungsi animasi untuk navigasi what we do
function what_we_do(){
    $("#what_we_do img").velocity("transition.flipYIn",
    {
        duration:1500
    });
    $("#what_we_do .title").velocity("transition.slideUpIn",
    {
        duration:1500
    });
    $("#what_we_do div").velocity("transition.slideDownIn",
    {
        duration:1500
    });
}

// our team animasi 
function our_team(){
	$(".members.top240").velocity("transition.slideUpIn",{ stagger: 100 });		
	$(".members.top170").velocity("transition.slideDownIn",{ stagger: 100 });		
}

function back_to_intro()
{
    $("#menu ul li").hide();
    $(".container-content").hide();
    $("#text").velocity(
        {
            "font-size":"90px",
            "top":"50%"
        },
        {
            duration: 1000,
            complete: function(){
                $("#start").velocity("transition.whirlIn");
            }
        })
}

// awal intro 
$(document).ready(function(){
    animasiIntro();
    
})