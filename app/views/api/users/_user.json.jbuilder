json.extract! user, :id, :email, :image
json.likes user.liked_track_ids 
json.tracks user.tracks 