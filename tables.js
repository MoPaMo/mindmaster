$(function(){
    for (item of x.traindates){
        
        $("#tables").append(`<div class="p-1 sm:p-2 border-2 border-blue-200  rounded" ><h3 class="">${item.name}</h3><div class="text-sm">${item.excersises.join(", ")}</div></div>`)
        $("#tables").children().last().css({
            backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns=\"http://www.w3.org/2000/svg\" version=\"1.1\" height=\"50px\" width=\"120px\"><text x=\"100\" y=\"15\" fill=\"blue\" font-family=\"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif\" font-size=\"20\">${x.traindates.indexOf(item)+1}</text ><text x=\"101\" y=\"16\" fill=\"skyblue\" font-family=\"ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, Roboto, Arial, sans-serif\" font-size=\"20\">${x.traindates.indexOf(item)+1}</text ></svg >')`,
            backgroundRepeat: "no-repeat",
            backgroundPosition: "top right"
        })
    }
})