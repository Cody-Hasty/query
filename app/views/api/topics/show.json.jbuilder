json.merge! @topic.attributes
json.questions do
    @topic.questions.each do |q|
        json.set! q.id do
            json.merge! q.attributes
            json.author q.author, :fname, :lname
        end
    end
end