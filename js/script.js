$("tbody").on("click", "button", function () {
    $(this)
        .closest("tr")
        .fadeOut(1000, function () {
            $(this.remove());
        });
});


$('#addSkill').click(function () {
    let input = document.querySelector('.inputtt').value;
    $('table').append(`<tr>
    <td><button id="trBtn">Delete</button>${input}</td>
    </tr>`);
    $('input').val('');
    // console.log(input)
});