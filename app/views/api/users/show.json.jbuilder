json.merge! @user.attributes
json.questions do
    @user.questions.each do |q|
        json.set! q.id do
            json.merge! q.attributes
        end
    end
end