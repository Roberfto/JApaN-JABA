const product = ['Banan', 'Arbuz','Woda','Kabanosy','Bulki','Brokuły','Brukselka','Buraki','Cebula','Cukinia','Marchew','Granat','Gruszki','Jajka','Ryby','Fasola','Fanta','Cola','Sprite' ];
const names = ['Lidl', 'Biedronka', 'Zabka', 'Aldi', 'Eurospar', 'Tesco', 'Lewiatan', 'Groszek', 'Kaulfland', 'Carrefour', 'Auchan'];

function randomTransactionID() 
{
  return Math.floor(Math.random() * (999999999999 - 99999999999)) + 99999999999;
}

function randomDate(start, end)
{
  var toDate = new Date(end);
  var fromDate = new Date(start);

  var date = new Date(+fromDate + Math.random() * (toDate - fromDate));

  return date.toLocaleDateString();
}

function randomPrice() 
{
  return Math.floor(Math.random() * 999) / 100;
}

function generateData()
{
  var fromdate = document.getElementById("fromdate");
  var todate = document.getElementById("todate");

  var table = document.getElementById("Tabeladyn");

  if (fromdate.value < todate.value)
  {
    for (var count = 0; count < 250; count++)
    {
      var newRow = table.insertRow();

      var column0 = newRow.insertCell(0);
      var column1 = newRow.insertCell(1);
      var column2 = newRow.insertCell(2);
      var column3 = newRow.insertCell(3);
      var column4 = newRow.insertCell(4);
      var column5 = newRow.insertCell(5);
      
      //liczba
      column0.innerHTML = count + 1;

      //Nr_faktury
      column1.innerHTML = randomTransactionID();

      //Kupujacy
      var randomNameIdx = Math.floor(Math.random() * names.length);
      column2.innerHTML = names[randomNameIdx];

      //Data
      var dateToDate = new Date(todate.value);
      var dateFromDate = new Date(fromdate.value);

      column3.innerHTML = randomDate(todate.value, fromdate.value);

      //Cena
      column4.innerHTML = randomPrice();

      //Produkt
      var randomProductIdx = Math.floor(Math.random() * product.length);
      column5.innerHTML = product[randomProductIdx];
    }
  }
  else
  {
    console.log("error");
  }
}

