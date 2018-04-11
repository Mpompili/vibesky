# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
ActiveRecord::Base.transaction do 
  User.destroy_all
  Track.destroy_all
  Comment.destroy_all

  users = User.create([
    {email: 'demouser', password: 'password'},
    {email: 'michael@gmail.com', password: 'password'},
    {email: 'yuujie@gmail.com', password: 'password'},
    {email: 'nima@gmail.com', password: 'password'},
    {email: 'Oprah@gmail.com', password: 'password'}
  ])

  demo_user = User.find_by(email: 'demouser')

  # Track.create!({title: "Testpiece3", description: "asdfasdf", uploader_id: User.first.id, image_file_name: "Actionscene_edit1-1.png", image_content_type: "image/png", image_file_size: 3972643, audio_file_name: "SampleSynth.mp3", audio_content_type: "audio/mp3", audio_file_size: 1103329})

  track_names = ["SampleSynth.mp3"]

#   track_names.each do |track|
#     Track.create!({
#       title: "#{track}", 
#       uploader_id: demo_user.id, 
#       description: "testing", 
#       audio: File.new(Rails.root.join('app','assets','tracks',"#{track}"))
#     })
#   end


  10.times do |t|
    Track.create!({
      title: "#{track_names[0]} #{t}", 
      uploader_id: demo_user.id, 
      description: "testing", 
      audio: File.new(Rails.root.join('app','assets','tracks',"#{track_names[0]}"))
    })
  end

end
