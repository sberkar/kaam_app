const html = (username, verificationLink) => { 
    return `<p>Dear ${username},<br/><br />I am delighted to inform you that your account creation in Colrs was successful! Welcome to our platform, where we offer high-quality products to inspire and support your creativity.<br /><br />Also please verify the email by clicking here<br/><br/>Thank you for choosing Colrs, and we look forward to serving you.<br/><br/>Best regards,<br/><br/>Colrs Customer Service
`}
const text = (username, verificationLink) => {
    return `Dear ${username},

I am delighted to inform you that your account creation in Colrs was successful! Welcome to our platform, where we offer high-quality products to inspire and support your creativity.

Also, verify your email by copying & pasting this verification link: ${verificationLink}

Thank you for choosing Colrs, and we look forward to serving you.

Best regards,
Colrs Customer Service
`
}

const template = {
    html,
    text
}

module.exports = template;