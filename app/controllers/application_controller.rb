class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  helper_method :current_user, :logged_in?

  def login!(user)
    session[:session_token] = user.session_token
  end

  def logout!
    current_user.reset_session_token!
    session[:session_token] = nil
  end

  def current_user
      return nil unless session[:session_token]
      @current_user ||= User.find_by_session_token(session[:session_token])
  end

  def logged_in?
      !current_user.nil?
  end

  # redirect for these cases?
  # no redirect, just json for errors

  # def require_logged_out
      # not required for Query, only logged in users
  # end

  def require_logged_in
      render json: ['You need to login to view this page'] unless current_user
  end
  
end
