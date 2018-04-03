class Api::SessionsController < ApplicationController
  def create
    @user = User.find_by_credentials(
      params[:user][:username],
      params[:user][:password]
    )
    if @user
      login(@user)
      render "api/users/currentUser"
    else
      render json: ['invalid username or password'], status: 401
    end
  end

  def destroy

    if current_user
      logout
      render json: {}
    else
      render json: ['no current user'], status: 404
    end
  end

end
