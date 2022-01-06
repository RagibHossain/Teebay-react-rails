class FindUser
  include Interactor

  def call
    context.user = User.find_by(email: context.user_params[:email])
  end
end
