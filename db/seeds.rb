# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

john = User.create(first_name: "John", last_name: "Smith", password: "password", username: "jsmith79")
ben = User.create(first_name: "Ben", last_name: "Jones", password: "password", username: "bjones123")
User.create(first_name: "Frank", last_name: "Buckley", password: "password", username: "fbuckley")
User.create(first_name: "Howard", last_name: "Nones", password: "password", username: "hnones100")

game1 = john.games.build(operation: "multiplication", time_per_question: 5, number_of_questions: 10, number_correct: 7, number_incorrect: 2, number_unanswered: 1, status: "finished")
game1.save
game2 = john.games.build(operation: "multiplication", time_per_question: 5, number_of_questions: 10, number_correct: 8, number_incorrect: 2, number_unanswered: 0, status: "finished")
game2.save
