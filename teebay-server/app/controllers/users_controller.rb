class UsersController < ApplicationController
  def create
    result = RegisterUser.call(user_params: user_params)
    if result.success?
      render json: result.user, status: :ok
    else
      render json: {message: result.message}, status: :bad_request
    end

  end

  private

  # Only allow a list of trusted parameters through.
  def user_params
    params.permit(:email, :password)
  end
end
