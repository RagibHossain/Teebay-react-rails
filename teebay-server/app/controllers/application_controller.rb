class ApplicationController < ActionController::Base
  include Pundit
  rescue_from Pundit::NotAuthorizedError, with: :user_not_authorized
  rescue_from NoMethodError, with: :user_not_authenticated
  # rescue_from ActiveRecord::RecordNotFound, with: :record_not_found

  def record_not_found(exception)
    render json: {message: "No record found"}, status: :not_found
  end
  def user_not_authorized(exception)
    render json: {message: "You are not authorized to perform this action"}, status: :forbidden
  end
  def user_not_authenticated(exception)
    render json: {message: "You are not logged in"}, status: :unauthorized
  end
  def action_not_allowed(exception)
    render json: {message: "Method is not allowed"}, status: :bad_request
  end
  # protect_from_forgery  prepend: true
  protect_from_forgery with: :null_session
  # skip_before_action :verify_authenticity_token
  helper_method :current_user
  def current_user
    @current_user ||= User.find_by id: doorkeeper_token[:resource_owner_id]
  end
end
