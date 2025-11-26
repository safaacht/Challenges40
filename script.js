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


