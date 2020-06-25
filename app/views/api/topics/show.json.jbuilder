json.extract! @topic, :id, :name
json.questions @topic.questions.map(&:attributes)

