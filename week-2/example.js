const url = "https://apis.ccbp.in/jokes/random";

fetch(url)
  .then((response) => {
    return response.json();
  })
  .then((jsonData) => {
    //statement-1
    console.log(jsonData); // Object{ value:"The computer tired when it got home because it had a hard drive" }
  });

//statement-2
console.log("fetching done"); // fetching done