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

  User.create!([
    {email: 'Diplo', password: 'password'},
    {email: 'Lorde', password: 'password'},
    {email: 'Muse', password: 'password'},
    {email: 'The Beatles', password: 'password'},
    {email: 'MGMT', password: 'password'},
    {email: 'Fleetwood Mac', password: 'password'},
    {email: 'Hall and Oates', password: 'password'},
    {email: 'demouser', password: 'password'}
  ])


  # Track.create!({title: "Testpiece3", description: "asdfasdf", uploader_id: User.first.id, image_file_name: "Actionscene_edit1-1.png", image_content_type: "image/png", image_file_size: 3972643, audio_file_name: "SampleSynth.mp3", audio_content_type: "audio/mp3", audio_file_size: 1103329})
  # "SampleSynth.mp3"

  uploadernames = [
    "Diplo",
    "Lorde",
    "Muse",
    "The Beatles",
    "MGMT",
    "Fleetwood Mac",
    "Hall and Oates",
  ]
  track_names = [
    "Get It Right (Feat. Mø & Goldlink) Remix.mp3",
    "Magnets.mp3",
    "MK Ultra.mp3",
    "Here Comes The Sun.mp3",
    "Me and Michael.mp3",
    "Never Going Back Again.mp3",
    "Rich Girl.mp3"
  ]

  track_pics = [
    "Diplo.jpg",
    "lorde-magnets.jpg",
    "muse.jpg",
    "beatles.jpg",
    "MGMT.jpg",
    "fleetwood.jpg",
    "richgirl.jpg"
  ]

  uploaderids = uploadernames.map do |name| 
    User.find_by(email: name).id
  end 



 

  comments = [
    "I love this song.",
    "Such good music.",
    "So fresh.",
    "Wow. You just won the internet!",
    "Incredibly exquisite!",
    "This is a neat one",
    "I wonder what would have happened if I made this",
    "Nice use of flow in this idea, friend.",
    "My 52 year old son rates this concept very simple :)",
    "This beat has navigated right into my heart.",
    "Smooth.",
    "I adore your ideas!",
    "Classic album cover m8",
    "I want to master this kind of percussion! Teach me.",
    "That's incredible and sexy dude",
    "This track blew my mind.",
    "This is bold work :)",
    "It's incredible, friend.",
    "Killed it!",
    "Unbelievable track", 
    "This track speaks to me",
    "One of my favorites already",
    "The hook is addicting", 
    "Who made this website!? I should have them build my site",
    "I love listening to this track while driving",
    "Brilliant",
    "Amazing",
    "classsssiccccc",
    "love this",
    "too good",
    "I'm literally dying because it's so good.",
    "Fabulous",
    "Designgasmed all over this!",
    "Wow love it!",
    "This is a-ma-zing",
    "Love it",
    "How did you make such incredible work?!",
    "This is tooo gooooodd",
    "Instant Classic",
    "Overly thought out! Leading the way!"
  ]
#   track_names.each do |track|
#     Track.create!({
#       title: "#{track}", 
#       uploader_id: demo_user.id, 
#       description: "testing", 
#       audio: File.new(Rails.root.join('app','assets','tracks',"#{track}"))
#     })
#   end
7.times do |t|
Track.create!({
  title: "#{track_names[t][0..-5]}",
  uploader_id: User.find_by(email: uploadernames[t]).id, 
  description: "testing", 
  audio: File.new(Rails.root.join('app','assets','tracks',"#{track_names[t]}")),
  image: File.new(Rails.root.join('app','assets','trackimages',"#{track_pics[t]}")),
})

end 

trackids = track_names.map do |tname|
  Track.find_by(title: tname[0..-5]).id
end 

78.times do |t| 
  Comment.create!({
    body: comments.sample,
    user_id: uploaderids.sample,
    track_id: trackids.sample 
  })
end 


  # 10.times do |t|
  #   Track.create!({
  #     title: "#{track_names[0]} #{t}", 
  #     uploader_id: demo_user.id, 
  #     description: "testing", 
  #     audio: File.new(Rails.root.join('app','assets','tracks',"#{track_names[0]}"))
  #   })
  # end

end
