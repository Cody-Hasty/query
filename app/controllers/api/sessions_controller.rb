class Api::SessionsController < ApplicationController
    def new
        # render login page?
    end

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])
        if @user.nil?
            # show some errors
        else
            login!(@user)
            # redirect user somewhere...
        end
    end

    def destroy
        logout!
        # show login page
    end
end
