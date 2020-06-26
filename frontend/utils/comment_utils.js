export const createQuestion = comment => (
    $.ajax({
        url: `/api/questions/${comment.post_id}/comments`,
        method: 'POST',
        data: {
            comment
        }
    })
);

export const updateQuestion = comment => (
    $.ajax({
        url: `/api/questions/${comment.post_id}/comments/${comment.id}`,
        method: 'PATCH',
        data: {
            comment
        }
    })
);

export const deleteQuestion = comment => (
    $.ajax({
        url: `/api/questions/${comment.post_id}/comments/${comment.id}`,
        method: 'DELETE',
    })
);
