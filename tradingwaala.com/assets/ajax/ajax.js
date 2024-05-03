function fill(Value) {
    $('#navsearch').val(Value);
    $('#displaysearchproduct').hide();
}
$(document).ready(function () {
    $("#navsearch").keyup(function () {
        var name = $('#navsearch').val();
        if (name == "") {
            $("#displaysearchproduct").html("");
        }
        else {
            $.ajax({
                type: "POST",
                url: "./assets/ajax/ajax_search",
                data: {
                    search: name
                },
                success: function (html) {
                    $("#displaysearchproduct").html(html).show();
                }
            });
        }
    });
});