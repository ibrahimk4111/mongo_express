const tableBody = document.querySelector(".tableBody");

// const url = "https://mongoose-express-c5hu.onrender.com/";
const url = "http://127.0.0.1:8800/";

const fetchData = async (urlPath, fn) => {
  try {
    const response = await fetch(urlPath);
    const data = await response.json();
    console.log( data )
    fn(data);
  } catch (error) {
    console.log(error.message);
  }
};

const tableRows = (datas) => {
  let htmlData = "";
  datas.map((data, index) => {
    const tableRow = `
            <tr>
              <th scope="col">${index + 1}</th>
              <td class=" text-nowrap ">${data.name}</td>
              <td>${data.email}</td>
              <td>${data.age}</td>
              <td>
                <div class="d-flex justify-content-center align-items-center gap-3">
                  <img src="./uploads/${data.file}" alt="${data.file}" width="auto" height="100">
                <div/>
              </td>
              <td>
                <div class="d-flex justify-content-center align-items-center gap-3">
                  <a href="#" target="_blank" ><i class="fa-regular fa-pen-to-square"></i></a> 
                  <a href="#" onclick="deleteBtn('${data._id}')"><i class="fa-solid fa-trash-can"></i></a>
                </div>
              </td>
            </tr>
          `;
    htmlData += tableRow;
  });
  tableBody.innerHTML = htmlData;
};

fetchData(url + "users", tableRows);

const deleteBtn = (id) => {

  fetch(url + "users/" + id, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((data) => console.log(data));

  window.location.reload();
  console.log("deleted ID :", id);
};
