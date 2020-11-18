let searchInput = $('#searchInput');
let searchTextArea = $('#searchTextArea');
let newPost = $('#newPost');


$('.btn').click(function (e) {
    e.preventDefault();
    handleClick();
});


function handleClick() {
    let user = searchInput.val();
    let message = searchTextArea.val();
    let data = {
        user,
        message
    };

    $.ajax({
        type: 'POST',
        url: '/api/chirps',
        data
    })
    .then(getNDisplay());

    searchInput.val('');
    searchTextArea.val('');
};

function getNDisplay (){
    $.ajax({
        type: 'GET',
        url: '/api/chirps',
    })
        .then(chirps => {
            let newDiv = $('<div id="newDiv" class="text-primary"></div>');
            chirps.forEach(chirp => {
                console.log(chirp);
                newPost.append(newDiv);
                newDiv.append(`
                <span class="d-block font-weight-bold">@${chirp.user}</span>
                <span class="d-block">${chirp.message}</span>
                `)
            })
            function wtf (id){
                $.ajax({
                    type: 'DELETE',
                    url: '/api/chirps/:id'
                })
            }
            newDiv.click(function (id) {
                wtf(id);
            });
        })
}

getNDisplay();
