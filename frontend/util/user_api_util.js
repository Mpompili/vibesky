export const fetchUser = id => (
  $.ajax({
    method: 'GET',
    url: `api/users/${id}`
  })
);

export const updateUser = (user, id) => {
  debugger; 
return (
   $.ajax({
    method: 'PATCH',
    url: `api/users/${id}`,
    processData: false,
    contentType: false,
    dataType: 'json',
    data: user
  })); 
};


