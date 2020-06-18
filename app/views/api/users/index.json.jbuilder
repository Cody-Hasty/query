@users.each do |i|
  json.set! i.id do
    json.extract! i, :id, :email, :credentials, :fname, :lname
  end
end