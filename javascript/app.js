var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
url += "title" + "number" + "startday" + "endday" + $.param({
    'api-key': "04b445e59edf48f780cbc46b2bfe006c"
});

$(".btn-primary").click(function () {
    var title = $("#title").val()
    // var number = $("#retrievenumber").attr("value");
    // var startday = $("#startyear").attr("value");
    // var endday = $("#endyear").attr("value");
    console.log(title);
    $.ajax({
        url: url,
        method: 'GET',
    }).then(function (response) {
        var result = response.response.docs;
        

        for (var i = 0; i < result.length; i++) {
            console.log(result[i])
        }
    }).fail(function (err) {
        throw err;
    });
});