// import { EmailTemplate } from '../../../components/EmailTemplate';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;

export async function POST(request, response) {
  try {
    const bodyText  = await request.json()
    const {email, subject, message} = bodyText
    const data = await resend.emails.send({
        from: fromEmail,
        to: ['timtran007@gmail.com'],
        subject: 'Hello world',
        react: (
            <>
                <h1>{`${subject}`}</h1>
                <p>{`Person that Submitted the form: ${email}`}</p>
                <p>{`Message: ${message}`}</p>
            </>
        ),
    });

    return Response.json(data);
  } catch (error) {
    return Response.json({ error });
  }
}