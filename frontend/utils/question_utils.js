export const fetchQuestions = (questions) => (
    $.ajax({
        method: 'GET',
        url: '/api/questions',
        data: {
            questions
        }
    })
);

export const fetchQuestion = question => (
    $.ajax({
        method: 'GET',
        url: `api/questions/${question.id}`,
    })
);

export const createQuestion = question => (
    $.ajax({
        url: '/api/questions',
        method: 'POST',
        data: {
            question
        }
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

export const deleteQuestion = question => (
    $.ajax({
        method: 'DELETE',
        url: `/api/questions/${question.id}`
    })
);
