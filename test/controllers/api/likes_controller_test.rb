require 'test_helper'

class Api::LikesControllerTest < ActionDispatch::IntegrationTest
  test "should get create" do
    get api_likes_create_url
    assert_response :success
  end

  test "should get destroy" do
    get api_likes_destroy_url
    assert_response :success
  end

end
