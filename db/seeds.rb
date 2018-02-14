# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(first_name: "John", last_name: "Smith", password: "password", username: "jsmith79")
User.create(first_name: "Ben", last_name: "Jones", password: "password", username: "bjones123")
User.create(first_name: "Frank", last_name: "Buckley", password: "password", username: "fbuckley")
User.create(first_name: "Howard", last_name: "Nones", password: "password", username: "hnones100")