@questions.each do |i|
  json.set! i.id do
    json.extract! i, :id, :title, :body, :topic_id, :author_id
    json.extract! i.author, :fname, :lname
    json.extract! i.topic, :name
  end
end