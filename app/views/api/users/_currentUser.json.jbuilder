# json.extract! user, :id, :email, :image
json.id user.id
json.email user.email 
json.imageUrl asset_path(user.image.url)
json.likes user.liked_track_ids 
