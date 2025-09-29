function volume_sphere() {
    //Write your code here
  document.getElementById("submit").addEventListener("click",()=>{
	  const radius=document.getElementById("radius").value;
	  const volume=(4 / 3) * Math.PI * Math.pow(radius, 3);
	  const app=Math.floor(volume*10000)/10000
	  const vol=document.getElementById("volume");
	  // console.log(app)
	  vol.value=`Calculated volume should be approximately ${app}`;
	  console.log(vol.value)
  })
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
