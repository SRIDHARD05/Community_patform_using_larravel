$(document).ready(function () {
    $(".group-uuid").click(function () {
        var group_id = $(this).data('id');
        // console.log(group_id);
        $.ajax({
            url: "/queries/" + group_id + "/questions",
            type: "GET",
            contentType: "application/json",
            success: function (response) {
                window.location.href = "/queries/" + group_id + "/questions";
            },
            error: function (xhr, status, error) {
                console.error("Error:", xhr.responseText);
                alert("An error occurred: " + xhr.responseText);
            }
        });
    });
});

$("#create-query").click(function () {
    $.ajax({
        url: "/queries/create",
        type: "GET",
        contentType: "application/json",
        success: function (response) {
            $(document.body).append(response);
            $("#new-query-modal").modal("show");

            $('#new-query-modal').on('hidden.bs.modal', function () {
                $("#new-query-modal").remove();
            });

            let group_id = "";

            $('.new-question-items').on('click', function (e) {
                group_id = $(this).attr('id');
                $('button[data-id="create-questions-dropdown"]').text($(this).text());
            });

            $("#new-query-modal-submit").on("click", function () {
                let question_title = $("#question-title").val().trim();
                let question_descriptions = $("#query-descriptions").val().trim();

                if (!question_title) {
                    alert("Please enter a question title.");
                    return;
                }
                if (!question_descriptions) {
                    alert("Please enter a question description.");
                    return;
                }
                if (!group_id) {
                    alert("Please select a group.");
                    return;
                }

                $.ajax({
                    url: "/queries/save",
                    type: "POST",
                    data: JSON.stringify({
                        'question_title': question_title,
                        'group_id': group_id,
                        'question_descriptions': question_descriptions
                    }),
                    contentType: "application/json",
                    success: function (response) {
                        if (response['status'] === 'success') {
                            $("#new-query-modal").modal("hide");
                            $("#new-query-modal").remove();
                            alert("Success");
                            window.location.reload();
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error("Error:", xhr.responseText);
                        alert("An error occurred: " + xhr.responseText);
                    }
                });
            });

            $("#new-query-modal-cancel").on("click", function () {
                $("#new-query-modal").modal("hide");
                $("#new-query-modal").remove();
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText);
            alert("An error occurred: " + xhr.responseText);
        }
    });
});

$("#create-group").click(function () {
    $.ajax({
        url: "/groups/create",
        type: "GET",
        contentType: "application/json",
        success: function (response) {
            $(document.body).append(response);
            $("#new-group-modal").modal("show");

            $('#new-group-modal').on('hidden.bs.modal', function () {
                $("#new-group-modal").remove();
            });


            $("#new-group-modal-submit").on("click", function () {
                let group_title = $("#group-name").val().trim();
                let group_descriptions = $("#group-description").val().trim();

                if (!group_title) {
                    alert("Please enter a group title.");
                    return;
                }
                if (!group_descriptions) {
                    alert("Please enter a group description.");
                    return;
                }

                $.ajax({
                    url: "/groups/save",
                    type: "POST",
                    data: JSON.stringify({
                        'name': group_title,
                        'desc': group_descriptions
                    }),
                    contentType: "application/json",
                    success: function (response) {
                        if (response) {
                            $("#new-group-modal").modal("hide");
                            $("#new-group-modal").remove();
                            alert("Success");
                            window.location.reload();
                        }
                    },
                    error: function (xhr, status, error) {
                        console.error("Error:", xhr.responseText);
                        alert("An error occurred: " + xhr.responseText);
                    }
                });
            });

            $("#new-group-modal-cancel").on("click", function () {
                $("#new-group-modal").modal("hide");
                $("#new-group-modal").remove();
            });
        },
        error: function (xhr, status, error) {
            console.error("Error:", xhr.responseText);
            alert("An error occurred: " + xhr.responseText);
        }
    });
});


// $(document).ready(function () {
//     var urlPattern = /http:\/\/127\.0\.0\.1:7000\/queries\/group-[a-f0-9\-]+\/questions#/;
//     if (urlPattern.test(window.location.href)) {

//         alert("You are currently on the specific page!");
//     }
// });



$(document).ready(function () {
    $(".querie-uuid").click(function () {
        var querie_uuid = $(this).data('id');
        // alert(querie_uuid);

        $.ajax({
            url: "/solutions/" + querie_uuid + "/solution",
            type: "GET",
            contentType: "application/json",
            success: function (response) {
                window.location.href = "/solutions/" + querie_uuid + "/solution";
            },
            error: function (xhr, status, error) {
                console.error("Error:", xhr.responseText);
                alert("An error occurred: " + xhr.responseText);
            }
        });
    });
});



$(document).ready(function () {
    $('#submit-answer-btn').on('click', function () {
        const answer = $('#user-solutions-input').val();

        const queryId = $(this).data('value');

        console.log('User Answer:', answer);
        console.log('Query ID:', queryId);

        $.ajax({
            url: '/solutions/save',
            method: 'POST',
            contentType: 'application/json',
            data: JSON.stringify({ query_id: queryId, answer: answer }),
            success: function (response) {
                console.log('Success:', response);
                if (response['status'] == 'success') {
                    alert("Success");
                    window.location.reload();
                }
            },
            error: function (error) {
                console.error('Error:', error);
                alert('An error occurred while submitting your answer.');
            }
        });
    });
});