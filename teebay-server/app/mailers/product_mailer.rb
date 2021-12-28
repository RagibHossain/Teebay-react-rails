class ProductMailer < ApplicationMailer
    def product_created_email
        @product = params[:product]
        @user = params[:user]
        mail(to: @user.email, subject: "Your product named #{@product.name} has been added ")
    end
end
