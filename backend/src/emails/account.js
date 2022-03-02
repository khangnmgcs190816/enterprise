import sgMail from '@sendgrid/mail'

const sendgridAPIKey = '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';

sgMail.setApiKey(sendgridAPIKey);
    const sendCreateIdea = (title, content) =>{
        const msg = {
            to: 'khanhhoanghatran@gmail.com',
            from: 'khanhhoanghatran@gmail.com',
            subject: `Create a successful Idea with title: ${title}`,
            text: `Employee successfully created a new idea with the content: ${content}}`
        }
        sgMail
            .send(msg)
            .then(() =>{
                console.log('Email sent successfully!!!!!!!!');
            })
            .catch((error) =>{
                console.error(error);
            })
    
    }
export default sendCreateIdea;
    