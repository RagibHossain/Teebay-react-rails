# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

#  products = Product.create([
#      {
#        name: 'Ball',
#        description: 'Hard ball',
#        buy_price: 1000,
#        rent_price: 100
#      },
#      {
#        name: 'Bat',
#        description: 'Good Bat',
#        buy_price: 1000,
#        rent_price: 100
#      },
#      {
#         name: 'Life',
#         description: 'Good experience',
#         buy_price: 1000,
#         rent_price: 100
#       },
#       {
#         name: 'Death',
#         description: 'The end',
#         buy_price: 1000,
#         rent_price: 100
#       }

#  ])
categories = Category.create([
                               { name: 'ELECTRONICS' },
                               { name: 'TOYS' },
                               { name: 'OUTDOORS' },
                               { name: 'SPORTS' },
                               { name: 'FURNITURE' },
                               { name: 'HOME APPLIANCES' }
                             ])
