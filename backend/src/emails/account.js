import sgMail from '@sendgrid/mail'

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const msg = {
    to: 'khanhhoanghatran@gmail.com',
    from: 'khanhhoanghatran@gmail.com',
    subject: '	Create a successful Idea',
    text: `Employee successfully created new idea`
}
const sendEmail = (data) => {
    sgMail
        .send(msg)
        .then(() => {
            console.log('Email sent successfully!!!!!!!!');
            console.log(`${data.title} has been here by sendEmail`)
        })
        .catch((error) => {
            console.error(error);
        })
}
export default sendEmail;