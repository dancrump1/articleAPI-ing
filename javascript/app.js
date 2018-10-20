var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += "?" + $.param({
    'api-key': "04b445e59edf48f780cbc46b2bfe006c"
});


$.ajax({
    url: url,
    method: 'GET',
}).then(function (response) {
    var result = response.response.docs;
    $("#submit").click(function () {
      var title = $("#exampleFormControlSelect1").attr("value");

        for (var i = 0; i < result.length; i++) {
            console.log(result[i])
        }
    }).fail(function (err) {
        throw err;
    });
});