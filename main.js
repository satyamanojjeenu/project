function loadjson(file,callback)
 {
  var xhr=new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange=function()
  {
   if(xhr.readyState===4&&xhr.status=="200")
   {
     callback(xhr.responseText);
   }
  };
  xhr.send(null);
 }
 loadjson("data.json",function(text)
{
  var data=JSON.parse(text);
  console.log(data);
  details(data.basic);
  careerinfo(data.career);
  educationdetails(data.education);
  technical(data.Technicalskills);

})
var left = document.querySelector(".leftchild");
function details(det)
{
  var image=document.createElement("img");
  image.src=det.image;
  left.appendChild(image);

  var add=document.createElement("h1");
  add.textContent="Student";
  left.appendChild(add);

  var name=document.createElement("p");
  name.textContent=det.name;
  left.appendChild(name);

  var email=document.createElement("a");
  email.href="mailto:jeenumanu9977@gmail.com";
  email.textContent=det.email;
  left.appendChild(email);

  var number=document.createElement("p");
  number.textContent=det.number;
  left.appendChild(number);

  var add=document.createElement("h1");
  add.textContent="Address";
  left.appendChild(add);

  var hr=document.createElement("hr");
  left.appendChild(hr);

  var address=document.createElement("p");
  address.textContent=det.address;
  left.appendChild(address);
}

var right=document.querySelector(".rightchild");
function careerinfo(career)
{
  var add=document.createElement("h1");
  add.textContent="Career Objectives";
  right.appendChild(add);

  var info=document.createElement("p");
  info.textContent=career.info;
  right.appendChild(info);

  var hr=document.createElement("P");
  hr.textContent=career.hr;
  right.appendChild(hr);
}

  function educationdetails(edu)
 {
   var add=document.createElement("h1");
   add.textContent="Education Qualification";
   right.appendChild(add);

   var hr=document.createElement("hr");
   right.appendChild(hr);

   var table1=document.createElement("table");
   table1.border="1";
   var tr1="<tr><th>Instutute</th><th>degree</th><th>passout</th></tr>";
   var tr2="";

   for(var i=0;i<edu.length;i++)
   {
     tr2+="<tr><td>"+edu[i].institute+"</td><td>"+edu[i].degree+"</td><td>"+edu[i].passout+"</td></tr>";
   }
   table1.innerHTML=tr1+tr2;
   right.appendChild(table1);
 }
 function technical(manu)
 {
   var lng=document.createElement("h1");
   lng.textContent="Technicalskills";
   right.appendChild(lng);

   var lang=document.createElement("hr");
   right.appendChild(lang);

   var lang1=document.createElement("p");
   lang1.textContent=manu.lang1;
   right.appendChild(lang1);

   var lang2=document.createElement("p");
   lang2.textContent=manu.lang2;
   right.appendChild(lang2);

   var lang3=document.createElement("p");
    lang3.textContent=manu.lang3;
    right.appendChild(lang3);

    var lang4=document.createElement("p");
     lang4.textContent=manu.lang4;
     right.appendChild(lang4);
 }
