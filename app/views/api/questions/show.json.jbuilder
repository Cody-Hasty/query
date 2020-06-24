json.extract! @question, :id, :title, :body, :topic_id, :author_id
json.extract! @question.author, :fname, :lname
json.extract! @question.topic, :name