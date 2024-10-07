const submitbtn = document.querySelector("#submitComment");
const commentCont = document.querySelector(".commentReply");
const replyCont = document.querySelector(".reply-cont");
const replyContcoll = document.querySelectorAll(".reply-cont");
const deletebtn = document.querySelector(".deleteButton");



submitbtn.addEventListener("click",()=>{
    const commenttext = document.querySelector("#commentInput");
    const value = commenttext.value;
    console.log("in event")
    createComment(value);
    commenttext.value="";



})

 function createComment(value){
    const replydiv = document.createElement("div");
    replydiv.classList.add("reply-cont");
    if(value){

        replydiv.innerHTML=`
         <p> ${value}</p>
                
                <textarea id="replyInput" placeholder="Write a Reply...."></textarea>
                <button class="replyButton">Reply</button>
                 <button class="deleteButton">Delete</button>
                 <span><i class="fa-solid fa-caret-down"></i><span>
            
        `
        console.log("in func")
        commentCont.appendChild(replydiv);
    }

 }

 function createReply(parentcomment,text){
    const replydiv = document.createElement("div");
    replydiv.classList.add("reply-cont");
    if(text){

        replydiv.innerHTML=`
         <p> ${text}</p>
                
                <textarea id="replyInput" placeholder="Write a Reply...."></textarea>
                <button class="replyButton">Reply</button>
                <button class="deleteButton">Delete</button>
                <span><i class="fa-solid fa-caret-down"></i><span>
            
        `
        console.log("in func")
        console.log(replyContcoll,"replycontcoll")
        parentcomment.appendChild(replydiv);
    }

 }

 commentCont.addEventListener("click",(ev)=>{
     if(ev.target.classList.contains("replyButton")){
        console.log(ev.target);
        const parentcomment=ev.target.parentElement;
        console.log( parentcomment)
       const commenttext = parentcomment.querySelector("#replyInput");
       const value = commenttext.value;
       console.log("in event")
       createReply(parentcomment,value);
       commenttext.value="";
       


    }
 })

 commentCont.addEventListener("click",(ev)=>{
    if(ev.target.classList.contains("deleteButton")){

        const parentdiv = ev.target.parentElement;
        console.log(parentdiv);
        parentdiv.remove();
    }
 })
// collapse btn 
 
 let collapseflag = false;

 

    //    
    
    // 
    
    // commentCont.addEventListener("click", (ev) => {
    //     // Check if the click was on the caret icon
    //     if (ev.target.classList.contains("fa-caret-down")){
    //         ev.target.classList.toggle("fa-caret-down");
    //         const parentElement = ev.target.closest(".reply-cont"); // Adjust class name if needed
    //         const childrenContainer = parentElement.querySelector(".reply-cont");
    //         if (childrenContainer) {
    //             // Toggle the visibility of the children container
               
    //                 childrenContainer.style.display = "none";
    //             }
            

    //     } else if( ev.target.classList.contains("fa-caret-up")) {
    //         // Toggle the caret icons
           
    //         ev.target.classList.toggle("fa-caret-up");
    
    //         // Find the children container more reliably
    //         // Assuming the children container is the parent element's next sibling
    //         const parentElement = ev.target.closest(".reply-cont"); // Adjust class name if needed
    //         const childrenContainer = parentElement.querySelector(".reply-cont"); // Adjust class name if needed
    
    //         if (childrenContainer) {
    //             // Toggle the visibility of the children container
    //             if (childrenContainer.style.display === "none" || childrenContainer.style.display === "") 
    //                 childrenContainer.style.display = "block";
                
    //         }
    //     }
        
    // });

    commentCont.addEventListener("click", (ev) => {
    // Check if the click was on the caret icon
    if (ev.target.classList.contains("fa-caret-down") || ev.target.classList.contains("fa-caret-up")) {
        // Toggle the caret icons
        ev.target.classList.toggle("fa-caret-down");
        ev.target.classList.toggle("fa-caret-up");

        // Find the children container more reliably
        // Assuming the children container is the parent element's next sibling
        const parentElement = ev.target.closest(".reply-cont"); // Adjust class name if needed
        const childrenContainer = parentElement.querySelector(".reply-cont"); // Adjust class name if needed

        if (childrenContainer) {
            // Toggle the visibility of the children container
            if (childrenContainer.style.display === "none" || childrenContainer.style.display === "") {
                childrenContainer.style.display = "block";
            } else {
                childrenContainer.style.display = "none";
            }
        }
    }
});

    
 




