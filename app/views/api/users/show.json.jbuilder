json.partial! 'api/users/user', user: @user
if @user.photo.attached?
  json.photo_url url_for(@user.photo)
end
