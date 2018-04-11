json.id track.id
json.title track.title
json.description track.description
json.uploaderId track.user.id
json.uploader track.user.email
json.imageUrl asset_path(track.image.url)
json.audioUrl asset_path(track.audio.url)
json.commentIds track.comments.pluck(:id)