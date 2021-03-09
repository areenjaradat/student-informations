`use strict`


let informations=[];
let tbodytTable=document.getElementById('bodyOfTable');

let btnId=document.getElementById('formId');
btnId.addEventListener("submit",handleSubmit);

let count=0;
let total=0;
let container=document.getElementById('container');

function StudentInformations(studentemail,studentmobilenumber,tuition){
    this.studentemail=studentemail;
    this.studentmobilenumber=studentmobilenumber;
    this.tuition=tuition;
    this.id=0;
    this.age=0;
    this.name=""
    
informations.push(this);
}
StudentInformations.prototype.getTheId=function(){
     count++;
     this.id=count;
}

StudentInformations.prototype.getTheName=function(){
    let arrayOFemail=this.studentemail.split("@");
    this.name=arrayOFemail[0];
};

StudentInformations.prototype.generarteRndomAge=function(){
    this.age= Math.floor(Math.random()*(24-18+1)+18);
};
StudentInformations.prototype.createTheTable=function(){
let trEl=document.createElement('tr');
tbodytTable.appendChild(trEl);

let tdEl=document.createElement('td');
trEl.appendChild(tdEl);
tdEl.textContent=this.id;

let tdEl2=document.createElement('td');
trEl.appendChild(tdEl2);
tdEl2.textContent=this.name;

let tdEl3=document.createElement('td');
trEl.appendChild(tdEl3);
tdEl3.textContent=this.studentemail;

let tdEl4=document.createElement('td');
trEl.appendChild(tdEl4);
tdEl4.textContent=this.studentmobilenumber;

let tdEl5=document.createElement('td');
trEl.appendChild(tdEl5);
tdEl5.textContent=this.age;

let tdEl6=document.createElement('td');
trEl.appendChild(tdEl6);
tdEl6.textContent=this.tuition;


};
paragaraphEl=document.createElement('p');
container.appendChild(paragaraphEl);
paragaraphEl.id="paragrapgId"
function createparagraphTotal(){
   
    paragaraphEl.textContent=`Total: ${total}`
}

function handleSubmit(event){
    paragaraphEl.textContent=``

    event.preventDefault();

    let email=event.target.studentemail.value;
    let mobilenumber=parseInt(event.target.studentmobilenumber.value) ;
    let fee=parseInt(event.target.tuition.value);
    
    // let age=generarteRndomAge();
    // console.log(email);
    // console.log(mobilenumber);
    // console.log(fee);
    // console.log(name);
    // console.log(age);
    let newStudent= new StudentInformations(email,mobilenumber,fee);
    total+=fee;
    newStudent.getTheId();
    newStudent.getTheName();
    newStudent.generarteRndomAge();
    newStudent.createTheTable();

    createparagraphTotal();

    setToLocalStorage();


}



function setToLocalStorage(){
    let objects=JSON.stringify(informations);
    localStorage.setItem("informationStudents",objects);

    let totals=JSON.stringify(total);
    localStorage.setItem("total",totals);
}

function getFormLocalStorage(){

    let objects=localStorage.getItem("informationStudents");
    let arrayOfobjects=JSON.parse(objects);

    if(arrayOfobjects){
        informations=arrayOfobjects;
    }


    let totals=localStorage.getItem("total");
    let objecttotal=JSON.parse(totals);
    if(objecttotal){totals=objects}

    createTheTable()
}
getFormLocalStorage()
function createTheTable(){
    for(let i=0;i<informations.length;i++)
    {
    let trEl=document.createElement('tr');
    tbodytTable.appendChild(trEl);
    
    let tdEl=document.createElement('td');
    trEl.appendChild(tdEl);
    tdEl.textContent=informations[i].id;
    
    let tdEl2=document.createElement('td');
    trEl.appendChild(tdEl2);
    tdEl2.textContent=informations[i].name;
    
    let tdEl3=document.createElement('td');
    trEl.appendChild(tdEl3);
    tdEl3.textContent=informations[i].studentemail;
    
    let tdEl4=document.createElement('td');
    trEl.appendChild(tdEl4);
    tdEl4.textContent=informations[i].studentmobilenumber;
    
    let tdEl5=document.createElement('td');
    trEl.appendChild(tdEl5);
    tdEl5.textContent=informations[i].age;
    
    let tdEl6=document.createElement('td');
    trEl.appendChild(tdEl6);
    tdEl6.textContent=informations[i].tuition;

    createparagraphTotal();
}
    }