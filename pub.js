function addComment() {
    const commentText = document.getElementById("main-comment").value;
  
    if (commentText.trim() !== "") {
     
      const commentContainer = document.createElement("div");
      commentContainer.classList.add("comment");
 
      const commentContent = document.createElement("p");
      commentContent.textContent = commentText;
  
      const replyButton = document.createElement("button");
      replyButton.textContent = "Répondre";
      replyButton.onclick = () => showReplyForm(commentContainer);
 
      commentContainer.appendChild(commentContent);
      commentContainer.appendChild(replyButton);
  
      document.getElementById("comments-container").appendChild(commentContainer);
  
      document.getElementById("main-comment").value = "";
    } else {
      alert("Le commentaire ne peut pas être vide.");
    }
  }
  

  function showReplyForm(commentContainer) {
    if (commentContainer.querySelector(".add-reply")) return;

    const replyForm = document.createElement("div");
    replyForm.classList.add("add-reply");
  
    const replyTextarea = document.createElement("textarea");
    replyTextarea.placeholder = "Écrire une réponse...";
  
    const replyButton = document.createElement("button");
    replyButton.textContent = "Répondre";
    replyButton.onclick = () => addReply(replyTextarea, commentContainer);
  
    replyForm.appendChild(replyTextarea);
    replyForm.appendChild(replyButton);
  
    commentContainer.appendChild(replyForm);
  }
  
  function addReply(replyTextarea, commentContainer) {
    const replyText = replyTextarea.value;
  
    if (replyText.trim() !== "") {
      const subCommentContainer = document.createElement("div");
      subCommentContainer.classList.add("sub-comment");
  
      const subCommentContent = document.createElement("p");
      subCommentContent.textContent = replyText;
  
      subCommentContainer.appendChild(subCommentContent);
  
      commentContainer.appendChild(subCommentContainer);
  
      replyTextarea.parentElement.remove();
    } else {
      alert("La réponse ne peut pas être vide.");
    }
  }
  