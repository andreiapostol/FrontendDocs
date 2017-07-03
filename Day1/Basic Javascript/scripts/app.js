var employeesList = [
    {
        firstName: 'John',
        lastName: 'King',
        phone: '0123456789',
        salary: 5000,
        euroValue: undefined

    },
    {
        firstName: 'Steven',
        lastName: 'Gerard',
        phone: '9876543210',
        salary: 6000,
        euroValue: undefined
    },
    {
        firstName: 'Diana',
        lastName: 'Ross',
        phone: '9876543210',
        salary: 7000,
        euroValue: undefined
    },
    {
        firstName: 'Mike',
        lastName: 'Bob',
        phone: '9876543210',
        salary: 4500,
        euroValue: undefined
    },
    {
        firstName: 'Emily',
        lastName: 'Hudson',
        phone: '9876543210',
        salary: 6700,
        euroValue: undefined
    }
];

// var sample = new Array();
//
// function aparitii(name){
//     this.name = 1;
// }


function showList() {
    var myTable = '<table class = "table"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary </th><th> Converted salary</th><th>  1  </th><th>  2  </th></tr>';

    for (var i in employeesList){
        myTable += '<tr><td>' + employeesList[i].firstName + '</td><td>' + employeesList[i].lastName + '</td><td>'+
            employeesList[i].phone + '</td><td>' + employeesList[i].salary +
            '</td><td>'+ employeesList[i].euroValue + '</td><td>'+ '<button onclick = visualize('+i+')> Visualize </button>' +
            '</td><td>'+ '<button onclick= deleteRow('+ i + ')> Delete </button>' +'</td></tr>';

    }
    myTable += '<tr><td id = "toShowPrenumeDes">' + '</td><td id = "toShowNume">' +
        '</td><td id = "toShowNumarAparitii">' + '</td><td id = "toShowAverageSalary">' + '</td></tr>';


    myTable += '</table>';

    var container = document.getElementById('listcontainer');
    container.innerHTML = myTable;
    prenumeDes();
    numeUnice();
    numarareCifre();
    averageSalary();
}

function showSum(){
    var sumOfSalaries = 0;
    for (var i in employeesList) {
        sumOfSalaries += parseInt(employeesList[i].salary);
    }
    var container = document.getElementById('toShowSum');
    container.innerHTML = sumOfSalaries;
}

var Employee = function(firstName, lastName, phone, salary){
    this.firstName = firstName;
    this.lastName = lastName;
    this.phone = phone;
    this.salary = salary;
}

function addEmployee(){
    var firstName = document.getElementById("firstName").value;
    var lastName = document.getElementById("lastName").value;
    var phone = document.getElementById("phone").value;
    var salary = document.getElementById("salary").value;
    employeesList.push(new Employee(firstName, lastName, phone, salary));
    prenumeDes();

}

function deleteLastEmployee(){
    employeesList.splice(employeesList.length-1,employeesList.length-1);
}

function convertSalary(){
    for (var i in employeesList){
        employeesList[i].euroValue = employeesList[i].salary*4.5;
    }
    showList();

}

function visualize(i){
    alert(employeesList[i].firstName + " " + employeesList[i].lastName + " " + employeesList[i].salary);
}

function deleteRow(i){
    // employeesList.splice(i, i);
    delete employeesList[i];
    showList();
}

function prenumeDes(){
    var aparitii = new Array();
    for (var i in employeesList) aparitii[i] = 1;
    for (var i in employeesList){
        for (var j in employeesList){

            if ((i != j) && (employeesList[i].firstName == employeesList[j].firstName)) {
                aparitii[i]++;

            }
        }
    }

    var index = 0;
    // console.log(aparitii[0]);
    for (var i in aparitii) if (aparitii[i] > aparitii[index]) {
        // console.log(employeesList[i].firstName+ " -> " + aparitii[i]);
        index = i;
    }
    // console.log(employeesList[index].firstName+ " (answer) -> " +  aparitii[index]);
    var container = document.getElementById('toShowPrenumeDes');
    container.innerHTML = employeesList[index].firstName;

}

function numeUnice(){
    var aparitii = new Array();
    for (var i in employeesList) aparitii[i] = 1;
    for (var i in employeesList){
        for (var j in employeesList){

            if ((i != j) && (employeesList[i].firstName == employeesList[j].firstName)) {
                aparitii[i]++;

            }
        }
    }
    var numar = 0;
    for (var i in aparitii) if (aparitii[i] == 1) numar++;
    var container = document.getElementById('toShowNume');
    container.innerHTML = numar;
}

function numarareCifre(){
    var numarAparitii = new Array();
    for (i = 0; i < 10; i++) numarAparitii[i] = 0;
    for (var i in employeesList){
        var numarCurent = employeesList[i].phone

        for (j = 0; j < numarCurent.length; j++)
            numarAparitii[numarCurent[j]]++;

    }

    var deAfisat = "";
    for (i = 0; i < 5; i++) {
        var max = 0;
        for (j = 0; j < 10; j++) {
            if (numarAparitii[j] > numarAparitii[max]) max = j;
        }
        deAfisat += max + ",";
        numarAparitii[max] = -1;
    }




    var container = document.getElementById('toShowNumarAparitii');
    container.innerHTML = deAfisat;


}

function averageSalary() {
    var sum = 0;
    for (var i in employeesList) sum += parseInt(employeesList[i].salary);

    var average = sum / employeesList.length;

    var container = document.getElementById('toShowAverageSalary');
    container.innerHTML = average;


}

function case1(){
    employeesList.sort(function(a, b){
        if(a.firstName < b.firstName) return -1;
        if(a.firstName > b.firstName) return 1;
        return 0;
    })
}

function case2(){
    employeesList.sort(function(a, b){
        if(a.lastName < b.lastName) return -1;
        if(a.lastName > b.lastName) return 1;
        return 0;
    })
}

function case3(){
    employeesList.sort(function(a, b){
        if(a.phone < b.phone) return -1;
        if(a.phone > b.phone) return 1;
        return 0;
    })
}

function case4(){
    employeesList.sort(function(a, b){
        if(a.salary < b.salary) return -1;
        if(a.salary > b.salary) return 1;
        return 0;
    })
}

function selectCase(){
    var value = document.getElementById("command").value;
    console.log(value);
    switch (value){
        case '1' : case1(); break;
        case '2' : case2();break;
        case '3' : case3();break;
        case '4' : case4();break;
    }
    showList();
}

function filtrareTabel() {
    var index = new Array();

    var value = document.getElementById("word").value;
     console.log(value);
    for(var i in employeesList) {
        if(employeesList[i].lastName == "Bob" )
            console.log("daaa");
        if(value == "Bob")
            console.log("nuu");
        if((employeesList.lastName == value)) {
            console.log("whattt");
            index.push(i);
        }
    }
    for(var i in index){
        console.log(index[i]);
    }

    var myTable = '<table class = "table"><tr><th>First Name</th><th>Last Name</th><th>Phone</th><th>Salary </th><th> Converted salary</th><th>  1  </th><th>  2  </th></tr>';

    for (var i in index){
        myTable += '<tr><td>' + employeesList[index[i]].firstName + '</td><td>' + employeesList[index[i]].lastName + '</td><td>'+
            employeesList[index[i]].phone + '</td><td>' + employeesList[index[i]].salary +
            '</td><td>'+ employeesList[index[i]].euroValue + '</td><td>'+ '<button onclick = visualize('+index[i]+')> Visualize </button>' +
            '</td><td>'+ '<button onclick= deleteRow('+ index[i] + ')> Delete </button>' +'</td></tr>';

    }

    myTable += '</table>';
    var container = document.getElementById('tabel2');
    container.innerHTML = myTable;
}
