class RegisterUser
  include Interactor::Organizer

  organize FindUser,CreateUser
end
