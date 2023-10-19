jQuery(function(){
    setTimeout(function() {
      console.log('funcinaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa')
  
      document.getElementsByTagName("html")[0].getAttribute("data-store");
      var s = "busca_noticias.php?loja=" + document.getElementsByTagName("html")[0].getAttribute("data-store") +'&'+ document.getElementsByTagName("html")[0].getAttribute("data-files")
        , e = jQuery(".noticias-content");
      jQuery.ajax({
          url: s,
          type: "GET",
          dataType: "html",
          contentType: "charset=iso-8859-1",
          success: function(s) {
              var t = s.replace(/src/g, 'src');
              e.html('<div class="noticias">' + jQuery(t).find(".noticias").html() + "</div>"),
              e.find("li").wrapInner('<div class="box-noticia"></div>').find('img').attr('width', '400').attr('height', '400'),
              e.find(".noticias li:nth-child(n+5)").remove(),
              e.find('.noticias li').length ? '' : jQuery('.section-notices').remove();

          }
      })
    }, 400);
  })