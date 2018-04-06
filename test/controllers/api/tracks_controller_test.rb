require 'test_helper'

class Api::TracksControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_tracks_index_url
    assert_response :success
  end

  test "should get create" do
    get api_tracks_create_url
    assert_response :success
  end

  test "should get show" do
    get api_tracks_show_url
    assert_response :success
  end

  test "should get edit" do
    get api_tracks_edit_url
    assert_response :success
  end

  test "should get update" do
    get api_tracks_update_url
    assert_response :success
  end

  test "should get destroy" do
    get api_tracks_destroy_url
    assert_response :success
  end

end
