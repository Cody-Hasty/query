# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.create(email: 'demo@demo.com', password: '123456', credentials: "Demo User", fname: "John", lname: "Doe")
User.create(email: 'cookiemonster@cookie.net', password: 'cookie', credentials: 'Gourmet chef and talk show host', fname: 'Cookie', lname: 'Monster')
User.create(email: 'tacotuesday@yum.com', password: 'saucey', credentials: 'I eat a LOT of tacos', fname: 'Taco', lname: 'Tuesday')
User.create(email: 'bobthebuffetman@man.net', password: 'buffet', credentials: 'On a see-food diet', fname: 'Bob', lname: 'BuffetMan')
Question.create(title: 'COOKIE??!!??', body: 'Does anybody know any good cookie places near Seasame St?', topic: 'food', author_id: '2')
Question.create(title: 'What day is it?', body: 'I lost my calender, what day of the week is it?', topic: 'time management', author_id: '3')
Question.create(title: 'Tortilla substitutions?', body: 'I\'m out of tortillas, what could I replace them with in my kitchen?', topic: 'cooking', author_id: '3')
