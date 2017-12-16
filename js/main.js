$(document).ready(function() {
  
   $.ajax({
       url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
       type: 'post',
       Accept: "application/json",
       data: {

       },
       headers: {
           'X-Mashape-Key': '69DRVfqKermshsn25nKwgspNXn82p1r6mXUjsngC4vvfNKcOCf'
       },
       dataType: 'json',
       success: function(data) {
           $('.quote>span').text(data.quote);
           $('.author>span').text('- ' + data.author);
           $('#tweet-quote').attr("href","https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text="+ '"' + data.quote + '"' + " - " + data.author +"&tw_p=tweetbutton&url=http%3A%2F%2Fcodepen.io%2Fgexo%2Fpen%2FvOPxdg" );
       }
   });

   $('#new-quote').click(function() {
    $.ajax({
      url: 'https://andruxnet-random-famous-quotes.p.mashape.com/',
      type: 'post',
      Accept: "application/json",
      data: {

      },
      headers: {
          'X-Mashape-Key': '69DRVfqKermshsn25nKwgspNXn82p1r6mXUjsngC4vvfNKcOCf'
      },
      dataType: 'json',
      success: function(data) {
          $('.quote>span').text(data.quote);
          $('.author>span').text('- ' + data.author);
          $('#tweet-quote').attr("href","https://twitter.com/intent/tweet?ref_src=twsrc%5Etfw&text="+ '"' + data.quote + '"' + " - " + data.author +"&tw_p=tweetbutton&url=http%3A%2F%2Fcodepen.io%2Fgexo%2Fpen%2FvOPxdg" );
      }
    });
  });

});