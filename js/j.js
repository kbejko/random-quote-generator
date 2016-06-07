function genQuote() {
    $.getJSON("http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?", function(data){
    $(".quote").text(data.quoteText)
    $(".author").text(data.quoteAuthor)
    var tweetQuote = "https://twitter.com/intent/tweet?text=" + data.quoteText + " - " + data.quoteAuthor
    $("#tweet").on("click", function(){
      $(this).attr("href", tweetQuote)
    })
  })
}

$(document).ready(function(){
    genQuote()
   $("#generateQuote").on("click", function(){
      genQuote()
  })
})
