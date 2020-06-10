class Api::SessionsController < ApplicationController 
  def create
    @user = User.find_by_credentials(params[:user][:loginEmail], params[:user][:loginPassword])
    if @user.nil?
        render json: ["Invalid login"], status: 401
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    logout!
  end
end
