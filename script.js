const workers = [
  { id: 1, name: 'Alice Dupont', role: 'Manager', city: 'Paris', salary: 60000, active: true, hireDate: '2023-01-15' },
  { id: 2, name: 'Bob Martin', role: 'Developer', city: 'Lyon', salary: 55000, active: true, hireDate: '2022-06-10' },
  { id: 3, name: 'Claire Bernard', role: 'Designer', city: 'Paris', salary: 48000, active: false, hireDate: '2024-02-01' },
  { id: 4, name: 'David Leroy', role: 'Developer', city: 'Lyon', salary: 52000, active: true, hireDate: '2021-08-20' },
  { id: 5, name: 'Eve Dubois', role: 'Manager', city: 'Marseille', salary: 62000, active: true, hireDate: '2020-03-05' },
]

const all=document.querySelector(".all");


// Display the total number of employees in a <p> tag

const div1=document.createElement("div");


let total=0;

workers.forEach(worker=>{
  total=workers.length;
})

div1.innerHTML=`
<p>TOTAL:${total} </p>
`
all.appendChild(div1);


//Display all employee names in a simple <ul>
const div2=document.createElement("div");
const ul=document.createElement("ul");


workers.forEach(worker=>{
    const li=document.createElement("li");
    li.textContent= worker.name
  ul.appendChild(li);
})


div2.appendChild(ul)
all.appendChild(div2);

// Display name and role of employee ID 3
const div3=document.createElement("div");
let eventId=3;

workers.forEach(worker=>{
if(worker.id==eventId){
    div3.innerHTML=`Nom:${worker.name}| Role:${worker.role}`
}
})
all.appendChild(div3);

// Show "Active" or "Inactive" for each employee
const div4=document.createElement("div");
workers.forEach(worker => {
 
  const span = document.createElement("span");
    if(worker.active){
    
        span.textContent = "Active";
        span.style.color = "green"
        
     
    }else{
        span.textContent ="Inactive"
       
        span.style.color = "red"
    }
    
  div4.innerHTML += `${worker.name}: `;
  div4.appendChild(span);
  div4.innerHTML += '<br>'


});

all.appendChild(div4);


// Button that shows employee role in an alert
const div5=document.createElement("div");
const btn=document.createElement("button");
btn.id="btn";
btn.textContent="Submit"

btn.addEventListener("click",()=>{
    let eventId=4;
    workers.forEach(worker=>{
        if(worker.id==eventId){
            const role=worker.role;
            console.log(role);
            
            alert("Employee role is:"+role)
        }
    })
})

div5.appendChild(btn);
all.appendChild(div5);

// Display text input value in real-time
const div6=document.createElement("div");
const input=document.createElement("input");
const p=document.createElement("p");
p.textContent="";
input.addEventListener("input",()=>{
    p.textContent=input.value;
    console.log(input.textContent);
    
})

div6.appendChild(input);
div6.appendChild(p);
all.appendChild(div6);

// Click employees to add .selected CSS class

const div7=document.createElement("div");
const ulDiv7= document.createElement("ul");


workers.forEach(person=>{
    const li=document.createElement("li");
    li.textContent=person.name;
    li.style.border=" 1px solid black"
    li.style.padding="2px 5px"
    li.style.listStyle="none";
    li.style.cursor="pointer";
    li.style.backgroundColor = "white"
    li.style.width="200px"
    


    li.addEventListener("click",()=>{
        
        
        if (li.style.backgroundColor === "yellow") {
            li.style.backgroundColor = "white";
        } else {
            li.style.backgroundColor = "yellow";
        }
    
        
    })
    ulDiv7.appendChild(li);
})


div7.appendChild(ulDiv7);
all.appendChild(div7);


// Button that toggles div color and size
// const div8=document.createElement("div");
// const blueDiv=document.createElement("div");
// const butn=document.createElement("button");


// blueDiv.className="challDiv";

// butn.textContent="Toggle"

// butn.addEventListener("click",()=>{
//   blueDiv.classList.toggle("active");
//   console.log("aaaaaaaaa");
  
// });

// div8.appendChild(blueDiv);
// div8.appendChild(butn);
// all.appendChild(div8);

// Display only Paris-based employees
// function employeeCity(City){
//     return workers.filter(emp=>{
//         if(emp.city===City){      
//         }
//     });
    
// }

// const div9=document.createElement("div");
// all.appendChild(div9);


// const parisEmployees=employeeCity("Paris");
// if(parisEmployees.length>0){
//     const listHtml = parisEmployees.map(emp => `<li>${emp.name}</li>`).join('');
// }



// Update title after 2 seconds on page load
const div10=document.createElement("div");
const buttn=document.createElement("button");

div10.innerHTML=`<h3>Hello!</h3>`;
buttn.textContent="Change title"

buttn.addEventListener("click",()=>{
    setTimeout(()=>{
        div10.innerHTML=`<h3>BYE!</h3>`
    },2000);
})

div10.appendChild(buttn);
all.appendChild(div10);

// Create array of names and salaries with map()
const div11=document.createElement("div");

const newArr=workers.map(emp=>{
    return {nom:emp.name,
        salary:emp.salary
}
})
const formattedResult = JSON.stringify(newArr, null, 2);
div11.innerHTML = `<pre>${formattedResult}</pre>`;
all.appendChild(div11);

// Filter employees with salary > 50000
const div12 = document.createElement("div");

const highSalary=workers.filter(worker=>{
    return worker.salary>50000
}).map(worker => {
        
        return `${worker.name} - $${worker.salary}`;
});

div12.innerHTML+=`${highSalary.join("<br>")}`
all.appendChild(div12);

// Get index of clicked employee in array
// const div13 = document.createElement("div");
// const liste=document.createElement("ul")
// const li=document.createElement("li");

// workers.forEach(worker=>{
//     li.dataset.index = index; 
//     li.textContent = `${worker.name} (cliquer pour voir l'index)`;

//     li.addEventListener("click",(e)=>{
//         const clickIndex=e.target.dataset.index;
//         const nom=worker.name

//         alert('l index de ${nom} est: ${clickIndex}');
//     });
//     ul.appendChild(li);
// })


// div13.appendChild(ul);
// all.appendChild(div13);

// Sum all salaries using reduce()
// const div14 = document.createElement("div");

// const totalSalary = workers.reduce((acc, worker) => {l
//     return acc + worker.salary}, 0);

//     div14.innerHTML=`<p> Total Salary: $ ${totalSalary} </p>`
// all.appendChild(div14);


// Sort employees by name (A-Z) with button
const div15= document.createElement("div");
const ulSorted=document.createElement("ul")

const bton=document.createElement("button");
bton.textContent="tri A-Z des noms"

bton.addEventListener("click", () => {
    const sortedWorkers = [...workers];

    sortedWorkers.sort((a, b) => {
        return a.name.localeCompare(b.name);
    });

    ulSorted.innerHTML = ''; 

    sortedWorkers.forEach(worker => {
        const li = document.createElement("li");
        li.textContent = worker.name;
        ulSorted.appendChild(li);
    });
});


div15.appendChild(ulSorted);
div15.appendChild(bton);
all.appendChild(div15);



// Show all properties of first employee
const div16 = document.createElement("div");
const firstEmployee = workers[0];
const keys= Object.keys(firstEmployee);
const ulKeys = document.createElement("ul");

keys.forEach(key => {
    const li = document.createElement("li");
    li.textContent = key;
    ulKeys.appendChild(li);
});

div16.innerHTML = "Fist employee keys:";

div16.appendChild(ulKeys);
all.appendChild(div16);

// Create HTML table from employee object
// const div17 = document.createElement("div");
// const table = document.createElement("table");

// Object.entries(firstEmployee).forEach(([key, value]) => {
// table.innerHTML+=`<table>
// <tbody>
// <tr> 
// <td>${Object.key}</td>
// <td>${Object.value}</td>
// </tr>
// `
// });
// table.innerHTML+=`</tbody> </table>`

// div17.appendChild(table);
// all.appendChild(div17);

// Delete Employee Button using splice()
const div19 = document.createElement("div");
div19.innerHTML = "<h4>Supprimer un Employé:</h4>";

const ulDelete = document.createElement("ul");


// Fonction pour (re)générer la liste des employés avec boutons de suppression
function renderDeleteList() {
    ulDelete.innerHTML = ''; 

    // affichage du nom et son id
    workers.forEach((worker, index) => {
        const li = document.createElement("li");
        const workerInfo = document.createElement("span");
        workerInfo.textContent = `${worker.name} (ID: ${worker.id})`;
        li.appendChild(workerInfo);

        //  bouton de supp
        const deleteBtn = document.createElement("button");
        deleteBtn.textContent = " Supprimer";
        deleteBtn.style.cursor = "pointer";
        
        deleteBtn.dataset.employeeIndex = index;

        deleteBtn.addEventListener('click', (e) => {
            // Récupérer l'index stocké
            const indexToDelete = parseInt(e.target.dataset.employeeIndex);
            const deletedWorker = workers.splice(indexToDelete, 1);

            renderDeleteList();
        });

        li.appendChild(deleteBtn);
        ulDelete.appendChild(li);
    });
}


renderDeleteList();
div19.appendChild(ulDelete);
all.appendChild(div19);


// Clone workers array using spread operator
const div20 = document.createElement("div");

const clone=[...workers];
const cloneNames=clone.map(w=>w.name);
cloneNames.forEach(name => {
  const p = document.createElement("p");
  p.textContent = name;
  div20.appendChild(p);
});


all.appendChild(div20);

// Map all salaries with 10% increase
const div21 = document.createElement("div");
const increment=workers.map(w=>{
   return w.salary * 1.10;
})
workers.forEach((worker,i)=>{
    div21.innerHTML+=`<p> ${worker.name} : $${increment[i]}</p>`
})

all.appendChild(div21);

// Use reduce() to group employees by city
const div22 = document.createElement("div");

const cityGrp=workers.reduce((acc,worker)=>{
    if (!acc[worker.city]) {          //checking if the city exist
        acc[worker.city] = [];        // creation de tableau pr cette ville
    }
     acc[worker.city].push(worker.name)
     return acc
},{})

for (const city in cityGrp) {
    div22.innerHTML += `
        <h5>${city}</h5>
        <p>${cityGrp[city].join(", ")}</p>
    `;
}

all.appendChild(div22);

// Show warning if any employee is inactive
const div23 = document.createElement("div");

const warn=workers.some(w=>{
    if(!w.active){
        div23.innerHTML=`<p> Warning: Some employees are inactive!</p><br>`
    }
})

all.appendChild(div23);


// Verify if all employees earn > 30000
const div24 = document.createElement("div");
const earning=workers.every(w=>
    w.salary>30000
)

if(earning){
    div24.innerHTML=`<p> All employees earn more than $30,000</p><br>`

}

all.appendChild(div24);


// Create deep clone with structuredClone()
const div25 = document.createElement("div");

const clonedWorker = structuredClone(workers[0]);
clonedWorker.salary = 75000;

div25.innerHTML=`
<p>Deep cloned & modified: $${clonedWorker.salary} </p>
<p>Original unchanged: $${workers[0].salary}</p>

`
all.appendChild(div25);


// Filter employees by name or role
const div26= document.createElement("div");
const searchBar=document.createElement("input");

// desplaying before the filter 
workers.forEach(worker=>{
    div26.innerHTML += `<p>${worker.name} - ${worker.role}</p>`;
})

searchBar.addEventListener("input",()=>{
    const search=searchBar.value.toLocaleLowerCase();

   const filtering= workers.filter(w=> w.name.toLowerCase().includes(search) || w.role.toLowerCase().includes(search));


   div26.innerHTML = "";
   div26.appendChild(searchBar);  

   // desplaying after the filter
   filtering.forEach(worker=>{
    div26.innerHTML += `<p>${worker.name} - ${worker.role}</p>`;
});
});

div26.appendChild(searchBar);
all.appendChild(div26);


// Select role to filter employees
const div27= document.createElement("div");
const select=document.createElement("select");
const defaultOption = document.createElement("option");

defaultOption.text = "Select role";  
defaultOption.value = "";             
select.add(defaultOption);

const roles=[...new Set(workers.map(w=>w.role))];

roles.forEach(role=>{
    const option = document.createElement("option");
    option.text = role;
    option.value = role;
    select.add(option);

});

workers.forEach(worker => {
    div27.innerHTML += `<p>${worker.name} - ${worker.role}</p>`;
});

select.addEventListener("change", () => {
    const selectedRole = select.value;

    // filtration des employés
    const filtered = selectedRole === "" 
        ? workers 
        : workers.filter(w => w.role === selectedRole);

    div27.innerHTML = "";
    div27.appendChild(select);


    filtered.forEach(worker => {
        div27.innerHTML += `<p>${worker.name} - ${worker.role}</p>`;
    });
});

div27.appendChild(select);
all.appendChild(div27);


// Create full HTML table from workers
const div28 = document.createElement("div");
const table = document.createElement("table");

const thead = document.createElement("thead");
thead.innerHTML = `
  <tr>
    <th>ID</th>
    <th>Name</th>
    <th>Role</th>
    <th>City</th>
    <th>Salary</th>
  </tr>
`;
table.appendChild(thead);

const tbody = document.createElement("tbody");

workers.forEach(worker => {
    const row = document.createElement("tr");
    row.innerHTML = `
      <td>${worker.id}</td>
      <td>${worker.name}</td>
      <td>${worker.role}</td>
      <td>${worker.city}</td>
      <td>$${worker.salary.toLocaleString()}</td>
    `;
    tbody.appendChild(row);
});

table.appendChild(tbody);
div28.appendChild(table);
all.appendChild(div28);


// Click headers to sort table columns
const div30 = document.createElement("div");
const names=workers.map(w=>w.name);

const newHires = [
  { name: 'Frank Hardy' },
  { name: 'Grace Wilson' }
];

const allEmployees = workers.concat(newHires);

div30.innerHTML = `
  <p>Original: ${workers.length} employees</p>
  <p>New hires: ${newHires.length} employees</p>
  <p>Concatenated: ${allEmployees.length} employees</p>
  <br>
`;

allEmployees.forEach(emp => {
    div30.innerHTML += `<p>${emp.name}</p>`;
});

all.appendChild(div30);
