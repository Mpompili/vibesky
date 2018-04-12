json.track do
  json.id @track.id
  json.title @track.title
  json.description @track.description
  json.uploaderId @track.user.id
  json.uploader @track.user.email
  json.imageUrl asset_path(@track.image.url)
  json.audioUrl asset_path(@track.audio.url)
  json.commentIds @track.comments.pluck(:id)
  json.liked @track.likes.pluck(:user_id).include?(current_user.id)
  likeid = @track.likes.select{|like| like.user_id == current_user.id}
  likeid.length == 0 ? likeid = -1 : likeid = likeid[0].id
  json.likeId likeid
end

json.comments do
  @track.comments.each do |comment|
    json.set! comment.id do 
      json.id comment.id 
      json.body comment.body
      json.user comment.user.email
    end 
  end
end

