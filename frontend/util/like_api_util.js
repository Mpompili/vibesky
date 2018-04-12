export const createLike = (trackId) => (
    $.ajax({
        url: 'api/likes',
        method: 'POST',
        data: {trackId}
    })
);

export const deleteLike = (likeId) => (
    $.ajax({
        url: `api/likes/${likeId}`,
        method: 'DELETE'
    })
);