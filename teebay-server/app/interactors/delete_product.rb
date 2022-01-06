class DeleteProduct
  include Interactor::Organizer

  organize GetProduct,DestroyProduct
end
