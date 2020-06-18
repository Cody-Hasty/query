json.extract! @question, :id, :title, :body, :topic, :author_id
json.extract! @question.author, :fname, :lname