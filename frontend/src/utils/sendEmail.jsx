import emailjs from "@emailjs/browser";

export const sendEmail = async ({ name, description, loc }) => {
  let response;
  try {
    const templateParams = {
      from_name: name,
      date_sent: new Date().toLocaleString(),
      user_location: loc,
      emergency_desc: description,
    };
    const res = await emailjs
      .send(
        "service_d8jslwj",
        "template_lq6f8ko",
        templateParams,
        {
          publicKey: "vgn5g8Coo7AD1lJKP",
        }
      );
    response = "success";
  } catch (e) {
    response = "failure";
  }
  return response;
};
