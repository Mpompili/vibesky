# json.extract! user, :id, :email, :image 
json.id user.id
json.email user.email 
json.imageUrl asset_path(user.image.url)
json.username user.username
json.location user.location 
json.about user.about 
json.likes user.liked_track_ids 
json.tracks user.tracks 