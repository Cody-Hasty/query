class UsersController < ApplicationController

    def new
        @user = User.new
        # is redirect necessary when combining with frontend?
    end

    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
        else
            # flash.now[:errors] = @user.errors.full_messages
            # must refresh self on how to display to frontend
        end
    end

    def show
        @user = User.find(params[:id])
        # once again, does this need redirect?
        # render json: @user.errors.full_messages, status: 404
    end

    def index
        @users = User.all
    end

    def edit
        @user = User.find(params[:id])
        # redirect?
    end

    def update
        @user = User.find(params[:id])
        # render json: @user.errors.full_messages, status: 422
    end

    def destroy
        @user = User.find(params[:id])
         # render json: @user.errors.full_messages, status: 404
    end

    # def search
    #     @users = User.where("username LIKE '%#{params[:query]}%'")
    # end

    private
    
    def user_params
        params.require(:user).permit(:email, :password)
    end

end
