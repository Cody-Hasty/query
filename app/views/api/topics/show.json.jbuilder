json.extract! @topic, :id, :name
json.extract! @topic.onTopicQuestions, :id, :title, :body, :author_id
json.extract! @topic.onTopicQuestions.author, :fname, :lname