class Api::UsersController < ApplicationController

  def create
    @user = User.new(user_params)
    @user.img_url = 'placeholder_image'
    if @user.save!
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end

  end

  def edit
  end

  def show
  end

  private
  def user_params
    params.require(:user).permit( :email, :password)
  end
end
