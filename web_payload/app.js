var count = 0;
document.getElementById("btn").addEventListener("click", function(){
  count++;
  document.getElementById("out").textContent = "ضغطات: " + count;
  console.log("Clicked", count);
});
console.log("Welcome app loaded");
