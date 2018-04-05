# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create([
  {email: 'michael@gmail.com', password: 'password', img_url: 'placeholder_image'},
  {email: 'yuujie@gmail.com', password: 'password', img_url: 'placeholder_image'},
  {email: 'nima@gmail.com', password: 'password', img_url: 'placeholder_image'},
  {email: 'demouser', password: 'password', img_url: 'placeholder_image'},
  {email: 'Oprah@gmail.com', password: 'password', img_url: 'placeholder_image'}
])
