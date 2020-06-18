class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 401
      
    end
  end
  
  def show
    @user = User.find(params[:id])
    if @user
      render "api/questions/show"
    end
  end
  
  def index
    @users = User.all
    render "api/users/index"
  end

  def update
    @user = User.find(params[:id])
    if @user && @user.update_attributes(user_params)
      render "api/questions/show"
    elsif !@user
      render json: ['User not found'], status: 401
    else
      render json: @user.errors.full_messages, status: 401
    end
  end
  
  
  def destroy
    @user = User.find(params[:id])
    if @user
      @user.destroy
      render "api/users/index"
    else
      render json: ['User not found'], status: 401
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password, :credentials, :fname, :lname)
  end
end
