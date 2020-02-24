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
        showAlert();
        document.querySelector(".contact-form-form").reset();
        sendContactBtn.disabled = false;
      })
      .catch(error => {
        showAlert("error", error);
        console.log(`error: ${error}`);
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
  debugger;
  let iconClass;
  let alertStatus;
  let alertMessage;
  if (status === "success") {
    iconClass = "fa-check-circle";
    alertStatus = "Success";
    alertMessage = "Message has been sent";
  } else if (status === "fail") {
    iconClass = "fa-times-circle";
    alertStatus = "Error";
    alertMessage = "An error has occured";
  }
  const alertDiv = document.createElement("div");
  alertDiv.classList.add("alert");
  alertDiv.innerHTML =
    "<div class='alert-header'><i class='fas fa-check-circle'></i><span>Success</span></div><div class='alert-msg'>Here goes the message</div>";
  document.querySelector("body").appendChild(alertDiv);
  setTimeout(function() {
    alertDiv.classList.add("removing");
  }, 4000);
  setTimeout(function() {
    alertDiv.remove();
  }, 4500);
};
