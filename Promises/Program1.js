const GITHUB_API = "https://api.github.com/users/Shweta9-d";

//fetch will return us promise object
const user = fetch(GITHUB_API);

console.log(user);
/**
 * output :
 * Promise {<pending>}
[[Prototype]]: Promise
[[PromiseState]]:"fulfilled"
[[PromiseResult]]: Response
 */

//attaching callback function to promise
user.then(function (data) {
  console.log(data);
});
