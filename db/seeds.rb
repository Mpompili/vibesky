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
    {email: 'LordeRandy', password: 'password'},
    {email: 'Muse', password: 'password'},
    {email: 'GeorgeHarison', password: 'password'},
    {email: 'MGMT', password: 'password'},
    {email: 'StevieNicks', password: 'password'},
    {email: 'HallandOats', password: 'password'},
    {email: 'demouser', password: 'password'}
  ])


  # Track.create!({title: "Testpiece3", description: "asdfasdf", uploader_id: User.first.id, image_file_name: "Actionscene_edit1-1.png", image_content_type: "image/png", image_file_size: 3972643, audio_file_name: "SampleSynth.mp3", audio_content_type: "audio/mp3", audio_file_size: 1103329})
  # "SampleSynth.mp3"

  uploadernames = [
    "Diplo",
    "LordeRandy",
    "Muse",
    "GeorgeHarison",
    "MGMT",
    "StevieNicks",
    "HallandOats",
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
    "Fresh work you have here.",
    "Such killer.",
    "Just fresh, friend.",
    "Ivory. You just won the internet!",
    "Incredibly exquisite!",
    "Such music, many fold, so neat",
    "I wonder what would have happened if I made this",
    "Nice use of flow in this idea, friend.",
    "My 52 year old son rates this concept very simple :)",
    "This beat has navigated right into my heart.",
    "Fresh. So sleek.",
    "I adore your thoughts!",
    "Classic album colour m8",
    "I want to learn this kind of layout! Teach me.",
    "That's incredible and sexy dude",
    "This track blew my mind.",
    "This is bold work :)",
    "Mission accomplished. It's incredible, friend.",
    "I think I'm crying. It's that minimal.",
    "Fabulous. Adore the use of music and sound!",
    "Designgasmed all over this!",
    "Wow love it!",
    "This is meh",
    "On a scale from nope to dope, this track is dope",
    "How many animals did you sacrifice to make such incredible work?",
    "This isn't JambaJuice...",
    "Extra neat notification!!",
    "Overly thought out! Leading the way mate."
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

30.times do |t| 
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
