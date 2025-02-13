const response = await fetch("http://localhost:8000/news");
const data = await response.json();
export default data;