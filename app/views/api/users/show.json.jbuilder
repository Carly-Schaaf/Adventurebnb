json.partial! 'api/users/user', user: @user
json.photo_url url_for(@user.photo)
