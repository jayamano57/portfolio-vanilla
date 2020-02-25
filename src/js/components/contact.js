import {
  sendContactBtn,
  nameInput,
  messageInput,
  nameErrorMsg,
  messageErrorMsg
} from "../elements.js";

export const sendMessage = e => {
  const name = nameInput.value;
  const message = messageInput.value;
  e.preventDefault();
  sendContactBtn.disabled = true;
  const isValid = validationChecker(name, message);
  if (isValid) {
    showOrHideValidationError();
    fetch("http://localhost:8080/api/mailer", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        name,
        message
      })
    })
      .then(() => {
        showAlert(
          "success",
          "Message has been sent. I'll try and get back to you as soon possible. Thanks!"
        );
        document.querySelector(".contact-form-form").reset();
        sendContactBtn.disabled = false;
      })
      .catch(error => {
        showAlert(
          "error",
          "Something went wrong. Please try again or use one of the contact links to reach me!"
        );
        sendContactBtn.disabled = false;
      });
  } else {
    showOrHideValidationError(false);
    sendContactBtn.disabled = false;
  }
};

const validationChecker = (name, message) => {
  return name && message;
};

const showOrHideValidationError = () => {
  if (nameInput.value) {
    nameInput.classList.remove("invalid");
    nameErrorMsg.classList.remove("visible");
  } else {
    nameInput.classList.add("invalid");
    nameErrorMsg.classList.add("visible");
  }
  if (messageInput.value) {
    messageInput.classList.remove("invalid");
    messageErrorMsg.classList.remove("visible");
  } else {
    messageInput.classList.add("invalid");
    messageErrorMsg.classList.add("visible");
  }
};

const showAlert = (status, message) => {
  let iconClass;
  let alertStatus;
  let alertMessage;
  if (status === "success") {
    iconClass = "fa-check-circle";
    alertStatus = "Success";
    alertMessage = message || "Message has been sent";
  } else if (status === "error") {
    iconClass = "fa-times-circle";
    alertStatus = "Error";
    alertMessage = message || "An error has occured";
  }
  const alertDiv = document.createElement("div");
  alertDiv.classList.add("alert");
  alertDiv.dataset.status = status;
  alertDiv.innerHTML = `<div class='alert-header'><i class='fas ${iconClass}'></i><span>${alertStatus}</span></div><div class='alert-msg'>${alertMessage}</div>`;
  document.querySelector("body").appendChild(alertDiv);
  setTimeout(function() {
    alertDiv.classList.add("removing");
  }, 8000);
  setTimeout(function() {
    alertDiv.remove();
  }, 8500);
};
