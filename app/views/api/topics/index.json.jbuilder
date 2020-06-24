@topics.each do |i|
    json.set! i.id do 
        json.extract! i, :name
    end
end