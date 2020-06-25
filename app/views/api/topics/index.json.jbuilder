@topics.each do |i|
    json.set! i.id do
        json.extract! i, :id, :name
        json.questions i.questions.length
    end
end