import db from "@/utils/db.json";

async function fetchData() {
  return db.news;
}

export default fetchData;

// in case you want to fetch data from an API, you can use the following code snippet:

// async function fetchData() {
//     const response = await fetch("http://localhost:8000/news");
//     const data = await response.json();
//     return data
//   }

//   export default fetchData;
