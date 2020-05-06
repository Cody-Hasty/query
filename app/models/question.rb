# == Schema Information
#
# Table name: questions
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  body       :text             not null
#  topic      :string           not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#
class Question < ApplicationRecord
validates :title, presence: true
validates :author_id, presence: true

belongs_to :author,
    class_name: :User,
    foreign_key: :author_id,



end
