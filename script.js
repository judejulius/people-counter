let count = 0;

function increment(){
    count += 1;
    console.log(count)
    document.getElementById('count').textContent = count
}

increment()

function save(){
    let countStr = count + " - "
    console.log(count)
    document.getElementById("save").textContent += countStr
    count.textContent = 0 ;
    count = 0;
}