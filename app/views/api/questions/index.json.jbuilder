@questions.each do |i|
  json.set! i.id do
    json.merge! i.attributes
    json.author i.author, :fname, :lname
    json.topic i.topic, :name, :id
  end
end