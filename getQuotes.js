function getquotes(){
  $.ajaxSetup({
  headers: {
      "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
      Accept: "application/json",
      "Content-Type": "application/x-www-form-urlencoded"
    }
});
  $.getJSON(
    'https://andruxnet-random-famous-quotes.p.mashape.com/cat=', 
    function(data) {
      $("#quote").html(data.quote);
      $("#author").html(data.author);
      $("#category").html(data.category);   
      console.log (data);
     }
);
}