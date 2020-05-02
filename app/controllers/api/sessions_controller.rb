class Api::SessionsController < ApplicationController 
  def create
    @user = User.find_by_credentials(params[:user][:loginEmail], params[:user][:loginPassword])
    if @user.nil?
      flash.now[:errors] = { base: ['Invalid email or password'] }
    else
      login!(@user)
      render 'api/users/show';
    end
  end

  def destroy
    logout!
  end
end
