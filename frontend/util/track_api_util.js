export const fetchTracks = () => (
  $.ajax({
    method: 'GET',
    url: 'api/tracks',
  })
);

export const fetchTrack = id => (
  $.ajax({
    method: 'GET',
    url: `api/tracks/${id}`
  })
);

export const createTrack = formData => (
  $.ajax({
    method: 'POST',
    url: 'api/tracks',
    processData: false,
    contentType: false,
    dataType: 'json',
    data: formData,
  })
);

export const updateTrack = track => (
  $.ajax({
    method: 'PATCH',
    url: `api/tracks/${track.id}`,
    data: { track }
  })
);

export const deleteTrack = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`
  })
);
