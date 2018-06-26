$(document).ready(function (){
});

function searchRepositories() {
  $("#searchTerms").val
}


$("#searchRepositories").on("click", function() {
    let search = $("#searchTerms").val()
    search(search);
 })

function searchGif(input) {
    $.ajax({
        url: "https://api.giphy.com/v1/gifs/search",
        dataType: "json",
        data: {
            api_key: 'c19b2b7141454239a19fe6d59e8c4af9',
            q: input,
            limit: 3,
            rating: "PG-13"
        },
        success: resp => {
            url = resp.data["0"].embed_url
            $("#firstDiv").html(`<iframe src=${url}>`)

            
            url = resp.data["1"].embed_url
            $("#secondDiv").html(`<iframe src=${url}>`)

                
            url = resp.data["2"].embed_url
            $("#thirdDiv").html(`<iframe src=${url}>`)
        }
    })
}