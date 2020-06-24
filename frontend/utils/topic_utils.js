export const fetchTopics = (topics) => (
    $.ajax({
        url: '/api/topics',
        method: 'GET',
        data: {
            topics
        }
    })
);

export const fetchTopic = topic => (
    $.ajax({
        url: `api/topics/${topic.id}`,
        method: 'GET',
    })
);

export const createTopic = topic => (
    $.ajax({
        url: '/api/topics',
        method: 'POST',
        data: {
            topic
        }
    })
);
