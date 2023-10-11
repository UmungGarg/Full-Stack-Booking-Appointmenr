function submitdetails(event){ 
    event.preventDefault() 
    const expenses = event.target.expenses.value 
    const description = event.target.description.value 
    const catalogue = event.target.catalogue.value 

    const obj = { 
        expenses, 
        description, 
        catalogue 
    }
    axios.post("https://crudcrud.com/api/bd835745bc2e45aa8b9e83640c08e212/appointmentData", obj)
    .then((response)=> {
        showuseronscreen (response.data)
        console.log(response)
    })
    .catch((err)=> {
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong"
        console.log(err)
    })  



  localStorage.setItem(obj.description,JSON.stringify(obj)) 
    showuseronscreen (obj) 

} 

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/bd835745bc2e45aa8b9e83640c08e212/appointmentData")
    .then((response)=>{
        console.log(response)

        for(var i=0; i<response.data.length; i++){
            showuseronscreen(response.data[i])
        }
    })
    .catch((error) => {
        console.log(error)
    })
} )


function deleteUser(userId){
    axios.delete("https://crudcrud.com/api/bd835745bc2e45aa8b9e83640c08e212/appointmentData/${userId}")
    .then((response) => {
        removeUserFromScreen(userId)
    })
    .catch((err) =>{
        console.log(err)
    } )
}

function editUser(){
    axios.put("https://crudcrud.com/api/bd835745bc2e45aa8b9e83640c08e212/appointmentData", obj)
    .then((response)=> {
        showuseronscreen (response.data)
        console.log(response)
    })
    .catch((err)=> {
        document.body.innerHTML = document.body.innerHTML + "<h4> Something went wrong"
        console.log(err)
    })  
}


function showuseronscreen (obj){ 
    const parentelem = document.getElementById("listofitems") 
    const childelem = document.createElement("li") 
    childelem.textContent = obj.expenses + ' - ' + obj.description+' - ' + obj.catalogue 

    const deletebutton = document.createElement("input") 
    deletebutton.type = "button" 
    deletebutton.value = "Delete Input" 

    deletebutton.onclick = () => { 
        localStorage.removeItem(obj.description) 
        parentelem.removeChild(childelem) 
    } 


    const editbutton = document.createElement("input") 
    editbutton.type ="button" 
    editbutton.value = "Edit Input" 

    editbutton.onclick = () => { 
        localStorage.removeItem(obj.description) 
        parentelem.removeChild(childelem) 
        document.getElementById("expenses").value = obj.expenses 
        document.getElementById("description").value = obj.description 
        document.getElementById("catalogue").value = obj.catalogue 

        editUser()
    } 
    childelem.appendChild(deletebutton) 
    childelem.appendChild(editbutton) 

    parentelem.appendChild(childelem) 
}