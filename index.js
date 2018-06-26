$(document).ready(function (){
});




$("#searchRepositories").on("click", function() {
    let search = $("#searchTerms").val()
    search(search);
 })

function searchRepositories(input) {
    $.ajax({
        url: "https://api.github.com/search/repositories?q=tetris+language:assembly&sort",
        dataType: "json",
        data: {
            api_key: '',
            q: input,
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