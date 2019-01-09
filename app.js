// const http = new easyHTTP();

// // GET posts
// http.get('https://jsonplaceholder.typicode.com/posts', function (err, posts) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(posts);
//   }
// });

// // // GET Single post
// // http.get('https://jsonplaceholder.typicode.com/posts/1', function (err, post) {
// //   if (err) {
// //     console.log(err);
// //   } else {
// //     console.log(post);
// //   }
// // });

// // Create data
// const data = {
//   title: 'Custom Post',
//   body: 'This is a custom post'
// };

// // Create post
// http.post('https://jsonplaceholder.typicode.com/posts', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // Update post
// http.put('https://jsonplaceholder.typicode.com/posts/1', data, function (err, post) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(post);
//   }
// });

// // Delete post
// http.delete('https://jsonplaceholder.typicode.com/posts/1', function (err, response) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(response);
//   }
// });

// Modern Way
const http = new CustomHTTP;

// Get users
http.get('https://jsonplaceholder.typicode.com/users')
  .then(data => console.log(data))
  .catch(err => console.log(err));

// User data
const data = {
  name: 'John Doe',
  username: 'johndoe',
  email: 'jdoe@gmail.com'
}

// Create user
http.post('https://jsonplaceholder.typicode.com/users', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Update user
http.put('https://jsonplaceholder.typicode.com/users/2', data)
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Delete user
http.delete('https://jsonplaceholder.typicode.com/users/2')
  .then(data => console.log(data))
  .catch(err => console.log(err));