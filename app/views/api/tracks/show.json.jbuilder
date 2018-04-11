json.track do
  json.id @track.id
  json.title @track.title
  json.description @track.description
  json.uploaderId @track.user.id
  json.uploader @track.user.email
  json.imageUrl asset_path(@track.image.url)
  json.audioUrl asset_path(@track.audio.url)
  json.commentIds @track.comments.pluck(:id)
end

json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do 
      json.extract! comment, :id, :body
    end 
  end
end
