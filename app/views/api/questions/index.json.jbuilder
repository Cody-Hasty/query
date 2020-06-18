@questions.each do |i|
  json.set! i.id do
    json.extract! i, :id, :title, :body, :topic, :author_id
    json.extract! i.author, :fname, :lname
  end
end