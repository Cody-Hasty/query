@topics.each do |i|
    json.set! i.id do
        json.merge! i.attributes
        json.questions i.questions.length
    end
end