class Api::UsersController < ApplicationController
  
  def create
    @user = User.new(user_params)
    if @user.save
      login!(@user)
      render :show
    else
      # flash.now[:errors] = @user.errors
      render json: @user.errors.full_messages
      
    end
  end
  
  def show
    @user = User.find(params[:id])
  end
  
  def index
    @users = User.all
  end

  # already handled by update, should update routes
  # def edit
  #   @user = User.find(params[:id])
  #   if @user && @user.update_attributes(user_params)
  #     render :show
  #   elsif !@user
  #     render json: ['User not found'], status: 401
  #   else
  #     render json: @user.errors.full_messages, status: 401
  #   end
  # end

  def update
    @user = User.find(params[:id])
    if @user && @user.update_attributes(user_params)
      render :show
    elsif !@user
      render json: ['User not found']
    else
      render json: @user.errors.full_messages
    end
  end
  
  
  def destroy
    @user = User.find(params[:id])
    if @user
      @user.destroy
      render :show
    else
      render json: ['User not found']
    end
  end
  
  private
  
  def user_params
    params.require(:user).permit(:email, :password, :credentials, :fname, :lname)
  end
end
