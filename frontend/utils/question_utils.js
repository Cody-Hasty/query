export const fetchQuestions = (data) => (
    $.ajax({
        method: 'GET',
        url: '/api/questions',
        data
    })
);

export const fetchQuestion = question => (
    $.ajax({
        method: 'GET',
        url: `/api/questions/${question.id}`,
    })
);

export const createQuestion = question => (
    $.ajax({
        method: 'POST',
        url: '/api/questions',
        data: question
    })
);

export const updateQuestion = question => (
    $.ajax({
        method: 'PATCH',
        url: `/api/questions/${question.id}`,
        data: {
            question
        }
    })
);

export const deleteQuestions = id => (
    $.ajax({
        method: 'DELETE',
        url: `api/questions/${id}`
    })
);

// export const fetchAuthor = id => (
//     $.ajax({
//         method: 'GET',
//         url: `/users/${author_id}`,
//     })
// )
