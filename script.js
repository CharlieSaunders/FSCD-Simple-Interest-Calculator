
window.onload = function()
{
    let IR =  document.getElementById("rate").value; 
    updateRangeText(IR);
}

async function compute()
{
    let principal = document.getElementById("principal").value;
    let rate =  document.getElementById("rate").value;
    let years =  parseInt(document.getElementById("years").value);
    let currentDate = new Date();
    let Year = currentDate.getFullYear() + years;
    let interest = await GetInterest(principal, rate, years);

    if(principal <= 0){
        alert("Enter a positive number");
        document.getElementById("principal").focus();
        return;
    }
    
    document.getElementById("resultReturned").style.display = "block";
    document.getElementById("deposit").textContent = `${principal}`;
    document.getElementById("rateUsed").textContent = `${rate}%`;
    document.getElementById("receive").textContent = `${interest}`;
    document.getElementById("year").textContent = `${Year}`;
    
}

function GetInterest(Amount, Rate, Years)
{
    let AERBase = (Amount * Rate);
    let AER = (AERBase * Years);
    return AER/100;
}

function updateRangeText(value)
{
    document.getElementById("rangeValue").innerHTML = `${value}%`;
}
        