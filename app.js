// // ========== chap 38-44 =============

// // task 1

function power(a,b)
{
    x = a
    for(i = 1; i < b; i++)
    {

        x = x*a
    }
    document.write(x)
}

power(7,4)

// // task 2

function leapYear(a)
{
    if(a % 2 == 0)
    {
        document.write(a + ' is a Leap Year')
    }
    else
    {
        document.write(a + ' is not a Leap Year')
    }
}

leapYear(2020)

// // task 3

function areaOfTriangle(a,b,c)
{
    S = findS(a,b,c)
    area = S*((S-a)*(S-b)*(S-c))
    document.write('<br> area of triangle is ' + area)
}

function findS(a,b,c)
{
    S = ( a + b + c ) / 2
    return S
}

areaOfTriangle(5,5,5)

// // task 4

function score(a,b,c)
{
    AVG = avg(a,b,c)
    PER = percentage(a,b,c)
    document.write("<br>" + AVG)
    document.write("<br>" + PER)
}

function avg(a,b,c)
{
    avg = (a+b+c)/3
    return 'Average: ' + avg
}

function percentage(a,b,c)
{
    per1 = (a/100)*100
    per2 = (b/100)*100
    per3 = (c/100)*100
    per = "subject 1: " + per1 + "%<br>" + "subject 2: " + per2 + "%<br>" + "subject 3: " + per3 + "%<br>"
    return per
}

score(50,70,80)

// // task 5

function findIndexOf(a,b)
{
    for(i = 0; i < a.length; i++)
    {
        if(b === a[i])
        {
            document.write("<br>index of " + a[i] + " is " + i)

        }
    }
}

findIndexOf('hello','l')

// // task 6

function clearVowels(x)
{
    x = x.replace(/[aeiou]/gi,'')
    document.write(x)
}

clearVowels('aretiyotuau uaredawipaaaa aaaaiiiijjjooosuaeaaaiiousjksosowee')

// // task 7

function occurrence(x) {
    for (i = 0; i < x.length; i++) {
        switch (x[i]) {
            case 'e':
                if (x.slice(i, i + 2) === 'ea' || x.slice(i, i + 2) === 'ee' || x.slice(i, i + 2) === 'ei' || x.slice(i, i + 2) === 'eo' || x.slice(i, i + 2) === 'eu') {
                    y = x.slice(i, i + 2)
                    document.write('<br>' + y)
                    break
                }
            case 'a':
                if (x.slice(i, i + 2) === 'aa' || x.slice(i, i + 2) === 'ae' || x.slice(i, i + 2) === 'ai' || x.slice(i, i + 2) === 'ao' || x.slice(i, i + 2) === 'au') {
                    y = x.slice(i, i + 2)
                    document.write('<br>' + y)
                    break
                }
            case 'i':
                if (x.slice(i, i + 2) === 'ia' || x.slice(i, i + 2) === 'ie' || x.slice(i, i + 2) === 'ii' || x.slice(i, i + 2) === 'io' || x.slice(i, i + 2) === 'iu') {
                    y = x.slice(i, i + 2)
                    document.write('<br>' + y)
                    break
                }
            case 'o':
                if (x.slice(i, i + 2) === 'oa' || x.slice(i, i + 2) === 'oe' || x.slice(i, i + 2) === 'oi' || x.slice(i, i + 2) === 'oo' || x.slice(i, i + 2) === 'ou') {
                    y = x.slice(i, i + 2)
                    document.write('<br>' + y)
                    break
                }
            case 'u':
                if (x.slice(i, i + 2) === 'ua' || x.slice(i, i + 2) === 'ue' || x.slice(i, i + 2) === 'ui' || x.slice(i, i + 2) === 'uo' || x.slice(i, i + 2) === 'uu') {
                    y = x.slice(i, i + 2)
                    document.write('<br>' + y)
                    break
                }
        }
    }
}

occurrence('please read this application and give me gratuity')

// task 8

function distInMeters(x)
{

}

// // task 9

function salary(x)
{
    overPay = 12*x
    sal = (12*40) + overPay
    document.write('<br>salary of employee is: Rs ' + sal)
}

salary(1)

// // task 10

function cash()
{
    amount = prompt('enter amount to be withdrawn')

    a = amount / 100
    b = (amount % 100) / 50
    c =  ((amount % 100) % 50) / 10
    d = (((amount % 100) % 50) % 10)
    document.write("<br>Amount: " + amount )
    document.write("<br>Notes of 100: " + Math.floor(a) )
    document.write("<br>Notes of 50: " + Math.floor(b) )
    document.write("<br>Notes of 10: " + Math.floor(c) )
    document.write("<br>Remaining amount: " + d )
}

cash()

// // ========== chap 43-48 ==============

// task 1

function say()
{
    alert('how are you?')
}

// // task 2

function thanku()
{
    alert('thanks for purchasing phone from us :) ')
}

// // task 3

function del(x)
{
    tr = document.getElementById(x)
    tr.style.display = 'none'
}

// // task 4

function next()
{
    a = document.getElementById('imgChange')
    a.src = "mob1.jpg"
}

function previous()
{
    a = document.getElementById('imgChange')
    a.src = "mob2.jpg"
}

// // task 5


function increase()
{
    inc = document.getElementById('counter').innerHTML
    inc++
    a = document.getElementById('counter')
    a.innerHTML = inc
}

function decrease()
{
    inc = document.getElementById('counter').innerHTML
    inc--
    a = document.getElementById('counter')
    a.innerHTML = inc
}

// ============ chap 49-52 ==============

// task 1

function subm()
{
    var a = document.getElementsByClassName('input')
    for (var i = 0; i < a.length; i++)
    {
        var b = a[i].value
        document.write("<br>" + b)
    }
    
}

// // task 2

function more(x)
{
    var p = document.getElementById(x)
    p.innerHTML = "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sit, eligendi! Repellendus quisq Lorem ipsum dolorsit amet consectetur adipisicing elit. Vitae corrupti minima consequuntur reiciendis ducimus eius quia unde, quae facilis totam perferendis quibusdam, sapiente commodi nisi et beatae suscipit nulla id"
}

// task 3

function sub()
{
     tbl = document.createElement('table')
     row = document.createElement('tr')
     data = document.createElement('td')

     labl = document.getElementById('frm').getElementsByTagName('tr').getElementsByTagName('td').getElementsByTagName('label')
     val = document.getElementById('frm').getElementsByTagName('tr').getElementsByTagName('td').getElementsByTagName('input')
    
    for(i=0; i<labl.length; i++)
    {
        // var elem = document.getElementById('frm').elements
        document.body.style.backgroundColor='green'
        document.tbl.style.backgroundColor='red'
        document.row.style.backgroundColor='blue'
        document.data.style.backgroundColor='green'
        document.getElementById('sec2').appendChild(tbl)
        tbl.appendChild(row)
        row.appendChild(data)
        data.appendChild(labl[i].innerHTML)
        row.appendChild(data)
        data.appendChild(val[i].value)
    }
}

function sub()
{
    var table = document.createElement('table')
    var row = document.createElement('tr')
    var data = document.createElement('td')

    var label = document.getElementById('frm').getElementsByTagName('p')
    var value = document.getElementById('frm').getElementsByTagName('input')

    var sec = document.getElementById('sec2')
    sec.appendChild(table)
    
    sec.style.backgroundColor = 'red'

    for(i = 0; i < label.length; i++)
    {
        table.appendChild(row)

        row.appendChild(data)
        lbl = label[i].innerText
        data.innerText = lbl

        row.appendChild(data)
        val = value[i].value
        data.innerText = val
        
    }
}
//Chapter 53-58

//Q #1
var modal = document.getElementById("myModal");

var wallpaper = document.getElementById("wallpaper");
var modalWallpaper = document.getElementById("wallpaper01");

function myModal(){
    modal.style.display = "block";
    modalWallpaper.src = src;
}

var span = document.getElementsByClassName("close");

function closeModal(){
    modal.style.display = "none";
}

//Q #2
function zoomIn() { 
    var para = document.getElementById("para01"); 
    // var currWidth = para.clientWidth; 
    var currSize = para.style.fontSize    
    para.style.fontSize = (currSize + 10) + "px"; 
} 

function zoomOut() { 
    var para = document.getElementById("para01"); 
    // var currWidth = para.clientWidth; 
    var currSize = para.style.fontSize    
    para.style.fontSize = (currSize - 10) + "px"; 
} 
