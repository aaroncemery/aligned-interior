interface EmailTemplateProps {
  name: string;
  email: string;
  phone: string;
  message: string;
  preferText: boolean;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  name,
  email,
  phone,
  message,
  preferText,
}) => (
  <div>
    <h1>New Contact Form Submission from {name}!</h1>
    <p>Email: {email}</p>
    <p>Phone: {phone}</p>
    <p>Message: {message}</p>
    <p>Prefer Text: {preferText ? "Yes" : "No"}</p>
  </div>
);
