

var first = true;
 var active = 1;
 $().ready(function () {

     // When document has finished loading
     

     if ($('#isedit').val() == "1")
     {
         $('#myLargeModal').modal('show');
        
     }

       var resizeText = function () {
             // Standard height, for which the body font size is correct
             var preferredFontSize = 180; // %
             var preferredSize = 1024 * 768;

             var currentSize = $(window).width() * $(window).height();
             var scalePercentage = Math.sqrt(currentSize) / Math.sqrt(preferredSize);
             var newFontSize = preferredFontSize * scalePercentage;
          
             $('li #lable').css("font-size", newFontSize + '%');
             $('li #icons').css("font-size", newFontSize + '%');
             $('li #footer').css("font-size", newFontSize-100 + '%');
             $('li #news-content').css("font-size", newFontSize-1000 + '%');
             $('li #img').css("height", $('li #img').height - 100);
             $('li #btnsub').css("font-size", newFontSize-70 + '%');
         };

         $(window).bind('resize', function () {
             resizeText();
         }).trigger('resize');

    
    
    var max = 3;

 
  
   if (first == true) {
      
        for (var i = 3; i < $("#first").children().length; i++) {

            $("#first li").eq(i).hide();


            
        }

    }
    //ad hightlight
   $("#home1").removeClass('active');
   $("#software").removeClass('active');
   $("#trending").removeClass('active');
   $("#feedback").removeClass('active');
   $("#mobile").removeClass('active');

   if  ($("#title").val()=="Home")
   {
      
       $("#home1").addClass('active');
   }
   else if ($("#title").val() == "Mobile") {
       $("#mobile").addClass('active');
   }
   else if ($("#title").val() == "Software") {
       $("#software").addClass('active');
   } else if ($("#title").val() == "Trending") {
       $("#trending").addClass('active');
   } else if ($("#title").val() == "FeedBack") {
       $("#feedback").addClass('active');
   }
   


    $("#rarrow").click(function () {

        var visible = 0;
        for (k = 0; k < $("#first").children().length; k++) {

            if ($("#first li").eq(k).is(':hidden') == false) {
                visible = visible + 1;
            }

        }
       
        //alert(visible);
        if (visible == 3) {
            var k;
            for (k = 0; k < $("#first").children().length; k++) {

                if ($("#first li").eq(k).is(':hidden') == false) {
                    //alert('java script');
                    $("#first li").eq(k).hide();
                    k++;
                    break;
                }

            }
            k = k + 2;
            for (; k < $("#first").children().length; k++) {

                $("#first li").eq(k).show(60);
                break;

            }
        }

    });

    $("#larrow").click(function () {

        var visible = 0;
        for (k = 0; k < $("#first").children().length; k++) {

            if ($("#first li").eq(k).is(':hidden') == false) {
                visible = visible + 1;
            }

        }

        //alert(visible);
        if (visible == 2)
        {
           
            for (k = 0; k < $("#first").children().length; k++) {

                if ($("#first li").eq(k).is(':hidden') == false) {
                    
                    break;
                }

            }
            $("#first li").eq(k - 1).show(60);
        }
        else if (visible ==3) {
            var k,l;
            for (k = 0; k < $("#first").children().length; k++) {

                if ($("#first li").eq(k).is(':hidden') == true) {
                    //alert('java script');
                    l = k;
                    k++;
                    break;
                }

            }
            k = k + 2;
            for (; k < $("#first").children().length; k++) {

                $("#first li").eq(k).hide();
                $("#first li").eq(l).show(60)
                break;

            }
        }

    });

   // alert('javascrpt')

    $('#reset1').click(function () {
      
        var index = $('#index').val();
        var src = $('#delete').val();

        
        $('#comments').empty();
        $.getJSON("/AdminPanel/deleteCommentJson?id=" + index, function (data)
        {
          

            $.each(data, function (i, value) {

                $('#comments').append("<tr><td>" + value.comment + "</td><td>" + value.news + "</td><td>" + value.username + "</td><td>" + value.date + "</td><td><form action=" + "/AdminPanel/deleteComment" + " method=" + "post" + "><input id=" + "index" + " name=" + "index" + " type=" + "hidden" + " value=" + value.Id + " /> <input type=" + "image" + " src=" + src + " id=" + "delete" + " title=" + "Trash/></form></td></tr>");
            });
        });
      
 
        
    });

    $('#submit3').click(function f() {
        var uname=$('#search1').val();
        var src = $('#delete').val();
        $("#comments").empty();
        $.getJSON("/AdminPanel/SearchUser?username=" + uname, function (data) {

           
            $.each(data, function (i, value) {
                
                $('#comments').append("<tr><td>" + value.comment + "</td><td>" + value.news + "</td><td>" + value.username + "</td><td>" + value.date + "</td><td><form action=" + "/AdminPanel/deleteComment" + " method=" + "post" + "><input id=" + "index" + " name=" + "index" + " type=" + "hidden" + " value=" + value.Id + " /> <input type=" + "image" + " src=" + src + " id=" + "delete" + " title=" + "Trash/></form></td></tr>");
            });
        });
    });
     
   

    $('#reset4').click(function () {

        var index = $('#index').val();
        var src2 = $('#delete2').val();
        var src = $('#edit1').val();

        $('#news2').empty();
        $.getJSON("/AdminPanel/SearchNews?id=" + index, function (data) {


            $.each(data, function (i, value) {
                
                $('#news2').append("<tr><td>" + value.title + "</td><td>" + value.catagory + "</td><td>" + value.date + "</td><td>" + value.Admin + "</td><td><form action=" + "/AdminPanel/EditNews" + " method=" + "post" + "><input id=" + "index" + " name=" + "index" + " type=" + "hidden" + " value=" + value.Id + " /> <input type=" + "image" + " src=" + src + " id=" + "delete" + " title=" + "Trash/></form></td><td><form action=" + "/AdminPanel/deleteNews" + " method=" + "post" + "><input id=" + "index" + " name=" + "index" + " type=" + "hidden" + " value=" + value.Id + " /> <input type=" + "image" + " src=" + src2 + " id=" + "delete" + " title=" + "Trash/></form></td></tr>");
            });
        });



    });
    

    $('#submit4').click(function f() {
        var uname = $('#search4').val();
        var src2 = $('#edit1').val();
        var src = $('#delete2').val();
        $("#news2").empty();
        $.getJSON("/AdminPanel/SearchNews?username=" + uname, function (data) {
            

            $.each(data, function (i, value) {

                $('#news2').append("<tr><td>" + value.title + "</td><td>" + value.catagory + "</td><td>" + value.date + "</td><td>" + value.Admin + "</td><td><form action=" + "/AdminPanel/EditNews" + " method=" + "post" + "><input id=" + "index" + " name=" + "index" + " type=" + "hidden" + " value=" + value.Id + " /> <input type=" + "image" + " src=" + src + " id=" + "delete" + " title=" + "Trash/></form></td><td><form action=" + "/AdminPanel/deleteNews" + " method=" + "post" + "><input id=" + "index" + " name=" + "index" + " type=" + "hidden" + " value=" + value.Id + " /> <input type=" + "image" + " src=" + src2 + " id=" + "delete" + " title=" + "Trash/></form></td></tr>");
            });
        });
    });

   
    $('#search-website').click(function () {
      
        $('#home2').removeClass("hidden").addClass("show");
        $('#home').hide();
        $('#wow').empty();
       var val=$('#search').val();
        $.getJSON("/Home/searchNews?news="+val, function (mydata) {
           
          
            $.each(mydata, function (i, data) {
           
            $('#template').removeClass("hidden");
                $('#title-news-').empty();
                $('#news-content-').empty();
                $('#date1').empty();
                $('#likes').empty();
                $('#comments').empty();

                var li = $("<li/>");
               
            
                $('#img').attr("src", "/Content/imgaes-news/"+data.Id+"-0.jpg");
               
                $('#title-news-').append(data.title);
                $('#news-content-').append(data.news1);
                $('#date1').append(data.date);
                $('#likes').append(data.likes);
                $('#comments').append(data.comcount);
                $('#nid').val(data.Id);
                var html2 = $('#template').clone().html();
              
                li.append(html2);
                var form = $('<input type="submit" value="Read More" id="ReadMore"/>')
              

                li.append(form);
             
                $('#wow').append(li);
                $('#template').addClass("hidden");
               

            });
        });
        
    });
 
   $('#ReadMore')(function() {

        //alert($('#nid').val())
        alert("javascript")
    });
     
    });
   
	
  



