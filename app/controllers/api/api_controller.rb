class Api::ApiController < ApplicationController
  before_action :ensure_logged_in

  private
  def ensure_logged_in
    unless logged_in?
      render json: ["You need to log in first"]
    end
  end
end
