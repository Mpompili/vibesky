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

export const updateTrack = (track, id) => (
   $.ajax({
    method: 'PATCH',
    url: `api/tracks/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: track
  })
);

export const deleteTrack = id => (
  $.ajax({
    method: 'DELETE',
    url: `api/tracks/${id}`
  })
);


