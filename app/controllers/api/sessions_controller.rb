class Api::SessionsController < ApplicationController
  # def new
    # render login page?
    # doesn't seem to be required so far
  # end

  
  def create
    @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
    if @user.nil?
      render json: {errors: 'invalid email or password'}
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    logout!
    # don't show login page
    # handled by frontend
  end
end
