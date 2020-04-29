# == Schema Information
#
# Table name: users
#
#  id              :bigint           not null, primary key
#  email           :string           not null
#  password_digest :string
#  session_token   :string
#  credentials     :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#  fname           :string           default("John"), not null
#  lname           :string           default("Doe"), not null
#
require 'test_helper'

class UserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
