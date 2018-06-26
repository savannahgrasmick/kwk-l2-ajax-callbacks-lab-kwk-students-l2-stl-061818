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
            
            q: input,
            
        },
        success: resp => {
            url = resp.data["0"].embed_url
            
    })
}