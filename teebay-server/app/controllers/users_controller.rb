class UsersController < ApplicationController
  def create
    user = User.find_by(email: user_params[:email])
    if !user
      user = User.new({ **user_params })
      user_created = user.save
      if user_created
        render json: user
      else
        render json: { message: "Couldn't create the user" }
      end
    else
      render json: { message: 'User already exists with the given email.' }
    end
  end

  def get_current_user
    user = current_user
    if user
      render json: user
    else
      render json: { message: 'No one is logged in' }
    end
  end

  private

  # Only allow a list of trusted parameters through.
  def user_params
    params.permit(:email, :password)
  end
end
