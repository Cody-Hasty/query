json.merge! @question.attributes
json.author @question.author, :fname, :lname
json.topic @question.topic, :name, :id
json.comments do
    @topic.comments.each do |c|
        json.set! c.id do
            json.merge! c.attributes
            json.author c.author, :fname, :lname
        end
    end
end