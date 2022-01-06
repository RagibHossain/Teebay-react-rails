class CreateUser
  include Interactor

  def call
    if context.user
      context.fail!(message: "User Already Exists")
    else
      context.user = User.create({**context.user_params})
      context.fail!(message: "couldn't create user") unless context.user.valid?
    end
  end
end
