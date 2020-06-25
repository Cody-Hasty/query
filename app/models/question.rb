# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  topic_id   :integer           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord
    
    validates :title, :topic_id, :body, presence: true

    belongs_to :author,
    class_name: :User

    belongs_to :topic,
    class_name: :Topic

end

# json.extract! @topic, :id, :name
# json.extract! @topic.onTopicQuestions, :id, :title, :body, :author_id
# json.extract! @topic.onTopicQuestions.author, :fname, :lname
