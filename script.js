    let dataArr = localStorage.getItem("studentData") ? JSON.parse(localStorage.getItem("studentData")) : [] ; 


    let studentName = document.getElementById("student-name");
    let id = document.getElementById("student-id");
    let email=document.getElementById("email-id");
    let contact =document.getElementById("contact-no");
    let submitBtn = document.getElementById("submit-btn");

    submitBtn.addEventListener("click",()=>{
        let data = {
            name:studentName.value,
            id:id.value,
            email:email.value,
            contact:contact.value
        }
        if(studentName.value=="" || id.value=="" || email.value=="" || contact.value=="")
        {
            alert("Please fill all the fields");
            return;
        }
        dataArr.push(data);
        localStorage.setItem("studentData",JSON.stringify(dataArr));
    })
    
    render()

    function render()
    {
        let records = document.getElementById("records");
        records.innerHTML=``
        records.innerHTML = dataArr.map((data) => {
            return `<tr>
            <td>${data.name}</td>
            <td>${data.id}</td>
            <td>${data.email}</td>
            <td>${data.contact}</td>
            <td>
            <button class="delete" onClick="deleteHandler(${data.id})">Delete</button>
            <button class="edit" onClick="editHandler(${data.id})">Edit</button>
            </td>
            </tr>`;
        }).join('');
    }


    function deleteHandler(id){
        dataArr = dataArr.filter((data) => data.id != id);
        localStorage.setItem("studentData",JSON.stringify(dataArr));
        render();
    }

    function editHandler(id){
        let data = dataArr.find((data) => data.id == id);
        studentName.value = data.name;
        id.value = data.id;
        email.value = data.email;
        contact.value = data.contact;
        dataArr = dataArr.filter((data) => data.id != id);
        localStorage.setItem("studentData",JSON.stringify(dataArr));
        render();
    }