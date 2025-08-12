// no script tag needed here


let age = window.prompt("Enter your age ")
let maxAge = window.prompt("Enter your Max age ")
let numPerDay = window.prompt("Enter your Number Per day ")

totalRequired = (numPerDay * 365) * (maxAge - age); 

if (confirm(`Is everything correct?`)){
    console.log(document.write("You will need " + totalRequired + " buckets of fried chicken to last you until the ripe old age of " + maxAge))
}else{
    document.write("Run the code again :D");
}
</script>
</body>