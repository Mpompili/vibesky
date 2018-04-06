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

export const createTrack = track => (
  $.ajax({
    method: 'POST',
    url: 'api/tracks',
    data: { track }
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
