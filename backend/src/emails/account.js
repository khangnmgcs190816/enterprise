import sgMail from '@sendgrid/mail';

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);

const msg = {
    to: 'khanhthhgcs190651@fpt.edu.vn',
    from: 'khanhthhgcs190651@fpt.edu.vn',
    subject: 'Create a successful Idea',
    text: 'Employee successfully created new idea'
};

sgMail
    .send(msg)
    .then(() => {
        console.log('Email sent Successfully!!!!');
    })
    .catch((error) => {
        console.log(error);
    })